// Tables 

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

newName = 'Marian';
if (allNames.indexOf(newName) == -1) {
     newName = allNames.push('Marian');
}

console.log(allNames);



