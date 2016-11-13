// Functions

var a = 4;
    h = 5;

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
      console.log('Nieprawidłowe dane');
    } else {
    	return (a * h / 2);	
    } 
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(6, 8);
var triangle3Area = getTriangleArea(7, 9);

console.log(getTriangleArea(10, 6));
