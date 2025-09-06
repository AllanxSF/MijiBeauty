
let nombresR = [];
let correosR = [];
let contraseñasR = [];
let contraseñas2R = [];

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
    alert("Ingreso correcto");
}