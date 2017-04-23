var suits = "hsdc";
for (var suit = 0; suit < 4; suit = suit + 1){
  for (var number = 1; number <= 12; number = number + 1){
    var card = suits [suit] + number;
    console.log ("Comprobando carta " + card);

    if (card [0] === "h" || card [0] === "d"){
      if (number % 3 === 0){
        console.log ("La siguiente carta es roja y múltiplo de 3: " + card);
      }
    }
  }
}
