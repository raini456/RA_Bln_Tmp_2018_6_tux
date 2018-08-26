  function textWechsel0(){
  document.getElementById("untertext").innerHTML="<p><h3>Familienrecht</h2>Auf dem Gebiet des Ehe- und Familienrechts stehe ich Ihnen mit Rat und Tat in Fragen des Sorge- und Umgangsrechts, Unterhaltsfragen und g�terrechtlichen Fragen sowie s�mtlichen in Zusammenhang mit Trennung (auch bei nichtehelichen Lebensgemeinschaften) und Scheidung auftretenden Problemen zur Seite. Dabei lege ich Wert darauf, Sie nicht nur bei Kl�rung der anstehenden rechtlichen Fragen zu unterst�tzen, sondern Ihnen dar�ber hinaus auch bei der L�sung der oft damit verbundenen schwerwiegenden zwischenmenschlichen Probleme zu helfen.<br />Dies ist nicht immer leicht, halte ich jedoch auf dem Gebiet des Ehe- und Familienrechts f�r sinnvoll, wenn nicht sogar f�r unbedingt erforderlich.<br /> <br /><br /><div id='change1' onclick='textWechselZurueck()'></div><div id='change2' onclick='textWechsel1()'></div></p>";
  }
  function textWechsel1(){
  document.getElementById("untertext").innerHTML="<p><h3>Verkehrsrecht</h2>Auf dem Gebiet des Verkehrsrechts sorge ich f�r eine m�glichst schnelle Abwicklung und Regulierung Ihrer Verkehrsunf�lle,  Kl�rung der damit verbundenen versicherungsrechtlichen Fragen und insbesondere auch eine effiziente Verteidigung in Bu�geld- wie auch strafrechtlichen Verfahren ( unerlaubtes Entfernen vom Unfallort, F�hren eines Kraftfahrzeuges unter Alkohol- oder Drogeneinfluss). Bei drohender Entziehung der Fahrerlaubnis oder bei auftretenden Problemen im Verfahren zur Wiedererlangung der Fahrerlaubnis geh�rt neben dem Aussch�pfen s�mtlicher rechtlichen M�glichkeiten auch Hilfestellung zur Ver�nderung der zugrundeliegenden Einstellungen zum Selbstverst�ndnis meiner Arbeit als Rechtsanwalt auf diesem Gebiet.<br /><br /><br /><div id='change1' onclick='textWechsel0()'></div> <div id='change2' onclick='textWechsel2()'></div></p> <br />";
  }
  function textWechsel2(){
  document.getElementById("untertext").innerHTML="<p><h3>Mietrecht</h2>Auf dem Gebiet des Mietrechts geh�ren Streitigkeiten wegen K�ndigungen, Mieterh�hungen, Wohnungsm�ngeln, Nebenkostenabrechnungen, Sch�nheitsreparaturen und Modernisierungen zu meinen langj�hrigen und regelm��igen T�tigkeiten. Ich betone, dass ich sowohl Mieter als auch Vermieter vertrete und betreue. Ich sehe darin keinerlei Interessenkonflikt, da ich durch die T�tigkeit f�r beide Seiten einen guten Einblick in deren Denk- und Handlungsweisen habe gewinnen k�nnen und somit oft f�r interessen- und sachgerechte L�sung sorgen kann, sofern die beiden Seiten dazu bereit sind.<br />Auch auf weiteren Rechtsgebieten, wie z.B. im Arbeitsrecht, Erbrecht, allgemeinen Zivilrecht (Kaufrecht, Werkvertragsrecht, Reiserecht), Schadensersatzrecht, aber auch im Strafrecht bin ich seit Beginn meiner Zulassung zum Rechtsanwalt t�tig. Es ist f�r mich eine Selbstverst�ndlichkeit, Sie � soweit ich Empfehlungen aussprechen kann � an einen kompetenten Kollegen zu verweisen, wenn ich Ihnen nicht weiterhelfen kann.<br /> <div id='change1' onclick='textWechsel1()'></div></p>";
  document.getElementById("change1").style.top=605 + "px";
  document.getElementById("change1").style.left=160 + "px";
  }
  function textWechselZurueck(){
  document.getElementById("untertext").innerHTML="<p>Seit nunmehr fast 30 Jahren biete ich Ihnen eine kompetente und engagierte rechtsanwaltliche Vertretung Ihrer Interessen in vielen Rechtsgebieten an. Meine T�tigkeitsschwerpunkte liegen auf den Gebieten des Ehe- und Familienrechts sowie des Verkehrs- und des Miet- und Wohnungseigentumsrechts. <br /> <div id='change' onclick='textWechsel0()'></div></p>";
  }
  function textWechsel3(){
  document.getElementById("untertext").innerHTML="<p><h3>Mietrecht</h2>Auf dem Gebiet des Mietrechts geh�ren Streitigkeiten wegen K�ndigungen, Mieterh�hungen, Wohnungsm�ngeln, Nebenkostenabrechnungen, Sch�nheitsreparaturen und Modernisierungen zu meinen langj�hrigen und regelm��igen T�tigkeiten. Ich betone, dass ich sowohl Mieter als auch Vermieter vertrete und betreue. Ich sehe darin keinerlei Interessenkonflikt, da ich durch die T�tigkeit f�r beide Seiten einen guten Einblick in deren Denk- und Handlungsweisen habe gewinnen k�nnen und somit oft f�r interessen- und sachgerechte L�sung sorgen kann, sofern die beiden Seiten dazu bereit sind.<br />Auch auf weiteren Rechtsgebieten, wie z.B. im Arbeitsrecht, Erbrecht, allgemeinen Zivilrecht (Kaufrecht, Werkvertragsrecht, Reiserecht), Schadensersatzrecht, aber auch im Strafrecht bin ich seit Beginn meiner Zulassung zum Rechtsanwalt t�tig. Es ist f�r mich eine Selbstverst�ndlichkeit, Sie � soweit ich Empfehlungen aussprechen kann � an einen kompetenten Kollegen zu verweisen, wenn ich Ihnen nicht weiterhelfen kann.<br /> <div id='change1' onclick='textWechsel1()'></div></p>";
  document.getElementById("change1").style.top=605 + "px";
  document.getElementById("change1").style.left=160 + "px";
  }
    function feld1(){
    document.getElementById("fall").style.display="block";
    document.getElementById("fall").innerHTML="<h4>Der interessante Fall</h4><font size=1>Hier werde ich in K�rze �ber interessante F�lle aus meinem T�tigkeitsfeld berichten.<br><br><br><br><br><br><br /></font>";
    }
/**/function feld2(){
    document.getElementById("neuestes").style.display="block";
    document.getElementById("neuestes").innerHTML="<p><h4>Neuestes aus der Rechtsprechung</h4></a><p><font size=-1>An dieser Stelle ver�ffentliche ich bald neue Entwicklungen in der Rechtsprechung<br><br><br><br><br><br></font></p>";
    }
function feld3(){
    document.getElementById("praxis").style.display="block";
    document.getElementById("praxis").innerHTML=" <h4> Wichtiges aus der Praxis</h4></a><p><font size=-1>Relevante Entwicklungen erscheinen demn�chst in dieser Rubrik<br><br><br><br><br><br><br><br><br><br><br><br></font></p>";
    }
function schliessen(name){
    document.getElementById(name).style.display="none";
    }

