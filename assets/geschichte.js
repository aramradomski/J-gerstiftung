/* Geschichte: Chronik mit Firmenmarke (braucht chipGroup aus site.js) */
/* ---------- Zeitleiste ---------- */
const TL=[
 ["1880","firma","Firma Wilh. Jaeger gegründet","Gründung in Neubrandenburg. Später über 100 Beschäftigte, Niederlassung Schwerin, zwei Betonwerke, Baustoffgroß- und Kohlehandel."],
 ["1900","firma","Bauschmuckwerkstatt","Die Firma ergänzt ihr Programm um eine eigene Werkstatt für Bauschmuck – der Beginn der künstlerischen Linie der Familie."],
 ["1912","firma","Erste Jaeger-Stiftung","Ausgestattet aus dem Vermögen der Firma, bestätigt durch Großherzog Adolf Friedrich von Mecklenburg. Stiftungsverwalter laut §&nbsp;8: der Magistrat."],
 ["1916","firma","Umwandlung in eine KG","Zum 01.01.1916 wird die Firma Wilh. Jaeger zur Kommanditgesellschaft."],
 ["1953","verlust","Kredit fristlos gekündigt","Die staatliche Notenbank kündigt im Februar den Produktionskredit. Das Angebot, das Betonwerk an einen staatseigenen Betrieb zu verkaufen, wird abgelehnt."],
 ["1958","verlust","Liquidation abgeschlossen","Die Firma wird bis 1958 liquidiert."],
 ["1962","verlust","Stiftung enteignet","Der Rat des Kreises Neubrandenburg greift auf das Stiftungsvermögen zu – nach Auffassung des Stifters durch eine unzuständige Behörde und damit rechtsstaatswidrig."],
 ["1981","firma","Morgenlandstraße 35 erworben","Hellwart Jaeger erwirbt das Mehrfamilienhaus von 1920 – heute Grundstockvermögen der neuen Stiftung."],
 ["1995","heute","Haus unter Denkmalschutz","Seit 27.09.1995 auf der Denkmalliste der Stadt Neubrandenburg."],
 ["2014","firma","Tod von Matthias Jaeger","Der Maler stirbt am 16.09.2014. Seine Söhne Paul und Tilman schenken die Werke in Neubrandenburg ihrem Onkel Heiner als Nachlassverwalter."],
 ["2015","heute","Erste Werkaufnahmen","Im Februar 2015 werden die Gemälde im Atelier systematisch fotografiert – die Bilder in dieser Galerie."],
 ["2020","heute","Denkmalschutz erweitert","Seit 09.01.2020 stehen auch Vorgarten und schmiedeeiserne Zaunanlage unter Schutz."],
 ["2023","heute","Erdgeschoss vermietet","Nach Sanierung ab 01.08.2023 vermietet – erster Ertrag für die Stiftung."],
 ["2024","heute","Start der Stiftungsvorbereitung","Ab August 2024: Herrichtung von Büro und Stiftungswohnung, Beginn der Digitalisierung."],
 ["2025","heute","MemoryLabs gUG übernimmt","Im November 2025 anerkannt; seit 01.11.2025 Träger von Digitalisierung und technischer Umsetzung."],
 ["2026","heute","Satzung vom 25.02.2026","Satzung beschlossen, Satzungsmäßigkeit nach §&nbsp;60a AO festgestellt, Anerkennungsverfahren läuft."]
];
const tlEl=document.getElementById('timeline');
/* Firmenmarke: grosses Emblem bei der Gruendung, kleine Marke bei allen Eintraegen aus der Lebenszeit der Firma (1880–1958) */
const FIRMA_KAT='https://bildstock.berlintapete.de/Culture-Heritage-MemoryLab/Jaegerworks/Fotos-Firma';
const MJ_KAT='https://bildstock.berlintapete.de/Culture-Heritage-MemoryLab/Jaegerworks/Matthias-Jaeger';
const MARK='img/allgemein/blob-92d0ca021faac3b33932c7e9d1f00b83.png';
const FIRMA_JAHRE=new Set(['1880','1900','1912','1916','1953','1958']);
const logoCard=`<a class="tl-logo" href="${FIRMA_KAT}" target="_blank" rel="noopener">
  <img src="${MARK}" alt="Firmenmarke der Wilh. Jaeger: Merkur mit Schriftrolle an einer Säule, Umschrift Wilh. Jaeger 1880 Baumaterialien, Neubrandenburg und Schwerin i. Meckl.">
  <span><span class="k">Firmenmarke · Wilh. Jaeger KG</span>
  <span class="h">Merkur, Säule und Schriftrolle</span>
  <span class="x">Die Siegelmarke der Firma: Merkur als Gott des Handels lehnt an einer Säule, zu seinen Füßen Ziegel und Rohr – das Programm eines Baustoffhandels. Umschrift „Wilh. Jaeger 1880 Baumaterialien · Neubrandenburg und Schwerin i. Meckl.“</span>
  <span class="go">Firmenkatalog im Bildstock öffnen ↗</span></span></a>`;
tlEl.innerHTML=TL.map((t,i)=>{const f=FIRMA_JAHRE.has(t[0]);return `<div class="tl-item ${t[1]==='verlust'?'loss':''}" data-era="${t[1]}">
  <div class="tl-year">${t[0]}</div>
  <div class="tl-main">
  <button class="tl-body glass" aria-expanded="${i===2?'true':'false'}" id="tl-${i}">
    <div class="t"><span>${f?`<img class="tl-mk" src="${MARK}" alt="" aria-hidden="true">`:''}${t[2]}</span><span class="tag">${{firma:'Firma & Familie',verlust:'Enteignung',heute:'Neugründung'}[t[1]]}</span></div>
    <div class="d">${t[3]}</div>
  </button>
  ${t[0]==='1880'?logoCard:''}${t[0]==='1916'?`<a class="tl-link" href="${FIRMA_KAT}" target="_blank" rel="noopener">Fotos der Wilhelm Jaeger KG ↗</a>`:''}${(t[0]==='2014'||t[0]==='2015')?`<a class="tl-link" href="${MJ_KAT}" target="_blank" rel="noopener">Werkarchiv Matthias Jaeger ↗</a>`:''}
  </div></div>`}).join('');
tlEl.addEventListener('click',e=>{const b=e.target.closest('.tl-body');if(!b)return;b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='true'?'false':'true')});
chipGroup('[data-era]:is(button)','era',v=>{document.querySelectorAll('.tl-item').forEach(el=>el.hidden=!(v==='all'||el.dataset.era===v))});
