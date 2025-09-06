
let nombres = [];
let correos = [];
let contraseñas = [];

function validar(e) {
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let contraseña = document.getElementById("contraseña");
    if (nombre.value.trim() == "") {
        alert("ingrese un nombre");
    }
    else if (correo.value.trim() == "") {
        alert("ingrese un correo");

    } else if (contraseña.value.trim() == "") {
        alert("ingrese una contraseña");

    } else {
        nombres.push(nombre.value);
        correos.push(correo.value);
        contraseñas.push(contraseña.value);
    }
}