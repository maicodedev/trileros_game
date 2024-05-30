// Parte uno: Funciones principales de vasos y botón de play//

document.addEventListener("DOMContentLoaded", () => {
    const cups = document.querySelectorAll(".cup");
    const ball = document.getElementById("ball");
    const playButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset");
    let ballPosition = 0;

    playButton.addEventListener("click", () => {
        raiseAllCups();
        ballPosition = Math.floor(Math.random() * 3);  
    });

    resetButton.addEventListener("click", () => {
        resetGame();
    });

    cups.forEach((cup, index) => {
        cup.addEventListener("click", () => {
            raiseCup(index); 
            if (ballPosition === index) {
                movCups(); 
                setTimeout(() => {
                    alert("Correcto! Encontraste la bolita.");
                }, 1200);
            } else {
                setTimeout(() => {
                    alert("Incorrecto, Intenta de nuevo.");
                }, 1200);
            }
        });
    });

    function movCups() {
        ball.style.display = "block";
        ball.style.top = cups[ballPosition].offsetTop + cups[ballPosition].offsetHeight - (ball.offsetHeight*2) + "px";
        ball.style.left = cups[ballPosition].offsetLeft + (cups[ballPosition].offsetWidth / 2) - (ball.offsetWidth / 2) + "px";
    }

    function raiseAllCups() {
        cups.forEach(cup => {
            cup.style.transform = "translateY(-60px)";
        });

        setTimeout(() => {
            cups.forEach(cup => {
                cup.style.transform = "translateY(0)";
            });
            ball.style.display = "none";
        }, 1000);
    }

    function raiseCup(index) {
        cups[index].style.transform = "translateY(-60px)";
    }

    function resetGame() {
        cups.forEach(cup => {
            cup.style.transform = "translateY(0)";
        });
        ball.style.display = "none";
    }
});


