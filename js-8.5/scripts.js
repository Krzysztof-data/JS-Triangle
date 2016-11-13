var a;
var b;
var value;

var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a*a) + (2 * a * b) - (b*b);

if (value > 0) {
	console.log('Wynik jest dodatni = ' + value);
} else if (value == 0) {
	console.log('Wynik jest równy zero = ' + value);
} else {
 	console.log('Wynik jest ujemny = ' + value);
}
