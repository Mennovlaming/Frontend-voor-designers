# Procesverslag
**Auteur:** Menno Vlaming

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
  2. https://css-tricks.com/almanac/properties/a/animation/
  3. https://www.youtube.com/watch?v=5U21Fk3v8ok



## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard:
  <img src="readme-images/schets.png" width="375px" alt="storyboard voor opdracht 1">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - leren van keyframes
  - gebruiken van minder standaard CSS 
  - leren animeren zonder Javascript
 
</details>



## Opdracht 1 reflectie

<details>
  <summary>Hier een beschrijving van opdracht 1. 
  Voor opdracht 1 heb ik een animatie gemaakt voor het merk 'Spitfire'. 
  Dit is een merk die voornamelijk skateboard wielen verkoopt, 
  en om deze reden is de animatie die ik ga maken het laten draaien van het logo (als een wiel).</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/spitfirea.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Wat ik heb geleerd, is het gebruik maken van een ::after atribute, hiermee heb ik de cirkel gemaakt.

  Wat ik ook heb geleerd is het animeren doormiddel van alleen CSS, het gebruik van keyframes en animations, 
  en het gebruik van font-face voor fonts, dit had ik alle 3 nog nooit gedaan.

  Ook heb ik nog nooit eerder gebruik gemaakt van CSS variabelen en de dark mode optie gebruikt voor andere styling.

  <img src="readme-images/spitfirelight.png" width="375px" alt="dark/light mode">


  ### Dit was lastig/Is niet gelukt:
  Wat ik nog toe had willen voegen, dat helaas niet gelukt is, is dat ik de ::after, dus het 'wiel', wou laten
  draaien om zo nog meer het draaiende wiel effect te geven.

</details>



## Opdracht 2 plan



  <summary>Hier een beschrijving van opdracht 2.
  Voor opdracht 2 wil ik een interactief landschap maken, waar een gebruiker invloed heeft op hoe het eruit ziet.
  Een gebruiker kan doormiddel van knoppen weertypes toevoegen aan het landschap, en zo het landschap beinvloeden. </summary>


  ### Je ontwerp:

  <img src="readme-images/concept.png" width="375px" alt="ontwerp opdracht 2">



  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Met javascript images veranderen (DOM manipulatie).
  - Met javascript css klassen toevoegen. 





## Opdracht 2 test



  <summary>Testresultaten week 7</summary>

  Ik heb tijdens het testen 5 bevindingen gevonden waar nog aan gewerkt moet worden. 



  ### Bevinding 1:
  De styling van het product was nog niet in orde, er was nog niet genoeg gedaan aan styling omdat ik eerst de functionaliteiten in orde wou hebben.

  #### oplossing:
  Ik ga na het helemaal uitwerken van de functies, de CSS maken. Tot nu toe was alleen de styling uitgewerkt die noodzakelijk was voor de functies.

  ### Bevinding 2:
  Er ontbreekt nog een nachtmodus waar de CSS anders is als de gebruiker zijn laptop in dark mode staat.

  #### oplossing:
  Dit was ik vergeten te doen, na aanleiding hiervan heb ik een dark modus gemaakt. 

  <img src="readme-images/nightmode.png" width="375px" alt="dark mode">


  ### Bevinding 3:  
  Tijdens het testen kwam ik erachter dat de styling van de images ook op de images van de button gaat, dit is niet de bedoeling en ziet er slordig uit. 

  #### oplossing:
  Dit is opgelost met het gebruiken van een :not selector, hier zorg je ervoor dat hij een specifiek element niet meeneemt in de styling. 

  <img src="readme-images/notselector.png" width="375px" alt="not selector">








## Opdracht 2 reflectie


  <summary>Reflectie week 8</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/eind.png" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Wat ik vooral heb geleerd is hoe ik met Javascript een timer gebruik om waardes te controleren en vervolgens met een if else functie te runnen. 

  <img src="readme-images/ifelse.png" width="375px" alt="if else code">


  ### Dit was lastig/Is niet gelukt:
  Wat ik graag nog toe had willen voegen, is dat het landschap (de img) ook veranderd bij de sneeuwfunctie, dit is helaas niet gelukt omdat de functie hierboven constant aan het switchen is tussen de regenplaatjes.

  Ook had ik misschien de regenplaatjes willen vervangen voor CSS effecten waardoor ik geen plaatjes hoef te gebruiken.
  Ik vond het een leuke uitdaging om te doen met Javascript, maar ik denk dat het resultaat mooier was geweest als ik alleen maar CSS had gebruikt. 

  <img src="readme-images/snow.png" width="375px" alt="sneeuw">

### Na de eerste beoordeling
Na de eerste beoordeling, moest ik nog een aantal dingen aanpassen die nog beter konden. De gebruiker moest een indicatie krijgen hoever ze waren met het drukken op de regenknop (omdat deze na 5 keer klikken begint met onweren.), de dark mode functie moet volledig werken (net als dat hij meer responsive moest zijn) en er was een probleem met de filters die niet weg gingen, met andere woorden, het moest allemaal net even completer. 

Als eerste ben ik aan de slag gegaan met de regen indicatie, een gebruiker moest feedback krijgen met hoe ver hij was tot het zou gaan onweren. Ik heb hier een CSS progressbar toegevoegd aan de bestaande regencheck functie, die heb ik uitgebreid en aangepast zodat deze ook geen problemen meer gaf met de filters. Door te werken met CSS classes in plaats van losse CSS in Javascript zorgt het voor een stuk minder problemen met het overschrijven van elkaar (waardoor ik ook de !important weg kon halen). 

 <img src="readme-images/ifelsenew.png" width="375px" alt="verbetering">

 Hierna ben ik aan de slag gegaan om de applicatie responsive te maken. De applicatie was op elk scherm al goed te zien en te gebruiken, het enige wat jammer was en beter kon was dat er niks veranderde met het scherm. Ik heb ervoor gekozen om de CSS progressiebalk responsive te maken, zodat hij verticaal is op groot scherm, en horizontaal op kleiner scherm, dit heb ik gedaan met CSS media queries. 
 Ook heb ik met CSS media queries opgelost dat sommige sneeuwvlokken te veel naar rechts of links vielen, afhankelijk van de grootte van het scherm. 

 Wat ook beter kon, is het gebruik maken van andere interacties, bijvoorbeeld het toestenbord, bij de oude versie kon een gebruiker op een toets klikken om het menu te laten verschijnen, dit is alleen erg gebruikersvriendelijk, het merendeel van de applicatie is namelijk met de muis te bedienen. Ik heb er voor gekozen om hier een button van te maken, die na 3 seconden begint te springen om de aandacht op de vragen. 

 Als interactie heb ik er voor gekozen dat de regenfunctie te bedienen is met de pijltjes, pijlje omhoog en naar rechts voor meer regen. (naar rechts i.v.m. responsiveness, dan is de 'progressbar' horizontaal i.p.v. verticaal)

 Als laatste heb ik de HTML semantischer gemaakt, ik maakte nog te veel gebruik van onnodige div's die ik gewoon als element kwijt kon.

 Al met al heb ik veel aanpassingen gedaan in de verbeterde versie, en ik denk ik dat de opdracht nu een stuk completer is.



 


## Bronnenlijst opdracht 2
1. https://developer.mozilla.org/en-US/docs/Web/API/setInterval
2. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
3. https://alvarotrigo.com/blog/change-css-javascript/
4. https://cssgenerator.org/filter-css-generator.html (filter generator)
