
document.addEventListener("DOMContentLoaded", () => {
    fetch("/html/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el navbar");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error al insertar el navbar:", error));
});
