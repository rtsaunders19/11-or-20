$(document).ready(function(){

var cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

var cardsInPlay = [];

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

console.log(shuffle(cards));



function dealTop () {
	for (var i = 0; i<2; i++) {
		$deal = $('<div>').addClass('deal col col-md-4')
	  $deal.attr('data-card', cards[i])
		//$deal.on('click', isTwoCards);
		$top.append($deal);
    $('.deal').eq(1).attr('id', 'faceDown');
	}
};

function dealBottom () {
  for (var i = 2; i<4; i++) {
		$deal = $('<div>').addClass('deal col col-md-4')
	  $deal.attr('data-card', cards[i])
		//$deal.on('click', isTwoCards);
    $bottom.append($deal);
	}
};

dealTop();
dealBottom();

console.log($('.deal').eq(1).attr('data-card'));

for(var i=0; i<4; i++){
  if($('.deal').eq(i).attr('data-card')==='1') {
    $('.deal').eq(i).text('1');
} else if($('.deal').eq(i).attr('data-card')==='2') {
  $('.deal').eq(i).text('2');
} else if($('.deal').eq(i).attr('data-card')==='3') {
  $('.deal').eq(i).text('3');
} else if($('.deal').eq(i).attr('data-card')==='4') {
  $('.deal').eq(i).text('4');
} else if($('.deal').eq(i).attr('data-card')==='5') {
  $('.deal').eq(i).text('5');
} else if($('.deal').eq(i).attr('data-card')==='6') {
  $('.deal').eq(i).text('6');
} else if($('.deal').eq(i).attr('data-card')==='7') {
  $('.deal').eq(i).text('7');
} else if($('.deal').eq(i).attr('data-card')==='8') {
  $('.deal').eq(i).text('8');
} else if($('.deal').eq(i).attr('data-card')==='9') {
  $('.deal').eq(i).text('9');
} else if($('.deal').eq(i).attr('data-card')==='10') {
  $('.deal').eq(i).text('10');
} else if($('.deal').eq(i).attr('data-card')==='11') {
  $('.deal').eq(i).text('11');
} else if($('.deal').eq(i).attr('data-card')==='12') {
  $('.deal').eq(i).text('12');
} else if($('.deal').eq(i).attr('data-card')==='13') {
  $('.deal').eq(i).text('13');
}}

$('#faceDown').text('')


})
