/* Wilhelm Hans Jaeger: Landkarte der Wirkungsorte */
(function(){
  var WIM2 = [
    {label:"Neubrandenburg", lat:53.5606, lon:13.2618, x:536.8, y:91.2,
      works:[
        {t:"Mudder-Schulten-Brunnen (Reuterbrunnen)", y:"1923", n:"Muschelkalk aus Kirchheim, Einweihung 31.03., heute am Stadtwall"},
        {t:"Gellert-Denkmal", y:"1926", n:"erneuert, eingeweiht 30.10."},
        {t:"Belvedere \u2014 Soldatenkopf & Sternendecke", y:"1935", n:"Umbau zum Gefallenendenkmal, Architekt Heinrich Tessenow"},
        {t:"Firmenrelief", y:"1938", n:"Eingangsgeb\u00e4ude Wilh. Jaeger KG, heute denkmalgesch\u00fctzt"},
        {t:"Familiengrab, Neuer Friedhof", y:"", n:"Marmorgruppe mit Lina, Wolfgang & Renate"}
      ], wiki:[{l:"Mudder-Schulten-Brunnen", u:"https://de.wikipedia.org/wiki/Mudder_Schulten"},{l:"Belvedere", u:"https://de.wikipedia.org/wiki/Belvedere_(Neubrandenburg)"}]},
    {label:"Schwerin", lat:53.6294, lon:11.4113, x:531.6, y:91.0,
      works:[{t:"Ausstellungsgeb\u00e4ude der Firma", y:"1911", n:"III. Mecklenburgische Landes-Gewerbe- und Industrieausstellung"}], wiki:null},
    {label:"Rostock", lat:54.0887, lon:12.1403, x:533.7, y:89.7,
      works:[{t:"B\u00fcste Wilhelm Jaeger", y:"1924", n:"ausgestellt beim Mecklenburger K\u00fcnstlerbund (Vorsitz Prof. Wandschneider)"}], wiki:null},
    {label:"G\u00fcstrow", lat:53.7963, lon:12.1780, x:533.8, y:90.5,
      works:[{t:"Leihgaben an die Ernst-Barlach-Stiftung", y:"2010", n:"Ausstellung \u201eSch\u00f6nheit pur\u201c: Faungruppe, Truthahn, B\u00fcste O. W. Spie\u00df"}], wiki:null},
    {label:"Wismar", lat:53.8931, lon:11.4610, x:531.8, y:90.3,
      works:[{t:"Wandbrunnen, Haus Beyer", y:"1923", n:""}], wiki:null},
    {label:"Neustrelitz", lat:53.3616, lon:13.0757, x:536.3, y:91.8,
      works:[{t:"Totenmaske Engelbert Humperdinck", y:"1921", n:"auf Wunsch des Sohnes; heute im Archiv der Humperdinck-Gesellschaft, Frankfurt"}], wiki:null},
    {label:"Hohenzieritz", lat:53.35, lon:13.15, x:536.5, y:91.8,
      works:[{t:"Wappen am Schloss Hohenzieritz", y:"1916/17", n:"Freistaat Mecklenburg-Strelitz, mit Bergfried, Stierkopf & Ratzeburger Kreuz"}],
      wiki:[{l:"Schloss Hohenzieritz", u:"https://de.wikipedia.org/wiki/Schloss_Hohenzieritz"}]},
    {label:"Burg Schlitz", lat:53.69, lon:12.59, x:534.8, y:90.9,
      works:[{t:"Restaurierungsarbeiten", y:"1960\u201363", n:"im Auftrag des Instituts f\u00fcr Denkmalpflege Schwerin"}], wiki:null},
    {label:"Berlin-Charlottenburg", lat:52.5163, lon:13.3018, x:537.2, y:94.1,
      works:[{t:"Ausbildung", y:"1908\u20131911", n:"Kunstgewerbeschule Charlottenburg, Bildhauerklasse"}], wiki:null},
    {label:"M\u00fcnchen", lat:48.1482, lon:11.5728, x:532.2, y:106.3,
      works:[{t:"Akademie M\u00fcnchen", y:"1912\u20131920", n:"bei Prof. Balthasar Schmitt, unterbrochen durch den Ersten Weltkrieg"}], wiki:null},
    {label:"Kirchheim bei W\u00fcrzburg", lat:49.7842, lon:9.9805, x:527.6, y:101.7,
      works:[{t:"Steinbruch Muschelkalk", y:"1922", n:"Herkunft des ca. 250 Zentner schweren Blocks f\u00fcr den Reuterbrunnen"}], wiki:null},
    {label:"Stargard (Pommern)", lat:53.3382, lon:15.0470, x:541.7, y:91.8,
      works:[{t:"Herkunft des Vaters", y:"", n:"Asphalt- und Steinpappenfabrik Wilhelm Meissner; Teilhaber Wilhelm Jaeger"}], wiki:null},
    {label:"Marburg", lat:50.8021, lon:8.7739, x:524.2, y:98.9,
      works:[{t:"Sp\u00e4te Lebensjahre", y:"1963\u20131979", n:"Ausreise \u00fcber M\u00fcnster; Tod 03.03.1979; Familiengrab mit Marmorgruppe"}], wiki:null},
    {label:"M\u00fcnster", lat:51.9607, lon:7.6261, x:521.0, y:95.7,
      works:[{t:"Erste Station nach der Flucht", y:"1963", n:"nach dem Tod von Lina Jaeger, vor dem Umzug nach Marburg"}], wiki:null}
  ];

  var wrap = document.getElementById('wim2Wrap');
  var svg = document.getElementById('wim2Svg');
  var viewport = document.getElementById('wim2Viewport');
  var markersG = document.getElementById('wim2Markers');
  if(!wrap || !svg || !viewport) return;

  var VBW = 50, VBH = 36;
  var scale = 1, tx = 0, ty = 0;
  var MIN_S = 1, MAX_S = 8;

  function applyTransform(){ viewport.setAttribute('transform', 'translate('+tx+','+ty+') scale('+scale+')'); }
  function clampPan(){
    var maxX = VBW*(scale-1) + VBW*0.4, minX = -VBW*0.4;
    var maxY = VBH*(scale-1) + VBH*0.4, minY = -VBH*0.4;
    tx = Math.max(-maxX, Math.min(minX, tx));
    ty = Math.max(-maxY, Math.min(minY, ty));
  }
  function resetView(){ scale=1; tx=0; ty=0; applyTransform(); }
  function svgPoint(clientX, clientY){
    var r = svg.getBoundingClientRect();
    return {x:(clientX-r.left)/r.width*VBW, y:(clientY-r.top)/r.height*VBH};
  }
  function zoomAt(clientX, clientY, factor){
    var p = svgPoint(clientX, clientY);
    var ns = Math.max(MIN_S, Math.min(MAX_S, scale*factor));
    var f = ns/scale;
    tx = p.x - f*(p.x - tx); ty = p.y - f*(p.y - ty);
    scale = ns; clampPan(); applyTransform();
  }

  // Marker rendering
  WIM2.forEach(function(p, idx){
    var r = 1.1 + Math.min(p.works.length, 5)*0.28;
    var g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class','wim2-pt'); g.setAttribute('data-idx',idx); g.setAttribute('tabindex','0');
    var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx', p.x - 505); c.setAttribute('cy', p.y - 80); c.setAttribute('r', r.toFixed(2));
    var t = document.createElementNS('http://www.w3.org/2000/svg','title'); t.textContent = p.label;
    g.appendChild(c); g.appendChild(t); markersG.appendChild(g);
  });
  // note: marker coords are relative to viewport group, which itself sits inside a viewBox
  // starting at (505,80); circles use local (x-505, y-80) so they align under transform.

  var infoCard = document.getElementById('wim2-info');
  var infoName = document.getElementById('wim2-info-name');
  var infoWorks = document.getElementById('wim2-info-works');
  var infoGmaps = document.getElementById('wim2-info-gmaps');
  var infoOsm = document.getElementById('wim2-info-osm');
  var infoWiki = document.getElementById('wim2-info-wiki');
  var hint = document.getElementById('wim2-hint');
  var selectedG = null;

  function showInfo(idx){
    var p = WIM2[idx];
    if(!p) return;
    if(selectedG) selectedG.classList.remove('sel');
    selectedG = markersG.querySelector('.wim2-pt[data-idx="'+idx+'"]');
    if(selectedG) selectedG.classList.add('sel');
    infoName.textContent = p.label;
    infoWorks.innerHTML = p.works.map(function(w){
      return '<div class="wk"><b>'+w.t+'</b>'+(w.y?' \u00b7 '+w.y:'')+(w.n?'<br>'+w.n:'')+'</div>';
    }).join('');
    infoGmaps.href = 'https://www.google.com/maps?q='+p.lat+','+p.lon;
    infoOsm.href = 'https://www.openstreetmap.org/?mlat='+p.lat+'&mlon='+p.lon+'#map=13/'+p.lat+'/'+p.lon;
    if(p.wiki && p.wiki.length){
      infoWiki.style.display='';
      infoWiki.href = p.wiki[0].u;
      infoWiki.textContent = 'Abbildungen: '+p.wiki.map(function(w){return w.l;}).join(' / ')+' \u2197';
    } else { infoWiki.style.display='none'; }
    infoCard.classList.add('show');
    if(hint) hint.style.opacity = 0;
  }
  document.getElementById('wim2-info-close').onclick = function(){
    infoCard.classList.remove('show');
    if(selectedG) selectedG.classList.remove('sel');
    selectedG = null;
  };
  markersG.addEventListener('click', function(e){
    var g = e.target.closest('.wim2-pt'); if(!g) return;
    showInfo(parseInt(g.getAttribute('data-idx'),10));
  });
  markersG.addEventListener('keydown', function(e){
    if(e.key!=='Enter' && e.key!==' ') return;
    var g = e.target.closest('.wim2-pt'); if(!g) return;
    e.preventDefault(); showInfo(parseInt(g.getAttribute('data-idx'),10));
  });

  // pan
  var dragging=false, lastX=0, lastY=0, moved=false;
  svg.addEventListener('pointerdown', function(e){
    dragging=true; moved=false; lastX=e.clientX; lastY=e.clientY;
  });
  svg.addEventListener('pointermove', function(e){
    if(!dragging) return;
    var dx=e.clientX-lastX, dy=e.clientY-lastY;
    if(Math.abs(dx)>2||Math.abs(dy)>2){ if(!moved){ try{ svg.setPointerCapture(e.pointerId); }catch(err){} } moved=true; }
    var r = svg.getBoundingClientRect();
    tx += dx/r.width*VBW; ty += dy/r.height*VBH;
    lastX=e.clientX; lastY=e.clientY; clampPan(); applyTransform();
  });
  function endDrag(){ dragging=false; }
  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', endDrag);
  svg.addEventListener('wheel', function(e){
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, e.deltaY<0 ? 1.15 : 1/1.15);
  }, {passive:false});
  var pinchDist=null;
  svg.addEventListener('touchmove', function(e){
    if(e.touches.length===2){
      e.preventDefault();
      var t0=e.touches[0], t1=e.touches[1];
      var d = Math.hypot(t1.clientX-t0.clientX, t1.clientY-t0.clientY);
      var mid = {clientX:(t0.clientX+t1.clientX)/2, clientY:(t0.clientY+t1.clientY)/2};
      if(pinchDist!==null) zoomAt(mid.clientX, mid.clientY, d/pinchDist);
      pinchDist = d;
    }
  }, {passive:false});
  svg.addEventListener('touchend', function(e){ if(e.touches.length<2) pinchDist=null; });

  document.getElementById('wim2-reset').onclick = resetView;
  document.getElementById('wim2-zin').onclick = function(){ var r=svg.getBoundingClientRect(); zoomAt(r.left+r.width/2, r.top+r.height/2, 1.35); };
  document.getElementById('wim2-zout').onclick = function(){ var r=svg.getBoundingClientRect(); zoomAt(r.left+r.width/2, r.top+r.height/2, 1/1.35); };

  var searchInput = document.getElementById('wim2-search');
  searchInput.addEventListener('keydown', function(e){
    if(e.key!=='Enter') return;
    var q = searchInput.value.trim().toLowerCase();
    if(!q) return;
    var idx = WIM2.findIndex(function(p){ return p.label.toLowerCase().indexOf(q)>-1; });
    if(idx<0) return;
    var p = WIM2[idx];
    scale = Math.max(scale, 3);
    tx = VBW/2 - scale*(p.x-505); ty = VBH/2 - scale*(p.y-80);
    clampPan(); applyTransform(); showInfo(idx);
  });

  applyTransform();
})();
