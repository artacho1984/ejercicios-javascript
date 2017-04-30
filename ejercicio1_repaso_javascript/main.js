function cuentaNumeros(numero, arrayDeNumeros) {
	var counter = 0;
	for (var i = 0; i < arrayDeNumeros.length; i++) {
		if (arrayDeNumeros[i] === numero) {
			counter = counter + 1;
		}
	}
	return counter;
}

var test = [1,3,4,2,1,3,4,5];
console.log ("El numero 1 sale en el array " + test + ": " + cuentaNumeros (1, test) + " vez/veces");
console.log ("El numero 5 sale en el array " + test + ": " + cuentaNumeros (5, test) + " vez/veces");
