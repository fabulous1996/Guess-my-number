let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);


  // Lorqu'il n'y a aucun chiffre indiqué
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } 

  // Lorsque le joueur trouve la bonné réponse
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number !';

    document.querySelector('body').style.backgroundColor = '#008000';

    document.querySelector('.number').style.width = '30rem';

  } 

  // Lorque la réponse proposé est trop haute
  else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too high !';

    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game !';

    document.querySelector('.score').textContent = 0;
    
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
    } 

    // Lorsque la réponde proposé est trop basse
    else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too low !';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game !';

        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});
