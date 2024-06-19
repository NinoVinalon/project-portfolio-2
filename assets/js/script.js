document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.getElementsByTagName("button");
    const buttonBlue =document.getElementsByClassName("button-blue");
    const buttonRed = document.getElementsByClassName("button-red");
    const buttonYellow = document.getElementsByClassName("button-yellow");
    const buttonGreen = document.getElementsByClassName("button-green");
    const buttonPink = document.getElementsByClassName("button-pink");
    const buttonOrange = document.getElementsByClassName("button-orange");
    const choices = ["blue", "red", "yellow", "green", "pink", "orange",];

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        })
    }

})

function runGame() {

}
function incrementScore() {

}
function reductionScore() {

}