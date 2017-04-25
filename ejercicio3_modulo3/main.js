var deck = [];
var suits = ["hearts", "diamonds", "spades", "clubs"];
var numbers = 13;

for (var i = 0; i < suits.length; i = i + 1) {
  for (var j = 0; j < numbers; j = j + 1) {
    var card = {suit: suits[i], number: j + 1};
    deck [deck.length] = card;
  }
}

var redPairDeck = [];

for (var i = 0; i < deck.length; i = i + 1){
  if (deck[i].suit === "hearts" || deck[i].suit === "diamonds"){
    if (deck[i].number % 2 === 0){
      redPairDeck [redPairDeck.length] = deck[i];
    }
  }
}

console.log ("La última carta par del mazo rojo es " + redPairDeck[redPairDeck.length - 1].number + " de " + redPairDeck[redPairDeck.length - 1].suit);
