'use strict';

/*
//reading the content "start guessing.."
console.log(document.querySelector('.message').textContent);
//changing the content "starting guessing" to "🎉Correct Number!" using DOM manuplation
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//use of use is to take data from user
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//To generate Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;  => SHOW HIDDEN SECRET NUMBER

let score = 20;
let highscore = 0;

const DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//=> add event on check button using evenListner on click command
document.querySelector('.check').addEventListener('click', function () {
  //=> store guess value to comparing with secret number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //=> when there is no input in guess value
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    DisplayMessage('⛔ No Number');
  }
  //=>when the guess value is equal to secret value
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    DisplayMessage('🎉Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.guess').value = '';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //=> when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      DisplayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '👎 You loss the game';
      DisplayMessage('👎 You loss the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
    }
  }
});
//=> when guess value is too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👎 You loss the game';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.guess').value = '';
//   }
// }
//=> when guess value is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '👎 You loss the game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.guess').value = '';
//     }
//   }
// });

//=> add event on again button vo retry the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  DisplayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
