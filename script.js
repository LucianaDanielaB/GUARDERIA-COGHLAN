let submitted = false;

function mostrarMensajeExito() {
    document.getElementById('formulario').reset();
    document.getElementById('mensaje-exito').style.display = 'block';
    submitted = false;
}