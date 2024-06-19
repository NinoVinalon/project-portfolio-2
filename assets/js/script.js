document.addEventListener("DOMContentLoaded", function() { 
    const buttons = document.getElementsByTagName("button");
    const colorBox = document.getElementById("color-box");
    const choices = ["blue", "red", "yellow", "green", "pink", "orange",];

    /* add event listener to all buttons */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
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

}
     
});