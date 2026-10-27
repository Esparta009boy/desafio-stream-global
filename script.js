/* ===== JS: estado e navegação ===== */
const stage=document.getElementById('stage'),wrap=document.getElementById('wrap'),
slides=[...document.querySelectorAll('.s')],N=slides.length,
bp=document.getElementById('bp'),bn=document.getElementById('bn'),cnt=document.getElementById('cnt'),
bar=document.querySelector('#prog i'),cd=document.getElementById('cd'),
reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentSlide=0,raf;

function fit(){ // escala o palco 16:9 (ou 9:16 em retrato) para qualquer viewport
  const w=wrap.clientWidth,h=wrap.clientHeight,portrait=h>w*1.05;
  stage.classList.toggle('p',portrait);
  const W=portrait?720:1280,H=portrait?1280:720,s=Math.min(w/W,h/H);
  stage.style.transform='translate(-50%,-50%) scale('+s+')';
}
function countdown(){ // 200 -> 50 ms
  cancelAnimationFrame(raf);
  if(reduce){cd.textContent=50;return}
  const t0=performance.now(),d=1400;
  (function step(t){const k=Math.min((t-t0)/d,1),e=1-Math.pow(1-k,3);cd.textContent=Math.round(200-150*e);if(k<1)raf=requestAnimationFrame(step)})(t0);
}
function goTo(n){
  n=Math.max(0,Math.min(N-1,n));
  slides.forEach((s,i)=>{
    s.classList.toggle('active',i===n);
    s.classList.toggle('prev',i<n);
    s.setAttribute('aria-hidden',i!==n);
    s.inert=i!==n;
  });
  currentSlide=n;
  bar.style.width=((n+1)/N*100)+'%';
  cnt.textContent=String(n+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');
  bp.disabled=n===0;bn.disabled=n===N-1;
  if(n===2)countdown();
  try{history.replaceState(null,'','#'+(n+1))}catch(e){try{location.hash=n+1}catch(_){}}
}
bp.onclick=()=>goTo(currentSlide-1);bn.onclick=()=>goTo(currentSlide+1);
addEventListener('keydown',e=>{
  const k=e.key;
  if(k==='ArrowRight'||k===' '||k==='PageDown'){e.preventDefault();goTo(currentSlide+1)}
  else if(k==='ArrowLeft'||k==='PageUp'){e.preventDefault();goTo(currentSlide-1)}
  else if(k==='Home')goTo(0);else if(k==='End')goTo(N-1);
  else if(k==='f'||k==='F'){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(_){}}
});
let sx=null;
addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)goTo(currentSlide+(dx<0?1:-1));sx=null});
addEventListener('resize',fit);
addEventListener('hashchange',()=>{const n=parseInt(location.hash.slice(1),10);if(n&&n-1!==currentSlide)goTo(n-1)});
fit();
goTo((parseInt(location.hash.slice(1),10)||1)-1);
