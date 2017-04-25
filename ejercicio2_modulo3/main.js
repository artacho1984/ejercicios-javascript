var deck = [];
var suits = ["hearts", "diamonds", "spades", "clubs"];
var numbers = 13;

for (var i = 0; i < suits.length; i = i + 1) {
  for (var j = 0; j < numbers; j = j + 1) {
    var card = {suit: suits[i], number: j + 1};
    deck [deck.length] = card;
  }
}

var redDeck = [];
var blackDeck = [];

for (var i = 0; i < deck.length; i = i + 1){
  if (deck[i].suit === "hearts" || deck[i].suit === "diamonds"){
    redDeck [redDeck.length] = deck[i];
  } else {
    blackDeck [blackDeck.length] = deck[i];
  }
}
for (var i = 0; i < redDeck.length; i = i + 1){
  console.log ("La carta " + (i + 1) + " del mazo rojo es " + redDeck[i].number + " de " + redDeck[i].suit);
}
for (var i = 0; i < blackDeck.length; i = i + 1){
  console.log ("La carta " + (i + 1) + " del mazo negro es " + blackDeck[i].number + " de " + blackDeck[i].suit);
}
