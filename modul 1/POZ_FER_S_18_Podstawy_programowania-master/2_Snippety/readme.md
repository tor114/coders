<img alt="Logo" src="http://coderslab.pl/img/coderslab-logo.png" width="400">

# Podstawy programowania - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.


#### 1. Jak wylosować liczbę z danego zakresu np. od 1 do 10 ?

```JavaScript
const min = 1;
const max = 10;
const number = Math.floor(Math.random() * (max - min + 1) + min);
console.log(number);
```


#### 2. Jak dodawać elementy do tablicy ?
Można użyć funkcji `push()` - jeśli chcesz dodawać elementy na koniec.

Chcemy dodać do tablicy tylko liczby podzielne przez 3, więc wielkość tablicy będzie mniejsza niż
10

```JavaScript
const arr = []; // tworzenie nowej pustej tablicy
const n = 10; // sprawdzamy 10 liczb
for(var i = 0; i < n; i++) {
  if( i % 3 === 0) {  // jeżeli liczba dzieli się bez reszty przez 0 to
    arr.push(i); // dodaj ją na koniec tablicy
  }
}
console.log(arr) // [0, 3, 6, 9]
```


#### 3. Jaka jest różnica w wypisywaniu, a zwracaniu wartości przez funkcję ?

```JavaScript
//Ta funkcja nie ma słowa kluczowego return, tylko wyświetla imię
function showName(firstName) {
  if (firstName === "Luke") {
    console.log("Skywalker");
  }    
}
const firstName = showName("Luke");
console.log(firstName); // "undefined" <- konsola wypisze "undefined", bo nic nie zwracamy


//Ta funkcja ma słowo kluczowe return
function getAge(person) {
  if (person === "Luke Skywalker") {
    return 32;
  }    
}
const age = getAge("Luke Skywalker");
console.log(age) // 32 <- konsola wypisze to co chcemy i możemy posługiwac się tą zmienną dalej w kodzie
```
