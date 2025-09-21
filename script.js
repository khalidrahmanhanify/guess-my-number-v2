'use strict';

/* document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
 */

// Selecting Elements
const labelScore = document.querySelector('.score');
const labelMessage = document.querySelector('.message');
const elementBody = document.querySelector('body');
const elementNumber = document.querySelector('.number');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const elementGuess = document.querySelector('.guess');
const lableHighscore = document.querySelector('.highscore');

// Generating Random Number
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = (element, message) => (element.textContent = message);
const applyStyles = function (element, style, styleValue) {
  element.style[style] = styleValue;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

btnCheck.addEventListener('click', function () {
  const guess = Number(elementGuess.value);
  console.log(secretNumber);

  // When no input
  if (!guess) {
    displayMessage(labelMessage, '⛔ No Number!');

    // When user wins
  } else if (guess === secretNumber) {
    displayMessage(labelMessage, '🎉 Correct Number');
    applyStyles(elementBody, 'backgroundColor', '#60b347');
    applyStyles(elementNumber, 'width', '30rem');
    displayMessage(elementNumber, secretNumber);
    if (score > highScore) {
      highScore = score;
      displayMessage(lableHighscore, highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        labelMessage,
        guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      );
      score--;
      displayMessage(labelScore, score);
    } else {
      displayMessage(labelMessage, '💥 You lost the game!');
      labelScore.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', () => {
  elementGuess.value = '';
  score = 20;
  displayMessage(labelScore, score);
  displayMessage(labelMessage, 'Start guessing...');
  applyStyles(elementBody, 'backgroundColor', '#222');
  applyStyles(elementNumber, 'width', '15rem');
  secretNumber = generateSecretNumber();
  displayMessage(elementNumber, '?');
});
