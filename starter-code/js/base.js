$(document).ready(function(){

var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var cardsInPlay = [];

var shuffledCards = [];

var $top = $('.row1')

var $bottom = $('.row2')

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

shuffle(cards);



function dealTop () {
	for (var i = 0; i<2; i++) {
		$deal = $('<div>').addClass('deal col col-md-4')
		$deal.attr('data-card', cards[i]);
		//$deal.on('click', isTwoCards);
		$top.append($deal);
    $('.deal').eq(1).attr('id', 'faceDown');
	}
};

function dealBottom () {
  for (var i = 2; i<4; i++) {
		$deal = $('<div>').addClass('deal col col-md-4')
		$deal.attr('data-card', cards[i]);
		//$deal.on('click', isTwoCards);
    $bottom.append($deal);
	}
};

dealTop();
dealBottom();



})
