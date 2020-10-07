var randomNumber = Math.random();
var randomNumber1 = Math.floor((randomNumber * 6) + 1);
console.log(randomNumber1);
if (randomNumber1 == 1) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");

}
if (randomNumber1 == 2) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");

}
if (randomNumber1 == 3) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");

}
if (randomNumber1 == 4) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");

}
if (randomNumber1 == 5) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");

}
if (randomNumber1 == 6) {
document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");

}


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
