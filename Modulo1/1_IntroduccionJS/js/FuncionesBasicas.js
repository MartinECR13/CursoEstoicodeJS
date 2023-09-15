//Funciones:
//Son un conjunto de instrucciones que nosotros vamos a poder ejecutar
//cuando queramos. i.e. --> En un momento en especifico vamos a 
//"disparar" un conjunto de instrucciones de manera automatica;

//Creando la funcion:
function saludar (){  //function nombreFuncion (parametros-->es un valor que vamos a utilizar dentro de la funcion){}
                      //Adentro de las llaves -->{codigo a ejecutar};
    console.log("Hola Mundo");

}

//Como hacer para ejecutar la funcion?
//nombreFuncion ();

//Ejecutando o llamando la funcion:
saludar();  //llamo a la funcion y en consola aparece --> Hola Mundo;

//Ejemplo de funcion con parametros:

function saluda (nombre){
    console.log("Hola " + nombre + "!");

}

saluda("Martin"); //En consola: Hola Martin!;


//Si no defino un paramtro:
//saluda();
//En consola: "Hola undefined!";