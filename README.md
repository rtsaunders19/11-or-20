##RULES
This game is a lot like blackjack in that you and the dealer are dealt 2 cards with one of the dealers hidden. The values vary from 1-13. Jack is 11, Queen is 12, and King is 13. The goal of each hand is to try and get your total as close to 11 or 20. There is no bust. Whoever has the total that is closest to one of these two numbers wins the hand. You only get to hit once so every hand is just one decision, usually whether you should hit and try to get closer to 20 or stay near 11 and see what two cards the dealer has. A push is counted as a win. The goal of the whole game is to beat the dealer at least 11 times on 20 tries. The quicker you get to 11 the better your score.

##Explanation
At first I wanted to create a blackjack game but found that a bit too difficult and unoriginal. I also figured
that I would end up copying a lot of code off the internet because the javascript for blackjack is definitely out there
and easy to find. So instead I came up with my own game that uses half a deck of cards and gives them values from 1-13 instead of 1-10 or 11. It was easier to do it that way because the suit doesn't matter for my game and I could use strictly numbers as identifiers for all of the cards.

Before I started I planned my set up to just be a header then three rows of three columns and a footer. DOM manipulation was very important in programing my game because I treated elements like cards and the cards need to interact with the player. To deal the cards I remembered how we created the board in the memory game prework so I used a loop function to create divs and assign them classes and attributes from the array. Dealing was tricky because I wanted it to deal the dealers first card and then the players first card and then the dealers second card and so on. That ended up being too hard for me to figure out so I just dealt the dealers hand and then the players hand by appending them to row1 and row2 in the loop function. Then I used the .hide() method to hide the dealers second card and the players hit card.

My biggest feat was figuring out the code that finds the smaller difference between the sum of the dealers and players cards and either 11 or 20. I used if statements inside if statements to find the smallest difference and use that to compare the dealers smallest difference to the players. If the players difference is smaller it adds 1 to your score.

var dealerLowValue = Math.abs(dealersHand[0]+dealersHand[1]-11);
var dealerHighValue = Math.abs(dealersHand[0]+dealersHand[1]-20)
var playerLowHitValue = Math.abs(playersHand[0]+playersHand[1]+playersHand[2]-11)
var playerHighHitValue = Math.abs(playersHand[0]+playersHand[1]+playersHand[2]-20)

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

It was really difficult for me to figure out how I would go back and forth between one and two players. After some failed attempts I found that the .toggle() method would allow me to hide and show player 1 and player 2, but they somehow had to be offset when the player won or lost the game. So when the game starts player 2 is set to toggle and player 1 shows and when the player wins or loses I use the toggle method on both so player 1 is hidden and player 2 shows.
