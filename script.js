const music=document.getElementById('bgMusic');
const soundToggle=document.getElementById('soundToggle');
const soundLabel=document.getElementById('soundLabel');
const toast=document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
async function toggleMusic(){
  if(music.paused){try{await music.play();soundLabel.textContent='Sound on';soundToggle.setAttribute('aria-label','Pause music')}catch(e){showToast('Add your song as audio/music.mp3 to play music.')}}else{music.pause();soundLabel.textContent='Sound off';soundToggle.setAttribute('aria-label','Play music')}
}
soundToggle.addEventListener('click',toggleMusic);
document.getElementById('beginBtn').addEventListener('click',()=>{document.getElementById('letter').scrollIntoView({behavior:'smooth'});if(music.paused)toggleMusic()});
const target=new Date('2026-12-13T00:00:00+05:30').getTime();
function updateCountdown(){
  const diff=target-Date.now();
  if(diff<=0){document.getElementById('countdown').innerHTML='<div class="birthday-live">IT’S YOUR DAY, BUBU! ♡</div>';document.getElementById('countdownNote').textContent='Today the whole world gets to celebrate you.';return}
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('wishBtn').addEventListener('click',()=>{
  const feedback=document.getElementById('wishFeedback');
  feedback.textContent='Your wish is on its way to the universe, Bubu. ✨';
  for(let i=0;i<22;i++){const heart=document.createElement('span');heart.textContent=['♡','✦','♥'][i%3];heart.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:${55+Math.random()*35}vh;color:${i%2?'#e8a7b8':'#d7b77a'};font-size:${12+Math.random()*20}px;z-index:15;pointer-events:none;transition:transform 2s ease,opacity 2s ease`;document.body.appendChild(heart);requestAnimationFrame(()=>{heart.style.transform=`translateY(-${120+Math.random()*240}px) rotate(${Math.random()*90-45}deg)`;heart.style.opacity='0'});setTimeout(()=>heart.remove(),2100)}
});