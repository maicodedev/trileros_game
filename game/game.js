// POP UP

document.addEventListener("DOMContentLoaded", function() {
    const btnBallon = document.querySelector('.btn-ballon');
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
   

    btnBallon.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la acción por defecto del enlace
        modal.style.display = "flex"; // Muestra el modal
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none"; // Oculta el modal
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Oculta el modal si se hace clic fuera de él
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = "none"; // Oculta el modal al presionar Escape
        }
    });
});


//AUDIO
var audio = document.getElementById("miAudio");

function toggleSound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

//GLOBOS
// Obtener referencias a los contenedores que agrupan cada globo y su texto
const pack1 = document.querySelector('.container-ballon-1');
const pack2 = document.querySelector('.container-ballon-2');

// Definir la función para mover los globos y los textos como packs
function moveElements() {
    // Generar valores aleatorios para el desplazamiento horizontal y vertical
    const offsetX = Math.random() * 20 - 5;
    const offsetY = Math.random() * 20 - 5;

    // Aplicar el desplazamiento a los estilos de los packs
    pack1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    pack2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Establecer un intervalo para llamar a la función cada cierto tiempo (en milisegundos)
setInterval(moveElements, 1000);

/*button score*/
let score = 0;

const scoreDiv = document.getElementById('score');
const incrementButton = document.getElementById('imagen-play');

function updateScore() {
    score += 10;
    scoreDiv.textContent = `Score: ${score}`;
}

incrementButton.addEventListener('click', updateScore);
/*  let score = 0;

const scoreDiv = document.getElementById('score');
const winButton = document.getElementById('winButton');
const loseButton = document.getElementById('loseButton');

function updateScore(win) {
    if (win) {
        score += 10;
    }
    scoreDiv.textContent = `Score: ${score}`;
}

winButton.addEventListener('click', () => updateScore(true));
loseButton.addEventListener('click', () => updateScore(false));*/