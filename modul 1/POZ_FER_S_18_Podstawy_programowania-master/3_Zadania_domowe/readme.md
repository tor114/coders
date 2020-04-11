<img alt="Logo" src="http://coderslab.pl/img/coderslab-logo.png" width="400">

# Podstawy programowania - zadania domowe

> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
> Zadania z dopiskiem "dodatkowe" są dla chętnych. Znajdziesz je na końcu.


### Zadanie 1 - `js/task01.js`
Napisz funkcje ```getSecondMaxNumber(array)```, która jako argument przyjmuje tablicę. Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

Przykład:
```JavaScript
const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(numbers));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```

---

### Zadanie 2 - `js/task02.js`
Napisz funkcje ```getNegativeNumbers(array)```, która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. Funkcja **ma zwrócić** nową tablicę wypełnioną tylko ujemnymi liczbami.
*Podpowiedź: Snippety -> 2. Jak dodawać elementy do tablicy ?*

Przykład:
```JavaScript
const numbers = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(numbers));
Wynik w consoli: [-5, -67, -34]
```

---

### Zadanie 3 - `js/task03.js`

Napisz funkcję ```getEvenSum(n)```, która jako argument przyjmuje liczbę. Funkcja ma zwrócić sumę liczb parzystych od ```i = 1``` do ```n```.
**Funkcja ma zwracać wynik**. Wynik możesz wypisać na konsoli.


Przykład:
```JavaScript
const n = 5;
console.log(getEvenSum(n));
Wynik w consoli:  6 // (bo 2 + 4 = 6)
```


## Zadania dodatkowe

### Zadanie 4 - `js/task04.js`

Napisz funkcję ```getFibonacciNumbers(n)```, która przyjmuje jako argument liczbę ```n```.
Funkcja **ma zwrócić** tablicę wypełnioną  ciągiem **n** liczb Fibonacciego.

*Ciąg Fibonacciego to ciąg liczb, gdzie każda liczba to suma dwóch poprzednich.
Jeśli n będzie równe 0 zwróć 0, Jeśli n będzie równe 1 zwróć 1
W przeciwnym przypadku zobacz przykład niżej:*

Przykład:
```JavaScript
const n = 9;
console.log(getFibonacciNumbers(n));
Wynik w consoli: [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

---

### Zadanie 5 - `js/task05.js`

Napisz funckję ```isPrimeNumber(n)```, która jako argument przyjmuje liczbę ```n```.
Funkcja **ma zwrócić** wartość true lub false, w zależności od tego czy liczba ```n``` jest liczbą pierwszą czy nie.

*Liczba pierwsza to liczba podzielna przez jeden i samą siebie.*

*Zastosuj algorytm **brute force**. Jest to najprostsza &ndash; a zarazem najbardziej czasochłonna metoda wyznaczania liczb pierwszych.
Polega na tym, aby sprawdzić wszystkie potencjalne dzielniki danej liczby &ndash; jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jeden i samej siebie), to jest ona oznaczana jako pierwsza.
W celu optymalizacji algorytmu sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby.  Większe wartości nie mogą być już dzielnikami.
W celu otrzymania reszty z dzielenia użyj operatora **%** (modulo),* np.

```JavaScript
12 % 5 = 2
```

Przykład:
```JavaScript
console.log(isPrimeNumber(9));
Wynik w consoli: false //ponieważ 9 dzieli się modulo przez 1, 3 i 9


console.log(isPrimeNumber(11));
Wynik w consoli: true //ponieważ 11 dzieli się modulo tylko przez 1, 11
```

---

### Zadanie 6 - `js/task06.js`
Napisz funckję ```getPi(n)```, która jako argument przyjmuje liczbę ```n```, oznaczającą liczbę iteracji.
Funkcja **ma zwracać** wartość liczby **Pi**. Użyj następującej formuły:

```JavaScript
pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
```
Zobacz, jak zmienia się precyzja wyniku w zależności od liczby iteracji pętli.

Przykład:
```JavaScript
const n = 9;
console.log(getPi(n));
Wynik w konsoli: xxx
```

---

### Zadanie 7 - `js/task07.js`
Napisz funckję ```whatNumber(n)```, która jako argument przyjmuje liczbę ```n```.
Funkcja **ma zwracać** informację czy podana liczba ```n``` jest liczbą doskonałą, niekompletną czy żadną z tych .
Jeśli liczba jest doskonała zwróć -> "doskonała"
Jeżeli liczba jest niekompletna zwróć -> "niekompletna"
Jeżeli liczba nie jest ani doskonała ani niekompletna zwróć -> false

*Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników (mniejszych od niej). Jest to np. 6:*
```JavaScript
6 = 3 + 2 + 1
```

*Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:*

```JavaScript
1+2+5=8 < 10
```

Przykład:
```JavaScript
console.log(whatNumber(6));
Wynik w konsoli: "doskonała"

console.log(whatNumber(10));
Wynik w konsoli: "niekompletna"
```

---

### Zadanie 8 - `js/task08.js`
Napisz funkcję ```mySin(x, iterNum)``` i ```myCos(x, iterNum)```, która **ma zwracać** aproksymacje funkcji ```sinus``` i ```cosinus```, użyj następujących wzorów:
```JavaScript
sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...
```
Pamiętaj, że ```0! = 1```.
Najpierw napisz funkcję do wyliczania silni, potem do wyliczania potęgi, a na koniec połącz je w całość.
