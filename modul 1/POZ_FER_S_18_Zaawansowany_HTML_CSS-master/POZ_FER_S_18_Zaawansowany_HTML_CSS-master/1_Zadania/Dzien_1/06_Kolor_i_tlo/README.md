<img alt="Logo" src="http://coderslab.pl/img/coderslab-logo.png" width="400">

# CSS - Kolor i tło

## Zadania rozwiązywane z wykładowcą

### Zadanie 0a

> Zadanie wykonuj w plikach:  
> `index0a.html`  
> `css/style0a.css` 

#### Część 1
Wyzeruj dla **body** marginesy, a następnie ostyluj banner o klasie **.banner**. Powinien on:

- zajmować pełną wysokość strony
- powinien mieć grafikę w tle, która znajduje się w w **images/bg.jpg**
- grafika powinna zajmować jego całą powierzchnię i być wycentrowana


#### Część 2
Element o klasie `.banner__text` ostyluj w następujący sposób:

- wielkość **70px**
- **biały** kolor
- krój **Georgia**
- cień o parametrach **0 0 30px** i koloru **rgba(36,134,115,0.7)**
- margines górny wyzerowany
- padding górny ustawiony na `calc(50vh - 40px)`


#### Część 3
Poniżej baneru znajduje się przykładowy tekst. Nadaj mu stylowanie:

- tło gradientowe 2 kolorowe: **#27C6A2** i **#169678**
- wewnętrzny odstęp od krawędzi **100px**
- krój Georgia,
- biały kolor tekstu
- wielkość tekstu `1.2rem` oraz `2rem` wielkość interlinii


## Zadania do samodzielnego wykonania

### Zadanie 1 

> Zadanie wykonuj w plikach:  
> `index01.html`  
> `css/style01.css` 

* Utwórz element div i nadaj mu klasę **rocks**.
* W CSS-ie ustaw rozmiar diva - szerokość **600px**, wysokość **350px**.
* Ustaw jako tło obrazek **rocks.jpg**, znajdziesz go w katalogu **images/**.
* Wykorzystaj **background-size** i **background-position** tak aby obrazek był pokazany na samym środku.


### Zadanie 2

> Zadanie wykonuj w plikach:  
> `index02.html`  
> `css/style02.css` 

Twoim zadaniem będzie dodanie stylowania do elementu **.banner**, który znajduje się na górze strony.

Do elementu **.banner** dodaj następujące właściwości:
* kolor tła **czarny**
* grafikę tła, którą będzie obrazek **banner.jpg** znajdujący się w katalogu images. Pamiętaj o odpowiedniej ścieżce.
* wielkość tła taka by zawsze przygrywała cały banner
* tło wycentrowane w poziomie i przyklejone do górnej krawędzi
* przypnij tło za pomocą właściwości **background-attachment: fixed**
* kolor tekstu na biały
