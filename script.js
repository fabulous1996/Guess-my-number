// Permet de chosir un nombre aléatoire entre 0 et 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Le score de départ est de 20
let score = 20;

//Le meilleur score de départ est de 0
let highscore = 0;


// Fonction permettant d'évitant la répétition de document.querySelector('.message).textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // Message qui s'affiche lorsqu'il n'y a aucun chiffre indiqué
  if (!guess) {
    displayMessage('No number')
  }

  // Évènements se produisant lorsque la bonne réponse est trouvée 
  else if (guess === secretNumber) {
    displayMessage('Correct number !')

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#008000';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    // Événements se produisant lorsque la réponse proposée est fausse
  } else if (guess !== secretNumber) {
    if (score > 1) {

      // Affiche un message disant si la réponse proposéeest trop haute ou top basse 
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');

      // Soustrait 1 au score à chauqe mauvaise réponse proposée
      score--;

      document.querySelector('.score').textContent = score;
    } else {

      // Message affiché lorsque le score atteint zéro
      displayMessage('You lost the game !')

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  } 
});

// Permet de recommencer une partie sans devoir rafraîchir la page 
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