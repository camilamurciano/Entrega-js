
//BIENVENIDA
function saludar (){
    alert ("Hola, somos Cami & Yani, estamos para ayudarte");
} // declaro la funcion


saludar();
console.log ("Hola, somos Cami & Yani, estamos para ayudarte")

function darBienvenida(){
    let nombre = prompt("Cual es tu nombre?");
    alert("Te damos la bienvenida, " +nombre+ " , a nuestra tienda de cafe");
}

//invocar a la funcion
darBienvenida();

let usuario;
let contrasenia;
let fallidos = 0;
for(let i=1; i<=3; i++){
    usuario = prompt("Tu nombre de usuario");
    contrasenia = prompt("Tu contraseña");
    if((usuario == "Eze")&&(contrasenia=="43150")){
        console.log("Gracias por sumarte Eze 🤗");
        break;
    }else{
        fallidos = fallidos + 1
        alert("Usuario y/o contrasenia erroneos 🤨");
    }
    
}
if(fallidos == 3){
    console.log("El sistema se bloqueo");
}



//MENU

let gastoTotal = 0; //variable global que tomara el total del carrito
//cafe sin leche
let producto = prompt("EXPRESSO SOLO\n1-Expresso: $450 ☕\n2-Doppio $550 ☕\n3-Americano $700☕\n0-Para salir");

while(producto != '0'){
    //condicional para informar al usuario que el cafe se agrega
    switch(producto){
        case '1':
            alert("Agregaste Expresso al carrito👌");
            incrementarGastoTotal(450);
            break;
        case '2':
            alert("Agregaste Doppio al carrito👌 ");
            incrementarGastoTotal(550);
            break;
        case '3':
            alert("Agregaste Americano al carrito 👌");
            incrementarGastoTotal(700);
            break;
        default:
            alert("Codigo de cafe erroneo 👀");
            break;
    }
    producto = prompt("1-Expresso: $450 ☕\n2-Doppio $550 ☕\n3-Americano $700☕\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal);


let gastoTotal2 = 0; //variable global que tomara el total del carrito
//cafe con leche
let producto2 = prompt("EXPRESSO CON LECHE \n1-Flat White: 820 ☕\n2-Latte $800 ☕\n3-Capuccino $760☕\n4-Mocaccino: $850☕\n0-Para salir");

while(producto2 != '0'){
    //condicional para informar al usuario que el libro se agrego al carrito
    switch(producto2){
        case '1':
            alert("Agregaste Flat White al carrito👌");
            incrementarGastoTotal2(820);
            break;
        case '2':
            alert("Agregaste Latte al carrito👌 ");
            incrementarGastoTotal2(800);
            break;
        case '3':
            alert("Agregaste Capuccino al carrito 👌");
            incrementarGastoTotal2(760);
            break;
        case "4":
            alert("Agregaste Mocaccino al carrito 👌");
            incrementarGastoTotal2(850);
            break
        default:
            alert("Codigo de cafe erroneo 👀");
            break;
    }
    producto2 = prompt("1-Flat White: 820 $ ☕\n2-Latte $800 ☕\n3-Capuccino $760☕\n4-Mocaccino: $850☕\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal2);

let gastoTotal3 = 0; //variable global que tomara el total del carrito
//especiales
let producto3 = prompt("CAFE ESPECIAL \n1-Caramel Latte $850 ☕\n2-Vainilla Latte $850 ☕\n3-Nutella Latte $880☕\n0-Para salir");

while(producto3 != '0'){
    
    switch(producto3){
        case '1':
            alert("Agregaste Caramel Latte al carrito👌");
            incrementarGastoTotal3(850);
            break;
        case '2':
            alert("Agregaste Vainilla Latte al carrito👌 ");
            incrementarGastoTotal3(850);
            break;
        case '3':
            alert("Agregaste Nutella Latte al carrito 👌");
            incrementarGastoTotal3(880);
            break
        default:
            alert("Codigo de cafe erroneo 👀");
            break;
    }
    producto3 = prompt("1-Caramel Latte $850 ☕\n2-Vainilla Latte $850 ☕\n3-Nutella Latte $880☕\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal3);

let gastoTotal4 = 0; //variable global que tomara el total del carrito
//iced coffee
let producto4 = prompt("ICED COFFEE \n1-Iced Americano $880 ☕\n2-Iced Flat White $900 ☕\n3-Iced Latte $900☕\n4-Iced Latte Especial $920☕\n0-Para salir");

while(producto4 != '0'){
    
    switch(producto4){
        case '1':
            alert("Agregaste Iced Americano al carrito👌");
            incrementarGastoTotal4(880);
            break;
        case '2':
            alert("Agregaste Iced Flat White al carrito👌 ");
            incrementarGastoTotal4(900);
            break;
        case '3':
            alert("Agregaste Iced Latte al carrito 👌");
            incrementarGastoTotal4(900);
            break;
            case '4':
                alert("Agregaste Iced Latte Especial al carrito 👌");
                incrementarGastoTotal4(920);
                break
        default:
            alert("Codigo de cafe erroneo 👀");
            break;
    }
    producto4 = prompt("1-Iced Americano $880 ☕\n2-Iced Flat White $900 ☕\n3-Iced Latte $900☕\n3-Iced Latte Especial $920☕\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal4);

let gastoTotal5 = 0; //variable global que tomara el total del carrito
//cafe filtrado
let producto5 = prompt("CAFE FILTRADO \n1-Aeropress $1200 ☕\n2-Chemex $1250 ☕\n3-V60 $1300☕\n0-Para salir");

while(producto5 != '0'){
    
    switch(producto5){
        case '1':
            alert("Agregaste Aeropress al carrito👌");
            incrementarGastoTotal5(1200);
            break;
        case '2':
            alert("Agregaste Chemex al carrito👌 ");
            incrementarGastoTotal5(1250);
            break;
        case '3':
            alert("Agregaste V60 al carrito 👌");
            incrementarGastoTotal5(1300);
            break
        default:
            alert("Codigo de cafe erroneo 👀");
            break;
    }
    producto5 = prompt("1-Aeropress $1200 ☕\n2-Chemex $1250 ☕\n3-V60 $1300☕\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal5);

let gastoTotal6 = 0; //variable global que tomara el total del carrito
//bebidas
let producto6 = prompt("BEBIDAS \n1-Agua con/sin gas $400 🥤\n2-Gaseosa $450 🥤\n3-Limonada/Naranja exprimida $600🥤\n0-Para salir");

while(producto6 != '0'){
    
    switch(producto6){
        case '1':
            alert("Agregaste Agua con/sin gas al carrito👌");
            incrementarGastoTotal6(400);
            break;
        case '2':
            alert("Agregaste Gaseosa al carrito👌 ");
            incrementarGastoTotal6(450);
            break;
        case '3':
            alert("Agregaste Limonada/Naranja exprimida al carrito 👌");
            incrementarGastoTotal6(600);
            break
        default:
            alert("Codigo de bebida erroneo 👀");
            break;
    }
    producto6 = prompt("1-Agua con/sin gas $400 🥤\n2-Gaseosa $450 🥤\n3-Limonada/Naranja exprimida $600🥤\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal6);

let gastoTotal7 = 0; //variable global que tomara el total del carrito
//pasteleria
let producto7 = prompt("PASTELERIA \n1-Medialuna $250 🥐\n2-Croissant $400 🥐\n3-Roll de Canela $500🥐\n4-Porcion de Torta $800🍰\n0-Para salir");

while(producto7 != '0'){
    
    switch(producto7){
        case '1':
            alert("Agregaste Medialuna al carrito👌");
            incrementarGastoTotal7(250);
            break;
        case '2':
            alert("Agregaste Croissant al carrito👌 ");
            incrementarGastoTotal7(400);
            break;
        case '3':
            alert("Agregaste Roll de Canela al carrito 👌");
            incrementarGastoTotal7(500);
            break
            case '4':
            alert("Agregaste Porcion de Torta al carrito 👌");
            incrementarGastoTotal7(800);
            break
        default:
            alert("Codigo de pasteleria erroneo 👀");
            break;
    }
    producto7 = prompt("1-Medialuna $250 🥐\n2-Croissant $400 🥐\n3-Roll de Canela $500🥐\n4-Porcion de Torta $800🍰\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal7);

let gastoTotal8 = 0; //variable global que tomara el total del carrito
//salado
let producto8 = prompt("SALADO\n1-Chipa $200 🧀\n2-Scon de Queso $350 🧀\n3-Sandwich $900🥪\n4-Toston de huevos con palta $1100🍳\n0-Para salir");

while(producto8 != '0'){
    
    switch(producto8){
        case '1':
            alert("Agregaste Chipa al carrito👌");
            incrementarGastoTotal8(200);
            break;
        case '2':
            alert("Agregaste Scon de Queso al carrito👌 ");
            incrementarGastoTotal8(350);
            break;
        case '3':
            alert("Agregaste Sandwich al carrito 👌");
            incrementarGastoTotal8(900);
            break
            case '4':
            alert("Agregaste Toston de huevos con palta al carrito 👌");
            incrementarGastoTotal8(1100);
            break
        default:
            alert("Codigo de comida erroneo 👀");
            break;
    }
    producto8 = prompt("1-Chipa $200 🧀\n2-Scon de Queso $350 🧀\n3-Sandwich $900🥪\n4-Toston de huevos con palta $1100🍳\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal8);

//funciones que incrementan el total del gasto por compra
function incrementarGastoTotal(precioCafe){
    gastoTotal = gastoTotal + precioCafe;
    console.log("Subtotal hasta el momento en cafe sin leche es $"+gastoTotal);
} 
function incrementarGastoTotal2(precioCafe){
    gastoTotal2 = gastoTotal2 + precioCafe;
    console.log("Subtotal hasta el momento en cafe con leche es $"+gastoTotal2);
} 
function incrementarGastoTotal3(precioCafe){
    gastoTotal3 = gastoTotal3 + precioCafe;
    console.log("Subtotal hasta el momento en cafe especial es $"+gastoTotal3);
} 
function incrementarGastoTotal4(precioCafe){
    gastoTotal4 = gastoTotal4 + precioCafe;
    console.log("Subtotal hasta el momento en iced coffee es $"+gastoTotal4);
} 
function incrementarGastoTotal5(precioCafe){
    gastoTotal5 = gastoTotal5 + precioCafe;
    console.log("Subtotal hasta el momento en cafe filtrado es $"+gastoTotal5);
} 
function incrementarGastoTotal6(precioCafe){
    gastoTotal6 = gastoTotal6 + precioCafe;
    console.log("Subtotal hasta el momento en bebida es $"+gastoTotal6);
} 
function incrementarGastoTotal7(precioCafe){
    gastoTotal7 = gastoTotal7 + precioCafe;
    console.log("Subtotal hasta el momento en pasteleria es $"+gastoTotal7);
} 
function incrementarGastoTotal8(precioCafe){
    gastoTotal8 = gastoTotal8 + precioCafe;
    console.log("Subtotal hasta el momento en comida es $"+gastoTotal8);
}


//ver de colocar return
function calcularTotal(){
    return gastoTotal + gastoTotal2 + gastoTotal3 + gastoTotal4 + gastoTotal5 + gastoTotal6
    + gastoTotal7 + gastoTotal8 ;
}

let resultado = calcularTotal();
alert ("su total a pagar es: " + (resultado));

console.log ("Su total a pagar es: " + (resultado))

console.log ("Nuestros 1/4 de cafe son los siguiente:")
function Granos(molienda, proceso, puntaje) {
    this.molienda = molienda;
    this.proceso = proceso;
    this.puntaje = puntaje;
}
const Granos1 = new Granos("fina", "lavado", 90);
const Granos2 = new Granos("gruesa", "natural", 95);

console.log(Granos1);
console.log(Granos2);

// para que el usuario elija seria asi:
alert ("A continuacion, ud podra elegir el grano de cafe a su medida:")
let moliendaGranos = prompt('Ingresa la molienda que desea del cafe: \n fina \n gruesa');
let procesoGranos = prompt('Ingresa el proceso de cafe: \n lavado \n natural');
let puntajeGranos = parseInt(prompt('Ingresa el mejor puntaje: del 80 al 95'));

const Granos3 = new Granos(moliendaGranos, procesoGranos, puntajeGranos);
console.log(Granos3);

const listaProducto = ['tumper', 'peacher', 'filtros', 'tazas', 'cucharas'];
//recorriendo la lista
for (let i = 0; i < listaProducto.length; i++) { //siempre es mejor colocar .length para evitar errores
    console.log('Producto en tienda: ' + listaProducto[i]);
}
//para que el usuario agregue un producto
let opcion = prompt('Quieres que agreguemos algun producto que no se encuentra en nuestra tienda (si/no)');

while (opcion != 'no') {
    let prodNuevo = prompt('Ingresa el nuevo producto');
    listaProducto.push(prodNuevo);
    opcion = prompt('Quieres que agreguemos algun producto que no se encuentra en nuestra tienda (si/no)');
}

console.log ("Estos son nuestro metodos de filtrados que estan a la venta:")
const listaFiltrados = [];

class Filtrado {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarFiltrado() {
        console.log(this.id + ") El metodo de filtrado " + this.nombre + ', tiene un precio de: U$D ' + this.precio);
    }
}

const Filtrado1 = new Filtrado(1, "Aeropress", 900);
const Filtrado2 = new Filtrado(2, 'V 60', 950);
const Filtrado3 = new Filtrado(3, "Chemex", 850)
listaFiltrados.push(Filtrado1, Filtrado2, Filtrado3);

console.log(listaFiltrados);

for (const cafes of listaFiltrados) {
    cafes.mostrarFiltrado();
}

let gastoTotal9 = 0; //variable global que tomara el total del carrito
//filtrado
let listaFiltrados1 = prompt("¿Queres agregar Filtrado a tu carrito? \n1-Filtrado Aeropress U$D 900 \n2-Filtrado V 60 U$D 950 \n3-Filtrado Chemex U$D 850\n0-Para salir");

while(listaFiltrados1 != '0'){
    
    switch(listaFiltrados1){
        case '1':
            alert("Agregaste Aeropress al carrito👌");
            incrementarGastoTotal9(900);
            break;
        case '2':
            alert("Agregaste V 60 al carrito👌 ");
            incrementarGastoTotal9(950);
            break;
        case '3':
            alert("Agregaste Chemex al carrito 👌");
            incrementarGastoTotal9(850);
            break
        default:
            alert("Codigo de filtrado erroneo 👀");
            break;
    }
    listaFiltrados1 = prompt("¿Queres agregar Filtrado a tu carrito? \n1-Aeropress U$D 900 \n2-V 60 U$D 950 \n3-Chemex U$D 850\n0-Para salir");
}

alert("Monto total de tu compra $ "+gastoTotal9);

function incrementarGastoTotal9(precioFiltrado){
    gastoTotal9 = gastoTotal9 + precioFiltrado;
    console.log("Subtotal hasta el momento de Filtrado es U$D"+gastoTotal9);
}





console.log ("Si usted desea adquirir o conocer el precio de nuestras maquinas de cafe, vera reflejado lo que tenemos en stock")
/*const Cafeteras = [{
    id: 1,
    nombre: "Victoria Arduino",
    grupos: 3,
    precio: 5500
},
{
    id: 2,
    nombre: "Iberital",
    grupos: 2,
    precio: 4000
},
{
    id: 3,
    nombre: "Nueva Simonelli",
    grupos: 2,
    precio: 4500
},
{
    id: 4,
    nombre: "Rocket",
    grupos: 1,
    precio: 3500
}
]
*/
console.table (Cafeteras);

//funciones de orden superior MAP
const nombreYPrecio = Cafeteras.map(cafetera =>{
    return{
        nombre: cafetera.nombre,
        precio: cafetera.precio,

    }

});
console.table (nombreYPrecio);

let gastoTotal10 = 0; //variable global que tomara el total del carrito
//filtrado
let listaCafetera = prompt("¿Queres agregar alguna Maquina de Cafe a tu carrito? \n1-Victoria Arduino U$D 5500 \n2-Iberital U$D 4000 \n3-Nueva Simonelli U$D 4500\n4-Rocket U$D 3500\n0-Para salir");

while(listaCafetera != '0'){
    
    switch(listaCafetera){
        case '1':
            alert("Agregaste Victoria Arduino al carrito👌");
            incrementarGastoTotal10(5500);
            break;
        case '2':
            alert("Agregaste Iberital al carrito👌 ");
            incrementarGastoTotal10(4000);
            break;
        case '3':
            alert("Agregaste Nueva Simonelli al carrito 👌");
            incrementarGastoTotal10(4500);
            break
            case '4':
                alert("Agregaste Rocket al carrito 👌");
                incrementarGastoTotal10(3500);
                break
        default:
            alert("Codigo de filtrado erroneo 👀");
            break;
    }
    listaCafetera = prompt("¿Queres agregar alguna Maquina de Cafe a tu carrito? \n1-Victoria Arduino U$D 5500 \n2-Iberital U$D 4000 \n3-Nueva Simonelli U$D 4500\n4-Rocket U$D 3500\n0-Para salir");
}

alert("Monto total de tu compra U$D "+gastoTotal10);

function incrementarGastoTotal10(precioCafetera){
    gastoTotal10 = gastoTotal10 + precioCafetera;
    console.log("Subtotal hasta el momento de Maquina de Cafe es U$D"+gastoTotal10);
}

function calcularTotalUsd(){
    return gastoTotal9 + gastoTotal10;
}

let resultadoUsd = calcularTotalUsd();
alert ("su total a pagar es: U$D " + (resultadoUsd));

console.log ("Su total a pagar es: U$D " + (resultadoUsd))

//DESPEDIR USUARIO

function darDespedida(){
    alert("Muchas gracias por tu compra, te esperamos pronto!😘");
}

darDespedida()
