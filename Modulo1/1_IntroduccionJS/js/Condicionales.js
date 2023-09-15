//Condicionales : conjunto de ordenes que se ejecutar si una condicion
//se cumple (PE. si mañana vienes a mi casa, yo te cocino);

let numero1= 10;
let numero2=20;

//Como se escribe una condicion:
//if (condicion es verdadera){
// entonces haz esto
//}

 if (numero1 < numero2){
    console.log("El numero 1 es menor qeu el numero 2");
 }

 //Tmabien podemos hacer que algo se ejecute si la condicion no 
 //se cumple:

 numero1 =30;
 numero2 = 20;

 //Si esta condicion se cumple : 
 if (numero1 > numero2){
    //Ejecuto este codigo:
    console.log("El numero 1 es menor qeu el numero 2");
    //Si no se cumple, ejecuto este codigo:
 }else{
    console.log("El numero 2 es menor qeu el numero 1");
 }

 //Se pueden agregar mas condiciones:=10;
 numero1=30;
 numero2= 20;
 let numero3=10;

 if(numero1 > numero2 && numero1 > numero3){
    console.log("El numero 1 es el mayor d elso numeros");
 }

 if(numero2 > numero3 || numero2 > numero1){
    console.log("El numero 2 es mayor que uno de los dos numeros");
    
 }

 




