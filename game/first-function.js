// Parte uno: Funciones principales de vasos y botón de play//
document.addEventListener("DOMContentLoaded", () => {
    const cups = document.querySelectorAll(".cup");
    const ball = document.getElementById("ball");
    const playButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset");
    const countdownElement = document.getElementById("countdown");
    const hourglass = document.getElementById("imagen-hourglass");
    const scoreDiv = document.getElementById('score');
    let score = 0;
    let ballPosition = 0;
    let gameStarted = false;
    let countdownInterval;

    playButton.addEventListener("click", () => {
        if (!gameStarted) { 
            raiseAllCups();
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
        countdownElement.textContent = "5";
    });

    cups.forEach((cup, index) => {
        cup.addEventListener("click", () => {
            if (!gameStarted) return; 
            raiseCup(index);
            stopRotation(); 
            clearInterval(countdownInterval); 
            if (ballPosition === index) {
                revealBall();
                updateScore(true);
                setTimeout(() => {
                    alert("Correcto! Encontraste la bolita.");
                }, 1200);
            } else {
                raiseCup(ballPosition); // Si ha elegido mal se levanta el vaso correcto y se muestra la bola
                revealBall();
                setTimeout(() => {
                    alert("Incorrecto, Intenta de nuevo.");
                }, 1200);
            }
        });
    });

    function moveBall() { // Funcion que cambia de posicion la bola para que sea mas descriptivo
        ballPosition = Math.floor(Math.random() * 3);
    }

    function revealBall() { // Cambiado nombre de la funcion para que sea mas descriptivo con lo que hace
        ball.style.display = "block";
        ball.style.top = cups[ballPosition].offsetTop + cups[ballPosition].offsetHeight - (ball.offsetHeight*2) + "px";
        ball.style.left = cups[ballPosition].offsetLeft + (cups[ballPosition].offsetWidth / 2) - (ball.offsetWidth / 2) + "px";
    }

    function raiseAllCups() {
        cups.forEach(cup => {
            cup.style.transform = "translateY(-70px)";
        });
        revealBall(); // Para mostrar la bola al levantar todos los vasos cuando se inicia el juego

        setTimeout(() => {
            cups.forEach(cup => {
                cup.style.transform = "translateY(0)";
            });
            ball.style.display = "none";
            moveBall(); // Se mueve la bola despues de bajar los vasos y ocultar la bolita
            startCountdown(5); // Se inicia el contador luego de bajar los vasos
            startRotation();
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
                gameStarted = false;
                setTimeout(() => {
                    alert("Se te ha acabado el tiempo, presiona RESET para volver a jugar");
                }, 300);
            }
        }, 1000);
    }

    function updateScore(win) {
        if (win) {
            score += 10;
        }
        scoreDiv.textContent = `Score: ${score}`;
    }
});
