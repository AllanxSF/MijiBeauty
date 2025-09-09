
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

let contraseñaI = [];
let correosI = [];

let correoN = [];

function validar_registro() {
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let direcion = document.getElementById("direcion");
    let telefono = document.getElementById("telefono");
    let contraseña = document.getElementById("contraseña");
    let contraseña2 = document.getElementById("contraseña2");

    if (nombre.value.trim() == "") {
        alert("ingrese un nombre");
    } else if (correo.value.trim() == "") {
        alert("ingrese un correo");

    } else if (!correo.value.trim().endsWith("@gmail.com")
        && !correo.value.trim().endsWith("@duoc.cl")
        && !correo.value.trim().endsWith("@profesor.duoc.cl")) {
        alert("Correo no válido");

    } else if (contraseña.value.trim() == "") {
        alert("ingrese una contraseña");

    } else if (contraseña2.value.trim() == "") {
        alert("ingrese una contraseña");

    } else if (contraseña.value.length < 4 || contraseña.value.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres");

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

    } else if (nombre.value.length > 100) {
        alert("nombre demasiado largo");

    } else if (correo.value.trim() == "") {
        alert("ingrese un correo");
    }
    else if (correo.value.length > 100) {
        alert("correo demasiado largo");

    } else if (!correo.value.trim().endsWith("@gmail.com")
        && !correo.value.trim().endsWith("@duoc.cl")
        && !correo.value.trim().endsWith("@profesor.duoc.cl")) {
        alert("Correo no válido");

    } else if (asunto.value.trim() == "") {
        alert("ingrese un asunto");

    } else if (descripcion.value.trim() == "") {
        alert("ingrese una descripcion");

    } else if (descripcion.value.length > 500) {
        alert("descripcion demasiado largo");

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

function validar_inicio() {

    let correo = document.getElementById("correo");
    let contraseña = document.getElementById("contraseña");

    if (correo.value.trim() == "") {
        alert("ingrese un correo");
        return false;

    } else if (!correo.value.trim().endsWith("@gmail.com")
        && !correo.value.trim().endsWith("@duoc.cl")
        && !correo.value.trim().endsWith("@profesor.duoc.cl")) {
        alert("Correo no válido");
        return false;

    } else if (correo.value.length > 100) {
        alert("correo demasiado largo");

    } else if (contraseña.value.trim() == "") {
        alert("ingrese una contraseña");
        return false;

    } else if (contraseña.value.length < 4 || contraseña.value.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres");
        return false;

    } else {
        contraseñasI.push(contraseña.value);
        correosI.push(correo.value);
        return true;
    }
}

function validar_recuperar() {
    let correo = document.getElementById("correo");
    let correoN = [];

    if (correo.value.trim() === "") {
        alert("Ingrese un correo");

    } else if (correo.value.length > 100) {
        alert("correo demasiado largo");

    } else if (!correo.value.trim().endsWith("@gmail.com")
        && !correo.value.trim().endsWith("@duoc.cl")
        && !correo.value.trim().endsWith("@profesor.duoc.cl")) {
        alert("Correo no válido");

    } else {
        correoN.push(correo.value.trim());
        alert("Correo válido: " + correo.value);
    }
}

/* js productos*/
const productos = [
    {
        id: 1,
        nombre: "Pink Peptide Eye Cream",
        precio: "25000",
        descripcion: "La crema de ojos PDRN Pink Peptide es un tratamiento innovador diseñado para combatir los signos del envejecimiento en la zona ocular. Su fórmula combina PDRN (Ácido Desoxirribonucleico Polinucleotídico), que estimula la reparación celular y mejora la elasticidad de la piel, con péptidos biomiméticos que actúan como un botox natural, reduciendo la aparición de arrugas. Además, contiene ácido hialurónico para una hidratación intensa y niacinamida para mejorar la textura de la piel. Esta crema es ideal para todo tipo de piel y se recomienda su uso diario para obtener mejores resultados.",
        imagen: "CSS/img/producto1.webp"
    },
    {
        id: 2,
        nombre: "Limpiador Facial Fresh Green Rice Mochi Cleanser",
        precio: "20000",
        descripcion: "Limpiador facial enriquecido con agua y polvo de arroz que elimina eficazmente la suciedad y las impurezas de la piel sin quitarle humedad. Los extractos de hamamelis e hisopo en la fórmula proporcionan efectos iluminadores y calmantes. El limpiador se elabora mediante un proceso tradicional de amasado para obtener una textura similar al mochi que desobstruye los poros y purifica la piel a fondo.",
        imagen: "CSS/img/producto2.webp"
    },
    {
        id: 3,
        nombre: "Tónico Facial 1025 Dokdo Toner",
        precio: "10.590",
        descripcion: "El Tónico Facial 1025 Dokdo Toner de Round Lab es un tónico coreano que exfolia suavemente, hidrata y calma la piel, siendo apto para todo tipo de piel. Contiene agua de mar profunda, extracto de alga roja, caña de azúcar, pantenol, alantoína y betaína, que ayudan a mantener la humedad, reducir brotes y suavizar la piel. Su textura ligera se absorbe rápido sin dejar residuos, y se aplica después de la limpieza facial, por la mañana o noche, para preparar la piel antes de sueros o cremas. Está disponible en tiendas online como Linio Chile y Mercado Libre Chile.",
        imagen: "CSS/img/producto3.webp"
    },
    {
        id: 4,
        nombre: "ROUND LAB Dokdo Cream",
        precio: "32.600",
        descripcion: "La ROUND LAB 1025 Dokdo Cream es una crema hidratante coreana diseñada para pieles secas y sensibles. Su fórmula combina triple ácido hialurónico y cinco tipos de ceramidas para proporcionar hidratación profunda y fortalecer la barrera cutánea. Enriquecida con minerales del agua de mar profunda de Ulleungdo, ayuda a calmar la piel irritada y a mantener la hidratación durante todo el día. Su textura tipo bálsamo se absorbe fácilmente, dejando la piel suave y flexible.",
        imagen: "CSS/img/producto4.webp"
    },
    {
        id: 5,
        nombre: "KAHl Balm Coreano",
        precio: "5.390",
        descripcion: "El KAHI Wrinkle Bounce Multi Balm es un bálsamo multifuncional coreano que combina los beneficios de un hidratante, crema para ojos, bálsamo labial y base de maquillaje en un solo producto. Formulado con un complejo de salmón, colágeno y PDRN, este bálsamo ofrece potentes beneficios antienvejecimiento y puede ayudar a estimular la producción de colágeno para restaurar la elasticidad de la piel. Además, está infundido con aceite fermentado natural de Jeju para mejorar la absorción y prevenir que el maquillaje se seque o se agriete durante el día. Su fórmula de rápida absorción proporciona hidratación duradera y puede ayudar a reducir la apariencia de líneas finas y arrugas, dejándote con una piel más suave y luminosa.",
        imagen: "CSS/img/producto5.webp"
    },
    {
        id: 6,
        nombre: "Aceite Limpiador ANUA",
        precio: "21.089",
        descripcion: "El Aceite Limpiador ANUA Heartleaf Pore Control es un limpiador facial coreano que calma la piel, reduce poros dilatados e hidrata gracias a su combinación de extracto de heartleaf y aceites vegetales, siendo apto para todo tipo de piel, incluso sensible y propensa al acné.",
        imagen: "CSS/img/producto6.webp"
    },
    {
        id: 7,
        nombre: "PHA 30 Days Miracle Serum",
        precio: "23.990",
        descripcion: "El SOME BY MI AHA BHA PHA 30 Days Miracle Serum es un suero bifásico coreano diseñado para pieles propensas al acné. Combina un 10,000 ppm de agua de hoja de árbol de té y un 14.5% de extracto de centella asiática para calmar la piel, reducir la inflamación y fortalecer la barrera cutánea. Además, incorpora AHA, BHA y PHA para exfoliar suavemente, eliminar células muertas y mejorar la textura de la piel. Su fórmula es libre de 20 ingredientes artificiales y tiene un pH de 5.5, adecuado para pieles sensibles.",
        imagen: "CSS/img/producto7.webp"
    },
    {
        id: 8,
        nombre: "Bouncy & Firm Sleeping Mask Mini",
        precio: "3.990",
        descripcion: "La Laneige Bouncy & Firm Sleeping Mask Mini es una mascarilla de noche coreana diseñada para revitalizar y reafirmar la piel mientras duermes. Su fórmula contiene el complejo Peony & Collagen™ con péptidos, que ayuda a reducir la apariencia de líneas finas y a mejorar la elasticidad de la piel. Además, incluye cápsulas Hydro-Melt Glow que protegen la barrera cutánea, ácido hialurónico para una hidratación profunda y un lisado probiótico de té verde que aporta luminosidad. Su textura tipo sorbete se funde al aplicarla, dejando la piel suave y luminosa al despertar.",
        imagen: "CSS/img/producto8.webp"
    },
    {
        id: 9,
        nombre: "Cosrx Advanced Snail 96 Mucin Essencer",
        precio: "18.239",
        descripcion: "El Cosrx Advanced Snail 96 Mucin Power Essence es un sérum coreano que contiene un 96% de filtrado de secreción de caracol, conocido por sus propiedades regeneradoras y calmantes. Este producto hidrata profundamente la piel, mejora su textura, reduce manchas oscuras y líneas finas, y fortalece la barrera cutánea, todo sin dejar sensación pegajosa. Es adecuado para todo tipo de piel, incluyendo las sensibles, y se utiliza después de la limpieza y tonificación, aplicando una pequeña cantidad en el rostro y dando ligeros toques para facilitar su absorción.",
        imagen: "CSS/img/producto9.webp"

    },
]


document.addEventListener("DOMContentLoaded", function () {
    renderProduct();
})


function renderProduct() {
    const parametor = new URLSearchParams(window.location.search);
    const idProducto = parametor.get("id");
    const productoEncontrado = productos.find(p => p.id == idProducto);

    if (productoEncontrado) {

        document.getElementById("nombre-producto").textContent = productoEncontrado.nombre;
        document.getElementById("imagen-producto").src = productoEncontrado.imagen;
        document.getElementById("precio-producto").textContent = "$" + productoEncontrado.precio;
        document.getElementById("descripcion-producto").textContent = productoEncontrado.descripcion;

        const botonAgregar = document.querySelector(".btn-añadir-carrito");
        console.log(botonAgregar)

        botonAgregar.setAttribute("id-producto", productoEncontrado.id);

        botonAgregar.addEventListener("click", agregarAlCarrito);

    } else {

        document.getElementById("tituloProducto").innerText = "Producto no encontrado";
    }
};

/* Carrito */


// Función para agregar productos al carrito
function agregarAlCarrito(event) {
    const idBoton = event.currentTarget.getAttribute("id-producto");

    // Obtener carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem("producto-en-carrito")) || [];

    // Buscar producto a agregar
    const productoAgregado = productos.find(p => p.id == idBoton);
    if (!productoAgregado) return;

    // Revisar si ya existe en el carrito
    const index = carrito.findIndex(p => p.id == idBoton);

    if (index !== -1) {
        carrito[index].cantidad++;
    } else {
        carrito.push({ ...productoAgregado, cantidad: 1 });
    }

    // Guardar carrito actualizado
    localStorage.setItem("producto-en-carrito", JSON.stringify(carrito));

    // Actualizar numerito y mostrar carrito
    actualizarNumerito();
    mostrarCarrito();
}

// Actualiza el contador del carrito
function actualizarNumerito() {
    const contador = document.querySelector("#numCarrito");
    const carrito = JSON.parse(localStorage.getItem("producto-en-carrito")) || [];
    let total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    contador.innerText = total;
}

// Muestra el carrito
function mostrarCarrito() {
    const contenedor = document.getElementById("carrito-contenedor");
    const carrito = JSON.parse(localStorage.getItem("producto-en-carrito")) || [];
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío 🛒</p>";
        document.getElementById("total").innerText = "$0";
        return;
    }

    let total = 0;

    carrito.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card-carrito");
        card.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="info-card">
                <h3>${p.nombre}</h3>
                <p>Precio: $${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <p class="subtotal">Subtotal: $${p.precio * p.cantidad}</p>
            </div>
        `;
        contenedor.appendChild(card);

        total += p.precio * p.cantidad;
    });

    document.getElementById("total").innerText = "$" + total;
}

function vaciarCarrito() {
    // Borra todo del localStorage
    localStorage.removeItem("producto-en-carrito");

    // Actualiza la UI
    mostrarCarrito();
    actualizarNumerito();
}

const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.addEventListener("click", vaciarCarrito);




