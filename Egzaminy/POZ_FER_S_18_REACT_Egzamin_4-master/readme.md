# ES6 i React - Egzamin

## Wytyczne dotyczące githuba

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań
Zadania te są testowane za pomocą **specjalnych testów automatycznych**. Zwróć zatem uwagę na następujące rzeczy:

* Jeśli w zadaniu jest wspomniane, aby funkcja zwracała wynik to powinna go zwracać, a nie wyświetlać w konsoli.
(Możesz oczywiście dodatkowo wyświetlać

* Jeśli w treści zadania jest wspomniane, aby konkretny tekst został wpisany/zwrócony/wyświetlony, to powinien być to **dokładnie taki sam** tekst jak w treści zadania.

* Pamiętaj również o tym, aby nazwy funkcji były **dokładnie takie same** jak w treści zadania. 

* Zadania rozwiązuj w odpowiednich plikach **js**.

* Nie zmieniaj nic w plikach HTML.

* Zawsze sprawdzaj, czy Twoje rozwiązanie działa. Jeśli powoduje błędy to nie zostanie ocenione. W takim wypadku lepiej zakomentuj wrażliwe części.

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Część ES6
Podczas wykonywania zadań od 1 do 3 **nie używaj biblioteki React**.

### Zadanie 1 - `js/task01.js` **(2 pkt)**

Masz przygotowane trzy tablice `x`, `y` i `z`. Stwórz funkcję ```joinArrays``` która połączy te trzy tablice w jedną. Funkcja powinna zwrócić tę tablicę, ale liczby powinny być w niej **uporządkowane rosnąco**. 
Uwaga! Nie korzystaj z metody tablicowej `concat`.

```js
const x = [21,3];
const y = [0,12];
const z = [42,5, 2];

joinArrays(x,y,z);  // funkcja powinna zwrócić [0, 2, 3, 5, 12, 21, 42]
```

---

### Zadanie 2 - `js/task02.js` **(2 pkt)**

Stwórz funkcję `printObject` do której przekażesz jako parametr obiekt `data`. Należy go **od razu zdestrukturyzować**, na poszczególne zmienne. Obiekt ma następującą strukturę:

```js
const data = {
  userID: 504,
  name: "Joe",
  surname: "Doe",
  lastLogged: "12:30:45 1 November 2019"
};
```

Podczas destrukturyzacji wyciągnij tylko wartości spod kluczy: `userID`, `name`, `lastLogged`. 
Następnie wyświetl je w konsoli a także **zwróć** tablicę złożoną z tych trzech wartości.

--- 

### Zadanie 3 - `js/task03.js` **(6 pkt)**

Stwórz klasę abstrakcyjną `Product` z konstruktorem przyjmującym takie parametry jak:

- `name` - nazwa produktu
- `price` - cena produktu
- `inStock` - wartość `true`/`false` czy produkt jest dostępny
- `quantity` - ilość produktu w magazynie

Ma zawierać również takie metody:

- `isInStock()` - zwracająca tekst "Produkt dostępny" lub "Brak w magazynie" w zależności od odpowiedniego klucza w obiekcie
- `order(quantity)` - metoda powinna zwracać informację o cenie zakupu odpowiedniej ilości (`quantity`) produktów. Jeżeli wartość `quantity` przekracza ilość produktu w magazynie, metoda powinna zwrócić `false`. Musi ona również odpowiednio modyfikować wartość `this.quantity` a jeżeli dojdzie ona do `0` to również ustawić `this.inStock` na `false`

Następnie stwórz klasę `Shoes` która będzie dziedziczyć po `Product`. Ma ona **dodatkowo** w konstruktorze tworzyć:

- `colors` - tablicę z kolorami butów (na początku pusta)
- `sizes` - tablicę z rozmiarami butów (na początku: `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`)

Dodatkowo klasa `Shoes` powinna mieć dwie dodatkowe metody:

- `addColor(color)` - dodaje odpowiedni kolor do tablicy `this.colors` (użyj operatora rozproszenia)
- `removeSize(size)` - usuwa odpowiedni rozmiar z tablicy `this.sizes` (użyj metody iterującej `filter`)

Przetestuj działanie klas wykonując poniższy lub przez siebie wymyślony kod.

```js
const adidas = new Shoes("Adidas", 299.99, true, 40);

console.log(adidas.isInStock()); // Produkt dostępny
console.log(adidas.order(30)); // 8999.7
console.log(adidas.order(30)); // false
console.log(adidas.order(10)); // 2999.9
console.log(adidas.isInStock()); // Brak w magazynie

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors); // ["red", "blue", "green"]

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]
```

## Część React
Podczas wykonywania zadań od 4 do 6 **użyj za każdym razem biblioteki React**.

### Zadanie 4 - `js/task04.js` **(2 pkt)**

Wyrenderuj w **funkcyjnym** komponencie ```App``` następujące elementy:
- `h1` z napisem "Hello World!",
- `span` z napisem "React Rules!".

Elementy mają być **bezpośrednimi** dziećmi elementu głównego, do którego renderujemy całą aplikację - `#app`.

---

### Zadanie 5 - `js/task05.js` **(3 pkt)**

Stwórz komponent **funkcyjny** `UserDetails`. Ma on przez `props` przyjmować:

- Imię `name`
- Nazwisko `surname`
- Adres ``address``
- Kod Pocztowy `postcode`
- Miejscowość `city`

Komponent ma renderować (przykład w `HTML`):
```html
<div class="card">
  <div>
    <h5>{Imię} {Nazwisko}</h5>
    <div>{Adres}</div>
    <div>{Kod Pocztowy} {Miejscowość}</div>
  </div>
</div>
```

Wyrenderuj ten komponent dla dowolnych danych.

**Pamiętaj o stworzeniu również funkcyjnego komponentu `App`, który będzie renderował komponent do tego zadania.**

---

### Zadanie 6 - `js/task06.js` **(5 pkt)**

Zaimportuj tablicę obiektów znajdującą się w `js/data/products.js` pod zmienną `products`.

Stwórz trzy komponenty: `App`, `Products`, `Item`.

Komponent `App` ma przesyłać przez `props` do komponentu `Products` zaimportowaną listę produktów (`props` ma mieć nazwę `products`).

Komponent `Product` ma renderować nagłówek `h2` "Produkty" i listę `ul` a w niej komponenty `Item` przesyłając do nich wartości `name` i `price` z każdego obiektu tablicy `products`. Musi odbywać się to automatycznie poprzez znaną Ci metodę iteracyjną. 

Komponent `Item` ma renderować element `li` z danymi odebranymi przez `props`, np. `{name}, Cena: {price}`.

W końcowym wyniku ma nastąpić następująca konstrukcja (w nawiasach kwadratowych zaznaczono jakie `propsy` powinien dostać komponent i jakiego mają być typu):

```plain
App
 |_Products [products: Array]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
```

