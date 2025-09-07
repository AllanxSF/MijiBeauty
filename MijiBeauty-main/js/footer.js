document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el footer");
            return response.text();
        })
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Error al insertar el footer:", error));
});
