'use strict';

const PYTHON_HELPER = `
import ast
import contextlib
import io
import json
import traceback

def __abed_run(code, test_code=""):
    namespace = {"__name__": "__main__"}
    stdout = io.StringIO()
    error_type = None
    error_text = ""
    test_error = ""

    try:
        tree = ast.parse(code, filename="<learner>", mode="exec")

        with contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stdout):
            if tree.body and isinstance(tree.body[-1], ast.Expr):
                last_expr = tree.body.pop()

                if tree.body:
                    exec(compile(tree, "<learner>", "exec"), namespace)

                value = eval(
                    compile(ast.Expression(last_expr.value), "<learner>", "eval"),
                    namespace,
                )

                if value is not None:
                    print(repr(value))
            else:
                exec(compile(tree, "<learner>", "exec"), namespace)

    except BaseException as exc:
        error_type = type(exc).__name__
        error_text = "".join(
            traceback.format_exception_only(type(exc), exc)
        ).strip()

    namespace["__output__"] = stdout.getvalue()

    if test_code and error_type is None:
        try:
            exec(compile(test_code, "<checks>", "exec"), namespace)
        except BaseException as exc:
            test_error = "".join(
                traceback.format_exception_only(type(exc), exc)
            ).strip()

    return {
        "output": stdout.getvalue(),
        "error_type": error_type,
        "error": error_text,
        "test_error": test_error,
    }
`;

const steps = window.CODELAB_STEPS;
const modules = window.CODELAB_MODULES;
const extras = window.CODELAB_ACTIVITIES || {};
const storageKey = 'abed-codelab-mlf-part1-activities-v2';
const oldStorageKey = 'abed-codelab-mlf-part1-python-lectures-v1';
const themeKey = 'abed-codelab-theme';
let currentIndex = 0;
let pyodide = null;
let pythonPromise = null;

function loadState() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return { done: value.done || {}, code: value.code || {} };
  } catch { return { done: {}, code: {} }; }
}
let state = loadState();
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }

const els = {
  sidebar: document.getElementById('sidebar'),
  stepNav: document.getElementById('stepNav'),
  activityList: document.getElementById('activityList'),
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  stepNumber: document.getElementById('stepNumber'),
  videoTime: document.getElementById('videoTime'),
  lessonTitle: document.getElementById('lessonTitle'),
  lessonIntro: document.getElementById('lessonIntro'),
  prev: document.getElementById('prevButton'),
  next: document.getElementById('nextButton'),
  completion: document.getElementById('completeButton'),
  reset: document.getElementById('resetProgress'),
  runtime: document.getElementById('runtimeText')
};
function element(tag, className, textValue) {
  const result = document.createElement(tag);
  if (className) result.className = className;
  if (textValue != null) result.textContent = textValue;
  return result;
}
function append(parent, tag, className, textValue) {
  const e = element(tag, className, textValue);
  parent.appendChild(e);
  return e;
}
function button(label, className, callback) {
  const b = element('button', className, label);
  b.type = 'button'; b.addEventListener('click', callback);
  return b;
}
function allActivities(step) {
  const additional = extras[step.id] || [];
  return additional.concat([{
    kind: 'python', title: 'Practice together', note: 'Apply the concepts you have just learned in one combined Python exercise.',
    example: step.example, output: step.output, challenge: step.challenge,
    starter: step.starter, solution: step.solution, check: step.check
  }]);
}
function activityKey(step, index) { return step.id + ':' + index; }
function completedCount(step) {
  return allActivities(step).filter((_,index) => state.done[activityKey(step,index)]).length;
}
function isCompleted(step) { return completedCount(step) === allActivities(step).length; }
function refreshProgress() {
  const done = steps.filter(isCompleted).length;
  els.progressBar.style.width = Math.round(done / steps.length * 100) + '%';
  els.progressText.textContent = done + ' of ' + steps.length + ' lessons complete';
  const step = steps[currentIndex];
  const n = completedCount(step), total = allActivities(step).length;
  els.completion.textContent = n + ' / ' + total + ' activities complete';
  els.completion.classList.toggle('completed',n===total);
  els.completion.setAttribute('aria-label',n+' of '+total+' activities complete');
}
function refreshNav() {
  els.stepNav.replaceChildren();
  steps.forEach((step,i) => {
    if (i===0 || steps[i-1].unit!==step.unit) {
      append(els.stepNav,'div','module-divider','Lecture '+step.unit+' · '+modules[step.unit-1].title);
    }
    const link=element('button','step-link');
    link.type='button';
    if(i===currentIndex)link.classList.add('active');
    if(isCompleted(step))link.classList.add('complete');
    append(link,'span','step-index',isCompleted(step)?'✓':String(step.id));
    append(link,'span','step-title',step.title);
    append(link,'span','span-step-time',step.time);
    link.addEventListener('click',()=>go(i));
    els.stepNav.appendChild(link);
  });
}
function mark(step,index) {
  state.done[activityKey(step,index)] = true;
  saveState();
  refreshNav();refreshProgress();
}
async function ensurePython() {
  if(pyodide)return pyodide;
  if(pythonPromise)return pythonPromise;
  pythonPromise=(async()=>{
    els.runtime.textContent='Loading Python from this website…';
    if(typeof window.loadPyodide!=='function'){
      await new Promise((resolve,reject)=>{
        const script=document.createElement('script');
        script.src='./vendor/pyodide/pyodide.js';
        script.onload=resolve;
        script.onerror=()=>reject(new Error('Python runtime files were not published. Check the GitHub Pages build.'));
        document.head.appendChild(script);
      });
    }
    const runtime=await window.loadPyodide({indexURL:'./vendor/pyodide/'});
    runtime.setStdin({error:true});
    runtime.runPython(PYTHON_HELPER);
    pyodide=runtime;
    els.runtime.textContent='Python ready in browser';
    return runtime;
  })().catch(error=>{
    pythonPromise=null;
    els.runtime.textContent='Python unavailable: '+(error.message||error);
    throw error;
  });
  return pythonPromise;
}
async function executePython(code,testCode){
  const runtime=await ensurePython();
  runtime.globals.set('__abed_user_code',code);
  runtime.globals.set('__abed_test_code',testCode||'');
  try{
    const result=await runtime.runPythonAsync('json.dumps(__abed_run(__abed_user_code, __abed_test_code))');
    return JSON.parse(String(result));
  }finally{
    try{runtime.globals.delete('__abed_user_code');runtime.globals.delete('__abed_test_code');}catch{}
  }
}
function codeSample(parent,code,caption){
  const head=append(parent,'div','section-head');
  append(head,'strong','sample-label',caption||'Example');
  head.appendChild(button('Copy','copy-button',()=>{
    navigator.clipboard.writeText(code).then(()=>{head.lastChild.textContent='Copied';}).catch(()=>{head.lastChild.textContent='Copy unavailable';});
  }));
  append(append(parent,'pre','example-code'),'code','',code);
}
function renderTerminal(card,step,index,activity){
  append(card,'p','terminal-hint','Terminal command · run on your own computer (not in the browser Python runtime).');
  codeSample(card,activity.example,'LOCAL TERMINAL');
  append(append(card,'div','output-block'),'span','','Expected result');
  append(append(card,'pre','terminal-example'),'code','',activity.output);
  if(activity.alternate)append(card,'p','mini-note',activity.alternate);
  const practice=append(card,'div','inline-practice');
  append(practice,'strong','','Your turn');
  append(practice,'p','mini-note',activity.challenge);
  const editor=append(practice,'textarea','terminal-editor');
  editor.setAttribute('aria-label','Type a terminal command');
  editor.placeholder='Type the command you would run locally (not executed here)';
  const key=activityKey(step,index);
  editor.value=state.code[key]||'';
  editor.addEventListener('input',()=>{state.code[key]=editor.value;saveState();});
  const feedback=append(practice,'p','activity-feedback');
  const actions=append(practice,'div','try-actions');
  actions.appendChild(button('Check command','check-button',()=>{
    const value=editor.value.trim();
    let valid=false;
    if(step.id===1 && index===0){
      valid=/^(python|python3|py)\s+--version$/.test(value);
    }else if(step.id===1 && index===2){
      valid=/python(?:3)?\s+-m\s+venv\s+\.venv/.test(value);
    }else{
      valid=value.length>0;
    }
    feedback.className='activity-feedback '+(valid?'success':'failure');
    feedback.textContent=valid?'Correct command syntax. Run it locally to verify the result; the browser cannot verify your installed environment.':'Type the terminal command shown in the example, then try again.';
    if(valid)mark(step,index);
  }));
  actions.appendChild(button('Reset','secondary-button',()=>{
    editor.value='';state.code[key]='';delete state.done[key];saveState();feedback.textContent='';refreshProgress();refreshNav();
  }));
}
function renderPython(card,step,index,activity){
  codeSample(card,activity.example,'PYTHON EXAMPLE');
  const output=append(card,'div','output-block');
  append(output,'span','','Expected output');
  append(append(output,'pre'),'code','',activity.output);
  const practice=append(card,'div','inline-practice');
  append(practice,'strong','','YOUR TURN');
  append(practice,'p','mini-note',activity.challenge);
  const editor=append(practice,'textarea','activity-editor');
  editor.setAttribute('aria-label','Python code for '+activity.title);
  const key=activityKey(step,index);
  let value=state.code[key];
  if(value==null && index===allActivities(step).length-1){
    try{const old=JSON.parse(localStorage.getItem(oldStorageKey)||'{}');value=old.code?.[step.id];}catch{}
  }
  editor.value=typeof value==='string'?value:activity.starter;
  editor.addEventListener('input',()=>{state.code[key]=editor.value;saveState();});
  const actions=append(practice,'div','try-actions');
  const status=append(practice,'p','activity-feedback');
  const resultPanel=append(practice,'div','mini-output');
  append(resultPanel,'strong','','PYTHON OUTPUT');
  const result=append(resultPanel,'pre','mini-terminal','Run your code to see the output.');
  const solution=append(practice,'div','solution-panel');
  solution.hidden=true;
  codeSample(solution,activity.solution,'One possible solution');
  const run=button('▶ Run Python','primary-button',()=>runPython(false));
  const check=button('✓ Check answer','check-button',()=>runPython(true));
  actions.appendChild(run);actions.appendChild(check);
  actions.appendChild(button('Reset code','secondary-button',()=>{
    editor.value=activity.starter;state.code[key]=editor.value;
    delete state.done[key];saveState();refreshProgress();refreshNav();status.textContent='';
    result.textContent='Run your code to see the output.';
  }));
  actions.appendChild(button('Show solution','secondary-button',e=>{
    solution.hidden=!solution.hidden;e.currentTarget.textContent=solution.hidden?'Show solution':'Hide solution';
  }));
  async function runPython(withChecks){
    state.code[key]=editor.value;saveState();
    run.disabled=true;check.disabled=true;
    status.className='activity-feedback';
    status.textContent=withChecks?'Checking your answer…':'Running Python…';
    await new Promise(resolve=>requestAnimationFrame(resolve));
    try{
      const info=await executePython(editor.value,withChecks?activity.check:'');
      result.textContent=[info.output?.trim(),info.error].filter(Boolean).join('\n')||'(no output)';
      result.classList.toggle('error-output',Boolean(info.error));
      if(info.error)throw new Error(info.error);
      if(withChecks){
        if(info.test_error){
          status.className='activity-feedback failure';
          status.textContent=info.test_error.replace(/^AssertionError:\s*/,'')||'Check did not pass.';
        }else{
          status.className='activity-feedback success';
          status.textContent='Correct! This activity passes its Python checks.';
          mark(step,index);
        }
      }else{status.textContent='Code executed. Use Check answer to validate your solution.';}
    }catch(error){
      status.className='activity-feedback failure';
      status.textContent=error.message||String(error);
    }finally{run.disabled=false;check.disabled=false;}
  }
}
function renderLesson(){
  const step=steps[currentIndex];
  els.stepNumber.textContent='Step '+step.id+' of '+steps.length;
  els.videoTime.textContent=step.slides+' · '+step.time;
  els.lessonTitle.textContent=step.title;
  els.lessonIntro.textContent=step.learn;
  els.activityList.replaceChildren();
  allActivities(step).forEach((activity,index)=>{
    const card=append(els.activityList,'article','concept-card');
    const head=append(card,'div','concept-heading');
    append(head,'span','concept-number',(index+1)+' / '+allActivities(step).length);
    append(head,'h2','',activity.title);
    append(head,'span','concept-type',activity.kind==='terminal'?'TERMINAL':'PYTHON');
    append(card,'p','concept-note',activity.note);
    if(activity.kind==='terminal')renderTerminal(card,step,index,activity);
    else renderPython(card,step,index,activity);
  });
  els.prev.disabled=currentIndex===0;
  els.next.disabled=currentIndex===steps.length-1;
  refreshProgress();
}
function render(){refreshNav();renderLesson();}
function go(i){
  currentIndex=i;render();els.sidebar.classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
els.prev.addEventListener('click',()=>{if(currentIndex>0)go(currentIndex-1);});
els.next.addEventListener('click',()=>{if(currentIndex<steps.length-1)go(currentIndex+1);});
els.reset.addEventListener('click',()=>{
  if(!confirm('Reset all exercise code and progress?'))return;
  state={done:{},code:{}};saveState();render();
});
document.getElementById('menuButton').addEventListener('click',()=>els.sidebar.classList.toggle('open'));
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme',theme);
  localStorage.setItem(themeKey,theme);
}
const savedTheme=localStorage.getItem(themeKey);
if(savedTheme)applyTheme(savedTheme);
else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)applyTheme('dark');
document.getElementById('themeButton').addEventListener('click',()=>{
  applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
});
render();
els.runtime.textContent='Python loads on first Run/Check · terminal commands run on your computer.';
