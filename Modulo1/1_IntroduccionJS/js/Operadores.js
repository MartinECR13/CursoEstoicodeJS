//Operadores: simbolos que representan acciones especificas

//****Operadores de asignacion****

//Operador de asignacion " = "  °°°
let miEdad = 33;
let tuEdad =28;
let edadDePaco = 33;
let edadDeNina = '28';


//******Operadores de comparacion*****

//  < ,>               °°°
miEdad > tuEdad; //true;
miEdad < tuEdad; //false;

//Comparacion simple " == "   °°°
miEdad == tuEdad;   //false; 
console.log(miEdad == tuEdad); //Pruebalo en consola;
miEdad == edadDePaco ; //--true;
//-No distingue entre tipo de datos:
tuEdad == edadDeNina; //true;

//Operadores de desigualdad ( != )  °°°
miEdad != tuEdad; //true;

//Desigualdad Estricta ( !== ) °°°

//Comparacion estricta " === "   °°°

tuEdad === edadDeNina;  //false; En este caso al se comparador estricto
                         //distingue entre tipos de datos;


//*******Operadores aritmeticos******
//Suma      °°°
miEdad + tuEdad; //5;

//Resta     °°°°
miEdad - tuEdad;

//Multiplicacion   °°°
miEdad * tuEdad;

//Division        °°°°
miEdad / tuEdad;

//Modulo(%), nos da el resto de una division °°°°
miEdad % tuEdad;


//*****Operadores logicos*****
// && (AND)  °°°

// || (OR)    °°°


//*****Operaciones de concatenacion*******
//Para concatenar String °°°

let nombre = 'Diego';
let apellido = 'Maldonado';

console.log('Mi nombre es: ' + nombre + ' ' + apellido);