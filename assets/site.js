/* ==========================================================
   Jaeger Stiftung – gemeinsames JavaScript für alle Seiten
   Navigation (Handy-Menü), Filter-Tabs, Lightbox, Aufklapp-Animation
   ========================================================== */

/* ---------- Navigation: ausklappbares Menü auf dem Handy ---------- */
(function(){
  var head = document.querySelector('.site-head');
  var btn = document.querySelector('.site-toggle');
  if(!head || !btn) return;
  function setOpen(open){
    head.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function(){ setOpen(!head.classList.contains('open')); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && head.classList.contains('open')){ setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function(e){
    if(head.classList.contains('open') && !head.contains(e.target)) setOpen(false);
  });
  head.querySelectorAll('.site-menu a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });
  window.matchMedia('(min-width:981px)').addEventListener('change', function(m){ if(m.matches) setOpen(false); });
})();

/* ---------- Filter-Tabs (Zeitleiste, Galerie) ---------- */
function chipGroup(sel,attr,apply){
  const btns=[...document.querySelectorAll(sel)];
  btns.forEach(b=>b.addEventListener('click',()=>{btns.forEach(x=>x.setAttribute('aria-pressed',x===b?'true':'false'));apply(b.dataset[attr])}));
}

/* ---------- Lightbox ----------
   Lightbox.open(items, index, opener)
   items: [{src, alt, cap}] – Beschriftung wird um „· n/gesamt“ ergänzt */
window.Lightbox = (function(){
  let lb=null,lbImg,lbCap,items=[],cur=0,lastFocus=null,tx=null;
  function build(){
    if(lb) return;
    lb=document.createElement('div');
    lb.className='lightbox';lb.id='lb';lb.hidden=true;
    lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Bildansicht');
    lb.innerHTML='<img id="lb-img" alt="">'+
      '<div class="lb-ui glass">'+
      '<button id="lb-prev" aria-label="Vorheriges Bild">‹</button>'+
      '<span class="lb-cap" id="lb-cap"></span>'+
      '<button id="lb-next" aria-label="Nächstes Bild">›</button>'+
      '<button id="lb-close" aria-label="Schließen">Schließen</button>'+
      '</div>';
    document.body.appendChild(lb);
    lbImg=lb.querySelector('#lb-img');lbCap=lb.querySelector('#lb-cap');
    lb.querySelector('#lb-prev').onclick=()=>step(-1);
    lb.querySelector('#lb-next').onclick=()=>step(1);
    lb.querySelector('#lb-close').onclick=close;
    lb.addEventListener('click',e=>{if(e.target===lb)close()});
    addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
    lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
    lb.addEventListener('touchend',e=>{if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40)step(dx<0?1:-1);tx=null});
  }
  function show(i){
    cur=(i+items.length)%items.length;const it=items[cur];
    lbImg.src=it.src;lbImg.alt=it.alt||'';
    lbCap.textContent=(it.cap||'')+' · '+(cur+1)+'/'+items.length;
  }
  function step(d){show(cur+d)}
  function open(list,i,opener){
    if(!list||!list.length) return;
    build();items=list;lastFocus=opener||document.activeElement;
    show(i||0);lb.hidden=false;lb.querySelector('#lb-close').focus();
  }
  function close(){if(!lb)return;lb.hidden=true;lastFocus&&lastFocus.focus&&lastFocus.focus()}
  return {open:open,close:close};
})();

/* ---------- Aufklappbare Bereiche (<details>) ---------- */
(function(){
  // Sichtbare Aufklapp-Animation, die NICHT preventDefault() auf dem
  // Klick-Event des <summary> benutzt (aeltere Safari/iOS-Versionen
  // ignorieren das dort und der Inhalt blieb dadurch unsichtbar haengen).
  // Stattdessen: das native Auf-/Zuklappen laeuft immer normal durch,
  // und beim 'toggle'-Event wird nur ein Einblend-Effekt aufgesetzt.
  function animateDetails(details){
    var content = details.querySelector(':scope > summary + *');
    if(!content) return;
    var timer = null;
    details.addEventListener('toggle', function(){
      if(!details.open) return;
      if(timer) clearTimeout(timer);
      content.classList.remove('stb-reveal');
      // reflow erzwingen, damit die Animation bei erneutem Oeffnen neu startet
      void content.offsetWidth;
      content.classList.add('stb-reveal');
      timer = setTimeout(function(){ content.classList.remove('stb-reveal'); }, 500);
    });
  }
  document.querySelectorAll('details').forEach(animateDetails);

  // Sprungziel liegt in einem zugeklappten Bereich (z. B. familie.html#z3): aufklappen
  function openTarget(){
    var id = decodeURIComponent(location.hash.slice(1));
    if(!id) return;
    var el = document.getElementById(id);
    if(!el) return;
    var d = el.closest('details'), opened = false;
    while(d){ if(!d.open){ d.open = true; opened = true; } d = d.parentElement && d.parentElement.closest('details'); }
    if(opened) setTimeout(function(){ el.scrollIntoView(); }, 60);
  }
  openTarget();
  window.addEventListener('hashchange', openTarget);
})();
