// Permet de chosir un nombre aléatoire entre 0 et 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Starting score equal 20
let score = 20;

// Starting highscore
let highscore = 0;

// This function allows to avoid to repeat document.querySelector('.message).textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // Displayed message when no number is indicated
  if (!guess) {
    displayMessage('No number');
  }

  // Events when suggested number is correct
  else if (guess === secretNumber) {
    displayMessage('Correct number !');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#008000';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    // Events when suggested number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Display a messaage when the suggested number is too high or too low
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');

      // Subtract 1 to score to each wrong suggested number
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      // Displayed lessaged when score reaches zero
      displayMessage('You lost the game !');

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

// Allows us to start a new game without refreshing the page
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
});
