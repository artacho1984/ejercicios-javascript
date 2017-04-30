function encuentraPares(numeros){
	var resultado = [];

	for (var i = 0; i < numeros.length; i++) {
		if (numeros[i] % 2 === 0) {
			resultado[resultado.length] = numeros[i];
		}
	}

	return resultado;
}

var test1 = [1, 2, 3, 4 ,5 ,6, 7, 8];
console.log("Los números pares de " + test1 + " son: " + encuentraPares(test1));

var test2 = [5, 10, 27, 31, 49, 52, 73, 99];
console.log("Los números pares de " + test2 + " son: " + encuentraPares(test2));
