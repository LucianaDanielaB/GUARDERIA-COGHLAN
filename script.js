let submitted = false;

function mostrarMensajeExito() {
    document.getElementById('formulario').reset();
    document.getElementById('mensaje-exito').style.display = 'block';
    submitted = false;
}

// ==========================================
// CONTROLADOR DEL CARRUSEL DE TESTIMONIOS
// ==========================================
function moverRecomendacion(direccion) {
    const pista = document.getElementById('pistaRecomendaciones');
    if (!pista) return;

    const primeraTarjeta = pista.querySelector('.tarjeta-recomendacion');
    if (!primeraTarjeta) return;

    const gap = parseFloat(window.getComputedStyle(pista).gap) || 24;
    const paso = primeraTarjeta.getBoundingClientRect().width + gap;

    pista.scrollBy({
        left: direccion * paso,
        behavior: 'smooth'
    });
}