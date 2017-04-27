function count(hand) {
  var score = 0;
  for (var i = 0; i < hand.length; i = i + 1){
    if (hand[i].number === 1){
      score = score + 20;
    } else {
      score = score + hand[i].number;
    }
  }
  return score;
}
var deck = [];
var card1 = {suit: "hearts", number: 1};
var card2 = {suit: "spades", number: 5};
var card3 = {suit: "clubs", number: 7};
var card4 = {suit: "spades", number: 3};
var card5 = {suit: "hearts", number: 9};
var card6 = {suit: "diamonds", number: 7};

deck[deck.length] = card1;
deck[deck.length] = card2;
deck[deck.length] = card3;

var result = count(deck);

console.log ("La puntuación de la mano es: " + result);

var newDeck = [];

newDeck[newDeck.length] = card4;
newDeck[newDeck.length] = card5;
newDeck[newDeck.length] = card6;
newDeck[newDeck.length] = card3;

var newResult = count(newDeck);

console.log ("La puntuación de la mano es: " + newResult);
