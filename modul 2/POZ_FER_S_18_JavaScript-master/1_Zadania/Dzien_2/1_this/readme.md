<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# this

> Rozwiązuj zadania w przeznaczonych do tego plikach. Każde zadanie zawiera informacje w jakim pliku powinno być rozwiązane.
>
> Pamiętaj, żeby pisać czytelny, dobrze sformatowany kod.


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz obiekt `car`, utwórz dla niego odpowiednie właściwości i metody.

#### Właściwości:
* `brand`,
* `color`,
* `numberOfKilometers` (na początku **0**).

#### Metody:
* `printCarinfo()` - metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
* `drive(km)` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

```JavaScript
car.printCarinfo(); => "Czarny Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Czerny mercedes, 20km"
```


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Do obiektu `car` z zadania poprzedniego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).

Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę zwracającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego `this`, żeby odwołać się do obiektu w środku metody.

---

### Zadanie 2 - `js/task02.js`

Przeanalizuj kod, który znajduje się w pliku `js/task02.js`. 

Jest tam stworzony obiekt ```calculator```, który posiada jedną metodę `save(newA,newB)`. Zadaniem tej metody jest zapisanie dla tego obiektu pod pola `a` i `b` dwóch liczb.

Dopisz metody `sum` oraz `multiply`, tak aby zwracały sumę oraz iloczyn tych dwóch liczb ustawionych w metodzie `save`.

---

### Zadanie 3 - `js/task03.js`

Stwórz obiekt `stairs`.

Niech obiekt posiada pole `step`, które na początku ustaw na 0. 

Dodaj do obiektu również następujące metody: 
* `up()`, która zwiększa schodek o 1 (modyfikuj pole step)
* `down()`, która zmniejsza schodek o 1 (modyfikuj pole step)
* `printStep()`, która pokazuje, na którym schodku jesteśmy.

Przykład wywołania:
```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
```
