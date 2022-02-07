/*
alert ("Hola")

let nombre = prompt ("Escriba su nombre");
let apellido = prompt ("Escriba su apellido");

alert ("Bienvenido " + nombre + " " + apellido);

let edad = prompt ("Cuantos años tienes?");

if (edad >= 18) {
    alert ("tienes " + edad + " años, eres mayor de edad, puedes ingresar.");
    }
else if (edad < 18) {
    alert ("Eres menor de edad, no puedes entrar");
}
else {
    alert ("Valor introducido NO valido.")
};


let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
alert("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );





//Log in 

let user = "matias";
let pass = "mattera";

let userName = prompt("Ingrese nombre de Usuario:");
let userPass = prompt("Ingrese contraseña:");

if(user == userName && pass == userPass){
    alert("Bienvenido al Sitio web de Matias Mattera");
}
else if ((user != userName) && (pass != userPass)){
    alert("Usuario y contraseña incorrecto");
}
else if (user != userName){
    alert("Nombre de usuario incorrecto");
}
else if (pass != userPass){
    alert("Contraseña incorrecta");
}else{
    alert("ERROR");
};


let nombre = prompt('ingrese su nombre')
do {
    alert ('Nombre de usuario ' + nombre + ' invalido')
    nombre = prompt ('Ingrese otro nombre')
}
while (nombre != 'matias') {
    alert('Acceso Permitido')
}





let nombre = "matias";
let usuario = "";

do {
    
    usuario = prompt("Ingrese nombre de usuario: ")

    if(nombre!==usuario){
        
        alert("usuario incorrecto, intentalo otra vez")
    }else {
        
        alert("Acceso permitido, Bienvenido " + nombre) 
    }
}while(nombre !== usuario)


let nombre = prompt('ingrese un nombre');

while(nombre != 'matias'){
    switch (nombre) {
        case 'matias':
            alert('Hola Mati, como esta tu dia?');
            break;
        case 'cristina':
            alert('Hola Cris, tu novio te ama');
            break;
        case 'carolina':
            alert('Hola Caro, tu hijo te ama');
            break;
        case 'federico':
            alert('Hola Fede, tu hermano dice q sos un gato');
            break;
        default:
            alert('Acceso NO AUTORIZADO'); 
            break;
    }
    nombre = prompt('ingrese un nombre');
}

*/

// function suma (n1, n2){
//     return n1 + n2;
// }

// resultado = suma(3, 2);
// resultado2 = suma(6, 8);
// resultado3 = suma(23, 9);

// console.log (resultado);
// console.log (resultado2);
// console.log (resultado3);



// //funcion anonima
// const saludo = function (a, b) { return a + b};
// console.log (saludo(9, 8))


// //funcion flecha
// const suma = (a, b) => { return a + b};
// console.log (suma(4, 5));


// function calculadora (numero1, numero2, operador){
//     switch(operador){
//         case '+':
//             return numero1 + numero2;
//             break;
//         case '-':
//             return numero1 - numero2;
//             break;
//         case '/':
//             return numero1 / numero2;
//             break
//         case '*':
//             return numero1 * numero2;
//             break
//         default:
//             return 0;
//             break
//     }
// }

// while (true){

//     let num1 = parseInt ( prompt('ingrese un numero'));
//     let operacion = prompt('ingrese un operador matematico "+ , - , * , /"');
//     let num2 = parseInt(prompt('ingrese otro numero'));

//     let resultado = calculadora(num1, num2, operacion);

//     alert('El resultado de ' + num1 + ' ' + operacion + ' ' + num2 + ' es: ' + resultado);
// }



// const suma  = (a,b) => a + b
// const resta = (a,b) => a - b
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva = t => t * 0.21
// let precioProducto  = 5500
// let descuento = 50 
// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
// console.log(nuevoPrecio)




// const suma  = (a,b) => a + b
// const resta = (a,b) => a - b
// const iva   = (x) => x * 0.21

// let precioProducto  = 500
// let descuento = 50 

// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
// console.log(nuevoPrecio)




// function sumar (n1, n2){
//     return n1 + n2;
// }
// function restar (n1, n2){
//     return n1 - n2;
// }
// function iva (n1){
//     return n1 * 0.21;
// }

// let producto1 = 'Vestido rojo'
// let producto2 = 'Cartera negra'
// let producto3 = 'Bolso gris'
// let precioProducto1 = 10
// let precioProducto2 = 25
// let precioProducto3 = 50


// alert('Hola, elíge el producto que deseas comprar:');


// let producto = prompt(producto + ' , sale $' + precioProducto + '. Quieres comprarlo? ');

// function compra (producto, precioProducto){
    
//     while(producto){
//         if (producto == 'si'){
//             alert('El valor del producto es: $' + precioProducto + ' + el 21% de IVA ,hace un total de: ' + sumar(precioProducto, iva(precioProducto)));
//             break;
//         }else if(producto == 'no'){
//             break;
//         }else{
//             alert('no te he entendido, si o no?')
//         }
//         producto = prompt(producto + ' , sale $' + precioProducto + '. Quieres comprarlo? ');
//     }
// }



// for (let i = 1; i < 4; i++){ 
//     console.log('nº ' + i + ' Vestido Rojo');
// }


// let free = false;

// const cliente = (tiempo) => {
//     let edad = prompt('¿Cual es tu edad?');
//     if (edad >= 18){
//         if (tiempo >= 2 && tiempo < 7 && free == false){
//             alert('podes pasar gratis porque sos el primero despues de las 2 am')
//             free = true;
//         }else{
//             alert('podes pasar pero tenes que pagar')
//         }
//     }else{
//         alert('Sos menor de edad')
//     }
// }

// cliente(2.2);



// LOGIN
/*
let userName = prompt("Ingrese nombre de Usuario:");
let userPass = prompt("Ingrese contraseña:");

function logIn (user, pass){

    while((user != userName) || (pass != userPass)){

        if(user === userName && pass === userPass){
            alert("Bienvenido al Sitio web de Matias Mattera");
        }
        else if ((user != userName) && (pass != userPass)){
            alert("Usuario y contraseña incorrecto");
        }
        else if (user != userName){
            alert("Nombre de usuario incorrecto");
        }
        else if (pass != userPass){
            alert("Contraseña incorrecta");
        }else{
            alert("ERROR");
        };

        userName = prompt("Ingrese nombre de Usuario:");
        userPass = prompt("Ingrese contraseña:");

    }

    alert("Hola " + user.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
}

logIn ('cristina', '1313');

/*

//Log-in

class User {
    constructor(nombre, usuario, pass, email, edad){
        this.nombre = nombre,
        this.usuario = usuario,
        this.password = pass,
        this.email = email,
        this.edad = edad
    }

    logIn(){
        while((this.usuario != userName) || (this.pass != userPass)){

            if(this.usuario === userName && pass === userPass){
                alert("Bienvenido al Sitio web de Matias Mattera");
            }
            else if ((this.usuario != userName) && (this.pass != userPass)){
                alert("Usuario y contraseña incorrecto");
            }
            else if (this.usuario != userName){
                alert("Nombre de usuario incorrecto");
            }
            else if (this.pass != userPass){
                alert("Contraseña incorrecta");
            }else{
                alert("ERROR");
            };
    
            this.usuario = prompt("Ingrese nombre de Usuario:");
            this.pass = prompt("Ingrese contraseña:");
    
        }
    
        alert("Hola " + this.usuario.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
    }
}



*/



/*

//Objetos:

const persona = {
    nombre: 'lisa',
    edad: 8,
    calle: 'Av. Siempreviva 742'
}

//mostrar
alert(persona.nombre) //esta se usa , la de abajo tambien pero confunde.
alert(persona['nombre'])

//lo puedo cambiar
persona.nombre = 'matias'
alert(persona.nombre)

//lo haga el usuario
persona.nombre = prompt('ingrese un nombre')
alert(persona.nombre)



// OBJETOS CONSTRUCTORES

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona2 = new Persona('homero', 39, 'av. siempreviva');
const persona3 = new Persona('marge', 38, 'av. siempreviva')

//this. asocia dato con variable. hace referencia a la funcion constructora.
// new. crea nuevo


//FUNCIONES Y METODOS PERSONALIDAZO (acciones)
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){'HOLA SOY '+ this.nombre + 'tengo ' + this.edad}
}

const persona10 = new Persona('matias', 31);
personalbar10.hablar();





function Mascota(nombre, raza, edad){
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.saludo = function(){
        console.log("Hola mi nombre es: " + this.nombre + " guau guau")
    }
}

let mascota1 = new Mascota("Vasco","Boyero de berna", 4)
console.log(mascota1.nombre)
console.log(mascota1.raza)
console.log(mascota1.edad)
mascota1.saludo()




//CLASES Y METODOS

class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log('HOLA SOY ' + this.nombre);
    }
}

const persona45 = new Persona ('homero', 39, 'Av. Siempreviva');
persona45.hablar();

*/

/*

const numeros = [1, "carlos", 3, "robert", 5];
const letras = ["A", "B", "C", "D", "E", "F"];

for (let i=0; i < numeros.length; i++){
    console.log(numeros)
}
console.log(numeros.length)
numeros.push("matias", "cristina");
console.log(numeros.length)

console.log(numeros[0]);
numeros.unshift("mattera");
console.log(numeros[0]);

console.log(numeros)

numeros.pop()
console.log(numeros)
numeros.shift()
console.log(numeros)

console.log(numeros.join(" - "));

const numerosLetras = numeros.concat(letras);

console.log(numerosLetras);

const quitar = numerosLetras.slice(0, 7);
console.log(quitar)

quitar.splice(0, 5);
console.log(quitar)

console.log(quitar.indexOf("carlos"));

const lista = ["papa", "mama", "hermano", "loco"];
const lista2 = ["adadadsdssss", "asdsad", "caca", "loco"];

function eliminar (nombre){

    let i = lista.indexOf(nombre);

    if (i != -1) {
        lista.splice(i, 1)
    }

}

eliminar("loco");

console.log(lista);
console.log(lista2);

console.log ( lista.includes("loco"));

*/


/*

//Log-in

class User {
    constructor(nombre, usuario, pass, email, edad){
        this.nombre = nombre,
        this.usuario = usuario,
        this.pass = pass,
        this.email = email,
        this.edad = edad
    }

    mostrar(){
        console.log( 'Nombre: ' + this.nombre);
        console.log( 'Usuario: ' + this.usuario);
        console.log( 'Contraseña: ' + this.pass);
        console.log( 'E-mail: ' + this.email);
        console.log( 'Edad: ' + this.edad);
    }

    logIn(userName, userPass){

        this.usuario = prompt("Ingrese nombre de Usuario:");
        this.pass = prompt("Ingrese contraseña:");

        while((this.usuario != userName) || (this.pass != userPass)){

            if(this.usuario === userName && this.pass === userPass){
                alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
            }
            else if ((this.usuario != userName) && (this.pass != userPass)){
                alert("Usuario y contraseña incorrecto");
            }
            else if (this.usuario != userName){
                alert("Nombre de usuario incorrecto");
            }
            else if (this.pass != userPass){
                alert("Contraseña incorrecta");
            }else{
                alert("ERROR")
            };
        
            this.usuario = prompt("Ingrese nombre de Usuario:");
            this.pass = prompt("Ingrese contraseña:");
        
        }
        
        alert("Hola " + this.nombre.toUpperCase() + ". Bienvenid@ al Sitio web de Matias Mattera");
    }
}



const usuarios = [];


function usuarioNuevo(){
    usuarios.unshift ( new User (
        prompt("Ingrese su nombre"),
        prompt("Ingrese su usuario"),
        prompt("Ingrese su password"),
        prompt("Ingrese su email"),
        Number(prompt("Ingrese su edad"))
        )
    )
}

usuarios.push ( new User (
    "cristina",
    "cris",
    "1313",
    "sabiote@gmail.com",
    29
))

for (const usuario of usuarios) {
    console.log(usuario.usuario)
}




let saludo = prompt('Hola, eres nuevo aqui?')


if (saludo == 'si'){
    usuarioNuevo();
    alert("FELICITACIONES!!! \nNuevo usuari@ creado correctamente \nBienvenid@");
    
}else if (saludo == 'no'){

    let miembro = prompt('Asique ya eres miembro, quieres logearte?');
    switch(miembro){
        case 'si':
            usuarios[0].logIn('cris', '1313');
            break;
        case 'no':
            alert('Ok, hasta luego');
            break;
        default:
            alert('No te entendi')
            miembro = prompt('quieres logearte?');
            if (miembro == 'si'){
                usuarios[0].logIn('cris', '1313');
                break;
            }else if(miembro == 'no'){
                alert('Ok, hasta luego');
                break;
            }else {
                while (miembro != 'no'){
                    alert('No te entendi')
                    miembro = prompt('quieres logearte?');
                    if (miembro == 'si'){
                        usuarios[0].logIn('cris', '1313');
                        break;
                    }else if (miembro == 'no'){
                        alert('Ok, hasta luego');
                        break;
                    }
                }
            }
            break;
        }
    }else{
        alert('No te entendi');
        while (saludo != 'si'){
            saludo = prompt('Hola, eres nuevo aqui?');
        if (saludo == 'si'){
            usuarioNuevo();
            alert("FELICITACIONES!!! \nNuevo usuari@ creado correctamente \nBienvenid@");
            
        }else if (saludo == 'no'){
            alert('Muy bien, escriba sus datos para ingresar:')
            usuarios[0].logIn('cris', '1313');
            break;
        }
    }
}

*/




/* TIENDA -----------------------------------------------------------------------------


let stockProductos = [
    {
      id: 1,
      nombre: "Buzo 1",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1200,
    },
    {
      id: 2,
      nombre: "Buzo 2",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1100,
    },
    {
      id: 3,
      nombre: "Buzo 3",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1200,
    },
    {
      id: 4,
      nombre: "Buzo 4",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1400,
    },
    {
      id: 5,
      nombre: "Buzo 5",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1200,
    },
    {
      id: 6,
      nombre: "Buzo 6",
      tipo: "buzo",
      descripcion: "Un buzo que re va con vos",
      precio: 1500,
    },
    {
      id: 7,
      nombre: "Remera 1",
      tipo: "remera",
      descripcion: "Una remera que re va con vos",
      precio: 500,
    },
    {
      id: 8,
      nombre: "Remera 2",
      tipo: "remera",
      descripcion: "Una remera que re va con vos",
      precio: 500,
    },
    {
      id: 9,
      nombre: "Remera 3",
      tipo: "remera",
      descripcion: "Una remera que re va con vos",
      precio: 500,
    },
    {
      id: 10,
      nombre: "Remera 4",
      tipo: "remera",
      descripcion: "Una remera que re va con vos",
      precio: 700,
    },
  ];
  
  let carritoDeCompras = [];
  
  //agregarAlCarrito();
  
  function agregarAlCarrito() {
    let elijoProducto = parseInt(prompt("ingrese su ID de su producto"));
  
    let productoAgregar = stockProductos.find((element) => element.id == elijoProducto); // busca el producto el primero que cumple es el que trae
    carritoDeCompras.push(productoAgregar);
    console.log(carritoDeCompras);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    console.log("cantidad de productos agregados " + carritoDeCompras.length);
    let suma = carritoDeCompras.reduce((acc, element) => acc + element.precio, 0); // reduce es un metodo que nos permite hacer calculos acc es acumulador q inicia en 0 y el es el elemento del array
  
    console.log("la suma total de su Carrito es $" + suma);
  }
  

 /*TIENDA 2 ----------------------------------------------------------------
//CLASES
class Producto {
    constructor (nombre, precio, descripcion, medidas, stock) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.descripcion = descripcion
        this.medidas = medidas;
        this.stock = stock;
        this.vendido = false;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
        console.log("El precio con IVA incluido es de: € " + this.precio)
    }

    vender(cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
            console.log ("Quedan " + this.stock + " unidades");
        }else{
            console.log ("No quedan mas unidades de " + this.nombre + " en stock")
        }
    }

    mostrar() {
		console.log ("Nombre: " + this.nombre);
		console.log ("Precio: € " + this.precio);
		console.log ("Descripcion: " + this.descripcion);
        console.log ("Medidas: " + this.medidas);

	}
}


//PRODUCTOS
const cuadros = [];

cuadros.push ( new Producto (
    "Rubiio Posca",
    100,
    "Cuadro realizado en enteramente en rotuladores Posca",
    "60cm x 30cm",
    1 )
    );

cuadros.push ( new Producto (
    "Drubiio",
    15,
    "Cuadrito hecho en madera fina, con rotuladores y lapices",
    "20cm x 25cm",
    1 )
    );

cuadros.push ( new Producto (
    "Mache",
    25,
    "Cuadro realizado en rotuladores Posca y pintura en aerosol",
    "25cm x 20cm",
    1 )
    );

cuadros.push ( new Producto (
    "BartFall",
    25,
    "Cuadro hecho en madera con pintura acrilica",
    "25cm x 20cm",
    1 )
    );

cuadros.push ( new Producto (
    "Regular Show",
    "30",
    "Cuadro hecho en madera con pintura acrilica",
    "30cm x 25cm",
    1 )
    );

cuadros.push ( new Producto (
    "Setario",
    60,
    "Cuadro realizado en madera con pintura acrilica.",
    "40cm x 30cm",
    1 )
    );


for (const cuadro of cuadros){
    console.log(cuadro)
}
 */




/*
const actua = cuadros.map (e => {
    return {
        nombre: e.nombre,
        precio: e.precio * 1.21
    }
})

console.log(actua);


const total = cuadros.reduce((acc, e) => acc + e.precio, 0)

console.log(total);




cuadros.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    } else if (a.nombre < b.nombre) {
        return -1
    }else{
        return 0;
    }
});
console.log(cuadros);

*/

/*
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
      } else if(op == "restar"){
        return (a, b) => a - b
      }
      else {
        return "no te entendi"
      }
  }
  
  let suma = asignarOperacion("sumar");
  
  console.log(suma(85, 98));


  const hojas = ["hoja 1", "hoja 2", "hoja 3", "hoja 4"]
const numeros = [1, 2, 3, 4]

function porCadaUno(arr, fn) {
    for (const e of arr) {
        fn(e)
    }
}

porCadaUno(hojas, console.log)


const numeros = [1, 2, 3, 4]
let total = 0

function porCadaUno(arr, fn) {
    for (const e of arr) {
        fn(e)
    }
}

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total);

const duplicado = []

porCadaUno(numeros, (e) => {
    duplicado.push (e * 2)
})
 
console.log(duplicado);
console.log(numeros);

numeros.forEach( n => {
    console.log(n);
})


*/



// console.log(Math.round(Math.random() * 100))



//Conteo
// let inicio = new Date();
// for (let i = 0; i < 10000; i++) {
//     console.log("haciendo tiempo");
// }
// let final = new Date();
// console.log("El proceso tardo: " + parseInt(Math.round(((final - inicio) * 0.03))) + " segundos");


// Generar numero
// function generarNumero() {
//     return Math.round(Math.random() * 100);
//   }
// console.log(generarNumero());

// function eliminarDelCarrito (id) {
//     let index = Productos.indexOf(id);

//     if (index != -1) {
//         Productos.splice(index, 1)
//     }
// }

// querySelector()  

// //Con una case
// querySelector(".mi-clase")

// //Con un id 
// querySelector("#mi-id")



// let nuevo_div = document.createElement("div");

// nuevo_div.innerHTML = `
//     <h3>Titulo</h3>
//     <img src="https://picsum.photos/200/200" />
//     <h4> $100 </h4>
// `;

// document.body.append(nuevo_div);


// HTML 
// { <input type="text" id="nombre" placeholder="nombre">
//     <input type="text" id="apellido" placeholder="apellidos">
//     <button id="btnForm">Mostrame datos</button>

//     <br>
//     <br>

//     <div id="mostrar">
        
//     </div> 
// }


// JS 
let button = document.getElementById('btnForm')

button.onclick = () => {

    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value

    let muestra = document.getElementById('mostrar')
    
    muestra.innerHTML = 
    `
        <h2>${nombre}</h2>
        <h2>${apellido}</h2>
    `
} 


/*

//AGREGAR PRODUCTOS AL CARRITO
const btnAgregarAlCarrito = document.getElementsByClassName("producto__carrito--btn");
const carrito = document.querySelector(".elCarrito");
const nombres = document.querySelector(".producto__nombre").textContent;



for (const btn of btnAgregarAlCarrito) {
  
  btn.addEventListener("click", () => {
    
    let producto = productos.find(e => e.id == btn.id);
    carritoDeCompras.push(producto);
    carrito.innerHTML = "";
    div = document.createElement("div");
    div.innerHTML += `
                      <div class="text-light contenedorCarrito">
                        <h2 class="tituloCarrito">Tu Carrito</h2>
                          <p class="infoCarrito">Has agregado ${nombres} al carrito.</p>
                          <p class="infoCarrito">Cantidad de productos agregados al carrito: ${carritoDeCompras.length}</p>
                          <p class="infoCarrito">La suma total de tu carrito es: ${sumaCarrito()}</p>
                      </div>`
    carrito.appendChild(div)
    
  })
}

function sumaCarrito(){
  let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);
  return suma;
}


*/


/*

function agregarAlCarrito() {
  let elijoProducto = 1

  let productoAgregar = productos.find((e) => e.id == elijoProducto);
  let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);
 
  carritoDeCompras.push(productoAgregar);
  carrito.innerHTML = `
    <div class="text-light contenedorCarrito">
      <h2 class="tituloCarrito">Tu Carrito</h2>
      <p class="infoCarrito">Has agregado ${productoAgregar.nombre} al carrito.</p>
      <p class="infoCarrito">Cantidad de productos agregados al carrito: ${carritoDeCompras.length}</p>
      <p class="infoCarrito">La suma total de tu carrito es: ${suma}</p>
    </div>
  `

}
// agregarAlCarrito();


*/



/*
//AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito() {
  let elijoProducto = parseInt(prompt("ingrese el ID de su producto:"));

  let productoAgregar = productos.find((e) => e.id == elijoProducto);
  carritoDeCompras.push(productoAgregar);
  console.log(carritoDeCompras);
  console.log("Has agregado " + productoAgregar.nombre + " al carrito.");
  actualizarCarrito();
}
// agregarAlCarrito();

function actualizarCarrito() {
  console.log(
    "cantidad de productos agregados al carrito: " + carritoDeCompras.length
  );
  let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);

  console.log("la suma total de su Carrito es $" + suma);
}
*/



/*
function sumaCarrito(){
    let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);
    return suma;
  }
*/









