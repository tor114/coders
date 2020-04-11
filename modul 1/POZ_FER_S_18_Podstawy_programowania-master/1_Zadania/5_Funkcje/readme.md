<img alt="Logo" src="http://coderslab.pl/img/coderslab-logo.png" width="400">

#  Funkcje



## Zadania rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`
Stwórz funkcję, która **będzie zwracała** (poprzez ```return```) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

Przykład:
```JavaScript
input -> [1,2,3]
output -> 6
```

---

### Zadanie 0b - `js/task0b.js`
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
* wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
* wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
* wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
* wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:

```JavaScript
const numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
```

Przykład:
```JavaScript
input -> 8
output -> 1150
```


## Zadania do samodzielnego wykonania


### Zadanie 1 - `js/task01.js`

Napisz funkcję **anonimową**, która przyjmuje jako argument liczbę **n** i **wyświetla** **n** razy w konsoli napis: "Kocham JavaScript!".

---

### Zadanie 2 - `js/task02.js`

Napisz funkcję, która przyjmuje jako argumenty trzy liczby i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie). Wypisać możesz dopiero jak zwrócisz wynik z funkcji.

---

### Zadanie 3 - `js/task03.js`
Napisz funkcję `calculateTip(amount, raiting)`, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
* opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
* "Bardzo dobra obsługa" => 25% napiwku,
* "Dobra obsługa" => 20% napiwku,
* "Średnia obsługa" => 15% napiwku,
* "Zła obsługa" => 0% napiwku.

Przykład:
```JavaScript
input -> 100, "Bardzo dobra obsługa"
output -> 25
```

## Zadanie dodatkowe

### Zadanie 4 - `js/task04.js`
Napisz funkcję `rockPaperScissors(player1, player2)`, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nożyce, kamień.

Funkcja ma zwracać jeden z czterech napisów:
* "Gracz 1 wygrał",
* "Gracz 2 wygrał",
* "Remis",
* "Błędne informacje".

Przykład:
```JavaScript
input -> "papier", "nożyce"
output -> "Gracz 2 wygrał"
```

