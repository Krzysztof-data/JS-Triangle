var a;
var b;
var value;

a = prompt('Podaj wartość a');
b = prompt('Podaj wartość b');
value = (a*a) + (2 * a * b) - (b*b);

if (value > 0) {
	console.log('Wynik jest dodatni = ' + value);
} else if (value == 0) {
	console.log('Wynik jest równy zero = ' + value);
} else {
 	console.log('Wynik jest ujemny = ' + value);
}
