//Funciones :nos ayudan a reutilizar codigo°°°
//Hay funciones qeu necesitamso qeu devulevan valor
//y hay funciones qeu no necesitamos que devuelvan valor:

//Si una funcion no retorna nada devuleve undefined:

function algo(saludo){
    console.log(`${saludo} como estas?`); 
}
let hola = algo('hola');  //undefined

//return: esto nos sirve para guardar valores y dejarlo fuera de la funcion
function saludar(nombre){
    
    return `Hola ${nombre}`
}
let saludo = saludar("Diego"); //Hola Diego


//Scope Global°°°

const edad = 19;

function uno(){
    //scope local
    console.log(edad)
}

uno(); //consologuea 19


//Scope Local°°°

function dos(){
    let edad = 13;
    console.log(edad);
}

dos(); //consologuea 13

//Otros ejemplos:

function tres(){
    let edad = 13;
    console.log(edad); //consologuea 13
    uno();             //consologuea 19
}
tres();
//*********************** */
function cuatro(){
    let edad = 13;
    console.log(edad);   //consologuea 13

    function uno(){
        //scope local
        console.log(edad) 
    }
    uno();//consologuea 13

}

cuatro();

//Scope:

const usuario ='Diego'; //No se libera el espacio en memoria de 
                        //esta constante por ser global

function saludar (nombre){
 const nombre= "Laura";     //En este caso una vez se utiliza la 
                       //funcion el espacio en memoria de const se libera
                  //esto por se de scope local
 
}

function despedir (nombre){

}









