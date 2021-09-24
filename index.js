var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.group(randomNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
let h1 = document.querySelector(".container h1");
if (randomNumber1 > randomNumber2) {
    h1.textContent = "🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = "Player 2 wins 🚩";
} else {
    h1.textContent = "Draw !";
}