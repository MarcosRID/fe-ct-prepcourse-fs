/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
	// Retornar el primer elemento del arreglo recibido por parámetro.
	// Tu código:
	return array[0];
}

function devolverUltimoElemento(array) {
	// Retornar el último elemento del arreglo recibido por parámetro.
	// Tu código:
	return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
	// Retornar la longitud del arreglo recibido por parámetro.
	// Tu código:
	return array.length;
}

function incrementarPorUno(array) {
	// El arreglo recibido por parámetro contiene números.
	// Retornar un arreglo con los elementos incrementados en +1.
	// Tu código:
	for (let index = 0; index < array.length; index++) {
		array[index] += 1;
	}

	return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
	// Agrega el "elemento" al final del arreglo recibido.
	// Retorna el arreglo.
	// Tu código:

	var arrayNuevo = array;
	arrayNuevo.push(elemento);

	return arrayNuevo;
}

function agregarItemAlComienzoDelArray(array, elemento) {
	// Agrega el "elemento" al comienzo del arreglo recibido.
	// Retorna el arreglo.
	// Tu código:
	var arrayNuevo = array;
	arrayNuevo.unshift(elemento);

	return arrayNuevo;
}

function dePalabrasAFrase(palabras) {
	// El argumento "palabras" es un arreglo de strings.
	// Retornar un string donde todas las palabras estén concatenadas
	// con un espacio entre cada palabra.
	// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
	// Tu código:

	var string = "";

	for (let index = 0; index < palabras.length; index++) {
		string += palabras[index];

		if (index != palabras.length - 1) {
			string += " ";
		}
	}

	return string;
}


function arrayContiene(array, elemento) {
	// Verifica si el elemento existe dentro del arreglo recibido.
	// Retornar true si está, o false si no está.
	// Tu código:

	var rta = false;
	for (let index = 0; index < array.length; index++) {
		if (array[index] == elemento) {
			rta = true;
		}
	}
	return rta;
}

function agregarNumeros(arrayOfNums) {
	// El parámetro "arrayOfNums" debe ser un arreglo de números.
	// Suma todos los elementos y retorna el resultado.
	// Tu código:

	var bandera = true;
	var sumador = 0;

	for (let index = 0; index < arrayOfNums.length; index++) {
		if (!Number.isInteger(arrayOfNums[index])) {
			bandera = false;
			break;
		}
	}

	if (bandera) {
		for (var i = 0; i < arrayOfNums.length; i++) {
			console.log(arrayOfNums[i]);
			sumador += arrayOfNums[i];
		}
	}

	return sumador;
}

function promedioResultadosTest(resultadosTest) {
	// El parámetro "resultadosTest" es un arreglo de números.
	// Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
	// Tu código:

	return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
	// El parámetro "arrayOfNums" es un arreglo de números.
	// Retornar el número más grande.
	// Tu código:

	return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
	// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
	// Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
	// [PISTA]: "arguments" es un arreglo.
	// Tu código:

	let multiplicador = 0;

	if (arguments.length != 0) {
		multiplicador = arguments[0];

		for (let index = 1; index < arguments.length; index++) {
			multiplicador *= arguments[index];
		}
	}
	return multiplicador;
}

//multiplicarArgumentos(1, 2);

function cuentoElementos(array) {
	// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
	// Tu código:

	var arrayMayorA18 = [];

	for (let index = 0; index < array.length; index++) {
		if (array[index] > 18) {
			arrayMayorA18.push(array[index]);
		}
	}
	return arrayMayorA18.length;
}

function diaDeLaSemana(numeroDeDia) {
	// Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
	// Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
	// si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
	// Tu código:
	var rta = "Error 404";

	switch (numeroDeDia) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			rta = "Es dia laboral";
			break;
		case 1:
		case 7:
			rta = "Es fin de semana";

			break;
	}
	return rta;
}

function empiezaConNueve(num) {
	// Esta función recibe por parámetro un número.
	// Debe retornar true si el entero inicia con 9 y false en otro caso.
	// Tu código:

	let flag = false;

	let numeroString = num.toString();
	let encontrarNumero_9 = numeroString.split("");

	if (encontrarNumero_9[0] == "9") {
		flag = true;
	}

	return flag;
}

function todosIguales(array) {
	// Si todos los elementos del arreglo son iguales, retornar true.
	// Caso contrario retornar false.
	// Tu código:

	return array.every((num) => {
		return num == array[0];
	});
}

function mesesDelAño(array) {
	// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
	// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
	// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
	// Tu código:

	let arreglo;

	if (array.includes("Enero", "Marzo", "Noviembre")) {
		arreglo = ["Enero", "Marzo", "Noviembre"];
	} else {
		arreglo = "No se encontraron los meses pedidos.";
	}

	return arreglo;
}

function tablaDelSeis() {
	// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
	// La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
	// Tu código:

	let resultado = 0;
	let tablaDel_6 = [];
	for (let index = 0; index <= 10; index++) {
		resultado = index * 6;
		tablaDel_6[index] = resultado;
	}
	return tablaDel_6;
}

function mayorACien(array) {
	// La función recibe un arreglo con enteros entre 0 y 200.
	// Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
	// Tu código:

	let nuevoArreglo = [];

	array.forEach((element) => {
		if (element > 100) {
			nuevoArreglo.push(element);
		}
	});

	return nuevoArreglo;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
	// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
	// Guardar cada nuevo valor en un arreglo y retornarlo.
	// Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
	// la ejecución y retornar el string: "Se interrumpió la ejecución".
	// [PISTA]: utiliza el statement 'break'.
	// Tu código:

	let rta = [];

	for (let index = 0; index < 10; index++) {
		num += 2;
		rta.push(num);

		if (num == index) {
			rta = "Se interrumpió la ejecución";
			break;
		}
	}

	return rta;
}

function continueStatement(num) {
	// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
	// Guardar cada nuevo valor en un array y retornarlo.
	// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
	// se continua con la siguiente iteración.
	// [PISTA]: utiliza el statement 'continue'.
	// Tu código:

	let rta = [];

	for (let index = 0; index < 10; index++) {
		
      if (index == 5) {
			continue;
		}
		num += 2;
		rta.push(num);
	}

	return rta;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
	devolverPrimerElemento,
	devolverUltimoElemento,
	obtenerLargoDelArray,
	incrementarPorUno,
	agregarItemAlFinalDelArray,
	agregarItemAlComienzoDelArray,
	dePalabrasAFrase,
	arrayContiene,
	agregarNumeros,
	promedioResultadosTest,
	numeroMasGrande,
	multiplicarArgumentos,
	cuentoElementos,
	diaDeLaSemana,
	empiezaConNueve,
	todosIguales,
	mesesDelAño,
	tablaDelSeis,
	mayorACien,
	breakStatement,
	continueStatement,
};
