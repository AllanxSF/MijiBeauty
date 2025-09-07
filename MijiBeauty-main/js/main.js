
let nombresR = [];
let correosR = [];
let direcionR = [];
let telefonoR = [];
let contraseñasR = [];
let contraseñas2R = [];

let nombresC = [];
let correosC = [];
let telefonoC = [];
let asuntoC = [];
let descripcionC = [];

function validar_registro() {
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let direcion = document.getElementById("direcion");
    let telefono = document.getElementById("telefono");
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
        direcionR.push(direcion.value);
        telefonoR.push(telefono.value);
        contraseñasR.push(contraseña.value);
        contraseñas2R.push(contraseña2.value);

        console.log("Nombres registrados:", nombresR);
        console.log("Correos registrados:", correosR);
        console.log("Direcciones registradas:", direcionR);
        console.log("Telefonos registrados:", telefonoR);
        console.log("Contraseñas registradas:", contraseñasR);
        console.log("Confirmaciones registradas:", contraseñas2R);
        alert("IRegistro existoso");
        limpiarR();
    }
}

function limpiarR() {
    nombre.value = "";
    correo.value = "";
    direcion.value = "";
    telefono.value = "";
    contraseña.value = "";
    contraseña2.value = "";

}

function validar_contacto() {

    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
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
        telefonoC.push(telefono.value);
        descripcionC.push(descripcion.value);
        limpiarC();
        alert("Enviado con exito");

        console.log("Nombres registrados:", nombresC);
        console.log("Correos registrados:", correosC);
        console.log("Telefonos registradas:", telefonoC);
        console.log("Asuntos registrados:", asuntoC);
        console.log("Descripcioines registradas:", descripcionC);
    }

}

function limpiarC() {
    nombre.value = "";
    correo.value = "";
    telefono.value = "";
    asunto.value = "";
    descripcion.value = "";

}