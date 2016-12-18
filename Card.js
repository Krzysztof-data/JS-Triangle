function Card(id, name) {
	var self = this;

	this.id = id;
	this.name = name;
	this.element = createCard();

	function createCard() {
		var card = $('<li>').addClass('card');
		var cardDelete = $('<button>').addClass('card-delete').text('X');
		var cardDescription = $('<p>').addClass('card-description').text(self.name);

		cardDelete.click(function(){
			self.removeCard();
		});

		card.append(cardDelete);
		cardDescription.text(self.name);
		card.append(cardDescription)
		return card;
	}
}

Card.prototype = {
	removeCard: function() {
	  var self = this;
	  $.ajax({
	  	url: baseUrl + '/card/' + self.id,
	  	method: 'DELETE',
	  	success: function() {
	  		self.element.remove();
	  	}
	  });
	}
}
