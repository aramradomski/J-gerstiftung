/* Matthias Jaeger: Diashows „Skizzen und Studien“ und „Die Skizzenbücher“ */
/* ---------- Skizzen-Diashow ---------- */
(()=>{
const SK=[["dsc4720", "Paar vor Rot"], ["dsc4583", "Stadtrand, schwarze Linie"], ["dsc4952", "Junger Mann, Ocker"], ["dsc4745", "Gelbe Form auf Graublau"], ["dsc4588", "Allee im Winterlicht"], ["dsc4838", "Liegende vor Rot"], ["dsc4708", "Farbnotiz auf Weiß"], ["dsc4376", "Kopf mit Bart, Gelb"], ["dsc4877", "Weite Ebene, Blau"], ["dsc4958", "Kopf, Blau und Ocker"], ["dsc4819", "Stillleben, Ocker und Blau"], ["dsc4436", "Dorf unter grauem Himmel"], ["dsc4876", "Stehender vor Grün"], ["dsc4649", "Strauß, gestisch"], ["dsc4310", "Profil vor Rot"], ["dsc4883", "Zwei Bäume"], ["dsc4792", "Raum in Blau und Weiß"], ["dsc4936", "Frau im hellen Kleid"], ["dsc4444", "Flusslandschaft"], ["dsc4831", "Kopf im Dunkel"], ["dsc4717", "Bewegte Form, Gelb"], ["dsc4429", "Straße mit Passanten"], ["dsc4946", "Figurengruppe"], ["dsc4486", "Uferstück, hell"], ["dsc4340", "Kopf mit Mütze"], ["dsc4897", "Landschaft, Rot und Weiß"], ["dsc4688", "Stamm und Gestrüpp"], ["dsc4900", "Komposition in Blau"], ["dsc4459", "Dunkle Landschaft"], ["dsc4208", "Grüne Striche"], ["dsc4185", "Dickicht"], ["dsc4492", "Grünes Stück auf Weiß"]];
const stage=document.getElementById('showStage'),thumbs=document.getElementById('showThumbs'),cap=document.getElementById('showCap'),
num=document.getElementById('showNum'),prog=document.getElementById('showProg'),playB=document.getElementById('showPlay'),show=document.getElementById('show');
const DUR=5000,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const imgs=SK.map((s,i)=>{const im=document.createElement('img');im.alt='Matthias Jaeger: '+s[1];im.decoding='async';if(i<2)im.src='img/skizzen/sk-'+s[0]+'.jpg';stage.appendChild(im);return im});
thumbs.innerHTML=SK.map((s,i)=>`<button data-i="${i}" aria-label="Bild ${i+1}: ${s[1]}"><img src="img/skizzen/sk-${s[0]}-t.jpg" alt="" loading="lazy"></button>`).join('');
const tb=[...thumbs.children];
let cur=0,playing=!reduce,timer=null;
function load(i){const im=imgs[(i+SK.length)%SK.length];if(!im.src)im.src='img/skizzen/sk-'+SK[(i+SK.length)%SK.length][0]+'.jpg'}
function go(i,user){
  cur=(i+SK.length)%SK.length;
  imgs.forEach((im,k)=>im.classList.toggle('on',k===cur));load(cur);load(cur+1);load(cur-1);
  cap.textContent=SK[cur][1];num.textContent=String(cur+1).padStart(2,'0')+' / '+SK.length;
  tb.forEach((b,k)=>b.setAttribute('aria-current',k===cur));
  const t=tb[cur];thumbs.scrollTo({left:t.offsetLeft-thumbs.clientWidth/2+t.clientWidth/2,behavior:'smooth'});
  if(user&&playing){restart()}else if(playing)restart();
}
function restart(){clearTimeout(timer);prog.classList.remove('run');prog.style.width='0';
  if(!playing)return;void prog.offsetWidth;prog.style.transitionDuration=DUR+'ms';prog.classList.add('run');prog.style.width='100%';
  timer=setTimeout(()=>go(cur+1),DUR)}
function setPlay(p){playing=p;playB.textContent=p?'Pause':'Abspielen';playB.setAttribute('aria-pressed',p);if(p)restart();else{clearTimeout(timer);prog.classList.remove('run');prog.style.width='0'}}
document.getElementById('showPrev').onclick=()=>go(cur-1,1);
document.getElementById('showNext').onclick=()=>go(cur+1,1);
thumbs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)go(+b.dataset.i,1)});
playB.onclick=()=>setPlay(!playing);
document.getElementById('showFs').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else if(show.requestFullscreen)show.requestFullscreen().catch(()=>{});else if(show.webkitRequestFullscreen)show.webkitRequestFullscreen()};
show.tabIndex=0;show.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){go(cur+1,1);e.preventDefault()}if(e.key==='ArrowLeft'){go(cur-1,1);e.preventDefault()}if(e.key===' '&&e.target===show){setPlay(!playing);e.preventDefault()}});
let x0=null;stage.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1),1);x0=null});
show.addEventListener('mouseenter',()=>{if(playing){clearTimeout(timer);prog.classList.remove('run');prog.style.width='0'}});
show.addEventListener('mouseleave',()=>{if(playing)restart()});
const vis=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting){clearTimeout(timer)}else if(playing)restart()}),{threshold:.25});vis.observe(show);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else if(playing)restart()});
setPlay(playing);go(0);
})();

/* ---------- Skizzenbücher-Diashow ---------- */
(()=>{
const SB=[["b01", "Prolog", "Das Land vor der Tür", "Hügel, Feldwege, Nebel über der Mecklenburgischen Seenplatte — die Landschaft um Neubrandenburg, in der die Familie Jaeger seit 1880 ansässig ist."], ["b02", "Das Skizzenbuch", "Portraitzeichnen, linke Seite", "Links der Kursbetrieb: Stichworte zu Portraitzeichnen und Wahrnehmung, eine Innenraumskizze, eine Adresse. Rechts der liegende Kopf, Aquarell über Bleistift, in Moosgrün und Rostrot gefasst."], ["b03", "Das Skizzenbuch", "Zwei Köpfe, zweimal gesehen", "Ein Profil in Grün und Altrosa, breitflächig laviert — daneben dieselbe Aufmerksamkeit in weichem Bleistift: eine sitzende Frau, in Schraffuren aus dem Papier geholt."], ["b04", "Das Skizzenbuch", "Materialkunde Kohle", "Eine ganze Seite über ein einziges Werkzeug: vielseitig, einfach zu handhaben, schnelle Skizzen, kraftvoll, kontrastreich. Dazwischen ein Zweig Bingelkraut, botanisch benannt."], ["b05", "Das Skizzenbuch", "Schwanenpflege", "Ein lesendes Kind, einmal in Rötel über orangefarbener Schraffur, einmal gegenüber in Bleistift — dieselbe Szene zweimal gedacht."], ["b06", "Das Skizzenbuch", "17. April", "Links eine Liste: Namen, Hochschule, Stadtplan, Städtebau. Rechts fährt der Kugelschreiber los: ein Kopf mit Zigarette, in wenigen Sekunden gesetzt."], ["b07", "Das Skizzenbuch", "Figuren in Bewegung", "Beide Seiten nur Bleistift: stehende, gebeugte, sich abwendende Figuren. Kein Motiv wird zu Ende geführt — es geht um die Bewegung, nicht um das Bild."], ["b08", "Das Skizzenbuch", "28. September 2005", "Links ein Fenster mit Töpfen und Zimmerpflanzen, präzise in Bleistift gebaut. Rechts die Überschrift, die über dem ganzen Buch stehen könnte: Wahrnehmen und Darstellen."], ["b09", "Das Skizzenbuch", "Das Skizzenbuch als Fixpunkt", "Eine Seite über das Sehen selbst: Formen, Winkel, Überflüsse, Proportionen, Perspektiven — und die Anweisung an sich selbst, Szenen zu suchen, die den eigenen Fotografien entsprechen."], ["b10", "Das Skizzenbuch", "Rio, Kyoto, Agenda 21", "Dieselbe Hand, die Köpfe zeichnet, sortiert hier Konferenzen und Begriffe: Umweltbildung, Generationengerechtigkeit, Beteiligung. Das Skizzenbuch ist auch ein Denkbuch."], ["b11", "Das Skizzenbuch", "Kalender, quergelegt", "Ein selbstgezeichnetes Monatsraster mit Terminen, daneben ein durchlaufender Text. Im Buch kopfstehend notiert, hier gedreht."], ["b12", "Der Nachlass heute", "Mappen auf dem Planschrank", "Grafikmappen mit Bändern, gestapelt. Der Bestand umfasst nach heutiger Schätzung rund 10.000 Grafiken, 20.000 Zeichnungen und Lithografien und 1.500 Ölgemälde."], ["b13", "Der Nachlass heute", "Keilrahmen, Kante an Kante", "Gemälde stehen im Regal wie Bücher: sichtbar sind nur Leisten, Nagelköpfe und Farbspuren am Rand."], ["b14", "Der Nachlass heute", "Im Depot", "Bilder, Rahmen, Kartons — und oben ein Erdball in Öl. Die Themen der Skizzenbücher tauchen im Depot als fertige Bilder wieder auf."], ["b15", "Der Nachlass heute", "Auf dem Reprotisch", "Zwei Bilder auf dem Aufnahmetisch, beidseitig ausgeleuchtet: farbverbindliche Reproduktion nach Kalibrierstandard."], ["b16", "Der Nachlass heute", "Die Ausrüstung", "Koffer, Stative, Leuchten, Kabel — die mobile Digitalisierungstechnik, die zum Bestand fährt statt umgekehrt."], ["b17", "Der Ort", "Maler und Grafiker", "Der Findling nennt den Beruf vor dem Namen: Maler u. Grafiker Matthias Jaeger, 23.8.1945 bis 17.9.2014. Dahinter die Eltern, Diethelm und Gertraud Jaeger geb. Stein."], ["b18", "Der Ort", "Horst Jaeger und die Tafel der Linie Hellwig", "Der Findling für Horst Jaeger, davor die vom Alten Friedhof übertragene schmiedeeiserne Tafel der Vorfahrenlinie Hellwig — Karl W. Hellwig, Elise geb. Größner, Lisette geb. Bergell."], ["b19", "Der Ort", "Familiengrab, Feld PB 3", "Die gesamte Grabstelle unter Kiefern: Matthias, davor die Eltern, dahinter Horst Jaeger und die Tafel der Linie Hellwig. Fünf Generationen an einem Ort."]];
const stage=document.getElementById('sbStage'),thumbs=document.getElementById('sbThumbs'),cap=document.getElementById('sbCap'),
num=document.getElementById('sbNum'),prog=document.getElementById('sbProg'),playB=document.getElementById('sbPlay'),show=document.getElementById('sbShow'),
kap=document.getElementById('sbKap'),desc=document.getElementById('sbDesc');
const DUR=9000,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const imgs=SB.map((s,i)=>{const im=document.createElement('img');im.alt='Matthias Jaeger, Skizzenbuch: '+s[2];im.decoding='async';if(i<2)im.src='img/skizzenbuecher/skb-'+s[0]+'.jpg';stage.appendChild(im);return im});
thumbs.innerHTML=SB.map((s,i)=>`<button data-i="${i}" aria-label="Blatt ${i+1}: ${s[2]}"><img src="img/skizzenbuecher/skb-${s[0]}-t.jpg" alt="" loading="lazy"></button>`).join('');
const tb=[...thumbs.children];
let cur=0,playing=!reduce,timer=null;
function load(i){const k=(i+SB.length)%SB.length;const im=imgs[k];if(!im.src)im.src='img/skizzenbuecher/skb-'+SB[k][0]+'.jpg'}
function go(i){
  cur=(i+SB.length)%SB.length;
  imgs.forEach((im,k)=>im.classList.toggle('on',k===cur));load(cur);load(cur+1);load(cur-1);
  cap.textContent=SB[cur][2];num.textContent=String(cur+1).padStart(2,'0')+' / '+SB.length;
  kap.textContent=SB[cur][1]+' · '+SB[cur][2];desc.textContent=SB[cur][3];
  tb.forEach((b,k)=>b.setAttribute('aria-current',k===cur));
  const t=tb[cur];thumbs.scrollTo({left:t.offsetLeft-thumbs.clientWidth/2+t.clientWidth/2,behavior:'smooth'});
  restart();
}
function restart(){clearTimeout(timer);prog.classList.remove('run');prog.style.width='0';
  if(!playing)return;void prog.offsetWidth;prog.style.transitionDuration=DUR+'ms';prog.classList.add('run');prog.style.width='100%';
  timer=setTimeout(()=>go(cur+1),DUR)}
function setPlay(p){playing=p;playB.textContent=p?'Pause':'Abspielen';playB.setAttribute('aria-pressed',p);if(p)restart();else{clearTimeout(timer);prog.classList.remove('run');prog.style.width='0'}}
document.getElementById('sbPrev').onclick=()=>go(cur-1);
document.getElementById('sbNext').onclick=()=>go(cur+1);
thumbs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)go(+b.dataset.i)});
playB.onclick=()=>setPlay(!playing);
document.getElementById('sbFs').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else if(show.requestFullscreen)show.requestFullscreen().catch(()=>{});else if(show.webkitRequestFullscreen)show.webkitRequestFullscreen()};
show.tabIndex=0;show.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){go(cur+1);e.preventDefault()}if(e.key==='ArrowLeft'){go(cur-1);e.preventDefault()}if(e.key===' '&&e.target===show){setPlay(!playing);e.preventDefault()}});
let x0=null;stage.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));x0=null});
show.addEventListener('mouseenter',()=>{if(playing){clearTimeout(timer);prog.classList.remove('run');prog.style.width='0'}});
show.addEventListener('mouseleave',()=>{if(playing)restart()});
const vis=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting){clearTimeout(timer)}else if(playing)restart()}),{threshold:.25});vis.observe(show);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else if(playing)restart()});
setPlay(playing);go(0);
})();
