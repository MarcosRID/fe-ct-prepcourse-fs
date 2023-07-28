/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
	// Recibes un objeto. Tendrás que crear un arreglo de arreglos.
	// Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
	// Estos elementos debe ser cada par clave:valor del objeto recibido.
	// [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
	// Tu código:

	let arregloPadre = [];
	let indice = 0;

	for (const key in objeto) {
		arregloPadre[indice] = [key.toString(), objeto[key]];
		indice++;
	}

	return arregloPadre;
}

function numberOfCharacters(string) {
	// La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
	// letras del string, y su valor es la cantidad de veces que se repite en el string.
	// Las letras deben estar en orden alfabético.
	// [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
	// Tu código:

	let letras = string.split("");
	const objeto = {};
	
	
	for (let index = 0; index < letras.length; index++) {

		if (!objeto.hasOwnProperty(letras[index])) 
		{
			objeto[letras[index]] = 0;
			
		}
	}

	letras.forEach((element) => {
		if (objeto.hasOwnProperty(element)) {
			objeto[element]++;
		}
	});

	return objeto;
}


function capToFront(string) {
	// Recibes un string con algunas letras en mayúscula y otras en minúscula.
	// Debes enviar todas las letras en mayúscula al comienzo del string.
	// Retornar el string.
	// [EJEMPLO]: soyHENRY ---> HENRYsoy
	// Tu código:

	let letras = string.split("");
	let arrayMinusculas = "";
	let arrayMayusculas = "";

	for (let index = 0; index < letras.length; index++) {
		let letraActual = letras[index];

		if (letras[index] === letraActual.toLowerCase()) {
			arrayMinusculas += letraActual;
		} else if (letras[index] === letraActual.toUpperCase()) {
			arrayMayusculas += letraActual;
		}
	}
	
	return arrayMayusculas += arrayMinusculas
}



function asAmirror(frase) {
	// Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
	// La diferencia es que cada palabra estará escrita al inverso.
	// [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
	// Tu código:
	
	const palabras = frase.split(" ");
	let stringActual = ""
	let rta = ""

	palabras.forEach(palabra => 
	{ Array.from(palabra).forEach( letra => 
	{ stringActual = `${letra}${stringActual}`}) ,rta += stringActual + ` ` , stringActual = ""  })


	return rta.trim()	;
}

function capicua(numero) {
	// Si el número que recibes es capicúa debes retornar el string: "Es capicua".
	// Caso contrario: "No es capicua".
	// Tu código:

	let numeroSeparado = numero.toString().split("");
	let primeraParte = numeroSeparado.slice(0, numeroSeparado.length / 2);
	let segundaParte;
	let segundaParteInversa
	let rta = "No es capicua";

	if (numero >= 0 && numero <= 9) {
		rta = "Es capicua";
	} else if (numeroSeparado.length % 2 == 0) {
		segundaParte = numeroSeparado.slice(numeroSeparado.length / 2,numeroSeparado.length);
	
		segundaParteInversa = segundaParte.reverse();
	} else if (numeroSeparado.length % 2 != 0) {
		segundaParte = numeroSeparado.slice(1 + numeroSeparado.length / 2,numeroSeparado.length);
		
		segundaParteInversa = segundaParte.reverse();
	}


	for (let index = 0; index < primeraParte.length; index++) 
	{
		if (primeraParte[index] !== segundaParte[index]) 
		{
			rta = "No es capicua"
			break;
		}
		rta = "Es capicua"
	}

	return rta;
}


function deleteAbc(string) {
	// Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
	// Retorna el string sin estas letras.
	// Tu código:

	const letras = string.split("")
	let stringNuevo = ""

	
	letras.forEach( letra => { letra == "a" ?  undefined : letra == 'b' ? undefined: letra == 'c' ? undefined : stringNuevo += letra  } )



	return stringNuevo

}

function sortArray(arrayOfStrings) {
	// Recibes un arreglo de strings.
	// Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
	// de la longitud de cada string.
	// [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
	// Tu código:
	
	const nuevoArray = arrayOfStrings
	let palabraActual
	
	for (let i = 0; i < nuevoArray.length - 1; i++) 
	{
		for (let j =  i + 1 ; j <  nuevoArray.length ; j++) 
		{
			if (nuevoArray[i].length > nuevoArray[j].length) 
			{
				palabraActual = nuevoArray[i]
				nuevoArray[i] = nuevoArray[j]
				nuevoArray[j] = palabraActual
			}
		}
	}
	
	return nuevoArray
}

function buscoInterseccion(array1, array2) {
	// Recibes dos arreglos de números.
	// Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
	// [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
	// Si no tienen elementos en común, retornar un arreglo vacío.
	// [PISTA]: los arreglos no necesariamente tienen la misma longitud.
	// Tu código:


	const nuevoArray = []
	
	array1.forEach( (element) => { array2.includes(element) ? nuevoArray.push(element) : undefined} )

	return nuevoArray
}
console.log(sortArray(["You", "are", "beautiful", "looking"])+ 2)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
	deObjetoAarray,
	numberOfCharacters,
	capToFront,
	asAmirror,
	capicua,
	deleteAbc,
	sortArray,
	buscoInterseccion,
};
