<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# DOM - Elementy

> Rozwiązuj zadania w przeznaczonych do tego plikach. Każde zadanie zawiera informacje w jakim pliku powinno być rozwiązane.
>
> Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a 

> `js/task0a.js`  
> `task0a.html`

Uruchom stronę `task0a.html`.  Na stronie znajdują się dwa elementy o klasach ```parent``` i ```children```
Stwórz event, który po najechaniu na element ```parent``` pokaże element ```children```. Zauważ, że element ```children``` ma ustawiony display: none w css.
Stwórz drugi event, który po zjechaniu z elementów schowa z powrotem element ```children```.
Pamiętaj o tym, aby nie chować wszystkich elementów naraz.


## Zadania do samodzielnego wykonania

### Zadanie 1 

> `js/task01.js`  
> `task01.html`

Uruchom stronę przygotowaną dla zadania 1. Sprawdź w konsoli, czy są jakieś błędy. Następnie:
  1. Przenieś tag ```<script>``` do sekcji ```<head>```. Zobacz, co się zmieniło w działaniu skryptu. Spróbuj to wytłumaczyć.
  2. Stwórz event ```DOMContentLoaded``` dla elementu ```document``` i przenieś kod do środka tego eventu. Czy poprawiło to sytuację?
  3. Przenieś znowu tag ```<script>``` na koniec pliku &ndash; czy jest jakaś różnica?

---

### Zadanie 2

> `js/task02.js`  
> `task02.html`

Uruchom stronę przygotowaną dla zadania 2. Na stronie znajduje się guzik. Podepnij do niego event, który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".

---

### Zadanie 3

> `js/task03.js`  
> `task03.html`

Uruchom stronę przygotowaną dla zadania 3. Na stronie znajdują się trzy przyciski i jeden licznik. Napisz jeden wspólny event dla wszystkich przycisków, który spowoduje, że po kliknięciu w przycisk licznik zwiększy wartość o jeden.

---

### Zadanie 4

> `js/task04.js`  
> `task04.html`

Uruchom stronę przygotowaną dla zadania 4. Na stronie znajdują się trzy przyciski i trzy liczniki (elementy ```span``` o klasie ```counter```). Do każdego przycisku dopisz event, który spowoduje, że po kliknięciu w przycisk przypisany do niego licznik zwiększy swoją wartość o jeden.

---

### Zadanie 5

> `js/task05.js`  
> `task05.html`

Uruchom stronę przygotowaną dla zadania 5. Na stronie znajdują się trzy elementy ```div```. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym **divie**. Użyj do tego słowa kluczowego ```this```.

**Hint**:
Żeby uzyskać losowy kolor użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

---

### Zadanie 6 

> `js/task06.js`  
> `task06.html`

Uruchom stronę przygotowaną dla zadania 6. Na stronie znajduje się jeden element **div**. Napisz dla niego event, który będzie wypisywał położenie kursora myszy w chwili, gdy znajduje się nad tym elementem.
Wyszukaj zarówno położenie kursora globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).

---

### Zadanie 7

> `js/task07.js`  
> `task07.html`

Uruchom stronę przygotowaną dla zadania 7. Na stronie znajdują się zagnieżdżone elementy. Do każdego dopisane są eventy. Użyj metod ```stopPropagation``` i ```stopImmediatePropagation``` w taki sposób, aby:
  1. Wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event dla elementu trzeciego.
  2. Wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu piątego.

---

### Zadanie 8 

> `js/task08.js`  
> `task08.html`

Uruchom stronę przygotowaną dla zadania 8.
Na stronie znajdują się dwa elementy, które pokazują wielkość okna. Dopisz event do okna (element ```window```), który spowoduje, że elementy te będą pokazywały poprawne wartości (`innerWidth`, `innerHeight`) nawet po przeskalowaniu okna (`resize`).

---

### Zadanie 9

> `js/task09.js`  
> `task09.html`

Uruchom stronę przygotowaną dla zadania 9. Prześledź dokładnie kod i przeczytaj komentarze.
Skoncentruj się na każdej linijce kodu. Zastanów się nad taką sytuacją:
Potrzebujesz użyć elementu o id ```b``` wewnątrz funkcji ```innerFuncOne```, żeby zmienić mu kolor.
Jak to zrobisz? Odpowiedź umieść w komentarzu.
