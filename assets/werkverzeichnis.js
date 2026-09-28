/* Wilhelm Hans Jaeger: Werkverzeichnis mit Filter */
(function(){
const WIMW=[
 ["Relief „Rotkäppchen“","Bauschmuck","1907","Stein","Elisabethstr. 5 / Friedrich-Engels-Ring 5","unk","–"],
 ["Familiengrab Jaeger","Grabmal","1909","Muschelkalk","Kreuze auf den Neuen Friedhof umgesetzt, denkmalgeschützt","ok","3"],
 ["Porträt Wilhelmine Louise Jaeger","Zeichnung","1910","Bleistift","Familie","ok","2"],
 ["Ausstellungsgebäude der Firma, Schwerin","Bauschmuck","1911","Kunststein","nicht erhalten","lost","4"],
 ["Grabmal Ferdinand & Wilhelmine Jaeger","Grabmal","um 1911","Stein","Alter Friedhof","unk","–"],
 ["Büste Lina Bartel","Porträt","1913","Bronze","Familie","ok","6"],
 ["Gestaltung Lyzeum Lessingstraße","Bauschmuck","1916–17","–","Neubrandenburg","unk","–"],
 ["Wappen des Großherzogtums, Schloss Hohenzieritz","Wappen","1916–17","Stein","am Schloss","ok","7"],
 ["Plakette zur Geburt von Wolfgang","Plakette","1917","–","–","unk","–"],
 ["Grabstein Walter Jaeger (zwei Adler)","Grabmal","nach 1918","Stein","verschwunden","lost","–"],
 ["Wappen Freistaat Mecklenburg-Strelitz","Wappen","ab 1918","Kunststein","Negativform, mehrfach verwendet","unk","9"],
 ["Totenmaske Engelbert Humperdinck","Maske","1921","Gips","Humperdinck-Gesellschaft, Frankfurt a. M.","ok","10"],
 ["Grabmal Johanna Grössner","Grabmal","nach 1921","Stein","verschwunden nach 1965","lost","5"],
 ["Ruhende","Akt","vor 1923","Kirchheimer Marmor","Familienbesitz","ok","11"],
 ["Großer schwarzer Panther","Tier","vor 1923","–","verschollen","lost","11"],
 ["Lautenspielerin „Pierette“","Figur","vor 1923","–","nur Foto","unk","11"],
 ["Wandbrunnen Haus Beyer, Wismar","Brunnen","vor 1923","Stein","Wismar","unk","12"],
 ["Kamin Herrenhaus von Heyden, Ploetz","Bauschmuck","vor 1923","–","Ploetz","unk","–"],
 ["„Jaegerbrunnen“ Heidenstraße","Brunnen","vor 1923","Stein","abgebaut, verschwunden","lost","–"],
 ["Wappen an Gutshäusern und Villen","Wappen","1920er","Kunststein","verstreut, Zuschreibung vermutet","unk","–"],
 ["Aschenbecher mit Firmenaufschrift","Keramik","1920er","Keramik, hellgrün","Serienware, unsigniert","unk","–"],
 ["Zigarrenbehälter","Keramik","1920er","Keramik","Nachkommen","ok","13"],
 ["Aschenbecher mit Dackel","Keramik","1920er","Keramik","Nachkommen","ok","14"],
 ["Torpfosten mit Keramikplatten, Augustastr. 12","Bauschmuck","1920er","Keramik","verloren 1953","lost","15"],
 ["Gartenplastik Augustastr. 12","Figur","1920er","Stein","verloren 1953","lost","16"],
 ["Reuterbrunnen / Mudder-Schulten-Brunnen","Brunnen","1923","Muschelkalk","Stadtwall Neubrandenburg","ok","17"],
 ["Büste Kommerzienrat Wilhelm Jaeger","Porträt","1924","Bronze","mehrere Abgüsse","ok","20"],
 ["Büste Caroline Beyer","Porträt","1925","–","–","unk","21"],
 ["Geschnitztes „Tierstück“","Tier","vor 1927","Holz","–","unk","–"],
 ["Gellert-Denkmal (Erneuerung)","Denkmal","1926","Stein","Neubrandenburg","unk","–"],
 ["Büste Renate Jaeger","Porträt","1920er","–","–","unk","23"],
 ["Büste Otto Wolfgang Spieß","Porträt","1927","Bronze","Regionalmuseum","mus","–"],
 ["Büste Prof. Ludwig Sternberg","Porträt","1927","–","–","unk","24"],
 ["Silberschmuck (Anhänger, Brosche)","Schmuck","1927","Silber","nur Fotos","unk","31"],
 ["Habicht","Tier","1926","Keramik","–","unk","25"],
 ["Enten (mehrere Varianten)","Tier","1928 ff.","Keramik","–","unk","26"],
 ["Zwei Putten vor dem Firmenbüro","Figur","1928","Stein","bis 1958 vor Ort","unk","–"],
 ["Putte mit Traubenranke","Figur","–","Stein","seit 1990 verschwunden","lost","28"],
 ["Büste Prof. Dr. Eckhard Unger","Porträt","–","–","Regionalmuseum","mus","29"],
 ["Faungruppe","Tier","1929","Bronze","Regionalmuseum","mus","–"],
 ["Truthahn","Tier","1934","Keramik, weiß glasiert","Regionalmuseum","mus","–"],
 ["Liegendes Fohlen","Tier","1934?","Keramik","Regionalmuseum, Schenkung 1999","mus","30"],
 ["Büstengruppe Lina, Wolfgang, Renate","Porträt","um 1921","Marmor","Grab in Marburg","ok","19"],
 ["Grabmale Neuer Friedhof, u. a. Wilhelm Wagner","Grabmal","nach 1920","Stein","denkmalgeschützt","ok","18"],
 ["Zwei Grabmale 1928","Grabmal","1928","Stein","Alter Friedhof","unk","27"],
 ["Madonna","Figur","1933","Keramik","evtl. bei Hannelore Remer","unk","32"],
 ["Hindenburgrelief","Relief","1933","–","–","unk","–"],
 ["„Arbeiter der Stirn“","Figur","1933","–","–","unk","–"],
 ["Krippenfiguren","Figur","um 1933","Ton","Familienbesitz","ok","39"],
 ["Badendes Mädchen","Figur","1934","–","–","unk","–"],
 ["Mädchenkopf „Jutta“","Porträt","1934","–","–","unk","–"],
 ["Kinderköpfchen","Porträt","vor 1931","–","–","unk","33"],
 ["Soldatenkopf, Giebel Belvedere","Denkmal","1935","Stein","nach 1993 gestohlen","lost","34"],
 ["Sternen-Kassettendecke, Belvedere","Bauschmuck","1935","–","Belvedere","unk","–"],
 ["Nachgüsse der Medaillen der Großeltern","Medaille","1937","Bronze","1945 verloren","lost","–"],
 ["Relief Eingangsgebäude der Firma","Relief","1938","4 Platten","denkmalgeschützt","ok","35"],
 ["Hauszeichen Ihlenfelder Vorstadt","Relief","1930er","Reliefplatten","an den Häusern","unk","–"],
 ["Schneckenreiter, Paviangruppe","Tier","1938","–","–","unk","–"],
 ["Panther (zwei Versionen)","Tier","1927/29","Keramik","Familienbesitz","ok","36"],
 ["Katze, Hasengruppe, Zebra","Tier","–","Keramik","Familienbesitz","ok","37–38"],
 ["Fliesen: vier Tore und Fangelturm","Keramik","vor 1945","Keramik","Familienbesitz","ok","40"],
 ["Zeichnung Erich Remer","Zeichnung","1945","Bleistift","–","unk","41"],
 ["Gebrauchskeramik","Keramik","nach 1945","Keramik","signiert und datiert","unk","42"],
 ["Obstschale","Keramik","nach 1945","Keramik","Familienbesitz","ok","43"],
 ["Zeichnung Lina Bartel-Jaeger","Zeichnung","1946","Zeichnung","–","unk","44"],
 ["Eule","Tier","1947","Keramik glasiert","Werderstr. 2, Neubrandenburg","ok","48"],
 ["Kleiner Frauenakt","Akt","nach 1945","–","Familienbesitz","ok","–"],
 ["Totenmaske Horst Jaeger","Maske","1951","Gips","bei dessen Sohn Henry","ok","45"],
 ["Modell der Marienkirche","Modell","1950er","–","verschwunden nach 1963","lost","–"],
 ["Wasserspiel Blumengeschäft Thälmannstraße","Brunnen","1960er","–","nicht mehr vorhanden","lost","–"],
 ["Zeichnungen Horst und Sigrid Remer","Zeichnung","nach 1963","Bleistift","–","unk","46–47"]

];
const WIMLBL={ok:"erhalten",mus:"Museum",lost:"verschollen",unk:"unbekannt"};
const wimtb=document.getElementById('wim-works');
wimtb.innerHTML=WIMW.map(w=>`<tr data-s="${w[5]}"><td class="w">${w[0]}<span class="cat">${w[1]}</span></td><td class="yr">${w[2]}</td><td class="m">${w[3]}</td><td class="o">${w[4]}</td><td><span class="st ${w[5]}">${WIMLBL[w[5]]}</span></td><td class="yr">${w[6]}</td></tr>`).join('');
const wimcnt={all:WIMW.length};WIMW.forEach(w=>wimcnt[w[5]]=(wimcnt[w[5]]||0)+1);
document.querySelectorAll('#bildhauer .wim-filters .chip').forEach(b=>{
  b.querySelector('.c').textContent=wimcnt[b.dataset.f]||0;
  b.addEventListener('click',()=>{
    document.querySelectorAll('#bildhauer .wim-filters .chip').forEach(x=>x.setAttribute('aria-pressed',x===b));
    const f=b.dataset.f;
    wimtb.querySelectorAll('tr').forEach(r=>r.hidden=!(f==='all'||r.dataset.s===f));
  });
});
// KPI sync
document.querySelector('#bildhauer .wim-kpis .kpi:nth-child(2) .n').textContent=WIMW.length;
document.querySelector('#bildhauer .wim-kpis .kpi:nth-child(3) .n').textContent=wimcnt.lost;
document.querySelector('#wim-werke h3').textContent=WIMW.length+' Werke und ihr Verbleib';

})();
