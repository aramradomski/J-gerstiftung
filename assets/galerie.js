/* Matthias Jaeger: Werkgalerie mit Filter und Lightbox (braucht site.js) */
/* ---------- Galerie ---------- */
const G=[
 ["dsc4305","portrait","Porträt in Rot und Ocker"],
 ["dsc4284","portrait","Kopf, schwarze Linie auf Gelb"],
 ["dsc4371","portrait","Kopf vor Zinnober"],
 ["dsc4326","portrait","Brustbild, Grün und Orange"],
 ["dsc4362","portrait","Kopf, aufgelöst"],
 ["dsc4862","portrait","Kopf auf Petrol"],
 ["dsc4945","portrait","Porträt, rosa Grund"],
 ["dsc4356","portrait","Mann mit Mütze"],
 ["dsc4771","portrait","Sitzender im Anzug"],
 ["dsc4825","portrait","Doppelbild mit Farbfeldern"],
 ["dsc4937","portrait","Figur auf Gelb"],
 ["dsc4179","portrait","Kopf, Graugrün"],
 ["dsc4290","portrait","Kopf, Umbra"],
 ["dsc4403","portrait","Kleines Bildnis"],
 ["dsc4882","land","Stadtsilhouette, Rosa"],
 ["dsc4510","land","Baum"],
 ["dsc4561","land","Landschaft mit Palme"],
 ["dsc4633","land","Uferlandschaft"],
 ["dsc4694","raum","Komposition mit schwarzem Band"],
 ["dsc4786","raum","Interieur mit Figur"]
];
const gal=document.getElementById('gallery');
gal.innerHTML=G.map((g,i)=>`<button class="tile" data-i="${i}" data-g="${g[1]}" aria-label="${g[2]} vergrößern"><img src="img/werke/${g[0]}.jpg" alt="Matthias Jaeger: ${g[2]}" loading="lazy"><figcaption><span class="pl">Taf. ${String(i+1).padStart(2,'0')}</span>${g[2]}</figcaption></button>`).join('');
let visible=G.map((_,i)=>i);
chipGroup('button[data-g]:not(.tile)','g',v=>{
  visible=[];document.querySelectorAll('.tile').forEach(t=>{const on=v==='all'||t.dataset.g===v;t.hidden=!on;if(on)visible.push(+t.dataset.i)});
});
/* Lightbox (assets/site.js) */
gal.addEventListener('click',e=>{const t=e.target.closest('.tile');if(!t)return;
  const items=visible.map(i=>({src:`img/werke/${G[i][0]}.jpg`,alt:`Matthias Jaeger: ${G[i][2]}`,cap:`Taf. ${String(i+1).padStart(2,'0')} — ${G[i][2]}`}));
  Lightbox.open(items,visible.indexOf(+t.dataset.i),t);
});
