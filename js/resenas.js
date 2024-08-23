// resenas.js

document.addEventListener('DOMContentLoaded', () => {
    // Carrusel de reseñas
    let reseñas = document.querySelectorAll('.reseña');
    let currentIndex = 0;

    function showReseña(index) {
        reseñas.forEach((reseña, i) => {
            reseña.classList.remove('active');
            if (i === index) {
                reseña.classList.add('active');
            }
        });
    }

    function nextReseña() {
        currentIndex = (currentIndex + 1) % reseñas.length;
        showReseña(currentIndex);
    }

    setInterval(nextReseña, 5000); // Cambia de reseña cada 5 segundos
});