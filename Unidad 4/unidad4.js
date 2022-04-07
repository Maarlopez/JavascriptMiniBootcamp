//1. Realiza un programa para obtener el menor de 2 números ingresados.

var num1 =prompt("Ingrese el primer numero");
var num2 =prompt("Ingrese el segundo numero");
if(num1===num2)
    alert("Son iguales");
if(num1>num2)
    alert("El numero menor es : "+num2);
else
    alert("El numero menor es : "+num1);

//2. Realizar un algoritmo que determine  si un número es par o impar

var numero = 0;

numero = prompt('Indique un número: ', '');

if((numero % 2) == 0){
  console.log(numero + ' es par');
}else{
  console.log(numero + ' es impar');
}

//3. Declarar una variable que se llame ganeLaCarrera y asignarle el valor false. 
//Mostrar por la terminal un mensaje que diga 'Ganaste' si ganeLaCarrera es verdadero y 
// 'Perdiste' si su valor es falso.

var ganeLaCarrera = false;

if(ganeLaCarrera==true)
    alert("Ganaste");
else
    alert("Perdiste");

//4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. 
//Mostrar por la terminal uno de los siguientes mensajes según la posición que salió el corredor:
/*'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.*/

var posicionEnLaCarrera = 6;

posicionEnLaCarrera --;

if(posicionEnLaCarrera == 1)
    console.log('FELICITACIONES, SALISTE 1RO');
if(posicionEnLaCarrera == 2)
    console.log('Te falto poquito para ganar');
if(posicionEnLaCarrera == 3)
    console.log('Sos un orgullo para tu familia');
if(posicionEnLaCarrera > 3)
    console.log('Volvé a tu casa');
else
    console.log('No tires fruta');

//5. Repetir el ejercicio anterior pero usando un solo console.log en todo el programa.

//6 - Realizar un programa que calcule el importe total a abonar en una factura, 
//teniendo en cuenta que si el importe total supera los 1000$ se aplica un descuento del 20%

let descuento, monto_de_la_compra, importe_total;

monto_de_la_compra = parseFloat (prompt("Ingrese monto de la compra: "));
descuento=0;

if(monto_de_la_compra > 1000){
    descuento = monto_de_la_compra*0.20;
    importe_total = monto_de_la_compra - descuento;
    alert("El importe total a abonar es de: "+ importe_total);
}
    
alert("El importe total a abonar es de: "+ monto_de_la_compra);

//7. Hacer un programa para obtener las comisiones por ventas de un vendedor. Los datos que 
//se ingresan son monto vendido y código de vendedor. Si el código de vendedor es menor a 100 
//las comisiones son de un 30%, si el código esta entre 100 y 200 son del 20% y si es mayor a 200 10%. 
//Mostrar el código de vendedor, el monto vendido y el valor de las comisiones.

var monto_vendido, codigo_vendedor, comisiones;
var valor_comisiones;

codigo_vendedor = parseFloat (prompt("Ingrese codigo de vendedor: "));

if(codigo_vendedor<100)
    comisiones = 0.30;
    monto_vendido = monto_de_la_compra - comisiones;
    valor_comisiones = (monto_de_la_compra*comisiones)/1
    console.log(monto_vendido,codigo_vendedor,valor_comisiones);

if(codigo_vendedor>100 && codigo_vendedor<200)
    comisiones = 0.20;
    monto_vendido = monto_de_la_compra - comisiones;
    valor_comisiones = (monto_de_la_compra*comisiones)/1
    console.log(monto_vendido,codigo_vendedor,valor_comisiones);

if(codigo_vendedor>200)
    comisiones = 0.10;
    monto_vendido = monto_de_la_compra - comisiones;
    valor_comisiones = (monto_de_la_compra*comisiones)/1
    console.log(monto_vendido,codigo_vendedor,valor_comisiones);

//8. Se desea escribir los nombres de los días de la semana en función de la variable d (día) 
//introducida por teclado.  1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)
var nro1;                
                    do {nro1 = parseInt(prompt( "Introduzca un numero: " , "[entre 1 y 7]")); }
                    while (validaIngreso (nro1) );
                 
                 document.write("El dia de la semana para: " + nro1 + " es: <b> " + convierteDia (nro1) );

function validaIngreso (x){
                    if (x<1 || x>7) 
                        return true;       
                    else 
                        return false;
}
               
         
    function convierteDia  (dia)  {
    
    switch (dia) { 
        case 1: day = "Domingo"; 
        break; 
        case 2: day = "Lunes"; 
        break; 
        case 3: day = "Martes"; 
        break; 
        case 4: day = "Miércoles"; 
        break; 
        case 5: day = "Jueves"; 
        break; 
        case 6: day = "Viernes"; 
        break; 
        case 7: day = "Sábado"; 
     }

  return day;

}


//9. Hacer un algoritmo para un programa que calcule el pago que hacen un grupo de personas para ver 
//una película teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona 
//y para grupos de 8 personas o más el pago es 0.5 pesos por persona.

var pago, grupo,persona;

pago = 0;

if(grupo<8)
    pago = 1.5 * persona;

if(grupo>=8)
    pago = 0.5 * persona;

// 10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. 
//Escribir un programa que dado el monto de una compra como valor numérico, 
//diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

monto_de_la_compra = parseFloat (prompt("Ingrese monto de la compra: "));
descuento=0;

if(monto_de_la_compra > 100){
    descuento = monto_de_la_compra*0.15;
    importe_total = monto_de_la_compra - descuento;
    alert("El importe total a abonar es de: "+ importe_total);
}
    
else
    alert("El importe total a abonar es de: "+ monto_de_la_compra);
