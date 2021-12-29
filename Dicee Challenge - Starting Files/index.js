let randomNumber1;
let randomNumber2;
let winnerTitle;

randomNumber1 = Math.round(Math.random()*5+1);
randomNumber2 = Math.round(Math.random()*5+1);
winnerTitle = document.querySelector('.container h1');

document.querySelector('.img1').src = 'images/dice'+randomNumber1+'.png';
document.querySelector('.img2').src = 'images/dice'+randomNumber2+'.png';


if(randomNumber1 > randomNumber2) {
  winnerTitle.innerHTML = 'Player 1 Wins!';
} else if(randomNumber1 < randomNumber2) {
  winnerTitle.innerHTML = 'Player 2 Wins!';
} else if(randomNumber2 === randomNumber1) {
  winnerTitle.innerHTML = 'Draw!';
} else {
  winnerTitle.innerHTML = 'Error';
}