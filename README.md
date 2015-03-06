# lawn
Ein semantisches CSS (SCSS) / JavaScript GUI Framework.

##Über lawn:

###Noch ein GUI Framework?
lawn wurde konzipiert um eleganten, sprechenden Quelltext zu schreiben. CSS-Klassen wie "col-md-8", oder schlimmer BEM Bezeichner wie "sidebar__navigation--secondary" sind in meine Augen extrem hässlich.
lawn arbeitet im Gegensatz zu herkömmlichen Frameworks nicht mit Klassen sondern mit speziellen Attributen. Dass sorgt dafür das sich der Quelltext (fast) wie Aufsatz ließt. Klassen werden erst vom Nutzer vergeben um benutzerdefiniert Modifikationen vorzunehmen, so zu sagen als "custom-layer".

###Wie funktioniert lawn genau?
Alle Elemente in lawn werden über die attribute "is", "has", "state", "behavior" konfiguriert, dass heißt es werden bestimmte Styles gestetzt und Verhalten hinzugefügt. Jedes der Attribute hat eine bestimmte Funktion:
* Das Attribute "is" beschreibt den Typ eines Elements, falls es kein entsprechendes Element gibt, oder ein anders element das Verhalten annehemen soll. Das "is" Attribute darf nur einen Wert enthalten.
* Das "has" Attribute bestimmt (abweichende) Eigenschaften eines Elements z.B. has="secondary-color". Dieses Attribute kann mehrere mit Leerzeichen getrennte Werte enthalten.
* Das "state" Attribute bestimmt den status eines Elements, je nach status kann sich die Darstellung und das Verhalten ändern. Ein Button mit dem status="loading" lässt sich z.B. nicht mehr klicken und zeigt einen Spinner an. Das Attribute darf nur einen Wert enthalten.
* Das "behavior" Attribute bestimmt das interaktive Verhalten eines Elements. Wenn z.B. behavior="grow-on-touch" gesetzt ist vergrößert sich das Element beim berühren.

Dazu ein kleines Beispiel:
```html
<a 
  is="button"
  has="icon-note shadow-depth-1"
  behavior="grow-on-touch" 
  state="loading"
> 
	Ich bin ein Button 
</a>
```
*Das Bespiel erzeugt einen Button mit einem Noten-Icon und einem Schatten, bei berühren vergrößert er sich und da der status "loading" ist wird er nicht klickbar und mit einem Loadinng Spinner angezeigt*


##Aufbau
Lawn basiert auf SASS und MoldJS der Aufbau der Dateien gestalltet sich wie folgt:
```

``
