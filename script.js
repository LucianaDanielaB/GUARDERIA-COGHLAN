console.log("JavaScript conectado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    if (formulario) {
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        formulario.addEventListener("submit", function (event) {
            // Validaciones
            if (nombre.value.trim() === "") {
                event.preventDefault();
                alert("Por favor ingresá tu nombre.");
                nombre.focus();
                return;
            }

            if (email.value.trim() === "") {
                event.preventDefault();
                alert("Por favor ingresá tu correo electrónico.");
                email.focus();
                return;
            }

            if (!email.value.includes("@")) {
                event.preventDefault();
                alert("Ingresá un correo electrónico válido.");
                email.focus();
                return;
            }

            if (mensaje.value.trim() === "") {
                event.preventDefault();
                alert("Por favor escribí un mensaje.");
                mensaje.focus();
                return;
            }

            // Si pasa todas las validaciones, NO ejecutamos preventDefault()
            // Permitimos que Formspree procese el envío de manera nativa.
        });
    }
});