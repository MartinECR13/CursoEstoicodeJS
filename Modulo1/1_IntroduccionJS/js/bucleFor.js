//Bucle for:

//Es algo que se va a repetir una cierta contidad de veces;
//PE--> Puedo hacer esto:

let numero = 0;

console.log("Este es el numero: " + numero);
console.log("Este es el numero: " + (numero + 1));
console.log("Este es el numero: " + (numero + 2));

//o puedo hacer esto:

for(let numero = 0; numero <= 10; numero++ ){
    console.log("Este es el numero: " + numero);
}


//-----Sintaxis----:

//for(declaramosVariable--let i = 0 ; condicion--> i<10 ; que hacer una vez se cumpla el bucle-->i++){
//Entre llaves lo que quiero hacer:
//console.log("Este es el numero: " + i); --->esto lo va a hacer hasta que --> 1>10;

//}

//i++  --> cada que se ejecute el bucle --> i = i +1; Así lo hará hasta que --> i<10;