/* Familie: Weltkarte der Nachkommen */
(function(){
  var WM_PLACES = [{"label":"Russland","x":611.1,"y":90.0,"cc":"RU","country":"Russland","wiki":"https://en.wikipedia.org/wiki/Russia","people":["Luise Sternitzki","Arthur Gerwig","Georg Sternitzki","Hildegard Sternitzki","Hans Adolf Sternitzki","Paul Sternitzki"]},{"label":"Wiesbaden","x":522.9,"y":100.9,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Andreas Benjamin Sternitzki","Heinrich (Johann) Sternitzki","Luise Scheuermann","Werner Jagsch"]},{"label":"München","x":532.2,"y":106.3,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Anna Simon","Gisela Stein","Helga (Maria Sophie) Stein","Gustav (Heinrich Karl) Sternitzki"]},{"label":"Berlin","x":537.2,"y":94.1,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Julie Hirsch","Hermann Sternitzki","Hans Sternitzki"]},{"label":"Köln","x":519.3,"y":98.5,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Johannes Port","Wilfried (Benno Heinz) Stein","Brigitte Stein"]},{"label":"St. Petersburg","x":584.3,"y":73.5,"cc":"RU","country":"Russland","wiki":"https://en.wikipedia.org/wiki/Russia","people":["Adolf (Friedrich) Sternitzki","Fritz Sternitzki","Adolf Sternitzki"]},{"label":"Braunschweig","x":529.2,"y":94.8,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Adolf (Anton Benjamin) Sternitzki","Margarethe Sternitzki","Adolfine (Fini) Sternitzki"]},{"label":"Niederhausen","x":521.8,"y":100.7,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Karl Hirsch","Werner Hirsch"]},{"label":"Fulda","x":526.9,"y":99.6,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Hermann (Gustav Nikolaus) Port","Helene Port"]},{"label":"Bern","x":520.7,"y":109.6,"cc":"CH","country":"Schweiz","wiki":"https://en.wikipedia.org/wiki/Switzerland","people":["Marianne Hartmann","Marlene Port"]},{"label":"Bad Orb","x":526.0,"y":100.5,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Heinrich (Heinz) Port","Ernst Vollrad Port"]},{"label":"Frankfurt am Main","x":524.1,"y":100.8,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Sophie (Elisabeth) Sternitzki","Philipp (Arthur) Stein"]},{"label":"Elberfeld","x":519.9,"y":97.6,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Sophie (Henriette) Stein","Lilli Schäfer"]},{"label":"Wolfenbüttel","x":529.2,"y":95.1,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Adolf (Anton Benjamin) Sternitzki","Karl (Franz) Sternitzki"]},{"label":"Bad Ems","x":521.4,"y":100.2,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Wilhelm (Karl) Sternitzki"]},{"label":"Freiburg","x":521.8,"y":106.7,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Gustav Hirsch"]},{"label":"Pforzheim","x":524.2,"y":104.2,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Willi Simon"]},{"label":"Moskau","x":604.5,"y":85.1,"cc":"RU","country":"Russland","wiki":"https://en.wikipedia.org/wiki/Russia","people":["Adolph (Georg) Port"]},{"label":"Swerdlowsk","x":668.4,"y":82.1,"cc":"RU","country":"Russland","wiki":"https://en.wikipedia.org/wiki/Russia","people":["Adolf (Ado) Port"]},{"label":"Kasachstan","x":685.8,"y":106.7,"cc":"KZ","country":"Kasachstan","wiki":"https://en.wikipedia.org/wiki/Kazakhstan","people":["Ernst Port"]},{"label":"Höchst/Main","x":523.8,"y":100.8,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Josephine Port"]},{"label":"Bingen","x":521.9,"y":101.2,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Emmi Scheuermann"]},{"label":"Königsberg","x":557.0,"y":88.0,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Hermann Port"]},{"label":"Düsseldorf","x":518.8,"y":97.7,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Gisela Port"]},{"label":"Siegen","x":522.3,"y":98.7,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Regine Port"]},{"label":"Merville","x":507.4,"y":99.3,"cc":"FR","country":"Frankreich","wiki":"https://en.wikipedia.org/wiki/France","people":["Walter Port"]},{"label":"Langenselbold","x":525.1,"y":100.6,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Ernst Vollrad Port"]},{"label":"Duisburg","x":518.8,"y":97.1,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Friedrich (Karl Georg) Stein"]},{"label":"Bonn","x":519.7,"y":99.1,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Heinz (Gustav) Goldschmidt"]},{"label":"Stuttgart","x":525.5,"y":104.5,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Rolf Goldschmidt"]},{"label":"New York","x":294.4,"y":126.9,"cc":"US","country":"USA","wiki":"https://en.wikipedia.org/wiki/United_States","people":["Werner Goldschmidt"]},{"label":"Frankreich","x":505.6,"y":109.4,"cc":"FR","country":"Frankreich","wiki":"https://en.wikipedia.org/wiki/France","people":["Friedrich Goldschmidt"]},{"label":"Dortmund","x":520.8,"y":96.9,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Hans Herbert Röth"]},{"label":"Gevelsberg","x":520.4,"y":97.4,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Anna Schäfer"]},{"label":"London","x":499.6,"y":96.9,"cc":"GB","country":"Vereinigtes Königreich","wiki":"https://en.wikipedia.org/wiki/United_Kingdom","people":["Bernd-Axel Brandt"]},{"label":"Neubrandenburg","x":536.8,"y":91.2,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Gertraude (Hedwig Anna) Stein"]},{"label":"Mainz","x":523.0,"y":101.1,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Adolf (Friedrich) Sternitzki"]},{"label":"Warschau","x":558.4,"y":94.9,"cc":"PL","country":"Polen","wiki":"https://en.wikipedia.org/wiki/Poland","people":["Ilse Adelheid Adolfine Sternitzki"]},{"label":"St. Blasien","x":522.6,"y":107.3,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Alfred Gerwig"]},{"label":"Namslau","x":549.2,"y":98.1,"cc":"PL","country":"Polen","wiki":"https://en.wikipedia.org/wiki/Poland","people":["Klara Sternitzki"]},{"label":"Gifhorn","x":529.3,"y":94.2,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Wilhelm Sternitzki"]},{"label":"Frankfurt/Oder","x":540.4,"y":94.6,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Elsbeth Sternitzki"]},{"label":"Königslutter","x":530.1,"y":94.9,"cc":"DE","country":"Deutschland","wiki":"https://en.wikipedia.org/wiki/Germany","people":["Anna Sternitzki"]}];
  var wrap = document.getElementById('wmWrap');
  var svg = document.getElementById('wmSvg');
  var viewport = document.getElementById('wmViewport');
  var markersG = document.getElementById('wmMarkers');
  if(!wrap || !svg || !viewport) return;

  var VBW = 1000, VBH = 480;
  var scale = 1, tx = 0, ty = 0;
  var MIN_S = 1, MAX_S = 9;

  function applyTransform(){
    viewport.setAttribute('transform', 'translate('+tx+','+ty+') scale('+scale+')');
  }
  function clampPan(){
    var maxX = VBW*(scale-1) + VBW*0.4, minX = -VBW*0.4;
    var maxY = VBH*(scale-1) + VBH*0.4, minY = -VBH*0.4;
    tx = Math.max(-maxX, Math.min(minX, tx));
    ty = Math.max(-maxY, Math.min(minY, ty));
  }
  function resetView(){ scale=1; tx=0; ty=0; applyTransform(); }

  function svgPoint(clientX, clientY){
    var r = svg.getBoundingClientRect();
    var px = (clientX-r.left)/r.width*VBW;
    var py = (clientY-r.top)/r.height*VBH;
    return {x:px, y:py};
  }
  function zoomAt(clientX, clientY, factor){
    var p = svgPoint(clientX, clientY);
    var wx = (p.x - tx)/scale, wy = (p.y - ty)/scale;
    scale = Math.max(MIN_S, Math.min(MAX_S, scale*factor));
    tx = p.x - wx*scale;
    ty = p.y - wy*scale;
    clampPan();
    applyTransform();
  }

  var dragging=false, lastX=0, lastY=0, moved=false;
  svg.addEventListener('pointerdown', function(e){
    dragging=true; moved=false; lastX=e.clientX; lastY=e.clientY;
  });
  svg.addEventListener('pointermove', function(e){
    if(!dragging) return;
    var dx=e.clientX-lastX, dy=e.clientY-lastY;
    if(Math.abs(dx)>2||Math.abs(dy)>2){ if(!moved){ try{ svg.setPointerCapture(e.pointerId); }catch(err){} } moved=true; }
    var r = svg.getBoundingClientRect();
    tx += dx/r.width*VBW;
    ty += dy/r.height*VBH;
    lastX=e.clientX; lastY=e.clientY;
    clampPan();
    applyTransform();
  });
  function endDrag(){ dragging=false; }
  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointerleave', endDrag);
  svg.addEventListener('pointercancel', endDrag);

  svg.addEventListener('wheel', function(e){
    e.preventDefault();
    var factor = e.deltaY < 0 ? 1.18 : 1/1.18;
    zoomAt(e.clientX, e.clientY, factor);
  }, {passive:false});

  var pinchDist = null;
  svg.addEventListener('touchmove', function(e){
    if(e.touches.length===2){
      e.preventDefault();
      var t0=e.touches[0], t1=e.touches[1];
      var d = Math.hypot(t1.clientX-t0.clientX, t1.clientY-t0.clientY);
      var mid = {clientX:(t0.clientX+t1.clientX)/2, clientY:(t0.clientY+t1.clientY)/2};
      if(pinchDist!==null){ zoomAt(mid.clientX, mid.clientY, d/pinchDist); }
      pinchDist = d;
    }
  }, {passive:false});
  svg.addEventListener('touchend', function(e){ if(e.touches.length<2){ pinchDist=null; } });

  var infoCard = document.getElementById('wm-info-card');
  var infoName = document.getElementById('wm-info-name');
  var infoCount = document.getElementById('wm-info-count');
  var infoPeople = document.getElementById('wm-info-people');
  var infoWiki = document.getElementById('wm-info-wiki');
  var infoCountry = document.getElementById('wm-info-country');
  var hint = document.getElementById('wm-hint');
  var selectedG = null;

  // Personen mit geprüftem, eigenem Wikipedia-Artikel (Stand 22.09.2026 recherchiert;
  // die übrigen ~68 Personen der Weltkarte sind private Genealogie-Einträge ohne
  // eigenen Wikipedia-Artikel — dafür bleibt der Länder-Link unten die Referenz).
  var PERSON_WIKI = {
    "Philipp (Arthur) Stein": {
      url: "https://de.wikipedia.org/wiki/Philipp_Stein_(Jurist)",
      note: "Dr. phil. Philipp Wilhelm Arthur Stein (1870\u20131932), Jurist, Sozialpolitiker und Kommunalpolitiker in Frankfurt a. M., Herausgeber der Zeitschrift \u201eDeutsche Politik\u201c"
    }
  };

  function esc(s){ return String(s).replace(/[&<>]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }

  function showInfo(idx){
    var p = WM_PLACES[idx];
    if(!p) return;
    if(selectedG) selectedG.classList.remove('sel');
    selectedG = markersG.querySelector('.wm-pt[data-idx="'+idx+'"]');
    if(selectedG) selectedG.classList.add('sel');
    infoName.textContent = p.label;
    infoCount.textContent = p.people.length + (p.people.length===1 ? ' Person' : ' Personen');
    var shown = p.people.slice(0,8);
    var rest = p.people.length>8 ? ' u.a.' : '';
    var html = shown.map(function(name){
      var w = PERSON_WIKI[name];
      return w
        ? '<a class="wm-person-wiki" href="'+w.url+'" target="_blank" rel="noopener" title="'+esc(w.note)+'">'+esc(name)+'</a>'
        : esc(name);
    }).join(', ') + rest;
    infoPeople.innerHTML = html;
    infoWiki.href = p.wiki;
    infoCountry.textContent = p.country;
    infoCard.classList.add('show');
    if(hint) hint.style.opacity = 0;
  }
  document.getElementById('wm-info-close').onclick = function(){
    infoCard.classList.remove('show');
    if(selectedG) selectedG.classList.remove('sel');
    selectedG = null;
  };
  markersG.addEventListener('click', function(e){
    if(moved) return;
    var g = e.target.closest('.wm-pt');
    if(g) showInfo(parseInt(g.getAttribute('data-idx'),10));
  });
  markersG.addEventListener('keydown', function(e){
    if(e.key==='Enter' || e.key===' '){
      var g = e.target.closest('.wm-pt');
      if(g){ e.preventDefault(); showInfo(parseInt(g.getAttribute('data-idx'),10)); }
    }
  });

  function focusPlace(idx){
    var p = WM_PLACES[idx];
    if(!p) return;
    scale = 3.2;
    tx = VBW/2 - p.x*scale;
    ty = VBH/2 - p.y*scale;
    clampPan();
    applyTransform();
    showInfo(idx);
  }

  var searchInput = document.getElementById('wm-search-input');
  var searchCount = document.getElementById('wm-search-count');
  var wmMatches = [], wmIdx = -1;
  function runSearch(){
    var q = searchInput.value.trim().toLowerCase();
    if(!q){ wmMatches=[]; wmIdx=-1; searchCount.textContent=''; return; }
    wmMatches = [];
    WM_PLACES.forEach(function(p, i){
      var hay = (p.label + ' ' + p.people.join(' ')).toLowerCase();
      if(hay.indexOf(q) !== -1) wmMatches.push(i);
    });
    wmIdx = wmMatches.length ? 0 : -1;
    searchCount.textContent = wmMatches.length ? (wmIdx+1)+'/'+wmMatches.length : '0/0';
    if(wmMatches.length) focusPlace(wmMatches[wmIdx]);
  }
  searchInput.addEventListener('input', runSearch);
  searchInput.addEventListener('keydown', function(e){
    if(e.key==='Enter'){
      if(!wmMatches.length) return;
      wmIdx=(wmIdx+1)%wmMatches.length; focusPlace(wmMatches[wmIdx]);
      searchCount.textContent = (wmIdx+1)+'/'+wmMatches.length;
    }
  });
  document.getElementById('wm-search-next').onclick = function(){
    if(!wmMatches.length) return;
    wmIdx=(wmIdx+1)%wmMatches.length; focusPlace(wmMatches[wmIdx]);
    searchCount.textContent = (wmIdx+1)+'/'+wmMatches.length;
  };
  document.getElementById('wm-search-prev').onclick = function(){
    if(!wmMatches.length) return;
    wmIdx=(wmIdx-1+wmMatches.length)%wmMatches.length; focusPlace(wmMatches[wmIdx]);
    searchCount.textContent = (wmIdx+1)+'/'+wmMatches.length;
  };

  document.getElementById('wm-btn-reset').onclick = function(){ resetView(); };
  document.getElementById('wm-btn-zoom-in').onclick = function(){
    var r = svg.getBoundingClientRect();
    zoomAt(r.left+r.width/2, r.top+r.height/2, 1.35);
  };
  document.getElementById('wm-btn-zoom-out').onclick = function(){
    var r = svg.getBoundingClientRect();
    zoomAt(r.left+r.width/2, r.top+r.height/2, 1/1.35);
  };
  document.getElementById('wm-btn-fullscreen').onclick = function(){
    if(document.fullscreenElement){ document.exitFullscreen(); }
    else if(wrap.requestFullscreen){ wrap.requestFullscreen(); }
  };

  applyTransform();
})();
