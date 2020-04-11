<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# Obiekty

> Rozwiązuj zadania w przeznaczonych do tego plikach. Każde zadanie zawiera informacje w jakim pliku powinno być rozwiązane.
>
> Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz obiekt `country`. Dopisz do niego następujące właściwości:

* `capital` - string, 
* `population` - number,
* `president` - string,
* `ministers` - tablica stringów

Wypisz w konsoli wszystkie właściwości.

---

### Zadanie 0b - `js/task0b.js`

Stwórz obiekt `timeMachine`. Dopisz do niego następujące właściwości:

* `shape` - string, 
* `model` - string,
* `run(date, place)` - metoda, dzięki której można się przenieść w czasie. Argument `date` to data, do jakiej chcemy się przenieść, a `place` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi. 

Wypisz w konsoli wszystkie właściwości i uruchom metodę `run`.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz obiekt `book`. Dopisz do niego następujące właściwości:

* `title`,
* `author`,
* `numberOfPages`

Wypisz te właściwości w konsoli.

---

### Zadanie 2 - `js/task02.js`

Stwórz obiekt `person`. Dopisz do niego następujące właściwości i metodę:

* `name`,
* `age`,
* `sayHello()` - wypisującą string "hello"

Wypisz właściwości w konsoli, wywołaj metodę.

---

### Zadanie 3 - `js/task03.js`

Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis. Obiekt powinien mieć własność `title` (string), `servings` (number) oraz `ingredients` (tablica stringów). Dodaj pole `ingredients` poza ciałem obiektu. Wypisz w konsoli te wszystkie informacje.

---

### Zadanie 4 - `js/task04.js`

Do pliku ```js/task04.js``` przekopiuj poniższy kod:

```js
const spoon = {
  isExist: true
}

const fork = spoon;
fork.isExist  = false;
```

Następnie sprawdź czy łyżka istnieje. 
