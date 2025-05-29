document.querySelector(".btn").addEventListener("click", function () {
  var dice1 = document.querySelector(".img1");
  var dice2 = document.querySelector(".img2");
  dice1.classList.add("animate-roll");
  dice2.classList.add("animate-roll");

  setTimeout(function () {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage = "./images/Dice" + randomNumber + ".png";
    dice1.setAttribute("src", randomDiceImage);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage2 = "./images/Dice" + randomNumber2 + ".png";
    dice2.setAttribute("src", randomDiceImage2);
    if (randomNumber2 > randomNumber) {
      document.querySelector("h1").textContent = "Player 2 Wins!!!";
    } else if (randomNumber2 < randomNumber) {
      document.querySelector("h1").textContent = "Player 1 Wins!!!";
    } else {
      document.querySelector("h1").textContent = "Tie!!!";
    }
    dice1.classList.remove("animate-roll");
    dice2.classList.remove("animate-roll");
  }, 1000);
});
