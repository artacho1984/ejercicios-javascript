var deck = [];
var suits = ["hearts", "diamonds", "spades", "clubs"];
var numbers = 13;

for (var i = 0; i < suits.length; i = i + 1) {
  for (var j = 0; j < numbers; j = j + 1) {
    var card = {suit: suits[i], number: j + 1};
    deck [deck.length] = card;
  }
}
for (var i = 0; i < deck.length; i = i + 1){
  console.log ("La carta " + (i + 1) + " del mazo es " + deck[i].number + " de " + deck[i].suit);
}
