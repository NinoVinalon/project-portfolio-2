document.addEventListener("DOMContentLoaded", function() { 
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
function runGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log(computerChoice);

    let color = choices[computerChoice];
    console.log(color);

    colorBox.style.backgroundColor = color;
    colorBox.setAttribute('aria-label', `Color: ${computerChoice}`);
    console.log(currentScore);

    setTimeout(function() { 
        if (playerChoice !== color) {
            currentScore -= 10;
            score.textContent = currentScore;
            console.log(currentScore)
            alert (`Incorrect the color was ${color}`);
        } else {
            currentScore += 50;
            score.textContent = currentScore;
            console.log(currentScore)
            alert ("Correct");
        }   
    }, 300)
}  
});
