<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

# JavaScript - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

## 1. Tworzenie obiektów na podstawie konstruktora
```js
function Animal(type) {
  this.type = type;
}

Animal.prototype.sayVoice = function(voice) {
  console.log(voice)
}

const lion = new Animal('lion');
lion.sayVoice("roar");

const pigeon = new Animal('pigeon');
pigeon.sayVoice("gru gru");
```


## 2. Tworzenie obiektów za pomocą Object.create()
```js
const Animal = {
  type: "",
  sayVoice: function(voice) {
    console.log(voice)
  }
}

const lion = Object.create(Animal);
lion.type = "lion";
lion.sayVoice("roar");


const pigeon = Object.create(Animal);
pigeon.type = "pigeon";
pigeon.sayVoice("gru gru");
```

## 3. setInterval & clearInterval
### Ustaw interwały / powtórzenia

```js
const id = setInterval(function() {
    console.log('jestem wywolywana co 2 sekundy');
}, 2000 )

clearInterval(id);
```

## 4. setTimeOut & clearSetTimeout
### Wykonaj kod po podanym czasie

```js
const id = setTimeout(function() {
  // twój kod
}, 1000);

clearTimeout(id);
```

## 5 Różne rodzaje eventów

### click
```js
const button = document.getElementById('send');
button.addEventListener('click', function(){
  console.log('hurra kliknięto');
});
```

### keyup/keydown/keypress
```js
const inputField = document.getElementById('name');
inputField.addEventListener('keyup', function(){
  console.log('hurra wpisano tekst');
})
```

**keyup** - uruchamiany kiedy puszczasz klawisz;
**keydown** - uruchamiany kiedy klawisz jest wciśnięty;
**keypress** - uruchamiany kiedy klawisz jest wciśnięty, ale oddaje wpisany znak ukryty pod klawiszem, a nie numer klawisza tak jak poprzednie. Zobacz różnicę - http://jsfiddle.net/user2314737/543zksjc/3/show/


* mouseeneter/mouseleave/mousemove/mouseover
```js
const myButton = document.getElementById('myButton');
myButton.addEventListener('mouseeneter', function(){
  console.log('hurra najechano na element');
});
```
**mouseeneter** - uruchamiany raz kiedy wjeżdżasz kursorem na element, ale nie reaguje na dzieci;
**mouseover** - uruchamiany raz kiedy wjeżdżasz kursorem  nad element i jego dzieci;
**mouseleave** - uruchamiany kiedy zjedziesz kursorem z elementu;
**mousemove** - uruchamiany kiedy wykonujesz ruch kursorem jest nad elementem i jego dziećmi.


## 6. Pobieranie różnych wartości z elementów z formularza
### input
```js
const inputField = document.getElementById('card');
inputField.value;
```

### checkbox
```js
const checkboxField = document.getElementById('condition')
checkboxField.checked
```

### radiobutton
```js
const radioBtn = document.getElementById('radio');
radioBtn.checked;
```
### textarea
```js
const msgField= document.getElementById('message');
msgField.value;
```

### select & option

Pobranie
```js
const selectField = document.getElementById('infos');
selectField.options[msgField.selectedIndex].value;
```

Ustawienie
```js
const selectField = document.getElementById('infos');
selectField.options[1].selected = true
```
