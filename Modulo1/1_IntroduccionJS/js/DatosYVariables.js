//Variables:
//Espacio de memoria qeu se reserva para guardar algun tipo de dato.
//Es como una caja en donde puedes guardar tu ropa.
//Declarar una variable es como ponerle una etiqueta a los cajones;

var cajonDePlayeras;

///Declarando una variable y asignaapelllidondole un valor(Guardar un valor dentro de la variable):
var cajonDePantalones = "Pantalon azul";

var nombre = "MArtin";
console.log(nombre);

var apellido;
apellido = "Martínez";

//Diferencia entre var, let y const:
//var y ano se utiliza; ahora declaramso con let:

let casa = 'nueva';




//Tambien existen las Constantes:
const year = 1990;
//Mostramelo en consola
console.log(year);


//+++La diferencia entre const y let es basicamente:
//Voy a cambiar el valor de casa (ie sobreescribir el valor de la variable casa), la cual esta declarada con let:
casa = 'Otra nueva casa';

//Con const, como podras notar, no puede ser modificada. Y tiene que declararse y asignarle un valor al mismo tiempo(intenta hacerlo de otra forma y verás qeu te maraca error):
const nombre = 'Mart{in';



//>>>>>>>>>Tipos de Datos más usados (es la informacion con la que vamos a trabajar)>>>>>>>>>>>>>><<<<:

//********Number o numeros************
//Pueden ser enteros:
const numero = 100;
const numero2 = 200;
console.log(numero + numero2);

//Pueden ser flotantes:
let nuevoNumero = 13.4;


//********Strings o cadenas de texto**********
//Siempre entre comillas dobles o simples:
let nombre = 'Martin';
let edad = '36';  
console.log('Yo me llamo ' + nombre + ' y mi edad es '+ edad);

//*********AArray o Arreglos **************/
//ES una coleccion de distintos valores:
//Van siempre entre corchetes [];
//Los valores valores van separados por comas,
let mascotas = ['perro','gato','loro'];

//Pueden existir arrays anidados:
let diego = ['Diego',33,['Maldonado', 'Argentina']];


//*****Object u Objetos:**************
//ES una coleccion de pares
//cada valor asociado a otro dato
//Se escriben entre llaves {}
// let array = {Propiedad:Valor};

let persona = {nombre:'Diego', edad:33, soltero:true};


//***********boolean: true o false**********************
//Sirve para definir si algo es verdadero o falso 
//Nos serviran para tomar desiciones

let soltero = true;
let gato = false;

let tengoSaldo = true;
console.log(tengoSaldo);


//*********Null o nulo*********************
 let trigre = null;


 //************Undefined o indefinido*********** */

let perro;
console.log(perro);

