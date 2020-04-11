<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# React - Egzamin

## Wytyczne

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Aby dodać pojedynczy plik użyj komendy `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki, użyj `git add .`
Pamiętaj, że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie. Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań

Zadania są testowane za pomocą **testów automatycznych**. Zwróć zatem uwagę na następujące rzeczy:

* Jeśli w treści zadania jest wspomniane aby konkretny tekst został wpisany/zwrócony/wyśwetlony, to powinien być to **dokładnie taki sam** tekst jak w treści zadania.

* Pamiętaj również o tym aby nazwy funkcji/komponentów były **dokładnie takie same** jak w treści zadania.

* Zadania rozwiązuj w odpowiednich plikach **js**.

* Zawsze sprawdzaj czy Twoje rozwiązanie działa. Jeśli powoduje ono błędy w konsoli, nie zostanie ocenione. W takim przypadku lepiej **zakomentuj wrażliwe części**.


## Przygotowanie

Zmodyfikuj plik `webpack.config.js`, tak aby:

- zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`

**Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 **(4 pkt)**

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/LoadingData.js`

Stwórz komponent **klasowy** `LoadingData`. Ma on renderować element (przykład `HTML`):

```html
<div class="progress">
  <div class="progress-bar" style="width: 0%"></div>
</div>
```

Pasek postępu `.progress-bar` ma być aktualizowany co `100ms` o `1%`.

Po 10 sekundach wartość `width` powinna wynosić już `100%`, cały element `.progress` ma zniknąć a w jego miejsce pojawić się napis w elemencie `h1`: "Dane załadowane!".

---

### Zadanie 2 **(7 pkt)**

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/Shop.js`
> `js/task02/Products.js`
> `js/task02/Cart.js`

Stwórz komponent `Shop`. Ma on renderować dwa komponenty: `Products` i `Cart`. 

Dodatkowo komponent `Shop` ma pobrać przez API listę produktów i zapisać ją w stanie aplikacji: `https://fer-api.coderslab.pl/v1/exam5/products`.

> Jeżeli z jakiegoś powodu API by nie działało, albo były problemy z internetem, skorzystaj z tablicy produktów w `js/task02/data/products.js`.  
>  Możesz zaimportować ją do tego zadania **tylko wtedy gdy są problemy z API**.

Komponent `Shop` ma następnie przekazywać powyższą tablicę dalej do komponentu `Products`.

Komponent `Products` ma renderować nagłówek `h2` "Produkty" i listę `ul` z danymi produktami wraz z przyciskiem (`<button class="btn btn-primary">`) `Kup!` przy każdym z nich.

Komponent `Cart` ma wyświetlać nagłówek `h2` "Koszyk", a w liście `ul` tylko te produkty, które zostały wybrane w komponencie `Products`. Nie powinno być możliwości dodania wielokrotnie tego samego produktu.

---

### Zadanie 3 **(9 pkt)**

> Pliki do pracy  
> `js/task03/App.js`  
> `js/task03/ContactForm.js`

Stwórz komponent `ContactForm`. Ma on zawierać formularz z następującymi elementami:

- `input class="form-control"` na imię,
- `input class="form-control" type=email` na adres email,
- `textarea class="form-control"` na treść wiadomości,
- `button class="btn btn-primary" type="submit"` przycisk wysłania.

Kiedy formularz zostanie przesłany, ma zostać wykonana **walidacja**:

* imię ma być **co najmniej 2-znakowym stringiem** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Name should be at least 2 characters long."

* e-mail ma **zawierać znak "@" i co najmniej 3 znaki** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Email should be valid."

* wiadomość ma być **musi zawierać conajmniej 120 liter** - jeśli warunek nie jest spełniony, nad fomularzem wypisz informację: "Message should be at least 120 characters long."

Jeżeli wszystkie warunki są spełnione, wyślij dane formularza jako `POST` do serwera API.
Endpoint serwera: `https://fer-api.coderslab.pl/v1/exam5/contact`.
Dane należy wysłać jako JSON w formacie: 
```json
{
  "name": "imie",
  "email": "email",
  "message": "wiadomosc"
}
```
Jeżeli serwer zwróci jakieś dodatkowe błędy w związku z przesłanymi danymi, to należy je wyświetlić na stronie. 
Kiedy klucz zwróconego obiektu będzie miał wartość "success" należy wyświetlić informację "Operation completed!".


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
