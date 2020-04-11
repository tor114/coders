# Warunkowe renderowanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/3_Warunkowe_renderowanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/MyCheckbox.js`

Stwórz komponent `MyCheckbox`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst użyj operatora trójargumentowego bezpośrednio wewnątrz JSX.**


## Zadania do samodzielnego wykonania

### Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/NumberRandomInfo.js`

Stwórz komponent `NumberRandomInfo`, który co sekundę losuje liczbę od 0 - 5. Do losowania liczby skorzystaj ze wzoru:
```js
Math.ceil(Math.random() * 5 )
```
W metodzie render zrób warunek, który sprawdzi wylosowaną liczbę. Jeżeli jest ona większa od 3, to wyrenderuj tę liczbę oraz napis: "Większa od 3". W przeciwnym wypadku wyrenderuj tę liczbę oraz napis: "Mniejsza od 3".

---

### Zadanie 2

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/NumberInfo.js`

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16
