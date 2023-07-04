
//BIENVENIDA
function saludar (){
    alert ("Hola, somos Cami & Yani, estamos para ayudarte");
} // declaro la funcion


saludar();
console.log ("Hola, somos Cami & Yani, estamos para ayudarte")

function darBienvenida(){
    let nombre = prompt('Cual es tu nombre?');
    alert('Te damos la bienvenida, '+nombre+ ", a nuestra tienda de cafe");
}

//invocar a la funcion
darBienvenida();

let usuario;
let contrasenia;
let fallidos = 0;
for(let i=1; i<=3; i++){
    usuario = prompt('Tu nombre de usuario');
    contrasenia = prompt('Tu contraseña');
    if((usuario == 'Eze')&&(contrasenia=='43150')){
        console.log('Gracias por sumarte Eze 🤗');
        break;
    }else{
        fallidos = fallidos + 1
        alert('Usuario y/o contrasenia erroneos 🤨');
    }
    
}
if(fallidos == 3){
    console.log('EL sistema se bloqueo');
}


//MENU

let gastoTotal = 0; //variable global que tomara el total del carrito
//cafe sin leche
let producto = prompt('1-Expresso: $450 ☕\n2-Doppio $550 ☕\n3-Americano $700☕\n0-Para salir');

while(producto != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto){
        case '1':
            alert('Agregaste Expresso al carrito👌');
            incrementarGastoTotal(450);
            break;
        case '2':
            alert('Agregaste Doppio al carrito👌 ');
            incrementarGastoTotal(550);
            break;
        case '3':
            alert('Agregaste Americano al carrito 👌');
            incrementarGastoTotal(700);
            break;
        default:
            alert('Codigo de cafe erroneo 👀');
            break;
    }
    producto = prompt('1-Expresso: $450 ☕\n2-Doppio $550 ☕\n3-Americano $700☕\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal);


let gastoTotal2 = 0; //variable global que tomara el total del carrito
//cafe con leche
let producto2 = prompt('1-Flat White: 820 ☕\n2-Latte $800 ☕\n3-Capuccino $760☕\n4-Mocaccino: $850☕\n0-Para salir');

while(producto2 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto2){
        case '1':
            alert('Agregaste Flat White al carrito👌');
            incrementarGastoTotal2(820);
            break;
        case '2':
            alert('Agregaste Latte al carrito👌 ');
            incrementarGastoTotal2(800);
            break;
        case '3':
            alert('Agregaste Capuccino al carrito 👌');
            incrementarGastoTotal2(760);
            break;
        case "4":
            alert("Agregaste Mocaccino al carrito 👌");
            incrementarGastoTotal2(850);
            break
        default:
            alert('Codigo de cafe erroneo 👀');
            break;
    }
    producto2 = prompt('1-Flat White: 820 $ ☕\n2-Latte $800 ☕\n3-Capuccino $760☕\n4-Mocaccino: $850☕\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal2);

let gastoTotal3 = 0; //variable global que tomara el total del carrito
//especiales
let producto3 = prompt('1-Caramel Latte $850 ☕\n2-Vainilla Latte $850 ☕\n3-Nutella Latte $880☕\n0-Para salir');

while(producto3 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto3){
        case '1':
            alert('Agregaste Caramel Latte al carrito👌');
            incrementarGastoTotal3(850);
            break;
        case '2':
            alert('Agregaste Vainilla Latte al carrito👌 ');
            incrementarGastoTotal3(850);
            break;
        case '3':
            alert('Agregaste Nutella Latte al carrito 👌');
            incrementarGastoTotal3(880);
            break
        default:
            alert('Codigo de cafe erroneo 👀');
            break;
    }
    producto3 = prompt('1-Caramel Latte $850 ☕\n2-Vainilla Latte $850 ☕\n3-Nutella Latte $880☕\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal3);

let gastoTotal4 = 0; //variable global que tomara el total del carrito
//iced coffee
let producto4 = prompt('1-Iced Americano $880 ☕\n2-Iced Flat White $900 ☕\n3-Iced Latte $900☕\n4-Iced Latte Especial $920☕\n0-Para salir');

while(producto4 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto4){
        case '1':
            alert('Agregaste Iced Americano al carrito👌');
            incrementarGastoTotal4(880);
            break;
        case '2':
            alert('Agregaste Iced Flat White al carrito👌 ');
            incrementarGastoTotal4(900);
            break;
        case '3':
            alert('Agregaste Iced Latte al carrito 👌');
            incrementarGastoTotal4(900);
            break;
            case '4':
                alert('Agregaste Iced Latte Especial al carrito 👌');
                incrementarGastoTotal4(920);
                break
        default:
            alert('Codigo de cafe erroneo 👀');
            break;
    }
    producto4 = prompt("1-Iced Americano $880 ☕\n2-Iced Flat White $900 ☕\n3-Iced Latte $900☕\n3-Iced Latte Especial $920☕\n0-Para salir");
}

alert('Monto total de tu compra $ '+gastoTotal4);

let gastoTotal5 = 0; //variable global que tomara el total del carrito
//cafe filtrado
let producto5 = prompt('1-Aeropress $1200 ☕\n2-Chemex $1250 ☕\n3-V60 $1300☕\n0-Para salir');

while(producto5 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto5){
        case '1':
            alert('Agregaste Aeropress al carrito👌');
            incrementarGastoTotal5(1200);
            break;
        case '2':
            alert('Agregaste Chemex al carrito👌 ');
            incrementarGastoTotal5(1250);
            break;
        case '3':
            alert('Agregaste V60 al carrito 👌');
            incrementarGastoTotal5(1300);
            break
        default:
            alert('Codigo de cafe erroneo 👀');
            break;
    }
    producto5 = prompt('1-Aeropress $1200 ☕\n2-Chemex $1250 ☕\n3-V60 $1300☕\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal5);

let gastoTotal6 = 0; //variable global que tomara el total del carrito
//bebidas
let producto6 = prompt('1-Agua con/sin gas $400 🥤\n2-Gaseosa $450 🥤\n3-Limonada/Naranja exprimida $600🥤\n0-Para salir');

while(producto6 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto6){
        case '1':
            alert('Agregaste Agua con/sin gas al carrito👌');
            incrementarGastoTotal6(400);
            break;
        case '2':
            alert('Agregaste Gaseosa al carrito👌 ');
            incrementarGastoTotal6(450);
            break;
        case '3':
            alert('Agregaste Limonada/Naranja exprimida al carrito 👌');
            incrementarGastoTotal6(600);
            break
        default:
            alert('Codigo de bebida erroneo 👀');
            break;
    }
    producto6 = prompt('1-Agua con/sin gas $400 🥤\n2-Gaseosa $450 🥤\n3-Limonada/Naranja exprimida $600🥤\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal6);

let gastoTotal7 = 0; //variable global que tomara el total del carrito
//pasteleria
let producto7 = prompt('1-Medialuna $250 🥐\n2-Croissant $400 🥐\n3-Roll de Canela $500🥐\n4-Porcion de Torta $800🍰\n0-Para salir');

while(producto7 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto7){
        case '1':
            alert('Agregaste Medialuna al carrito👌');
            incrementarGastoTotal7(250);
            break;
        case '2':
            alert('Agregaste Croissant al carrito👌 ');
            incrementarGastoTotal7(400);
            break;
        case '3':
            alert('Agregaste Roll de Canela al carrito 👌');
            incrementarGastoTotal7(500);
            break
            case '4':
            alert('Agregaste Porcion de Torta al carrito 👌');
            incrementarGastoTotal7(800);
            break
        default:
            alert('Codigo de pasteleria erroneo 👀');
            break;
    }
    producto7 = prompt('1-Medialuna $250 🥐\n2-Croissant $400 🥐\n3-Roll de Canela $500🥐\n4-Porcion de Torta $800🍰\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal7);

let gastoTotal8 = 0; //variable global que tomara el total del carrito
//salado
let producto8 = prompt('1-Chipa $200 🧀\n2-Scon de Queso $350 🧀\n3-Sandwich $900🥪\n4-Toston de huevos con palta $1100🍳\n0-Para salir');

while(producto8 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto8){
        case '1':
            alert('Agregaste Chipa al carrito👌');
            incrementarGastoTotal8(200);
            break;
        case '2':
            alert('Agregaste Scon de Queso al carrito👌 ');
            incrementarGastoTotal8(350);
            break;
        case '3':
            alert('Agregaste Sandwich al carrito 👌');
            incrementarGastoTotal8(900);
            break
            case '4':
            alert('Agregaste Toston de huevos con palta al carrito 👌');
            incrementarGastoTotal8(1100);
            break
        default:
            alert('Codigo de comida erroneo 👀');
            break;
    }
    producto8 = prompt('1-Chipa $200 🧀\n2-Scon de Queso $350 🧀\n3-Sandwich $900🥪\n4-Toston de huevos con palta $1100🍳\n0-Para salir');
}

alert('Monto total de tu compra $ '+gastoTotal8);

//funcion que incrementa el total del gasto
function incrementarGastoTotal(precioCafe){
    gastoTotal = gastoTotal + precioCafe;
    console.log('Subtotal hasta el momento en cafe sin leche es $'+gastoTotal);
} 
function incrementarGastoTotal2(precioCafe){
    gastoTotal2 = gastoTotal2 + precioCafe;
    console.log('Subtotal hasta el momento en cafe con leche es $'+gastoTotal2);
} 
function incrementarGastoTotal3(precioCafe){
    gastoTotal3 = gastoTotal3 + precioCafe;
    console.log('Subtotal hasta el momento en cafe especial es $'+gastoTotal3);
} 
function incrementarGastoTotal4(precioCafe){
    gastoTotal4 = gastoTotal4 + precioCafe;
    console.log('Subtotal hasta el momento en iced coffee es $'+gastoTotal4);
} 
function incrementarGastoTotal5(precioCafe){
    gastoTotal5 = gastoTotal5 + precioCafe;
    console.log('Subtotal hasta el momento en cafe filtrado es $'+gastoTotal5);
} 
function incrementarGastoTotal6(precioCafe){
    gastoTotal6 = gastoTotal6 + precioCafe;
    console.log('Subtotal hasta el momento en bebida es $'+gastoTotal6);
} 
function incrementarGastoTotal7(precioCafe){
    gastoTotal7 = gastoTotal7 + precioCafe;
    console.log('Subtotal hasta el momento en pasteleria es $'+gastoTotal7);
} 
function incrementarGastoTotal8(precioCafe){
    gastoTotal8 = gastoTotal8 + precioCafe;
    console.log('Subtotal hasta el momento en comida es $'+gastoTotal8);
}

//DESPEDIR USUARIO

function darDespedida(){
    alert("Muchas gracias por tu compra, te esperamos pronto!😘");
}

darDespedida()

//ver de colocar return
function calcularTotal(){
    return gastoTotal + gastoTotal2 + gastoTotal3 + gastoTotal4 + gastoTotal5 + gastoTotal6
    + gastoTotal7 + gastoTotal8 ;
}

let resultado = calcularTotal();
console.log ("su total a pagar es: " + (resultado));