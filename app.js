(() => {
  const $ = id => document.getElementById(id);
  const safe = (fn, fallback) => {try {return fn()} catch{return fallback}};
  const completed = new Set(safe(() => JSON.parse(localStorage.getItem('mlf-completed') || '[]'), []));
  let index = -1, pyodide = null, initializing = null;
  const STORE = 'mlf-completed';
  const persist = () => safe(() => localStorage.setItem(STORE, JSON.stringify([...completed])));
  const theme = safe(() => localStorage.getItem('mlf-theme'), 'light') || 'light';
  document.documentElement.dataset.theme=theme;
  $('theme').onclick = () => {const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';document.documentElement.dataset.theme = next;safe(() => localStorage.setItem('mlf-theme',next));};
  $('menu').onclick = () => $('sidebar').classList.toggle('open');
  $('resetProgress').onclick = () => {if(confirm('Reset all lesson completion marks?')) {completed.clear();persist();refresh();}};
  $('start').onclick=()=>show(0);
  function refresh(){
    const nav=$('lesson-nav'); nav.replaceChildren();
    LESSONS.forEach((l,i)=> {
      if(i === 0 || LESSONS[i-1].unit!==l.unit){
        const h=document.createElement('div');h.className='module-head';h.textContent=`${String(l.unit).padStart(2,'0')} · ${MODULES[l.unit-1].title}`;nav.appendChild(h);
      }
      const b=document.createElement('button');b.className='nav-link'+(i===index?' active':'');b.setAttribute('aria-current',i===index?'step':'false');
      const number=document.createElement('span');number.className='nav-num';number.textContent=String(i+1).padStart(2,'0');
      const name=document.createElement('span');name.textContent=l.title;
      const check=document.createElement('span');check.className='nav-check';check.textContent=completed.has(i)?'✓':'';
      b.append(number,name,check); b.onclick=()=>show(i);nav.appendChild(b);
    });
    $('counter').textContent=`${completed.size} / ${LESSONS.length} completed`;
    $('meter').style.width=`${completed.size/LESSONS.length*100}%`;
    if(index>=0){$('done').textContent=completed.has(index)?'Completed ✓':'Mark complete ✓';$('done').classList.toggle('completed',completed.has(index));}
  }
  function fillList(id, arr, kind){const el=$(id);el.replaceChildren();arr.forEach(s=>{const li=document.createElement('li');li.textContent=s;el.appendChild(li);});}
  function show(i){if(i<0||i>=LESSONS.length)return;
    index=i;const l=LESSONS[i];$('hero').hidden=true;$('lesson').hidden=false;
    $('step-id').textContent=`LESSON ${String(i+1).padStart(2,'0')} / ${LESSONS.length}`;
    $('source').textContent=`Source: ${l.slides}`;$('duration').textContent=`≈ ${l.minutes} min`;
    $('title').textContent=l.title;$('summary').textContent=l.summary;
    fillList('ideas',l.ideas);fillList('walkthrough',l.walkthrough);
    $('engineering').textContent=l.engineering;
    $('code').value=l.code;$('expected').textContent=l.expected;
    $('challenge').textContent=l.challenge;$('hint').textContent=l.hint;$('solution').textContent=l.solution;
    $('output').textContent='Run the example to see output here.';
    $('question').textContent=l.quiz[0];$('feedback').textContent='';
    const choices=$('choices');choices.replaceChildren();
    for(let j=1;j<=3;j++){const b=document.createElement('button');b.className='choice';b.textContent=l.quiz[j];b.onclick=()=>{
      const correct=l.quiz[4]===j-1;choices.querySelectorAll('.choice').forEach((x,k)=>{
        x.disabled=true;x.classList.toggle('correct',k===l.quiz[4]);x.classList.toggle('wrong',k===j-1&&!correct);
      });$('feedback').textContent=(correct?'Correct. ':'Not quite. ')+l.quiz[5];
    };choices.appendChild(b);}
    $('prev').disabled=i===0;$('next').textContent=i===LESSONS.length-1?'Back to start ↺':'Next →';
    $('done').onclick=()=>{if(completed.has(index))completed.delete(index);else completed.add(index);persist();refresh();};
    $('prev').onclick=()=>show(i-1);$('next').onclick=()=>show(i===LESSONS.length-1?0:i+1);
    history.replaceState(null,'','#lesson-'+(i+1));refresh();$('sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'instant'});
  }
  $('copy').onclick=()=>{const v=$('code').value;if(navigator.clipboard){navigator.clipboard.writeText(v).then(()=>{ $('copy').textContent='Copied ✓';setTimeout(()=>{$('copy').textContent='Copy';},1000);}).catch(()=>{});}else{ $('code').select();document.execCommand('copy');}};
  $('reset').onclick=()=>{if(index>=0)$('code').value=LESSONS[index].code;};
  async function initPython(){
    if(pyodide) return pyodide;
    if(initializing)return initializing;
    initializing=(async()=>{
      $('runtime-status').textContent='Loading Python (~first run only)…';
      const script=document.createElement('script');
      script.src='https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';
      await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=()=>reject(new Error('Could not fetch Pyodide. Internet access is needed.'));document.head.appendChild(script);});
      pyodide=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});
      $('runtime-status').textContent='Python ready · runs locally in your browser';
      return pyodide;
    })();
    try{return await initializing;}catch(e){initializing=null;$('runtime-status').textContent='Runtime unavailable · see README for local Python setup';throw e;}
  }
  $('run').onclick=async()=>{
    const button=$('run');button.disabled=true;
    let logs=[]; $('output').textContent='Starting Python…';
    try{
      const py=await initPython();const code=$('code').value;
      $('runtime-status').textContent='Checking packages / running…';
      await py.loadPackagesFromImports(code);
      py.setStdout({batched:s=>logs.push(s)});py.setStderr({batched:s=>logs.push(s)});
      let result=await py.runPythonAsync(code);
      if(result!==undefined&&result!==null&&!(logs.length))logs.push(String(result));
      $('output').textContent=logs.join('\n')||'Execution completed (no printed output).';
      $('runtime-status').textContent='Python ready · runs locally in your browser';
    }catch(e){$('output').textContent=(logs.length?logs.join('\n')+'\n':'')+String(e);}
    finally{button.disabled=false;}
  };
  refresh(); const match=location.hash.match(/^#lesson-(\d+)$/);if(match)show(Math.max(0,Math.min(LESSONS.length-1,Number(match[1])-1)));
})();