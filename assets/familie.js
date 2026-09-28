/* Familie: Zweige-Liste und „Wer lebte wann?“ (iframe erst beim Aufklappen) */
(function(){
  var d=document.getElementById('wlw-details'), box=document.getElementById('wlw-box'), done=false;
  function load(){
    if(done||!d.open) return; done=true;
    var f=document.createElement('iframe');
    f.src='wer-lebte-wann.html'; f.title='Wer lebte wann? Familie Jaeger';
    f.loading='lazy'; f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0;display:block';
    box.appendChild(f);
  }
  d.addEventListener('toggle',load);
})();

(function(){
  var btn = document.getElementById('stbTocBtn');
  var panel = document.getElementById('stbTocCollapse');
  var label = document.getElementById('stbTocBtnLabel');
  if(!btn || !panel) return;
  function setOpen(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    label.textContent = open ? 'Zweige verbergen' : '5 Zweige anzeigen';
    if(open){
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.classList.add('stb-open');
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      requestAnimationFrame(function(){
        panel.classList.remove('stb-open');
        requestAnimationFrame(function(){ panel.style.maxHeight = '0px'; });
      });
    }
  }
  btn.addEventListener('click', function(){
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  panel.addEventListener('transitionend', function(e){
    if(e.propertyName === 'max-height' && btn.getAttribute('aria-expanded') === 'true'){
      panel.style.maxHeight = 'none';
    }
  });
  panel.querySelectorAll('.stb-toc a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });
  window.addEventListener('resize', function(){
    if(btn.getAttribute('aria-expanded') === 'true'){
      panel.style.maxHeight = 'none';
    }
  });
})();
