document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");
    const colorBox = document.getElementById("color-box");
    const choices = ["blue", "red", "yellow", "green", "pink", "orange",];
    const score = document.getElementById("score");
    let currentScore = parseInt(score.textContent);

    /* add event listener to all buttons */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("aria-label");
            console.log(playerChoice);
            runGame(playerChoice);
        });
    }

    /* event listener for rules button */
    document.getElementById("rules").addEventListener("click", function () {
        alert("Game Rules:\n1. Click a color button to choose a color.\n2. A random color will be displayed in the box.\n3. If the displayed color matches your choice, you win 50 pts! \n4. If the displayed color did not match, you lose 10 points. \n5. Once your score goes down to ZERO, its Game Over! \n6. Once your score reach 200, You Win!"); 
    });

    function runGame(playerChoice) {
        let computerChoice = Math.floor(Math.random() * choices.length);
        console.log(computerChoice);

        let color = choices[computerChoice];
        console.log(color);

        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('aria-label', `Color: ${computerChoice}`);
        console.log(currentScore);

        setTimeout(function () {
            if (playerChoice !== color) {
                currentScore -= 10;
                score.textContent = currentScore;
                console.log(currentScore);
                alert(`Incorrect the color is ${color}`);
            } else {
                currentScore += 50;
                score.textContent = currentScore;
                console.log(currentScore);
                alert("Correct");
            }

            if (currentScore <= 0) {
                currentScore = 0;
                score.textContent = currentScore;
                end();
                alert("Game Over! Your score is 0");
                score.parentElement.textContent = "GAME OVER!";
            }

            if (currentScore >= 200) {
                currentScore = 200;
                score.textContent = currentScore;
                end();
                alert("Congratulations! Your score is 200, You Win!");
                score.parentElement.textContent = "You Win!";
            }

        }, 300);

        function end() {
            for (let button of buttons) {
                button.disabled = true;
            }
        }

    }
});
