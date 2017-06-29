$(document).ready(function(){

alert('11 0r 20? is the name of the game and it is a lot like blackjack in that you and the dealer are dealt 2 cards with one of the dealers hidden. The values vary from 1-13. Jack is 11, Queen is 12, and King is 13. The goal of each hand is to try and get your total as close to 11 or 20. There is no bust. Whoever has the total that is closest to one of these two numbers wins the hand. You only get to hit once so every hand is just one decision, usually whether you should hit and try to get closer to 20 or stay near 11 and see what two cards the dealer has. A push is counted as a win. The goal of the whole game is to beat the dealer at least 11 times on 20 tries. The quicker you get to 11 the better your score.');

var cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

var dealersHand = [];

var playersHand = [];

var $top = $('.row1')

var $bottom = $('.row2')

var score = 0

var tries = 0

var clicks = 0

//this hides player 2

$('.player2').toggle();

//shuffle cards function

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

//deal the dealers hand by creating divs and assigning them values from the card

function dealTop () {
	for (var i=0; i<2; i++) {
		$deal = $('<div>').addClass('deal col1 col-md-4')
	  $deal.attr('data-card', cards[i])
		$top.append($deal);
    $('.deal').eq(1).attr('id', 'faceDown');
	}
};

//deal the players hand starting at index 2 of the cards array and ending before index 5

function dealBottom () {
  for (var i=2; i<5; i++) {
		$deal = $('<div>').addClass('deal col2 col-md-4')
	  $deal.attr('data-card', cards[i])
    $bottom.append($deal);
	}
};

//function gives a card image according the the value the div receives from the shuffled cards array

function showCards () {
for(var i=0; i<5; i++){
  switch ($('.deal').eq(i).attr('data-card')) {
  case '1':
      $('.deal').eq(i).html("<img src='../images/ace-of-spades.png' height='242px' width='290px' alt='ace-of-spades'>");
      break;
  case '2':
      $('.deal').eq(i).html("<img src='../images/two-of-spades.png' height='242px' width='290px' alt='two-of-spades'>");
      break;
  case '3':
      $('.deal').eq(i).html("<img src='../images/three-of-spades.png' height='242px' width='290px' alt='three-of-spades'>");
      break;
  case '4':
      $('.deal').eq(i).html("<img src='../images/four-of-spades.png' height='242px' width='290px' alt='four-of-spades'>");
      break;
  case '5':
      $('.deal').eq(i).html("<img src='../images/five-of-spades.png' height='242px' width='290px' alt='five-of-spades'>");
      break;
  case '6':
      $('.deal').eq(i).html("<img src='../images/six-of-spades.png' height='242px' width='290px' alt='six-of-spades'>");
      break;
  case '7':
      $('.deal').eq(i).html("<img src='../images/seven-of-spades.png' height='242px' width='290px' alt='seven-of-spades'>");
      break;
  case '8':
      $('.deal').eq(i).html("<img src='../images/eight-of-spades.png' height='242px' width='290px' alt='eight-of-spades'>");
      break;
  case '9':
      $('.deal').eq(i).html("<img src='../images/nine-of-spades.png' height='242px' width='290px' alt='nine-of-spades'>");
      break;
  case '10':
      $('.deal').eq(i).html("<img src='../images/ten-of-spades.JPEG' height='242px' width='290px' alt='ten-of-spades'>");
      break;
  case '11':
      $('.deal').eq(i).html("<img src='../images/jack-of-spades.JPEG' height='242px' width='290px' alt='jack-of-spades'>");
      break;
  case '12':
      $('.deal').eq(i).html("<img src='../images/queen-of-spades.png' height='242px' width='290px' alt='queen-of-spades'>");
      break;
  case '13':
      $('.deal').eq(i).html("<img src='../images/king-of-spades.png' height='242px' width='290px' alt='king-of-spades'>");
}}
}




//all of our functions are defined we run them here as soon as the page loads to start the game
console.log(shuffle(cards));
dealTop();
dealBottom();
showCards();
//setting the dealers second card to hide and also hidding the player 'hit' card
$('#faceDown').hide();
$('.col2').eq(2).hide();





//removing the div cards which are all of the divs with the class 'deal'
//clearing dealers hand array and players hand array
//shuffling the cards
//button deals the cards by calling the functions
$('.try').on('click', function(){
  if (clicks===1) {
    clicks--
    $('.deal').remove();
    dealersHand=[];
    playersHand=[];
    console.log(shuffle(cards));
    dealTop();
    dealBottom();
    showCards();
  //these next two methods hide the dealers second card and the player's third card
    $('#faceDown').hide();
    $('.col2').eq(2).hide();
}
})




//clicking on stay collects the dealer and players card values and changes them from
//strings to numbers and puts them into the collectDealer and collectPlayer array
$('.stay').on('click', function(){
  if (clicks<1) {
  $('#faceDown').show();
  tries++
  clicks++
  console.log(clicks);
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

//this variable finds the difference between the sum of the two card values and 11 and 20

var dealerLowValue = Math.abs(dealersHand[0]+dealersHand[1]-11);
var dealerHighValue = Math.abs((dealersHand[0]+dealersHand[1])-20)
var playerLowValue = Math.abs((playersHand[0]+playersHand[1])-11)
var playerHighValue = Math.abs((playersHand[0]+playersHand[1])-20)

//dealerHighValue is the defference between the sum and 20 and low value difference between 11

console.log(dealerHighValue);
console.log(dealerLowValue);
console.log(playerHighValue);
console.log(playerLowValue);

//this function finds out the dealers lower difference and the players lower difference and compares them
// to do this we first find out if it's the dealer's high value that we're going to be using or the dealers low value.
// once we find that out it is just a matter of finding out whether to compare that value to the player's
// high or low value. So this function is split up into two sections. One for if the dealer's low value is
// better (top) and one if the dealers high value is better (bottom).
var stayResult = function(){
  if (dealerLowValue < dealerHighValue) {
      if (playerLowValue < playerHighValue) {
        //compares dealer low value
        if (playerLowValue <= dealerLowValue) {
        score++
      }
      } else {
        //compares dealer low value
        if (playerHighValue <= dealerLowValue) {
        score++
      }
      }
} else {
    if (playerLowValue < playerHighValue) {
      //compares dealer high value
      if (playerLowValue <= dealerHighValue) {
      score++
    }
    } else {
      //compares dealer high value
      if (playerHighValue <= dealerHighValue){
      score++
    }
    }
}}

stayResult();

$('.gameScore').text('Score ' + score + '/11 | ' + 'Tries ' + tries + '/20');

if (score===11) {
  alert('You Win!');
  score=0;
  tries=0;
  $('.player1').toggle();
  $('.player2').toggle();
};

if (tries===20 && score<11) {
  alert('you lose!');
  score=0;
  tries=0;
  $('.player1').toggle();
  $('.player2').toggle();
};

}
});













$('.hit').on('click', function(){
  if (clicks<1) {
  $('.col2').eq(2).show();
  $('#faceDown').show();
  tries++
  clicks++
  console.log(clicks);
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

$('.gameScore').text('Score ' + score + '/11 | ' + 'Tries ' + tries + '/20');

if (score===11) {
  alert('You Win!');
  score=0;
  tries=0;
  $('.player1').toggle();
  $('.player2').toggle();
};

if (tries===20 && score<11) {
  alert('you lose!');
  score=0;
  tries=0;
  $('.player1').toggle();
  $('.player2').toggle();
};
}
});


})
