
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

