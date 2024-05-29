document.addEventListener('DOMContentLoaded', () => {
    function animateImage(image) {
        let angle = 0;
        const speed = 0.4; // Ajuste para la velocidad del movimiento
        const amplitude = 10; // Amplitud del movimiento
        const duration = 3000; // Duración del movimiento en milisegundos (3 segundos)
        const pause = 2000; // Duración de la pausa en milisegundos (2 segundos)
        let startTime = null;

        function swing(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            if (elapsed < duration) {
                angle += speed;
                const rotation = Math.sin(angle) * amplitude;
                image.style.transform = `rotate(${rotation}deg)`;
                requestAnimationFrame(swing);
            } else {
                setTimeout(() => {
                    startTime = null;
                    requestAnimationFrame(swing);
                }, pause);
            }
        }

        requestAnimationFrame(swing);
    }

    // Iniciar la animación para cada imagen dentro de los botones
    const img1 = document.querySelector('#button1 .image-container img');
    const img2 = document.querySelector('#button2 .image-container img');
    const img3 = document.querySelector('#button3 .image-container img');

    animateImage(img1);
    animateImage(img2);
    animateImage(img3);
});


document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Configura la posición inicial aleatoria
        star.style.left = `${Math.random() * 100}vw`;

        // Configura la duración de la animación aleatoria (entre 3 y 10 segundos)
        star.style.animationDuration = `${Math.random() * 7 + 3}s`;

        starsContainer.appendChild(star);

        // Elimina la estrella después de que la animación termina
        star.addEventListener('animationend', () => {
            star.remove();

        // Crea una nueva estrella cada 500 ms en lugar de cada 300 ms
        setInterval(createStar, 300); // Reducido de 300ms a 500ms

        });
    }

    // Crea una nueva estrella cada 300 ms
    setInterval(createStar, 300);
});

