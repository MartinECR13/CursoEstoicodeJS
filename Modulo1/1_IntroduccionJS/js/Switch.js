//Condicional Switch
//Es como un condicional normal, escrito de otra manera;
//Evalua casos;

//PE: tengo una variable numero qeu vale 30
let numero = 30;

switch (numero){        //switch(expresion a evaular-->en este caso es: 30);
    //caso 1:           //Entre llaves tenemos los casos;
    
    case 30:            //-->Si numero es igual a 30 entonces:
        console.log("Numero es igual a 30"); //-->Imprime en pantalla : "Numero es igual a ..."
        break;          //-->break ; corta la ejecucion
    //caso 2:
    case 20:            //-->Si numero es igual a 20 entonces:
        console.log("Número es igual a 20"); //-->Haz esto;
        break;          //-->Cortamos la ejecuacion;
    //caso 3:
    case 10:
        console.log("Número es igual a 20");
        break;
    default:            //Caso por defecto:
        console.log("Número es igual a 20");
        break;  
    
}


//Con switch evaluamos varias condiciones de una sola vez;
