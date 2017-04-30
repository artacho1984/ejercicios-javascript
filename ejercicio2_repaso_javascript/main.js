function caracterCentral(cadena) {
	var result = "Sólo funciono con cadenas de longitud impar";

	if (cadena.length % 2 !== 0) {
		result = cadena[(cadena.length - 1) / 2];
	}

	return result;
}

var test1 = "hola";
console.log ("La cadena de texto " + test1 + " tiene en el centro: " + caracterCentral(test1));

var test2 = "mundo";
console.log ("La cadena de texto " + test2 + " tiene en el centro: " + caracterCentral(test2));
