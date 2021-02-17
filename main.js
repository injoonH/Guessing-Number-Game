const style = getComputedStyle(document.body);
const range = document.getElementById("range");
const guess = document.getElementById("guess");
const maxNumSpan = document.querySelector(".rule > span");
const playBtn = document.querySelector("button");
const guessResult = document.getElementsByClassName("guess-result")[0];
const gameResult = document.getElementsByClassName("game-result")[0];

range.addEventListener("input", () => {
    maxNumSpan.innerText = range.value;
});

playBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (guess.value === "") return;
    const randomNumber = Math.floor(Math.random() * range.value);
    guessResult.innerText = `You chose: ${guess.value}, the machine chose: ${randomNumber}`;
    if (randomNumber == guess.value) {
        gameResult.innerText = "You won!";
        gameResult.style.color = style.getPropertyValue("--clr-green-400");
    } else {
        gameResult.innerText = "You lost!";
        gameResult.style.color = style.getPropertyValue("--clr-accent");
    }
});
