


document.querySelector(".btn").addEventListener("click",function() {
  var randomNumber=Math.floor(Math.random() * 6 + 1);
  var randomDiceImage=("./images/Dice" + randomNumber + ".png");
  document.querySelector(".img1").setAttribute("src" ,randomDiceImage);
  var randomNumber2= Math.floor(Math.random() * 6 +1);
  var randomDiceImage2=("./images/Dice" + randomNumber2 + ".png")
  document.querySelector(".img2").setAttribute("src" ,randomDiceImage2);
  if (randomNumber2>randomNumber) {
  document.querySelector("h1").textContent= "Player 2 Wins!!!"
  }else if(randomNumber2<randomNumber){
  document.querySelector("h1").textContent= "Player 1 Wins!!!"
  }else{
    document.querySelector("h1").textContent= "Tie!!!"}
});
