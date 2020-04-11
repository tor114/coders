<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# DOM - Elementy

> Rozwiązuj zadania w przeznaczonych do tego plikach. Każde zadanie zawiera informacje w jakim pliku powinno być rozwiązane.
>
> Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.

**Nie modyfikuj kodu HTML, chyba że w poleceniu jest napisane inaczej.**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

(Spójrz na element o klasie ```ex0a```)

Zmodyfikuj listę w następujący sposób:
1. Nastaw kolor tła co drugiego elementu listy na zielony.
2. Nastaw piątemu elementowi listy **klasę** ```big```.
3. Nastaw co trzeciemu elementowi podkreślenie.


## Zadania do samodzielnego wykonania

### Zadanie 1  - `js/task01.js`
(Spójrz na element o klasie ```ex1```)

Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
Napisz kod JavaScript, który wprowadzi następujące zmiany:
1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. Zastanów się, dlaczego dopisywany jest w tym miejscu.
Napisz odpowiedź na to pytanie w komentarzu do zadania.


### Zadanie 2 - `js/task02.js`
(Spójrz na element o klasie ```ex2```)

Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
1. Wyszukaj odpowiednie elementy (spany) i zapisz je do  zmiennych.
2. Za pomocą ```innerText``` wypełnij w nich odpowiednie informacje.

### Zadanie 3 - `js/task03.js`
(Spójrz na element o klasie ```ex3```)

Na stronie jest proste menu. Zarówno kod HTML jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
2. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
3. Zauważ, że jeden z elementów ma czerwony kolor tekstu. Jest to spowodowane tym, że ma **klasę** ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).

### Zadanie 4 - `js/task04.js`
(Spójrz na element o klasie ```ex4```)

Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1). 
