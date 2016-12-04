var list = document.getElementById('Lista'),
	add = document.getElementById('addElem'),
	itemsByTagName = document.getElementsByTagName('li');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + itemsByTagName.length + '</li>'
});

