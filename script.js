let submitted = false;

function mostrarMensajeExito() {
    document.getElementById('formulario').reset();
    document.getElementById('mensaje-exito').style.display = 'block';
    submitted = false;
}

// ==========================================
// CONTROLADOR DEL CARRUSEL DE TESTIMONIOS
// ==========================================
function moverCarrusel(direccion) {
    const track = document.getElementById('trackRecomendaciones');
    if (!track) return;
    
    // Ancho exacto de una sola tarjeta (330px) + el espacio del gap (25px) = 355px
    // Esto asegura que avance exactamente de a un testimonio por vez de forma suave y controlada
    const anchoTarjeta = 355; 
    
    track.scrollBy({
        left: direccion * anchoTarjeta,
        behavior: 'smooth' // Desplazamiento animado, lento y elegante
    });
}
