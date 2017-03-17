$(document).ready(function(){

var cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

var dealersHand = [];

var playersHand = [];

var $top = $('.row1')

var $bottom = $('.row2')

var score = 0

var tries = 0



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
	for (var i=0; i<2; i++) {
		$deal = $('<div>').addClass('deal col1 col-md-4')
	  $deal.attr('data-card', cards[i])
		$top.append($deal);
    $('.deal').eq(1).attr('id', 'faceDown');
	}
};

function dealBottom () {
  for (var i=2; i<5; i++) {
		$deal = $('<div>').addClass('deal col2 col-md-4')
	  $deal.attr('data-card', cards[i])
    $bottom.append($deal);
	}
};

dealTop();
dealBottom();



//console.log($('.deal').eq(1).attr('data-card'));

$('.try').on('click', function(){
  dealTop();
  dealBottom();
  showCards();
  $('#faceDown').hide();
  $('.col2').eq(2).hide();
})

function showCards () {
for(var i=0; i<5; i++){
  if($('.deal').eq(i).attr('data-card')==='1') {
    $('.deal').eq(i).html("<img src='../images/ace-of-spades.png' height='242px' width='290px' alt='ace-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='2') {
  $('.deal').eq(i).html("<img src='../images/two-of-spades.png' height='242px' width='290px' alt='two-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='3') {
  $('.deal').eq(i).html("<img src='../images/three-of-spades.png' height='242px' width='290px' alt='three-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='4') {
  $('.deal').eq(i).html("<img src='../images/four-of-spades.png' height='242px' width='290px' alt='four-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='5') {
  $('.deal').eq(i).html("<img src='../images/five-of-spades.png' height='242px' width='290px' alt='five-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='6') {
  $('.deal').eq(i).html("<img src='../images/six-of-spades.png' height='242px' width='290px' alt='six-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='7') {
  $('.deal').eq(i).html("<img src='../images/seven-of-spades.png' height='242px' width='290px' alt='seven-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='8') {
  $('.deal').eq(i).html("<img src='../images/eight-of-spades.png' height='242px' width='290px' alt='eight-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='9') {
  $('.deal').eq(i).html("<img src='../images/nine-of-spades.png' height='242px' width='290px' alt='nine-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='10') {
  $('.deal').eq(i).html("<img src='../images/ten-of-spades.JPEG' height='242px' width='290px' alt='ten-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='11') {
  $('.deal').eq(i).html("<img src='../images/jack-of-spades.JPEG' height='242px' width='290px' alt='jack-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='12') {
  $('.deal').eq(i).html("<img src='../images/queen-of-spades.png' height='242px' width='290px' alt='queen-of-spades'>");
} else if($('.deal').eq(i).attr('data-card')==='13') {
  $('.deal').eq(i).html("<img src='../images/king-of-spades.png' height='242px' width='290px' alt='king-of-spades'>");
}}
}

showCards();

$('#faceDown').hide();
$('.col2').eq(2).hide();


$('.stay').on('click', function(){
  $('#faceDown').show();
  tries++
  for(var i=1; i<3; i++) {
    var collectDealer = parseInt($('.col1').eq(i).attr('data-card'));
    dealersHand.push(collectDealer);
}
  for(var i=0; i<2; i++) {
    var collectPlayer = parseInt($('.col2').eq(i).attr('data-card'));
    playersHand.push(collectPlayer);
}
console.log(dealersHand);
console.log(playersHand);

var dealerLowValue = Math.abs(dealersHand[0]+dealersHand[1]-11);
var dealerHighValue = Math.abs((dealersHand[0]+dealersHand[1])-20)
var playerLowValue = Math.abs((playersHand[0]+playersHand[1])-11)
var playerHighValue = Math.abs((playersHand[0]+playersHand[1])-20)

console.log(dealerHighValue);
console.log(dealerLowValue);
console.log(playerHighValue);
console.log(playerLowValue);

var stayResult = function(){
  if (dealerLowValue < dealerHighValue) {
      if (playerLowValue < playerHighValue) {
        if (playerLowValue <= dealerLowValue) {
        score++
      }
      } else {
        if (playerHighValue <= dealerLowValue) {
        score++
      }
      }
} else {
    if (playerLowValue < playerHighValue) {
      if (playerLowValue <= dealerHighValue) {
      score++
    }
    } else {
      if (playerHighValue <= dealerHighValue){
      score++
    }
    }
}}

stayResult();

$('.dealer-hit').text('Score ' + score + '/11 | ' + 'Tries ' + tries + '/20');

if (score===11) {
  alert('You win!');
  score=0;
  tries=0;
};

if (tries===20 && score<11) {
  alert('you lose!');
  score=0;
  tries=0;
};

});

$('.hit').on('click', function(){
  $('.col2').eq(2).show();
  $('#faceDown').show();
  tries++
  for(var i=1; i<3; i++) {
    var collectDealer = parseInt($('.col1').eq(i).attr('data-card'));
    dealersHand.push(collectDealer);
}
  for(var i=0; i<3; i++) {
    var collectPlayer = parseInt($('.col2').eq(i).attr('data-card'));
    playersHand.push(collectPlayer);
}
console.log(dealersHand);
console.log(playersHand);

var dealerLowValue = Math.abs(dealersHand[0]+dealersHand[1]-11);
var dealerHighValue = Math.abs(dealersHand[0]+dealersHand[1]-20)
var playerLowHitValue = Math.abs(playersHand[0]+playersHand[1]+playersHand[2]-11)
var playerHighHitValue = Math.abs(playersHand[0]+playersHand[1]+playersHand[2]-20)

console.log(dealerHighValue);
console.log(dealerLowValue);
console.log(playerHighHitValue);
console.log(playerLowHitValue);

var hitResult = function(){
  if (dealerLowValue < dealerHighValue) {
      if (playerLowHitValue < playerHighHitValue) {
        if (playerLowHitValue <= dealerLowValue) {
        score++
      }
      } else {
        if (playerHighHitValue <= dealerLowValue) {
        score++
      }
      }
} else {
    if (playerLowHitValue < playerHighHitValue) {
      if (playerLowHitValue <= dealerHighValue) {
      score++
    }
    } else {
      if (playerHighHitValue <= dealerHighValue){
      score++
    }
    }
}}

hitResult();

$('.dealer-hit').text('Score ' + score + '/11 | ' + 'Tries ' + tries + '/20');

if (score===11) {
  alert('You win!')
  score=0
  tries=0
};

if (tries===20 && score<11) {
  alert('you lose!')
  score=0
  tries=0
};

});

$('.shuffle').on('click', function(){
  console.log(shuffle(cards));
  dealersHand=[];
  playersHand=[];
  $('.deal').remove()
})



})
