/* Startseite: Schriftgröße des Titels an die Breite anpassen */
(function(){
  var h=document.getElementById('title');if(!h)return;
  function fit(){
    var ls=h.querySelectorAll('.ln');
    ls.forEach(function(l){l.style.fontSize='10px'});
    var w=h.clientWidth;if(!w)return;
    var m=[];ls.forEach(function(l){l.style.fontSize='100px';m.push(l.getBoundingClientRect().width)});
    /* gemeinsame Groesse fuer beide Zeilen, gedeckelt durch die CSS-Groesse des h1 */
    var cap=parseFloat(getComputedStyle(h).fontSize)||68, f=cap;
    m.forEach(function(x){if(x)f=Math.min(f,100*w/x*0.99)});
    ls.forEach(function(l){l.style.fontSize=f+'px'});
  }
  fit();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
  var lw0=0;if(window.ResizeObserver)new ResizeObserver(function(e){var cw=h.clientWidth;if(cw!==lw0){lw0=cw;fit()}}).observe(h);else addEventListener('resize',fit);
})();
