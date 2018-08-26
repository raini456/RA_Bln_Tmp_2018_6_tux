  function textWechsel0(){
  document.getElementById("untertext").innerHTML="<p><h3>Familienrecht</h2>Auf dem Gebiet des Ehe- und Familienrechts stehe ich Ihnen mit Rat und Tat in Fragen des Sorge- und Umgangsrechts, Unterhaltsfragen und güterrechtlichen Fragen sowie sämtlichen in Zusammenhang mit Trennung (auch bei nichtehelichen Lebensgemeinschaften) und Scheidung auftretenden Problemen zur Seite. Dabei lege ich Wert darauf, Sie nicht nur bei Klärung der anstehenden rechtlichen Fragen zu unterstützen, sondern Ihnen darüber hinaus auch bei der Lösung der oft damit verbundenen schwerwiegenden zwischenmenschlichen Probleme zu helfen.<br />Dies ist nicht immer leicht, halte ich jedoch auf dem Gebiet des Ehe- und Familienrechts für sinnvoll, wenn nicht sogar für unbedingt erforderlich.<br /> <br /><br /><div id='change1' onclick='textWechselZurueck()'></div><div id='change2' onclick='textWechsel1()'></div></p>";
  }
  function textWechsel1(){
  document.getElementById("untertext").innerHTML="<p><h3>Verkehrsrecht</h2>Auf dem Gebiet des Verkehrsrechts sorge ich für eine möglichst schnelle Abwicklung und Regulierung Ihrer Verkehrsunfälle,  Klärung der damit verbundenen versicherungsrechtlichen Fragen und insbesondere auch eine effiziente Verteidigung in Bußgeld- wie auch strafrechtlichen Verfahren ( unerlaubtes Entfernen vom Unfallort, Führen eines Kraftfahrzeuges unter Alkohol- oder Drogeneinfluss). Bei drohender Entziehung der Fahrerlaubnis oder bei auftretenden Problemen im Verfahren zur Wiedererlangung der Fahrerlaubnis gehört neben dem Ausschöpfen sämtlicher rechtlichen Möglichkeiten auch Hilfestellung zur Veränderung der zugrundeliegenden Einstellungen zum Selbstverständnis meiner Arbeit als Rechtsanwalt auf diesem Gebiet.<br /><br /><br /><div id='change1' onclick='textWechsel0()'></div> <div id='change2' onclick='textWechsel2()'></div></p> <br />";
  }
  function textWechsel2(){
  document.getElementById("untertext").innerHTML="<p><h3>Mietrecht</h2>Auf dem Gebiet des Mietrechts gehören Streitigkeiten wegen Kündigungen, Mieterhöhungen, Wohnungsmängeln, Nebenkostenabrechnungen, Schönheitsreparaturen und Modernisierungen zu meinen langjährigen und regelmäßigen Tätigkeiten. Ich betone, dass ich sowohl Mieter als auch Vermieter vertrete und betreue. Ich sehe darin keinerlei Interessenkonflikt, da ich durch die Tätigkeit für beide Seiten einen guten Einblick in deren Denk- und Handlungsweisen habe gewinnen können und somit oft für interessen- und sachgerechte Lösung sorgen kann, sofern die beiden Seiten dazu bereit sind.<br />Auch auf weiteren Rechtsgebieten, wie z.B. im Arbeitsrecht, Erbrecht, allgemeinen Zivilrecht (Kaufrecht, Werkvertragsrecht, Reiserecht), Schadensersatzrecht, aber auch im Strafrecht bin ich seit Beginn meiner Zulassung zum Rechtsanwalt tätig. Es ist für mich eine Selbstverständlichkeit, Sie – soweit ich Empfehlungen aussprechen kann – an einen kompetenten Kollegen zu verweisen, wenn ich Ihnen nicht weiterhelfen kann.<br /> <div id='change1' onclick='textWechsel1()'></div></p>";
  document.getElementById("change1").style.top=605 + "px";
  document.getElementById("change1").style.left=160 + "px";
  }
  function textWechselZurueck(){
  document.getElementById("untertext").innerHTML="<p>Seit nunmehr fast 30 Jahren biete ich Ihnen eine kompetente und engagierte rechtsanwaltliche Vertretung Ihrer Interessen in vielen Rechtsgebieten an. Meine Tätigkeitsschwerpunkte liegen auf den Gebieten des Ehe- und Familienrechts sowie des Verkehrs- und des Miet- und Wohnungseigentumsrechts. <br /> <div id='change' onclick='textWechsel0()'></div></p>";
  }
  function textWechsel3(){
  document.getElementById("untertext").innerHTML="<p><h3>Mietrecht</h2>Auf dem Gebiet des Mietrechts gehören Streitigkeiten wegen Kündigungen, Mieterhöhungen, Wohnungsmängeln, Nebenkostenabrechnungen, Schönheitsreparaturen und Modernisierungen zu meinen langjährigen und regelmäßigen Tätigkeiten. Ich betone, dass ich sowohl Mieter als auch Vermieter vertrete und betreue. Ich sehe darin keinerlei Interessenkonflikt, da ich durch die Tätigkeit für beide Seiten einen guten Einblick in deren Denk- und Handlungsweisen habe gewinnen können und somit oft für interessen- und sachgerechte Lösung sorgen kann, sofern die beiden Seiten dazu bereit sind.<br />Auch auf weiteren Rechtsgebieten, wie z.B. im Arbeitsrecht, Erbrecht, allgemeinen Zivilrecht (Kaufrecht, Werkvertragsrecht, Reiserecht), Schadensersatzrecht, aber auch im Strafrecht bin ich seit Beginn meiner Zulassung zum Rechtsanwalt tätig. Es ist für mich eine Selbstverständlichkeit, Sie – soweit ich Empfehlungen aussprechen kann – an einen kompetenten Kollegen zu verweisen, wenn ich Ihnen nicht weiterhelfen kann.<br /> <div id='change1' onclick='textWechsel1()'></div></p>";
  document.getElementById("change1").style.top=605 + "px";
  document.getElementById("change1").style.left=160 + "px";
  }
    function feld1(){
    document.getElementById("fall").style.display="block";
    document.getElementById("fall").innerHTML="<h4>Der interessante Fall</h4><font size=1>Hier werde ich in Kürze über interessante Fälle aus meinem Tätigkeitsfeld berichten.<br><br><br><br><br><br><br /></font>";
    }
/**/function feld2(){
    document.getElementById("neuestes").style.display="block";
    document.getElementById("neuestes").innerHTML="<p><h4>Neuestes aus der Rechtsprechung</h4></a><p><font size=-1>An dieser Stelle veröffentliche ich bald neue Entwicklungen in der Rechtsprechung<br><br><br><br><br><br></font></p>";
    }
function feld3(){
    document.getElementById("praxis").style.display="block";
    document.getElementById("praxis").innerHTML=" <h4> Wichtiges aus der Praxis</h4></a><p><font size=-1>Relevante Entwicklungen erscheinen demnächst in dieser Rubrik<br><br><br><br><br><br><br><br><br><br><br><br></font></p>";
    }
function schliessen(name){
    document.getElementById(name).style.display="none";
    }

