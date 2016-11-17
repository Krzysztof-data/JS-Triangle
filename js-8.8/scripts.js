var txt = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';

var animalUpperCase = animal.toUpperCase();
var txtChange = txt.replace('Papugi', animalUpperCase);
var halfTxtChange = Math.round(txtChange.length / 2);
var partOfChange = txtChange.slice(0, halfTxtChange); 


console.log(partOfChange);
document.write(partOfChange);
