// POP UP

document.addEventListener("DOMContentLoaded", function() {
    const btnBallon = document.querySelector('.btn-ballon');
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
   

    btnBallon.addEventListener('click', function(event) {
        event.preventDefault(); 
        modal.style.display = "flex"; 
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none"; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; 
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = "none"; 
        }
    });
});

//GLOBOS

const pack1 = document.querySelector('.container-ballon-1');
const pack2 = document.querySelector('.container-ballon-2');
function moveElements() {
    
    const offsetX = Math.random() * 20 - 5;
    const offsetY = Math.random() * 20 - 5;

    pack1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    pack2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

setInterval(moveElements, 1000);


//AUDIO
var audio = document.getElementById("miAudio");
var isMuted = false;


window.onload = function() {
    audio.play();
};

function toggleSound() {
    if (isMuted) {
        audio.play();
        isMuted = false;
    } else {
        audio.pause();
        isMuted = true;
    }
}
        