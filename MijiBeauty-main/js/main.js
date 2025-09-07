
let nombresR = [];
let correosR = [];
let contraseñasR = [];
let contraseñas2R = [];

let nombresC = [];
let correosC = [];
let asuntoC = [];
let descripcionC = [];

function validar_registro() {
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let contraseña = document.getElementById("contraseña");
    let contraseña2 = document.getElementById("contraseña2");

    if (nombre.value.trim() == "") {
        alert("ingrese un nombre");
    }
    else if (correo.value.trim() == "") {
        alert("ingrese un correo");

    } else if (contraseña.value.trim() == "") {
        alert("ingrese una contraseña");

    } else if (contraseña2.value.trim() == "") {
        alert("ingrese una contraseña");

    } else if (contraseña2.value.trim() != contraseña.value.trim()) {
        alert("Las contraseñas no coinciden");

    } else {
        nombresR.push(nombre.value);
        correosR.push(correo.value);
        contraseñasR.push(contraseña.value);
        contraseñas2R.push(contraseña2.value);
        alert("IRegistro existoso");
        limpiar();
    }
}

function limpiar() {
    nombre.value = "";
    correo.value = "";
    contraseña.value = "";
    contraseña2.value = "";
}

function validar_contacto() {

    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let asunto = document.getElementById("asunto");
    let descripcion = document.getElementById("descripcion");

    if (nombre.value.trim() == "") {
        alert("ingrese un nombre");
    }
    else if (correo.value.trim() == "") {
        alert("ingrese un correo");

    } else if (asunto.value.trim() == "") {
        alert("ingrese un asunto");

    } else if (descripcion.value.trim() == "") {
        alert("ingrese una descripcion");

    } else {
        nombresC.push(nombre.value);
        correosC.push(correo.value);
        asuntoC.push(asunto.value);
        descripcionC.push(descripcion.value);
        alert("Enviado con exito");
    }
    
}