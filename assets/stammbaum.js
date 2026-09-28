/* Familie: 3D-Stammbaum (three.js wird erst beim Aufklappen geladen) */
const STB3D_DATA = [{"id":0,"parent":null,"depth":0,"name":"Christoph Sternicke","dates":"um 1705","role":"Freigärtner, Schön-Ellguth (Schlesien) · ⚭ Maria","cls":"main","group":"root"},{"id":1,"parent":0,"depth":1,"name":"Johann Sternitzky","dates":"*22.1.1739","role":"Kgl. Schmelzer, Münze Breslau · ⚭ Maria Elisabeth Methmer · 9 Kinder","cls":"main","group":"root"},{"id":2,"parent":1,"depth":2,"name":"Anna Maria Elisabeth Sternitzky","dates":"*26.1.1779, †1785","role":"","cls":"fern","group":"root"},{"id":3,"parent":1,"depth":2,"name":"Christian Leonhard Gottlob Sternitzky","dates":"*17.9.1780","role":"","cls":"fern","group":"root"},{"id":4,"parent":1,"depth":2,"name":"Johann Heinrich Sternitzky","dates":"*20.11.1782","role":"","cls":"fern","group":"root"},{"id":5,"parent":1,"depth":2,"name":"Andreas Benjamin Sternitzki","dates":"1784–1851","role":"⚭ Maria Sophie Henriette Amalie Dietz (1796–1866) · Drechsler, Wiesbaden · 5 Kinder","cls":"main","group":"root"},{"id":6,"parent":1,"depth":2,"name":"Susanne Catharina Sternitzky","dates":"*2.2.1785","role":"","cls":"fern","group":"root"},{"id":7,"parent":1,"depth":2,"name":"Christian Sternitzky","dates":"*6.1.1789","role":"nach Nottaufe gestorben","cls":"fern","group":"root"},{"id":8,"parent":1,"depth":2,"name":"Maria Elisabeth Sternitzky","dates":"*2.7.1790","role":"","cls":"fern","group":"root"},{"id":9,"parent":1,"depth":2,"name":"Johanna Maria Elisabeth Sternitzky","dates":"1792–1805","role":"","cls":"fern","group":"root"},{"id":10,"parent":1,"depth":2,"name":"Wilhelm Sternitzky","dates":"*16.11.1794","role":"","cls":"fern","group":"root"},{"id":11,"parent":5,"depth":3,"name":"Wilhelm (Karl) Sternitzki","dates":"1821–1869","role":"Drechsler, Graveur, Photograph, Bad Ems · ⚭ Elisabeth Hofmann (†1878) · 3 Kinder","cls":"fern","group":"wilhelm"},{"id":12,"parent":54,"depth":4,"name":"Louise (Sophie) Sternitzki","dates":"1857–1930","role":"⚭ Friedrich Hirsch (1851–1940) · 6 Kinder, Wi-Bierstadt","cls":"fern","group":"heinrich"},{"id":13,"parent":12,"depth":5,"name":"Minna Hirsch","dates":"*1878","role":"⚭ Wilhelm Vonhausen · keine Kinder","cls":"fern","group":"heinrich"},{"id":14,"parent":12,"depth":5,"name":"Karl Hirsch","dates":"*1881","role":"Landwirt, Niederhausen · ⚭ Johanna Müller · 4 Kinder","cls":"fern","group":"heinrich"},{"id":15,"parent":14,"depth":6,"name":"Walter Hirsch","dates":"*1907","role":"Diplomgärtner · ⚭ Irmgard Roediger (1.Ehe) · 2.⚭ Günter Bertling","cls":"fern","group":"heinrich"},{"id":16,"parent":15,"depth":7,"name":"Waltraud Hirsch","dates":"*1940","role":"","cls":"fern","group":"heinrich"},{"id":17,"parent":15,"depth":7,"name":"Wolf-Dieter Hirsch","dates":"*1942, Dipl.-Ing.","role":"","cls":"fern","group":"heinrich"},{"id":18,"parent":15,"depth":7,"name":"Monika Hirsch","dates":"*1943","role":"","cls":"fern","group":"heinrich"},{"id":19,"parent":14,"depth":6,"name":"Werner Hirsch","dates":"*1908","role":"staatl. gepr. Landwirt · ⚭ Margret Wefelscheid, Niederhausen","cls":"fern","group":"heinrich"},{"id":20,"parent":19,"depth":7,"name":"Hiltrud Hirsch","dates":"*1940","role":"Kindergärtnerin · ⚭ Horst Brandel","cls":"fern","group":"heinrich"},{"id":21,"parent":20,"depth":8,"name":"Sebastian Brandel","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":22,"parent":20,"depth":8,"name":"Tobias Brandel","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":23,"parent":19,"depth":7,"name":"Ulrike Hirsch","dates":"*1942","role":"Lehrerin · ⚭ Hartmut Amberger","cls":"fern","group":"heinrich"},{"id":24,"parent":23,"depth":8,"name":"Stephanie Amberger","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":25,"parent":19,"depth":7,"name":"Hans Peter Hirsch","dates":"*1943","role":"Landwirt · ⚭ Renate Döring","cls":"fern","group":"heinrich"},{"id":26,"parent":25,"depth":8,"name":"Lukas Hirsch","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":27,"parent":14,"depth":6,"name":"Ilse Hirsch","dates":"*1910","role":"Apothekerin · ⚭ Joseph Schmitt · keine Kinder","cls":"fern","group":"heinrich"},{"id":28,"parent":14,"depth":6,"name":"Lore Hirsch","dates":"*1921","role":"⚭ Reinhold Bosies, Oberamtsrat","cls":"fern","group":"heinrich"},{"id":29,"parent":12,"depth":5,"name":"Julie Hirsch","dates":"*1882","role":"⚭ Wilhelm Trull, Kaufmann Berlin","cls":"fern","group":"heinrich"},{"id":30,"parent":29,"depth":6,"name":"Johanna-Hanni Trull","dates":"*1912","role":"⚭ Georg Müller","cls":"fern","group":"heinrich"},{"id":31,"parent":30,"depth":7,"name":"Horst Müller","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":32,"parent":29,"depth":6,"name":"Charlotte (Lotti) Trull","dates":"*1913","role":"Kindergärtnerin · ⚭ Folkert Müller, Pfarrer","cls":"fern","group":"heinrich"},{"id":33,"parent":12,"depth":5,"name":"Elisabeth Hirsch","dates":"*1884","role":"Kfm. Angestellte · ⚭ Karl Stock, Kaufmann","cls":"fern","group":"heinrich"},{"id":34,"parent":33,"depth":6,"name":"Anneliese Stock","dates":"*1920","role":"⚭ Herbert Seidel","cls":"fern","group":"heinrich"},{"id":35,"parent":34,"depth":7,"name":"Monika Seidel","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":36,"parent":12,"depth":5,"name":"Wilhelm Hirsch","dates":"*1887","role":"Gartenarchitekt, Aukam · ⚭ Anna Hahn","cls":"fern","group":"heinrich"},{"id":37,"parent":36,"depth":6,"name":"Marianne Hirsch","dates":"*1918, Schneidermeisterin","role":"","cls":"fern","group":"heinrich"},{"id":38,"parent":12,"depth":5,"name":"Gustav Hirsch","dates":"*1899","role":"Oberbaurat Freiburg · ⚭ Eva Blaschke · keine Kinder","cls":"fern","group":"heinrich"},{"id":39,"parent":54,"depth":4,"name":"Julie Sternitzki","dates":"*1860","role":"⚭ Eduard Simon, Obergärtner","cls":"fern","group":"heinrich"},{"id":40,"parent":39,"depth":5,"name":"Willi Simon","dates":"*1884","role":"⚭ Frieda Rus, Pforzheim","cls":"fern","group":"heinrich"},{"id":41,"parent":40,"depth":6,"name":"Anna Simon","dates":"*1912, gef. München 1945","role":"","cls":"fern","group":"heinrich"},{"id":42,"parent":40,"depth":6,"name":"Mathilde Simon","dates":"*1915","role":"⚭ Gerhard Fischer, Reichsbankinspektor · keine Kinder","cls":"fern","group":"heinrich"},{"id":43,"parent":40,"depth":6,"name":"Heinz Simon","dates":"*1918, Oberlehrer","role":"⚭ Cläre Hammer · keine Kinder","cls":"fern","group":"heinrich"},{"id":44,"parent":54,"depth":4,"name":"Wilhelm (Friedrich Adolf) Sternitzki","dates":"*1863","role":"Möbelhändler · 1.⚭ Wilhelmine Gaab · 2.⚭ Auguste Müller","cls":"fern","group":"heinrich"},{"id":45,"parent":44,"depth":5,"name":"Wilhelmine Sternitzki","dates":"*1888","role":"","cls":"fern","group":"heinrich"},{"id":46,"parent":44,"depth":5,"name":"Luise Christiane Antonie Sternitzki","dates":"*1895","role":"1.⚭ Karl Lendle, Bankbeamter · 2.⚭ Karl Schneider","cls":"fern","group":"heinrich"},{"id":47,"parent":46,"depth":6,"name":"Ilse Lendle","dates":"*1919, Malerin","role":"⚭ Kurt Pedell · keine Kinder","cls":"fern","group":"heinrich"},{"id":48,"parent":46,"depth":6,"name":"Gisela Lendle","dates":"*1922","role":"⚭ Günther Schmidt, Kaufmann","cls":"fern","group":"heinrich"},{"id":49,"parent":48,"depth":7,"name":"Ingrid Schmidt","dates":"*1944","role":"⚭ Donald Sinclair Day","cls":"fern","group":"heinrich"},{"id":50,"parent":49,"depth":8,"name":"Andrew Jan Day","dates":"","role":"","cls":"fern","group":"heinrich"},{"id":51,"parent":48,"depth":7,"name":"Wolfgang Schmidt","dates":"*1947","role":"","cls":"fern","group":"heinrich"},{"id":52,"parent":48,"depth":7,"name":"Peter Schmidt","dates":"*1949","role":"","cls":"fern","group":"heinrich"},{"id":53,"parent":44,"depth":5,"name":"Heinrich Christian Ernst Sternitzki","dates":"*1896","role":"Kaufmann · ⚭ Paula Springer · keine Kinder","cls":"fern","group":"heinrich"},{"id":54,"parent":5,"depth":3,"name":"Heinrich (Johann) Sternitzki","dates":"1824–1893","role":"Tapezierer, Möbelhändler Wiesbaden, Geschworener · ⚭ Anna Maria Auguste French (†1871) · 4 Kinder, in Wiesbaden (nur 3 im Quellbuch namentlich geführt)","cls":"fern","group":"heinrich"},{"id":55,"parent":5,"depth":3,"name":"Amalie (Elisabeth) Sternitzki","dates":"1828–1864","role":"⚭ Joseph Port (1827–1904), Kreissekretär a.D., Kanzleirat · 5 Kinder","cls":"fern","group":"amalie"},{"id":56,"parent":55,"depth":4,"name":"Adolph (Georg) Port","dates":"*1854","role":"Kaufmann in Moskau · ⚭ Fanni Doll","cls":"fern","group":"amalie"},{"id":57,"parent":56,"depth":5,"name":"Gertrud Port","dates":"*1898","role":"","cls":"fern","group":"amalie"},{"id":58,"parent":56,"depth":5,"name":"Adolf (Ado) Port","dates":"*1900","role":"Ingenieur, Swerdlowsk · ⚭ Katharina Waganowa","cls":"fern","group":"amalie"},{"id":59,"parent":58,"depth":6,"name":"Katharina Port","dates":"*1938","role":"","cls":"fern","group":"amalie"},{"id":60,"parent":56,"depth":5,"name":"Ernst Port","dates":"*1901, †1943 Kasachstan (Dienstpflichtiger)","role":"","cls":"fern","group":"amalie"},{"id":61,"parent":55,"depth":4,"name":"Moritz Port","dates":"1855–1892, Bankbeamter","role":"","cls":"fern","group":"amalie"},{"id":62,"parent":55,"depth":4,"name":"Josephine Port","dates":"1860–1939","role":"1.⚭ August Herber (†1901) · Kassierer, Höchst/Main","cls":"fern","group":"amalie"},{"id":63,"parent":62,"depth":5,"name":"Emmi Scheuermann","dates":"*1881","role":"⚭ August Gundlach, Kaufmann Bingen","cls":"fern","group":"amalie"},{"id":64,"parent":63,"depth":6,"name":"Herbert Gundlach","dates":"*um 1922","role":"","cls":"fern","group":"amalie"},{"id":65,"parent":62,"depth":5,"name":"Luise Scheuermann","dates":"1883–1942","role":"1.⚭ Gottfried Cade · 2.⚭ Dr. Eugen Jagsch, Zahnarzt Wiesbaden","cls":"fern","group":"amalie"},{"id":66,"parent":65,"depth":6,"name":"Hermann Cade","dates":"*1908","role":"Bauingenieur · ⚭ Margarethe Saar","cls":"fern","group":"amalie"},{"id":67,"parent":66,"depth":7,"name":"Peter Cade","dates":"*1939","role":"","cls":"fern","group":"amalie"},{"id":68,"parent":65,"depth":6,"name":"Werner Jagsch","dates":"1914–1963","role":"Dr.med.dent., Wiesbaden · 1.⚭ Diez (3 Söhne, Alfred Fuhrig) · 2.⚭ Wilhelma Thielemann","cls":"fern","group":"amalie"},{"id":69,"parent":65,"depth":6,"name":"Ruth Jagsch","dates":"1916–1955","role":"⚭ Werner Teschner · 2.⚭ Emmi Auler","cls":"fern","group":"amalie"},{"id":70,"parent":69,"depth":7,"name":"Rainer Teschner","dates":"*1958","role":"","cls":"fern","group":"amalie"},{"id":71,"parent":69,"depth":7,"name":"Helga Teschner","dates":"*1943, Sekretärin","role":"⚭ Vincenzo Casaccia, Bundesbahnangestellter","cls":"fern","group":"amalie"},{"id":72,"parent":71,"depth":8,"name":"Marco Casaccia","dates":"","role":"","cls":"fern","group":"amalie"},{"id":73,"parent":71,"depth":8,"name":"Alexandra Casaccia","dates":"","role":"","cls":"fern","group":"amalie"},{"id":74,"parent":71,"depth":8,"name":"Marcella Casaccia","dates":"","role":"","cls":"fern","group":"amalie"},{"id":75,"parent":69,"depth":7,"name":"Christel Teschner","dates":"*1946, Sekretärin","role":"⚭ Werner Bücher, Polier","cls":"fern","group":"amalie"},{"id":76,"parent":75,"depth":8,"name":"Thomas Bücher","dates":"","role":"","cls":"fern","group":"amalie"},{"id":77,"parent":69,"depth":7,"name":"Ellen Teschner","dates":"*1948, kfm. Angestellte","role":"⚭ Arno Braun, Buchhalter","cls":"fern","group":"amalie"},{"id":78,"parent":77,"depth":8,"name":"Sabine Braun","dates":"","role":"","cls":"fern","group":"amalie"},{"id":79,"parent":55,"depth":4,"name":"Heinrich (Wilhelm) Port","dates":"1862–1947, Apotheker, Generalagent","role":"⚭ Maria Ruhl (†1936) · 3 Kinder","cls":"fern","group":"amalie"},{"id":80,"parent":79,"depth":5,"name":"Hermann Port","dates":"*1898, Dr.rer.pol., Dozent Königsberg","role":"⚭ Brigitte Fieberg · 5 Kinder","cls":"fern","group":"amalie"},{"id":81,"parent":80,"depth":6,"name":"Gisela Port","dates":"*1929, Dipl.-Kauffrau","role":"⚭ Hans Hüning, Dr.rer.pol., Direktor Düsseldorf","cls":"fern","group":"amalie"},{"id":82,"parent":81,"depth":7,"name":"Eckehard Hüning","dates":"","role":"","cls":"fern","group":"amalie"},{"id":83,"parent":81,"depth":7,"name":"Ulrich Hüning","dates":"","role":"","cls":"fern","group":"amalie"},{"id":84,"parent":80,"depth":6,"name":"Johannes Port","dates":"*1932, Jurist, Reg.-Dir.","role":"⚭ Eva Schnell, Lehrerin Köln","cls":"fern","group":"amalie"},{"id":85,"parent":84,"depth":7,"name":"Michael Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":86,"parent":84,"depth":7,"name":"Ursula Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":87,"parent":84,"depth":7,"name":"Andreas Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":88,"parent":80,"depth":6,"name":"Regine Port","dates":"*1937, Apothekerin","role":"⚭ Bruno Claßen, Jurist, Oberpostrat Siegen","cls":"fern","group":"amalie"},{"id":89,"parent":88,"depth":7,"name":"Hildegard Claßen","dates":"","role":"","cls":"fern","group":"amalie"},{"id":90,"parent":88,"depth":7,"name":"Peter Claßen","dates":"","role":"","cls":"fern","group":"amalie"},{"id":91,"parent":80,"depth":6,"name":"Rüdiger Port","dates":"*1944, Arzt","role":"","cls":"fern","group":"amalie"},{"id":92,"parent":80,"depth":6,"name":"Eberhard Port","dates":"*1944, cand.arch.","role":"","cls":"fern","group":"amalie"},{"id":93,"parent":79,"depth":5,"name":"Hans Port","dates":"*1900, Dipl.-Landwirt, Oberlandwirtschaftsrat","role":"⚭ Hildegard-Agnes Sante, Lehrerin · keine Kinder","cls":"fern","group":"amalie"},{"id":94,"parent":79,"depth":5,"name":"Käte Port","dates":"*1904, Gymnastiklehrerin","role":"","cls":"fern","group":"amalie"},{"id":95,"parent":55,"depth":4,"name":"Hermann (Gustav Nikolaus) Port","dates":"1864–1929, Gymnasialprofessor Fulda","role":"⚭ Karoline verw. Haas · 4 Kinder","cls":"fern","group":"amalie"},{"id":96,"parent":95,"depth":5,"name":"Walter Port","dates":"*1894, gef. Merville 1918, stud.phil.","role":"","cls":"fern","group":"amalie"},{"id":97,"parent":95,"depth":5,"name":"Helene Port","dates":"*1896, †1943","role":"⚭ Hugo Hartmann, Bankbeamter Fulda","cls":"fern","group":"amalie"},{"id":98,"parent":97,"depth":6,"name":"Hans-Joachim Hartmann","dates":"*1924","role":"Meister der Funktechnik · ⚭ Doris verw. Kattner · keine Kinder","cls":"fern","group":"amalie"},{"id":99,"parent":97,"depth":6,"name":"Marianne Hartmann","dates":"*1929, Grafikdesignerin","role":"⚭ Bernhard Johannes, Grafikdesigner","cls":"fern","group":"amalie"},{"id":100,"parent":99,"depth":7,"name":"Iris Johannes","dates":"","role":"","cls":"fern","group":"amalie"},{"id":101,"parent":95,"depth":5,"name":"Heinrich (Heinz) Port","dates":"*1898, Dr.med.dent. Bad Orb","role":"1.⚭ Auguste Maria Schwarz · 2.⚭ Henriette (Henny) Grau · 3 Kinder","cls":"fern","group":"amalie"},{"id":102,"parent":101,"depth":6,"name":"Walter Oskar Port","dates":"*1926, Dr.med.dent.","role":"⚭ Margaretha Uhl","cls":"fern","group":"amalie"},{"id":103,"parent":102,"depth":7,"name":"Christine Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":104,"parent":101,"depth":6,"name":"Marlene Port","dates":"*1928","role":"⚭ Paul Köhli, Ingenieur Bern","cls":"fern","group":"amalie"},{"id":105,"parent":104,"depth":7,"name":"Brigitte Köhli","dates":"","role":"","cls":"fern","group":"amalie"},{"id":106,"parent":104,"depth":7,"name":"Kathrin Köhli","dates":"","role":"","cls":"fern","group":"amalie"},{"id":107,"parent":104,"depth":7,"name":"Markus Köhli","dates":"","role":"","cls":"fern","group":"amalie"},{"id":108,"parent":101,"depth":6,"name":"Ernst Vollrad Port","dates":"*1937, Kaufmann Bad Orb","role":"1.⚭ Johanna Gruber · 2.⚭ Barbara Johannes/Langenselbold","cls":"fern","group":"amalie"},{"id":109,"parent":108,"depth":7,"name":"Ivonne Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":110,"parent":108,"depth":7,"name":"Oliver Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":111,"parent":108,"depth":7,"name":"Sven Port","dates":"","role":"","cls":"fern","group":"amalie"},{"id":112,"parent":95,"depth":5,"name":"Josephine (Fifi) Port","dates":"1901–1941","role":"","cls":"fern","group":"amalie"},{"id":113,"parent":5,"depth":3,"name":"Sophie (Elisabeth) Sternitzki","dates":"1833–1915","role":"⚭ Adolf Stein (1827–1899), Buchdrucker Frankfurt/M · 8 Kinder","cls":"main","group":"sophie"},{"id":114,"parent":113,"depth":4,"name":"Adolfine Stein","dates":"*1854","role":"⚭ Reinhold Schraps, Rechtsanwalt","cls":"tante","group":"sophie"},{"id":115,"parent":114,"depth":5,"name":"Siegfried Schraps","dates":"*1875","role":"⚭ Maria Friederike Mätzke","cls":"tante","group":"sophie"},{"id":116,"parent":115,"depth":6,"name":"Isolde Schraps","dates":"*1907, †1944?","role":"","cls":"fern","group":"sophie"},{"id":117,"parent":113,"depth":4,"name":"Elisabeth (Helene Johanna) Stein","dates":"*1856, †um 1915, Journalist","role":"","cls":"tante","group":"sophie"},{"id":118,"parent":113,"depth":4,"name":"Adolf (Wilhelm) Stein","dates":"*1856","role":"Dr.jur., Rechtsanwalt Frankfurt · ⚭ Luise Schwab","cls":"tante","group":"sophie"},{"id":119,"parent":118,"depth":5,"name":"Herbert Stein","dates":"*1888, Dr.jur., Rechtsanwalt","role":"⚭ Erna Witt · keine Kinder","cls":"fern","group":"sophie"},{"id":120,"parent":118,"depth":5,"name":"Maria Erna Stein","dates":"*1891","role":"⚭ Helmut Kircher, Fabrikant","cls":"tante","group":"sophie"},{"id":121,"parent":120,"depth":6,"name":"Maria Luise Kircher","dates":"*1921","role":"","cls":"fern","group":"sophie"},{"id":122,"parent":113,"depth":4,"name":"Gustav (Friedrich Karl) Stein","dates":"1860–1945, Dr.phil., Syndikus","role":"⚭ Helene Kattwinkel","cls":"tante","group":"sophie"},{"id":123,"parent":122,"depth":5,"name":"Friedrich (Karl Georg) Stein","dates":"*1901, Kaufmann Duisburg","role":"⚭ Elfriede Laupenmühlen","cls":"tante","group":"sophie"},{"id":124,"parent":123,"depth":6,"name":"Barbara Stein","dates":"","role":"","cls":"fern","group":"sophie"},{"id":125,"parent":122,"depth":5,"name":"Gustav (Eugen) Stein","dates":"1903–1975, Rechtsanwalt, Professor","role":"⚭ Ruth Immelen","cls":"tante","group":"sophie"},{"id":126,"parent":125,"depth":6,"name":"Nanni Stein","dates":"*um 1946 (adoptiert)","role":"⚭ Kaj Burchardi","cls":"tante","group":"sophie"},{"id":127,"parent":126,"depth":7,"name":"Astrid Burchardi","dates":"","role":"","cls":"fern","group":"sophie"},{"id":128,"parent":126,"depth":7,"name":"Julie Burchardi","dates":"","role":"","cls":"fern","group":"sophie"},{"id":129,"parent":113,"depth":4,"name":"Hedwig (Amalie) Stein","dates":"1862–1931","role":"⚭ Max Goldschmidt (1847–1885), Kaufmann Frankfurt","cls":"tante","group":"sophie"},{"id":130,"parent":129,"depth":5,"name":"Heinz (Gustav) Goldschmidt","dates":"1888–1958, Jurist, Min.-Rat Bonn","role":"⚭ Gertrud Leymann","cls":"tante","group":"sophie"},{"id":131,"parent":130,"depth":6,"name":"Inge Goldschmidt","dates":"*1919","role":"⚭ Herbert Knolle, Dr.rer.pol., Min.-Direktor","cls":"tante","group":"sophie"},{"id":132,"parent":131,"depth":7,"name":"Marga Knolle","dates":"","role":"","cls":"fern","group":"sophie"},{"id":133,"parent":131,"depth":7,"name":"Klaus Knolle","dates":"","role":"","cls":"fern","group":"sophie"},{"id":134,"parent":130,"depth":6,"name":"Rolf Goldschmidt","dates":"*1922, Dr.rer.pol., Min.-Rat Stuttgart","role":"⚭ Brigitte Bauer","cls":"fern","group":"sophie"},{"id":135,"parent":129,"depth":5,"name":"Adolf (Wilhelm) Goldschmidt","dates":"*1890, Kaufmann Frankfurt","role":"⚭ Susi Schwarz","cls":"tante","group":"sophie"},{"id":136,"parent":135,"depth":6,"name":"Werner Goldschmidt","dates":"*1924","role":"⚭ Ruth Mayerhofer, New York","cls":"tante","group":"sophie"},{"id":137,"parent":136,"depth":7,"name":"Stephan Goldschmidt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":138,"parent":136,"depth":7,"name":"Barbara Goldschmidt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":139,"parent":129,"depth":5,"name":"Friedrich Goldschmidt","dates":"*1897, gef. Frankreich 1917","role":"","cls":"fern","group":"sophie"},{"id":140,"parent":113,"depth":4,"name":"Amalie (Amelie/Luise) Stein","dates":"*1872, Oberinspektorin","role":"","cls":"tante","group":"sophie"},{"id":141,"parent":113,"depth":4,"name":"Sophie (Henriette) Stein","dates":"*1872, Fotografin","role":"⚭ Paul Schäfer, Fotograf Elberfeld","cls":"tante","group":"sophie"},{"id":142,"parent":141,"depth":5,"name":"Lilli Schäfer","dates":"*1896","role":"⚭ Wilhelm Röth, Rektor Elberfeld","cls":"tante","group":"sophie"},{"id":143,"parent":142,"depth":6,"name":"Hans Herbert Röth","dates":"*1923, Oberstudienrat","role":"⚭ Marga Langen, Dortmund","cls":"tante","group":"sophie"},{"id":144,"parent":143,"depth":7,"name":"Hans Werner Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":145,"parent":143,"depth":7,"name":"Wilfried Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":146,"parent":142,"depth":6,"name":"Horst Röth","dates":"*1926, Dipl.-Ing., Professor","role":"⚭ Gertrud Langen (Schwester der Vorerwähnten)","cls":"tante","group":"sophie"},{"id":147,"parent":146,"depth":7,"name":"Claus Dieter Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":148,"parent":146,"depth":7,"name":"Bärbel Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":149,"parent":146,"depth":7,"name":"Gitta Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":150,"parent":146,"depth":7,"name":"Harald Röth","dates":"","role":"","cls":"fern","group":"sophie"},{"id":151,"parent":141,"depth":5,"name":"Anna Schäfer","dates":"*1901","role":"⚭ Hans Butterweck, Gewerbeschuldirektor Gevelsberg","cls":"tante","group":"sophie"},{"id":152,"parent":151,"depth":6,"name":"Hans Jürgen Butterweck","dates":"*1932, Dr.-Ing., Professor","role":"⚭ Hanne Bachmann","cls":"tante","group":"sophie"},{"id":153,"parent":152,"depth":7,"name":"Ute Butterweck","dates":"","role":"","cls":"fern","group":"sophie"},{"id":154,"parent":152,"depth":7,"name":"Christoff Butterweck","dates":"","role":"","cls":"fern","group":"sophie"},{"id":155,"parent":151,"depth":6,"name":"Edelgard Butterweck","dates":"*1935","role":"","cls":"fern","group":"sophie"},{"id":156,"parent":113,"depth":4,"name":"Philipp (Arthur) Stein","dates":"1870–1932, Dr.phil., Professor","role":"⚭ Emma Jüngst (1877–1963) · 4 Kinder, Frankfurt/M","cls":"main","group":"sophie"},{"id":157,"parent":156,"depth":5,"name":"Hilde Stein","dates":"*1902","role":"⚭ Rolf Kadach · kinderlos","cls":"tante","group":"sophie"},{"id":158,"parent":156,"depth":5,"name":"Wilfried (Benno Heinz) Stein","dates":"*1906, Dipl.-Ing., Direktor Köln","role":"⚭ Edith Graff","cls":"tante","group":"sophie"},{"id":159,"parent":158,"depth":6,"name":"Wolfgang Stein","dates":"*1936, Kaufmann","role":"","cls":"fern","group":"sophie"},{"id":160,"parent":158,"depth":6,"name":"Brigitte Stein","dates":"*1941, Lehrerin","role":"⚭ Werner Schmitz, Jurist ORR Köln","cls":"tante","group":"sophie"},{"id":161,"parent":160,"depth":7,"name":"Andreas Schmitz","dates":"","role":"","cls":"fern","group":"sophie"},{"id":162,"parent":160,"depth":7,"name":"Thomas Schmitz","dates":"","role":"","cls":"fern","group":"sophie"},{"id":163,"parent":158,"depth":6,"name":"Gisela Stein","dates":"*1947, Rechtspflegerin","role":"⚭ Paul Jacob, Staatsanwalt München","cls":"fern","group":"sophie"},{"id":164,"parent":156,"depth":5,"name":"Helga (Maria Sophie) Stein","dates":"*1913","role":"⚭ Carl Jochen Brandt, Kaufmann München","cls":"tante","group":"sophie"},{"id":165,"parent":164,"depth":6,"name":"Carl Jürgen Brandt","dates":"1935–1973, Rechtsanwalt","role":"⚭ Brigitte Dohrmann","cls":"tante","group":"sophie"},{"id":166,"parent":165,"depth":7,"name":"Carl Jörg Brandt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":167,"parent":165,"depth":7,"name":"Dirk Brandt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":168,"parent":165,"depth":7,"name":"Jochen Brandt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":169,"parent":164,"depth":6,"name":"Bärbel Brandt","dates":"*1940","role":"⚭ Ludolph Hoesch","cls":"tante","group":"sophie"},{"id":170,"parent":169,"depth":7,"name":"Sabine Hoesch","dates":"","role":"","cls":"fern","group":"sophie"},{"id":171,"parent":164,"depth":6,"name":"Bernd-Axel Brandt","dates":"*1942, Bankdirektor London","role":"⚭ Margret Mäckelmann","cls":"tante","group":"sophie"},{"id":172,"parent":171,"depth":7,"name":"Carl Axel Brandt","dates":"","role":"","cls":"fern","group":"sophie"},{"id":173,"parent":164,"depth":6,"name":"Angelika Brandt","dates":"*1946, Dipl.-Psych.","role":"","cls":"fern","group":"sophie"},{"id":174,"parent":156,"depth":5,"name":"Gertraude (Hedwig Anna) Stein","dates":"*1917","role":"⚭ Diethelm Jaeger (1916–1973), Kaufmann Neubrandenburg","cls":"main","group":"sophie"},{"id":175,"parent":174,"depth":6,"name":"Hellwart Jaeger","dates":"*7.10.1943","role":"Bauingenieur · Stifter der Jaeger Stiftung","cls":"main","group":"sophie"},{"id":176,"parent":175,"depth":7,"name":"Helmut Jaeger","dates":"*12.2.1982","role":"Sohn, Vorsorgebevollmächtigter","cls":"main","group":"sophie"},{"id":177,"parent":174,"depth":6,"name":"Matthias Jaeger","dates":"1945–2014, akad. Kunstmaler","role":"","cls":"main","group":"sophie"},{"id":178,"parent":177,"depth":7,"name":"Paul Jaeger","dates":"","role":"Sohn","cls":"main","group":"sophie"},{"id":179,"parent":177,"depth":7,"name":"Tilmann Jaeger","dates":"","role":"Sohn","cls":"main","group":"sophie"},{"id":180,"parent":174,"depth":6,"name":"Heiner Jaeger","dates":"*12.6.1962","role":"","cls":"main","group":"sophie"},{"id":181,"parent":180,"depth":7,"name":"Anton Jaeger","dates":"*4.5.1999","role":"Sohn, potenzieller Nacherbe","cls":"main","group":"sophie"},{"id":182,"parent":5,"depth":3,"name":"Adolf (Friedrich) Sternitzki","dates":"1838–1914","role":"Kaufmann in St. Petersburg, eingeäschert Mainz 1914 · ⚭ (Louise) Wilhelmine (Henriette) Marx · 8 Kinder","cls":"fern","group":"adolf"},{"id":183,"parent":182,"depth":4,"name":"Ludwig Sternitzki","dates":"1865–1926, Pianist","role":"","cls":"fern","group":"adolf"},{"id":184,"parent":182,"depth":4,"name":"Fritz Sternitzki","dates":"1867–1929, Kaufmann, „erblich ehrenwerter Bürger“ St. Petersburg","role":"⚭ Fanni Mielck","cls":"fern","group":"adolf"},{"id":185,"parent":184,"depth":5,"name":"Ilse Adelheid Adolfine Sternitzki","dates":"*1898, †nach 1917 (Warschau)","role":"","cls":"fern","group":"adolf"},{"id":186,"parent":184,"depth":5,"name":"Alice Alexandrine Bernhardine Sternitzki","dates":"*1905, Stadtsekretärin","role":"","cls":"fern","group":"adolf"},{"id":187,"parent":182,"depth":4,"name":"Hermann Sternitzki","dates":"1869–1972, Dr. Chemiker Berlin","role":"⚭ Ada Fey · keine Kinder","cls":"fern","group":"adolf"},{"id":188,"parent":182,"depth":4,"name":"Luise Sternitzki","dates":"*1871","role":"⚭ Alfred Gerwig (†1915, auf der Flucht aus Russland) · 5 Kinder, St.Petersburg","cls":"fern","group":"adolf"},{"id":189,"parent":188,"depth":5,"name":"Alfred Gerwig","dates":"1898–1921, gest. St. Blasien","role":"","cls":"fern","group":"adolf"},{"id":190,"parent":188,"depth":5,"name":"Vera Gerwig","dates":"1900–1942","role":"⚭ Paul Scheer, Kaufmann · keine Kinder","cls":"fern","group":"adolf"},{"id":191,"parent":188,"depth":5,"name":"Alice Gerwig","dates":"*1903","role":"","cls":"fern","group":"adolf"},{"id":192,"parent":188,"depth":5,"name":"Irene Gerwig","dates":"*1905","role":"⚭ H. Doerner, Dr.jur.","cls":"fern","group":"adolf"},{"id":193,"parent":192,"depth":6,"name":"Dieter Doerner","dates":"","role":"","cls":"fern","group":"adolf"},{"id":194,"parent":192,"depth":6,"name":"Jürgen Doerner","dates":"","role":"","cls":"fern","group":"adolf"},{"id":195,"parent":192,"depth":6,"name":"Barbara Doerner","dates":"","role":"","cls":"fern","group":"adolf"},{"id":196,"parent":188,"depth":5,"name":"Arthur Gerwig","dates":"*1907, verm. Russland 1942, Dipl.-Landw.","role":"⚭ Lisel Gilka · 2 Töchter (unbenannt)","cls":"fern","group":"adolf"},{"id":197,"parent":182,"depth":4,"name":"Adolf Sternitzki","dates":"1875–1945","role":"⚭ Sophie Habermann · 2 Kinder, St. Petersburg","cls":"fern","group":"adolf"},{"id":198,"parent":197,"depth":5,"name":"Gertrud Sternitzki","dates":"1906–1921","role":"","cls":"fern","group":"adolf"},{"id":199,"parent":197,"depth":5,"name":"Georg Sternitzki","dates":"*1908, vermißt Russland 1942","role":"","cls":"fern","group":"adolf"},{"id":200,"parent":182,"depth":4,"name":"Klara Sternitzki","dates":"1877–1946","role":"⚭ Paul Thieme, Namslau/Schlesien · 3 Kinder","cls":"fern","group":"adolf"},{"id":201,"parent":200,"depth":5,"name":"Herbert Thieme","dates":"1904–1969","role":"","cls":"fern","group":"adolf"},{"id":202,"parent":200,"depth":5,"name":"Eleonore Thieme","dates":"*1906","role":"⚭ Walter Specht-Fey, Chemiker","cls":"fern","group":"adolf"},{"id":203,"parent":202,"depth":6,"name":"Eva Specht-Fey","dates":"*1939","role":"","cls":"fern","group":"adolf"},{"id":204,"parent":200,"depth":5,"name":"Eugenie Thieme","dates":"*1908","role":"⚭ F. Alexandrowicz, Kaufmann · keine Kinder","cls":"fern","group":"adolf"},{"id":205,"parent":200,"depth":5,"name":"Paul-Hans Thieme","dates":"*1911, Dr.-Landgerichtsrat","role":"⚭ Ursula Thomas","cls":"fern","group":"adolf"},{"id":206,"parent":205,"depth":6,"name":"Doris Thieme","dates":"*1941","role":"⚭ Wolfgang von Guenther, Rechtsanwalt","cls":"fern","group":"adolf"},{"id":207,"parent":206,"depth":7,"name":"Julia von Guenther","dates":"*1971","role":"","cls":"fern","group":"adolf"},{"id":208,"parent":206,"depth":7,"name":"Andrea von Guenther","dates":"*1975","role":"","cls":"fern","group":"adolf"},{"id":209,"parent":182,"depth":4,"name":"Eugenie Sternitzki","dates":"*1881, unverh.","role":"","cls":"fern","group":"adolf"},{"id":210,"parent":182,"depth":4,"name":"Hans Sternitzki","dates":"*1884, †Berlin 1936","role":"⚭ Erna Palckel · 1 Tochter (unbenannt, *um 1923)","cls":"fern","group":"adolf"},{"id":211,"parent":11,"depth":4,"name":"Adolf (Anton Benjamin) Sternitzki","dates":"1846–1924","role":"Photograph, Wolfenbüttel (1871) &amp; Braunschweig (1877) · 1.⚭ Louise Karoline Rudolff (†1884) · 2.⚭ Christine Helene Bock (1861–1901) · 6 Kinder, 1–3 Wolfenbüttel, 4–6 Braunschweig","cls":"fern","group":"wilhelm"},{"id":212,"parent":211,"depth":5,"name":"Wilhelm Sternitzki","dates":"1872–1942","role":"⚭ Margarethe Reinicke (†1968), Gifhorn · 2 Kinder","cls":"fern","group":"wilhelm"},{"id":213,"parent":212,"depth":6,"name":"Hildegard Sternitzki","dates":"*1910","role":"⚭ Walter Rage (gef. Russland 1943) · 2 Kinder","cls":"fern","group":"wilhelm"},{"id":214,"parent":213,"depth":7,"name":"Heidrun Rage","dates":"1941–1955","role":"","cls":"fern","group":"wilhelm"},{"id":215,"parent":213,"depth":7,"name":"Hans-Henning Rage","dates":"*1944","role":"","cls":"fern","group":"wilhelm"},{"id":216,"parent":212,"depth":6,"name":"Hans Adolf Sternitzki","dates":"*1914","role":"vermißt Russland 1941","cls":"fern","group":"wilhelm"},{"id":217,"parent":211,"depth":5,"name":"Elsbeth Sternitzki","dates":"1874–1932","role":"gest. Frankfurt/Oder","cls":"fern","group":"wilhelm"},{"id":218,"parent":211,"depth":5,"name":"Margarethe Sternitzki","dates":"1875–1962","role":"Braunschweig","cls":"fern","group":"wilhelm"},{"id":219,"parent":211,"depth":5,"name":"Anna Sternitzki","dates":"1878–1944","role":"gest. Königslutter","cls":"fern","group":"wilhelm"},{"id":220,"parent":211,"depth":5,"name":"Adolf Sternitzki","dates":"1882–1884","role":"","cls":"fern","group":"wilhelm"},{"id":221,"parent":211,"depth":5,"name":"Adolfine (Fini) Sternitzki","dates":"*1886","role":"Lehrerin, Braunschweig","cls":"fern","group":"wilhelm"},{"id":222,"parent":11,"depth":4,"name":"Gustav (Heinrich Karl) Sternitzki","dates":"*1847","role":"Photograph in München(?) · ⚭ Else … · 1 Kind","cls":"fern","group":"wilhelm"},{"id":223,"parent":222,"depth":5,"name":"Emma Sternitzki","dates":"","role":"⚭ … Unkauf · 2 Kinder","cls":"fern","group":"wilhelm"},{"id":224,"parent":223,"depth":6,"name":"Sohn Unkauf","dates":"","role":"starb als Student","cls":"fern","group":"wilhelm"},{"id":225,"parent":223,"depth":6,"name":"Ella Unkauf","dates":"","role":"Lehrerin","cls":"fern","group":"wilhelm"},{"id":226,"parent":11,"depth":4,"name":"Karl (Franz) Sternitzki","dates":"1849–1902","role":"Konditor, Photograph — übernahm 1877 das Photogeschäft Wolfenbüttel vom Bruder · ⚭ Marie Massin (1857–1925) · 4 Kinder, Wolfenbüttel","cls":"fern","group":"wilhelm"},{"id":227,"parent":226,"depth":5,"name":"Arthur Sternitzki","dates":"1884–1940","role":"Kaufmann, ledig","cls":"fern","group":"wilhelm"},{"id":228,"parent":226,"depth":5,"name":"Robert Sternitzki","dates":"1886–1956","role":"Kaufmann, ledig","cls":"fern","group":"wilhelm"},{"id":229,"parent":226,"depth":5,"name":"Paul Sternitzki","dates":"1887–1915","role":"gef. Rußland, cand.math.","cls":"fern","group":"wilhelm"},{"id":230,"parent":226,"depth":5,"name":"Karl Sternitzki","dates":"1892–1938","role":"Kunstmaler, ledig","cls":"fern","group":"wilhelm"}];;

function stb3dStart(){

  // ---------- layout: recursive radial "cone tree" ----------
  const byId = {};
  STB3D_DATA.forEach(n => { n.children = []; byId[n.id] = n; });
  let root = null;
  STB3D_DATA.forEach(n => { if(n.parent===null){ root = n; } else { byId[n.parent].children.push(n); } });

  function leafCount(n){
    if(!n.children.length) return 1;
    return n.children.reduce((s,c)=>s+leafCount(c),0);
  }
  function assignAngle(n, a0, a1){
    n.angle = (a0+a1)/2;
    if(!n.children.length) return;
    let total = n.children.reduce((s,c)=>s+leafCount(c),0);
    let cur = a0;
    n.children.forEach(c=>{
      const span = (a1-a0) * (leafCount(c)/total);
      assignAngle(c, cur, cur+span);
      cur += span;
    });
  }
  assignAngle(root, 0, Math.PI*2);

  const RSTEP = 34, YSTEP = 30;
  STB3D_DATA.forEach(n=>{
    const r = n.depth * RSTEP;
    n.x = r * Math.cos(n.angle);
    n.z = r * Math.sin(n.angle);
    n.y = n.depth * YSTEP - 4*YSTEP;
  });

  function colorFor(n){
    if(n.cls==='main') return 0xffd24a;
    if(n.cls==='tante') return 0xff9d3a;
    switch(n.group){
      case 'root': return 0xd9d9d9;
      case 'wilhelm': return 0x4a90e2;
      case 'heinrich': return 0x8a8a8a;
      case 'amalie': return 0xa259d9;
      case 'sophie': return 0x6f83a3;
      case 'adolf': return 0x1abc9c;
      default: return 0xaaaaaa;
    }
  }
  function sizeFor(n){
    if(n.cls==='main') return 2.6;
    if(n.depth<=1) return 3.2;
    if(n.cls==='tante') return 1.9;
    return Math.max(1.1, 2.0 - n.depth*0.12);
  }

  // ---------- three.js scene ----------
  const wrap = document.getElementById('stb3d-scene-wrap');
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060a, 0.0028);

  const camera = new THREE.PerspectiveCamera(55, wrap.clientWidth/wrap.clientHeight, 1, 3000);
  const renderer = new THREE.WebGLRenderer({antialias:true, alpha:false});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);
  renderer.setClearColor(0x05060a);
  wrap.insertBefore(renderer.domElement, document.getElementById('stb3d-loading'));

  scene.add(new THREE.AmbientLight(0x66707f, 1.1));
  const p1 = new THREE.PointLight(0xfff2d0, 1.4, 1200); p1.position.set(150,220,150); scene.add(p1);
  const p2 = new THREE.PointLight(0x5aa0ff, .8, 1200); p2.position.set(-200,-100,-150); scene.add(p2);

  const group = new THREE.Group();
  scene.add(group);

  // edges — fine, glowing threads coloured by lineage (parent → child gradient)
  const edgePositions = [];
  const edgeColors = [];
  const _c1 = new THREE.Color(), _c2 = new THREE.Color();
  STB3D_DATA.forEach(n=>{
    if(n.parent!==null){
      const p = byId[n.parent];
      edgePositions.push(p.x,p.y,p.z, n.x,n.y,n.z);
      _c1.setHex(colorFor(p)); _c2.setHex(colorFor(n));
      edgeColors.push(_c1.r,_c1.g,_c1.b, _c2.r,_c2.g,_c2.b);
    }
  });
  const edgeGeo = new THREE.BufferGeometry();
  edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions,3));
  edgeGeo.setAttribute('color', new THREE.Float32BufferAttribute(edgeColors,3));
  const edgeMat = new THREE.LineBasicMaterial({
    vertexColors:true, transparent:true, opacity:.5,
    blending:THREE.AdditiveBlending, depthWrite:false
  });
  group.add(new THREE.LineSegments(edgeGeo, edgeMat));

  // nodes
  const sphereGeoCache = {};
  function getGeo(r){
    const key = Math.round(r*10);
    if(!sphereGeoCache[key]) sphereGeoCache[key] = new THREE.SphereGeometry(r, 10, 8);
    return sphereGeoCache[key];
  }
  const meshes = [];
  STB3D_DATA.forEach(n=>{
    const col = colorFor(n);
    const mat = new THREE.MeshStandardMaterial({color:col, emissive:col, emissiveIntensity:.35, roughness:.5, metalness:.1});
    const mesh = new THREE.Mesh(getGeo(sizeFor(n)), mat);
    mesh.position.set(n.x,n.y,n.z);
    mesh.userData = n;
    mesh.scale.setScalar(0.001);
    group.add(mesh);
    meshes.push(mesh);
    n._mesh = mesh;
  });

  // ---------- name labels (persistent, distance-scaled) ----------
  const labelLayer = document.getElementById('stb3d-label-layer');
  const labelFrag = document.createDocumentFragment();
  STB3D_DATA.forEach(n=>{
    const el = document.createElement('div');
    el.className = 'stb3d-lbl' + (n.cls==='main' ? ' main' : n.cls==='tante' ? ' tante' : '');
    el.textContent = n.name;
    labelFrag.appendChild(el);
    n._label = el;
  });
  labelLayer.appendChild(labelFrag);
  let labelsOn = true;
  const btnLabels = document.getElementById('stb3d-btn-labels');
  btnLabels.onclick = ()=>{
    labelsOn = !labelsOn;
    btnLabels.classList.toggle('active', labelsOn);
    if(!labelsOn) STB3D_DATA.forEach(n=>{ n._label.style.opacity = 0; });
  };

  const _projVec = new THREE.Vector3();
  function updateLabels(){
    if(!labelsOn) return;
    const w = wrap.clientWidth, h = wrap.clientHeight;
    const camPos = camera.position;
    for(let i=0;i<STB3D_DATA.length;i++){
      const n = STB3D_DATA[i];
      const dist = camPos.distanceTo(n._mesh.position);
      // importance-based visibility distance
      let maxDist = n.cls==='main' ? 1400 : n.cls==='tante' ? 520 : (n.depth<=1 ? 1400 : 300);
      if(dist > maxDist){ n._label.style.opacity = 0; continue; }
      _projVec.copy(n._mesh.position).project(camera);
      if(_projVec.z > 1 || _projVec.z < -1){ n._label.style.opacity = 0; continue; }
      const sx = (_projVec.x*0.5+0.5)*w;
      const sy = (-_projVec.y*0.5+0.5)*h;
      if(sx<-40||sx>w+40||sy<-20||sy>h+20){ n._label.style.opacity = 0; continue; }
      const t = 1 - Math.min(1, dist/maxDist);
      const fontSize = 9 + t*7;
      let op = Math.min(1, t*1.6);
      if(n.cls==='main') op = Math.max(op, 0.85);
      n._label.style.opacity = op.toFixed(2);
      n._label.style.fontSize = fontSize.toFixed(1)+'px';
      n._label.style.transform = 'translate3d('+(sx+7).toFixed(1)+'px,'+(sy-6).toFixed(1)+'px,0)';
    }
  }

  // grow-in animation
  let growStart = null;
  function growAnim(t){
    if(growStart===null) growStart = t;
    const el = (t-growStart)/1400;
    meshes.forEach((m,i)=>{
      const delay = (m.userData.depth)/9 * 0.5;
      const local = Math.max(0, Math.min(1, (el-delay)/0.6));
      const ease = 1-Math.pow(1-local,3);
      m.scale.setScalar(0.001 + ease*0.999);
    });
  }

  // ---------- camera / orbit controls (manual) ----------
  let camDist = 520, camTheta = 0.7, camPhi = 1.15;
  const camTarget = new THREE.Vector3(0, -20, 0);
  function updateCamera(){
    camPhi = Math.max(0.15, Math.min(Math.PI-0.15, camPhi));
    camDist = Math.max(80, Math.min(1400, camDist));
    const x = camTarget.x + camDist*Math.sin(camPhi)*Math.cos(camTheta);
    const y = camTarget.y + camDist*Math.cos(camPhi);
    const z = camTarget.z + camDist*Math.sin(camPhi)*Math.sin(camTheta);
    camera.position.set(x,y,z);
    camera.lookAt(camTarget);
  }
  updateCamera();

  let dragging = false, lastX=0, lastY=0, moved=false;
  let pinchDist = null;
  function pointerDown(x,y){ dragging=true; lastX=x; lastY=y; moved=false; }
  function pointerMove(x,y){
    if(!dragging) return;
    const dx = x-lastX, dy = y-lastY;
    if(Math.abs(dx)>2||Math.abs(dy)>2) moved=true;
    camTheta -= dx*0.006;
    camPhi -= dy*0.006;
    lastX=x; lastY=y;
    updateCamera();
  }
  function pointerUp(){ dragging=false; }

  renderer.domElement.addEventListener('mousedown', e=>pointerDown(e.clientX,e.clientY));
  window.addEventListener('mousemove', e=>pointerMove(e.clientX,e.clientY));
  window.addEventListener('mouseup', pointerUp);
  renderer.domElement.addEventListener('wheel', e=>{
    e.preventDefault();
    camDist *= (1 + e.deltaY*0.001);
    updateCamera();
  }, {passive:false});

  renderer.domElement.addEventListener('touchstart', e=>{
    if(e.touches.length===1){ pointerDown(e.touches[0].clientX, e.touches[0].clientY); }
    else if(e.touches.length===2){
      dragging=false;
      pinchDist = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
    }
  }, {passive:true});
  renderer.domElement.addEventListener('touchmove', e=>{
    if(e.touches.length===1 && dragging){
      pointerMove(e.touches[0].clientX, e.touches[0].clientY);
    } else if(e.touches.length===2 && pinchDist!==null){
      const d = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
      camDist *= (pinchDist/d);
      pinchDist = d;
      updateCamera();
    }
  }, {passive:true});
  renderer.domElement.addEventListener('touchend', e=>{
    if(e.touches.length===0){ pointerUp(); pinchDist=null; }
  });

  // ---------- raycasting / selection ----------
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();
  let selected = null;
  const infoCard = document.getElementById('stb3d-info-card');
  const infoName = document.getElementById('stb3d-info-name');
  const infoDates = document.getElementById('stb3d-info-dates');
  const infoRole = document.getElementById('stb3d-info-role');
  const hint = document.getElementById('stb3d-hint');

  function showInfo(n){
    infoName.textContent = n.name;
    infoDates.textContent = n.dates || '';
    infoRole.textContent = n.role || '';
    infoCard.classList.add('show');
    hint.style.opacity = 0;
    if(window.STB3DSound) STB3DSound.click();
  }
  document.getElementById('stb3d-info-close').onclick = ()=>{ infoCard.classList.remove('show'); if(selected) resetHighlight(selected); selected=null; };

  function resetHighlight(mesh){
    mesh.material.emissiveIntensity = .35;
    mesh.scale.setScalar(sizeAt(mesh));
  }
  const baseScale = {};
  function sizeAt(mesh){ return baseScale[mesh.id] !== undefined ? baseScale[mesh.id] : 1; }

  function selectMesh(mesh){
    if(selected) resetHighlight(selected);
    selected = mesh;
    mesh.material.emissiveIntensity = 1.1;
    mesh.scale.setScalar((baseScale[mesh.id]||1) * 1.9);
    showInfo(mesh.userData);
  }

  function pickAt(clientX, clientY){
    const rect = renderer.domElement.getBoundingClientRect();
    mouseNDC.x = ((clientX-rect.left)/rect.width)*2-1;
    mouseNDC.y = -((clientY-rect.top)/rect.height)*2+1;
    raycaster.setFromCamera(mouseNDC, camera);
    const hits = raycaster.intersectObjects(meshes);
    return hits.length ? hits[0].object : null;
  }
  renderer.domElement.addEventListener('click', e=>{
    if(moved) return;
    const m = pickAt(e.clientX, e.clientY);
    if(m) selectMesh(m);
  });
  renderer.domElement.addEventListener('touchend', e=>{
    if(moved) return;
    const t = e.changedTouches[0];
    if(!t) return;
    const m = pickAt(t.clientX, t.clientY);
    if(m) selectMesh(m);
  });

  // ---------- search ----------
  const searchInput = document.getElementById('stb3d-search-input');
  const searchCount = document.getElementById('stb3d-search-count');
  let matches = [], matchIdx = -1;

  function runSearch(){
    const q = searchInput.value.trim().toLowerCase();
    if(!q){ matches=[]; matchIdx=-1; searchCount.textContent=''; return; }
    matches = STB3D_DATA.filter(n=>n.name.toLowerCase().includes(q));
    matchIdx = matches.length ? 0 : -1;
    searchCount.textContent = matches.length ? (matchIdx+1)+'/'+matches.length : '0/0';
    if(matches.length) focusMatch();
  }
  function focusMatch(){
    if(matchIdx<0 || matchIdx>=matches.length) return;
    const n = matches[matchIdx];
    selectMesh(n._mesh);
    camTarget.set(n.x,n.y,n.z);
    camDist = Math.max(120, camDist);
    updateCamera();
    searchCount.textContent = (matchIdx+1)+'/'+matches.length;
  }
  searchInput.addEventListener('input', runSearch);
  searchInput.addEventListener('keydown', e=>{ if(e.key==='Enter'){ matchIdx=(matchIdx+1)%Math.max(1,matches.length); focusMatch(); if(window.STB3DSound) STB3DSound.ping(); } });
  document.getElementById('stb3d-search-next').onclick = ()=>{ if(!matches.length) return; matchIdx=(matchIdx+1)%matches.length; focusMatch(); if(window.STB3DSound) STB3DSound.ping(); };
  document.getElementById('stb3d-search-prev').onclick = ()=>{ if(!matches.length) return; matchIdx=(matchIdx-1+matches.length)%matches.length; focusMatch(); if(window.STB3DSound) STB3DSound.ping(); };

  // ---------- controls bar ----------
  let autoRotate = false;
  const btnRotate = document.getElementById('stb3d-btn-rotate');
  btnRotate.onclick = ()=>{ autoRotate = !autoRotate; btnRotate.classList.toggle('active', autoRotate); if(window.STB3DSound) STB3DSound.toggleClick(); };
  document.getElementById('stb3d-btn-reset').onclick = ()=>{
    camTarget.set(0,-20,0); camDist=520; camTheta=0.7; camPhi=1.15; updateCamera();
  };
  document.getElementById('stb3d-btn-zoom-in').onclick = ()=>{ camDist*=0.8; updateCamera(); };
  document.getElementById('stb3d-btn-zoom-out').onclick = ()=>{ camDist*=1.25; updateCamera(); };

  // ---------- resize ----------
  window.addEventListener('resize', ()=>{
    camera.aspect = wrap.clientWidth/wrap.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
  });

  // ---------- Klang: Neubrandenburg-Ambiente (Tollensesee + ferne Glocken) + Bedientöne ----------
  // Vollständig prozedural per Web Audio API erzeugt (kein externes Audiomaterial noetig).
  // Startet stumm; erst per Klick auf den Lautsprecher-Button wird der AudioContext
  // erstellt/fortgesetzt, damit iOS Safari die Wiedergabe erlaubt.
  window.STB3DSound = (function(){
    var ctx=null, master=null, ambient=null, enabled=false, bellTimer=null;
    function ensureCtx(){
      if(!ctx){
        ctx = new (window.AudioContext||window.webkitAudioContext)();
        master = ctx.createGain(); master.gain.value = 0.0001;
        master.connect(ctx.destination);
      }
      if(ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    function t(){ return ctx.currentTime; }
    function click(){ // Person antippen: weicher Kalimba-Ton
      if(!enabled||!ctx) return;
      var tt=t(), o=ctx.createOscillator(), g=ctx.createGain(), f=520+Math.random()*60;
      o.type='sine';
      o.frequency.setValueAtTime(f, tt);
      o.frequency.exponentialRampToValueAtTime(f*0.985, tt+0.18);
      g.gain.setValueAtTime(0, tt);
      g.gain.linearRampToValueAtTime(0.22, tt+0.008);
      g.gain.exponentialRampToValueAtTime(0.0005, tt+0.32);
      o.connect(g); g.connect(master); o.start(tt); o.stop(tt+0.34);
    }
    function ping(){ // Suchtreffer: helle kleine Glocke
      if(!enabled||!ctx) return;
      var tt=t();
      [1,2.01,3.0].forEach(function(mult,i){
        var o=ctx.createOscillator(), g=ctx.createGain();
        o.type='sine'; o.frequency.value=1046*mult;
        g.gain.setValueAtTime(0, tt);
        g.gain.linearRampToValueAtTime(0.14/(i+1), tt+0.01);
        g.gain.exponentialRampToValueAtTime(0.0005, tt+0.9);
        o.connect(g); g.connect(master); o.start(tt); o.stop(tt+0.95);
      });
    }
    function toggleClick(){ // mechanisches Klicken, z.B. Auto-Rotation
      if(!enabled||!ctx) return;
      var tt=t(), n=Math.round(ctx.sampleRate*0.02);
      var buf=ctx.createBuffer(1,n,ctx.sampleRate), d=buf.getChannelData(0);
      for(var i=0;i<n;i++) d[i]=(Math.random()*2-1)*(1-i/n);
      var src=ctx.createBufferSource(); src.buffer=buf;
      var filt=ctx.createBiquadFilter(); filt.type='bandpass'; filt.frequency.value=1400; filt.Q.value=2.2;
      var g=ctx.createGain(); g.gain.value=0.16;
      src.connect(filt); filt.connect(g); g.connect(master); src.start(tt);
    }
    function distantBell(){ // sehr ferne Kirchenglocke
      if(!ctx||!enabled) return;
      var tt=t(), filt=ctx.createBiquadFilter();
      filt.type='lowpass'; filt.frequency.value=1100; filt.connect(master);
      [1,2.0,2.41,3.06,4.1].forEach(function(mult,i){
        var o=ctx.createOscillator(), g=ctx.createGain();
        o.type='sine'; o.frequency.value=196*mult;
        g.gain.setValueAtTime(0, tt);
        g.gain.linearRampToValueAtTime(0.045/(i+1.4), tt+0.06);
        g.gain.exponentialRampToValueAtTime(0.0006, tt+5.5);
        o.connect(g); g.connect(filt); o.start(tt); o.stop(tt+6);
      });
    }
    function scheduleBell(){
      if(!ambient) return;
      bellTimer = setTimeout(function(){ distantBell(); scheduleBell(); }, 22000+Math.random()*18000);
    }
    function startAmbient(){ // sehr leises Wasserrauschen (Tollensesee), geloopt
      if(ambient) return;
      var n=2*ctx.sampleRate, buf=ctx.createBuffer(1,n,ctx.sampleRate), d=buf.getChannelData(0), last=0;
      for(var i=0;i<n;i++){ var w=Math.random()*2-1; d[i]=(last+0.02*w)/1.02; last=d[i]; }
      var src=ctx.createBufferSource(); src.buffer=buf; src.loop=true;
      var filt=ctx.createBiquadFilter(); filt.type='lowpass'; filt.frequency.value=650;
      var lfo=ctx.createOscillator(); lfo.frequency.value=0.09;
      var lfoGain=ctx.createGain(); lfoGain.gain.value=90;
      lfo.connect(lfoGain); lfoGain.connect(filt.frequency);
      var g=ctx.createGain(); g.gain.value=0.05;
      src.connect(filt); filt.connect(g); g.connect(master);
      src.start(); lfo.start();
      ambient = {src:src, lfo:lfo};
      scheduleBell();
    }
    function stopAmbient(){
      if(!ambient) return;
      try{ ambient.src.stop(); ambient.lfo.stop(); }catch(e){}
      ambient = null;
      if(bellTimer){ clearTimeout(bellTimer); bellTimer=null; }
    }
    function setEnabled(on){
      enabled = on; ensureCtx();
      var tt=t();
      master.gain.cancelScheduledValues(tt);
      if(on){ master.gain.linearRampToValueAtTime(1, tt+0.6); startAmbient(); }
      else { master.gain.linearRampToValueAtTime(0.0001, tt+0.4); setTimeout(stopAmbient, 450); }
    }
    return {setEnabled:setEnabled, isEnabled:function(){return enabled;}, click:click, ping:ping, toggleClick:toggleClick};
  })();
  (function(){
    var btnSound = document.getElementById('stb3d-btn-sound');
    if(!btnSound) return;
    btnSound.onclick = function(){
      var on = !STB3DSound.isEnabled();
      STB3DSound.setEnabled(on);
      btnSound.classList.toggle('active', on);
      btnSound.innerHTML = on ? '&#128266;' : '&#128264;';
      btnSound.title = on ? 'Klang aus' : 'Klang ein';
    };
  })();


  (function(){
    var frame = document.getElementById('stb3d-frame');
    var btnFs = document.getElementById('stb3d-btn-fullscreen');
    var btnExit = document.getElementById('stb3d-btn-exit');
    if(!frame || !btnFs) return;
    function isLandscape(){ return window.matchMedia('(orientation: landscape)').matches; }
    function pingResize(){ setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, 60); }
    function enterFs(){
      frame.classList.add('stb3d-fullscreen');
      document.body.classList.add('stb3d-locked');
      if(!isLandscape()){
        frame.classList.add('stb3d-show-hint');
        setTimeout(function(){ frame.classList.remove('stb3d-show-hint'); }, 3400);
      }
      pingResize();
    }
    function exitFs(){
      frame.classList.remove('stb3d-fullscreen','stb3d-show-hint');
      document.body.classList.remove('stb3d-locked');
      pingResize();
    }
    btnFs.onclick = function(){ frame.classList.contains('stb3d-fullscreen') ? exitFs() : enterFs(); };
    if(btnExit) btnExit.onclick = exitFs;
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && frame.classList.contains('stb3d-fullscreen')) exitFs();
    });
    window.addEventListener('orientationchange', pingResize);
    window.matchMedia('(orientation: landscape)').addEventListener('change', function(){
      if(frame.classList.contains('stb3d-fullscreen')){
        frame.classList.remove('stb3d-show-hint');
        pingResize();
      }
    });
  })();

  // ---------- render loop ----------
  document.getElementById('stb3d-loading').style.display = 'none';
  let firstFrame = null;
  let frameCount = 0;
  const stb3dDetailsEl = document.getElementById('stb3d-details');
  function tick(t){
    if(stb3dDetailsEl && stb3dDetailsEl.open){
      growAnim(t);
      if(autoRotate){ camTheta += 0.0018; updateCamera(); }
      renderer.render(scene, camera);
      frameCount++;
      if(frameCount % 2 === 0) updateLabels();
      if(firstFrame===null){ firstFrame=t; setTimeout(()=>{ hint.style.opacity=0; }, 4500); }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

}


(function(){
  let stb3dStarted = false;
  function stb3dLoadThree(cb){
    if(window.THREE){ cb(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }
  const detEl = document.getElementById('stb3d-details');
  function maybeStart(){
    if(detEl && detEl.open && !stb3dStarted){
      stb3dStarted = true;
      stb3dLoadThree(function(){ stb3dStart(); });
    }
  }
  if(detEl){
    detEl.addEventListener('toggle', maybeStart);
    maybeStart(); // falls bereits beim Laden offen (z.B. per "open"-Attribut)
  }
})();
