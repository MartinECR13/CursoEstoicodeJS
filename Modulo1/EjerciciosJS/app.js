//Ejercicio 1
//Crea una funcion llamada sumar qeu reciba 2
//numeros por parametors y retorne el resultado de la suma

function sumar(a,b){
    let suma = a + b;
    console.log(suma);
    return suma;
}

//Ejercicio 2
//Crea una funcion llamada multiplicar qeu reciba 2 numeros
//por parametros y retorne el resultado de la multiplicacion
//pero, esta vez tambien verifique
//si ambos parametros son numeros en caso que alguno no lo sea debe
//devolver el siguiente mensaja "Ambos parametros deben ser numeros"

function multiplicar(a,b){
    if(a!=" " && b!=" " ){
        let producto = a * b;
        console.log(producto);
    }else {
        console.log("Ambos parametros deben ser numeros");
        

    }
}

//Ejercicio 3
//Crea una funcion llamda "esInvierno" qeu se le ingrese por 
//parametro el mes. y devuelva para parametro true si es mayor o 
//false en caso de ser invierno
//Meses de invierno= junio,julio,agosto.