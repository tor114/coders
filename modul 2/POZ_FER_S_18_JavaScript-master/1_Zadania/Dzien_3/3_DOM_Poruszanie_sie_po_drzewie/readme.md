<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# DOM - Elementy

> Rozwiązuj zadania w przeznaczonych do tego plikach. Każde zadanie zawiera informacje w jakim pliku powinno być rozwiązane.
>
> Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a

> `js/task0a.js`  
> `task0a.html`

Znajdź i zapisz do zmiennych następujące elementy:
1. Element o **klasie** ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o **atrybucie** ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
4. **Div** o **klasie** ```forth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article``` -> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.

---

### Zadanie 0b 

> `js/task0b.js`  
> `task0b.html`

W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po kliknięciu w którykolwiek z nich &ndash; element, który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się ```null```).


## Zadania do samodzielnego wykonania

### Zadanie 1 

> `js/task01.js`  
> `task01.html`

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

---

### Zadanie 2

> `js/task02.js`  
> `task02.html`

W pliku znajdują się trzy listy (każda osadzona w elemencie ```div```). Po najechaniu myszką na element ```div``` zmienić się mają kolory tła elementów jego listy. Odpowiednio:
1. Pierwszy element w liście ma mieć kolor czerwony.
2. Ostatni element w liście ma mieć kolor niebieski.
3. Wszystkie inne elementy mają mieć kolor zielony.

Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie divy musi być założony ten sam event.
2. Elementy listy mają być wyszukane w zależności od ```this```.
