// Parte uno: Funciones principales de vasos y botón de play//
document.addEventListener("DOMContentLoaded", () => {
    const cups = document.querySelectorAll(".cup");
    const ball = document.getElementById("ball");
    const playButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset");
    const countdownElement = document.getElementById("countdown");
    const hourglass = document.getElementById("imagen-hourglass");
    let ballPosition = 0;
    let gameStarted = false;
    let countdownInterval;

    playButton.addEventListener("click", () => {
        if (!gameStarted) {
            startCountdown(10);
            startRotation(); 
            raiseAllCups();
            ballPosition = Math.floor(Math.random() * 3);
            gameStarted = true;
            playButton.disabled = true;
            resetButton.disabled = false;
        }
    });

    resetButton.addEventListener("click", () => {
        resetGame();
        stopRotation(); 
        clearInterval(countdownInterval); 
        gameStarted = false;
        playButton.disabled = false;
        resetButton.disabled = true;
        ballPosition = 0;
        countdownElement.textContent = "";
    });

    cups.forEach((cup, index) => {
        cup.addEventListener("click", () => {
            if (!gameStarted) return; 
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
            cup.style.transform = "translateY(-70px)";
        });

        setTimeout(() => {
            cups.forEach(cup => {
                cup.style.transform = "translateY(0)";
            });
            ball.style.display = "none";
        }, 1000);
    }

    function raiseCup(index) {
        cups[index].style.transform = "translateY(-70px)";
    }

    function resetGame() {
        cups.forEach(cup => {
            cup.style.transform = "translateY(0)";
        });
        ball.style.display = "none";
    }

    
    function startRotation() {
        hourglass.classList.add("rotating");
    }

    
    function stopRotation() {
        hourglass.classList.remove("rotating");
    }

    
    function startCountdown(duration) {
        let timeRemaining = duration;
        countdownElement.textContent = timeRemaining;

        countdownInterval = setInterval(() => {
            timeRemaining--;
            countdownElement.textContent = timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                stopRotation(); 
            }
        }, 1000);
    }
});
