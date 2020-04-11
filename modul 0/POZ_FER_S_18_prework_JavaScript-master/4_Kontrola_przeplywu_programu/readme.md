<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# Prework JavaScript - Kontrola przepływu programu

## Schemat rozwiązywania zadań:

* Zadania wykonuj w plikach do tego przeznaczonych. Każdy nagłówek wskazuje na dokładny plik w którym należy je rozwiązać.
* Na samym końcu znajdują się zadania dodatkowe. Nie są one obowiązkowe do zaliczenia preworku, ale postaraj się je wykonać.


### Zadanie 1 - `js/task01.js`

Stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.


### Zadanie 2 - `js/task02.js`

Stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
(możesz wykorzystać operator logiczny ```&&```, spróbuj sam poszukać o nim informacji), wypisz w konsoli, która z nich jest największa.


### Zadanie 3 - `js/task03.js`
Stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".


### Zadanie 4 - `js/task04.js`
Stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.


### Zadanie 5 - `js/task05.js`
Napisz program, który na podstawie wartości zmiennej np. ```const n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```

*Podpowiedź: Jak sprawdzić czy liczba jest parzysta lub nieparzysta? Wystarczy podzielić ją modulo przez 2, jeżeli wynik to 0, wtedy liczba jest parzysta, w przeciwnym przypadku jest nieparzysta.*

### Zadanie 6 - `js/task06.js`
Stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
konkatenację np.```console.log("i= " + i + ", j= " + j);```


### Zadanie 7 - `js/task07.js`

Napisany jest skrypt, który wypisuje w konsoli schemat z **n** gwiazdek taki jak poniżej. Odszukaj ten skrypt i **przeanalizuj go** bardzo dokładnie.
Przykład dla  ```n = 5```:

```
* * * * *

* * * * *

* * * * *

* * * * *

* * * * *
```

Używamy do tego zadania pętli zagnieżdżonych!


### Zadanie 8 - `js/task08.js`

Napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```). Użyj do tego  pętli zagnieżdżonych.

```
*
* *
* * *
* * * *
* * * * *
```

Możesz to zadanie rozwiązać na dwa sposoby:
1. używając pętli zależnych.
2. używając pętli niezależnych i instrukcji warunkowej **if**.

*Możesz wzorować się na zadaniu poprzednim.*

---

## Zadania dodatkowe

### Zadanie 9 - `js/task09.js`

Napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```):

```
* 2 3 4 5
* * 3 4 5
* * * 4 5
* * * * 5
* * * * *
* * * * *
* * * * 5
* * * 4 5
* * 3 4 5
* 2 3 4 5
```

### Zadanie 10 - `js/task10.js`

Napisz program tworzący tabliczkę mnożenia dla podanej zmiennej **n**. Wyświetl wynik w konsoli. Na przykład dla ```n = 3``` wynik będzie następujący:


1 x 1 = 1 | 1 x 2 = 2 | 1 x 3 = 3 <br>
2 x 1 = 2 | 2 x 2 = 4 | 2 x 3 = 6 <br>
3 x 1 = 3 | 3 x 2 = 6 | 3 x 3 = 9


Do mnożenia liczb użyj operatora `*`.
