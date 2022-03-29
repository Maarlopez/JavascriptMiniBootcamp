//1 - Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de la variable por la terminal.

let noValgoNi5 = 4;

console.log(noValgoNi5)

//2 - Declarar 3 variables:
// miAnioDeNacimiento y asignarle el valor de tu año de nacimiento.
// meGustariaTener80Anios y asignarle el número 80.
// voyATener80ElAnio y asignarle el resultado de sumar las 2 variables anteriores

let miAnioDeNacimiento = 1997;
let meGustariaTener80Anios = 80;
let voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios;

console.log('Voy a tener 80 años en el año '+voyATener80ElAnio)

// 3 - Declarar 3 variables:
// variable costoDeUnaTele y asignarle el valor 10000.
// variable ahorros y asignarle el valor 9000.
// variable dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.

let costoDeUnaTele = 10000;
let ahorros = 9000;
let dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log('Me faltan $'+dineroQueMeFalta)

// 4 - Declarar 3 variables:
// diasPorAnio y asignarle el número 365
// cantidadDeAniosEnUnaDecada y asignarle el número 10
// cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.
// Mostrar por la terminal cuantos días hay en una década.

let diasPorAnio = 365;
let cantidadDeAniosEnUnaDecada = 10;
let cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;

console.log('Hay '+cantidadDeDiasEnUnaDecada+' días en una decada.')

// 5 - Teniendo en cuenta que una pizza siempre tiene 8 porciones, 
// mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.

let pizza = 8;
let porcionesEnTotal = 24;
let pizzasEnTotal = porcionesEnTotal / pizza;

console.log("La cantidad de pizzas que tengo en la mesa son: " + pizzasEnTotal);

// 6 - Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente 
//el animal que más te gusta. 
//Escribir el código necesario para mostrar por la terminal el valor true si 
//el animal que más te gusta es un 'perro'. 
//De lo contrario, mostrar false. Usar el operador de igualdad (==).

let miAnimalFavorito = "perro"
if (miAnimalFavorito == "perro") {
    console.log(true)
}
else {
    console.log(false)
}

// 7 - Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena 
//de caracteres 'flan' y 'flan con dulce de leche' 
//(Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).

console.log("flan" != "flan dulce de leche");

// 8 - Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad 
//y el número 17 usando el operador > (mayor). Mostrar el valor de la variable por la terminal.

let soyMayorDeEdad = 24 > 17;

console.log(soyMayorDeEdad);

// 9 - Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad 
//y el número 25 usando el operador < (menor). Mostrar el valor de la variable por la terminal.

let soyMenorDe25 = 24 < 25;

console.log(soyMenorDe25);


// 10 - Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre 
// del mes actual es igual a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). 
// Mostrar el valor de la variable por la terminal.

let estamosEnEnero = "Enero";
mesActual="Marzo";
comparoMeses = estamosEnEnero === mesActual;

console.log(comparoMeses);

// 11 - Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si 
//el nombre del mes actual y el string 'Enero' son diferentes. 
//Hacerlo usando el operador de desigualdad estricta (!==). Mostrar el valor de la variable por la terminal.

mesActual="Marzo";
let noEstamosEnEnero = "Enero" !== mesActual;

console.log(noEstamosEnEnero);

// 12 -Declarar 3 variables:
// miNotaEnElParcial y asignarle un 8
// notaMinimaParaAprobar y asignarle un 6
//estoyAprobado y asignarle el resultado de comparar el número las dos 
//variables anteriores usando el operador >=(Mayor o igual).

// Mostrar el valor de la variable estoyAprobado por la terminal.


let miNotaEnElParcial = 8;
let notaMinimaParaAprobar = 6;
let estoyAprobado = miNotaEnElParcial>=notaMinimaParaAprobar;

console.log(estoyAprobado);

// 13 - Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar 
//con el operador <= (Menor o igual) si la hora actual es menor o igual a 12. Mostrar el valor 
//por la terminal.

let esHoraDeAlmorzar = (22<=12);
console.log(esHoraDeAlmorzar);

/********************************************************************************* */

// TP 3 - 2

// 1 - Definición de Algoritmo (dar un ejemplo)

/* Un algoritmo es un conjunto ordenado y finito de operaciones que deben seguirse para resolver un problema.
Deseas saber el número telefónico de una persona, entonces el algoritmo
para resolver este problema sería:
1. Primero buscar la guía telefónica.
2. Luego abrirla en la mitad.
3. Luego ver en qué mitad está el nombre (si el nombre empieza con "b"
entonces está en la primera mitad)
4. Luego se toma esta mitad y se vuelve a partir y vuelves a ver en cual nueva
mitad está el nombre, y así se va repitiendo (eso es un bucle) hasta que
encuentras la página.
5. Luego buscas en la página de arriba hacia abajo el nombre.
6. Luego que lo encuentras vas a columna del número.
7. Lo lees.
8. Y cierras la guía.*/

// 2 - Que es Pseudocodigo (dar un ejemplo)

/*El pseudocódigo es una forma de escribir los pasos que va a ejecutar un programa de la 
forma más cercana al lenguaje de programación que se va a realizar.*/

// 3 - Realizar los siguientes problemas:

// a)Realizar un Programa en JavaScript que resuelva los siguientes problemas (los valores deben ser asignados 
//por ustedes):
    //superficie de un rectángulo
    //superficie de un triangulo
    //superficie de un circulo

let baseRectangulo = 2;
let alturaRectangulo = 3;
let superficieRectangulo = baseRectangulo * alturaRectangulo;

console.log(superficieRectangulo);

/**/ 

let baseTriangulo = 5;
let alturaTriangulo = 3;
let superficieTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log(superficieTriangulo);

/**/ 

const pi = 3.14;
var radioCirculo = 8;
var superficieCirculo = (pi * (radioCirculo * radioCirculo))

console.log(superficieCirculo);


// b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados.

let num1 = 2;
let num2 = 4;
let num3 = 6;

let producto = num1 * num2 * num3;
let suma = num1 + num2 + num3;
let promedio = suma / 3;

console.log(producto);
console.log(suma);
console.log(promedio);

// c) Una tienda ofrece un descuento del 15% sobre el total de cada compra y un cliente 
//desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 5 artículos los cuales 
//tendrán sus nombres y valores, luego mostrar el descuento aplicado mas el total final

let tazas = 7;
let agendas = 2;
let lapices = 8;
let lapiceras = 2;
let notasAdhesivas = 6;
let totalProductos = tazas + agendas + lapices + lapiceras + notasAdhesivas;
let descuento = ((totalProductos) * 0.15);
console.log("El descuento aplicado es: $" + descuento);
let totalConElDescuento = totalProductos - descuento;
console.log("El total final con el descuento es: $" + totalConElDescuento);


// d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, 
//asumiendo que la unidad cambiaría es un dato desconocido.

let cantidadPesos = 800;
let valorDolar = 200;
let equivalenciaEnDolares = cantidadPesos/valorDolar;

console.log(equivalenciaEnDolares);

// e) Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. 
//Realizar un algoritmo que dado el importe de una factura calcular el valor correspondiente al IVA.

let compra = 850;
const tasaDeIva = 0.21;
let iva = compra * tasaDeIva;
console.log("El IVA es de: ", iva);
