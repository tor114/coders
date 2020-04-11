<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Animacje - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

### Spinner
```HTML
<div class="progress">
    <div>Loading…</div>
</div>
```

```CSS
@keyframes spinner {
	to { transform: rotate(1turn); }
}

.progress {
	position: relative;
	display: inline-block;
	width: 5em;
	height: 5em;
	margin: 0 .5em;
	font-size: 12px;
	text-indent: 999em;
	overflow: hidden;
	animation: spinner 1s infinite steps(8);
}

.progress:before,
.progress:after,
.progress > div:before,
.progress > div:after {
	content: '';
	position: absolute;
	top: 0;
	left: 2.25em;
	width: .5em;
	height: 1.5em;
	border-radius: .2em;
	background: #eee;
	box-shadow: 0 3.5em #eee;
	transform-origin: 50% 2.5em;
}

.progress:before {
	background: #555;
}

.progress:after {
	transform: rotate(-45deg);
	background: #777;
}

.progress > div:before {
	transform: rotate(-90deg);
	background: #999;
}

.progress > div:after {
	transform: rotate(-135deg);
	background: #bbb;
}
```
