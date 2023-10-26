'use strict';

let userName = prompt('Please enter your name:');
let rightAnswers = 0;

if (userName !== null && userName !== '') {
  alert('Hello, ' + userName + '! Thank you for visiting my site.');
} else {
  alert('You did not provide your name and that is ok. Welcome to my site!');
}

function questionYesNo(question, rightAnswer) {
  let userResponse = prompt(question).toLowerCase();
  if (userResponse === 'y' || userResponse === 'yes') {
    if (rightAnswer === 'yes') {
      //   console.log('Correct');
      alert('Correct');
      rightAnswers++;
    } else {
      //   console.log('Incorrect');
      alert('Incorrect');
    }
  } else if (userResponse === 'n' || userResponse === 'no') {
    if (rightAnswer === 'no') {
      //   console.log('Correct');
      alert('Correct');
      rightAnswers++;
    } else {
      //   console.log('Incorrect');
      alert('Incorrect');
    }
  } else {
    // console.log('Please answer with "yes" or "no."');
    alert('Please answer with "yes" or "no."');
  }
}
questionYesNo('Question 1: Do I have any dogs?', 'yes');
questionYesNo('Question 2: Do I have any cats?', 'no');
questionYesNo('Question 3: Is my favorite color black?', 'yes');
questionYesNo('Question 4: Was I born outside of the United States?', 'no');
questionYesNo('Question 5: Am I right handed?', 'yes');

function dogGame() {
  let correctDog = 3;
  let tries = 0;

  while (tries < 4) {
    let takeAGuess = parseInt(prompt('Question 6: Can you guess how many dogs I have?'));

    if (!isNaN(takeAGuess)) {
      if (takeAGuess === correctDog) {
        alert('Correct! I have 3 dogs!');
        rightAnswers++;
        break;
      } else if (takeAGuess < correctDog) {
        alert('Almost, you are a bit too low! Please try again.');
      } else {
        alert('I wish! That guess is a bit too high');
      }
    } else {
      alert('Please enter a number 0-100');
    }
    tries++;
  }

  if (tries === 4) {
    alert('Good try! You have used all 4 attempts. The correct answer is ' + correctDog + ' dogs.');
  }
}

dogGame();

function pickCandy() {
  let favCandyChoices = ['snickers', 'm&ms', 'kitkats'];
  let attempts = 6;
  let candyChoice = false;

  while (attempts > 0 && !candyChoice) {
    let userGuess = prompt('Question 7: What is my favorite candy?').toLowerCase();
    console.log(userGuess);
    if (favCandyChoices.includes(userGuess)) {
      alert('Nice! One of my favorite candies is ' + userGuess + '.');
      rightAnswers++;
      candyChoice = true;
    } else {
      alert('Incorrect. Please try again.');
      attempts--;
    }
  }

  if (!candyChoice) {
    alert('Sorry, you used up all your guesses. My favorite candies are: ' + favCandyChoices.join(', '));
  }

  alert('You got ' + rightAnswers + ' correct out of 7 questions.');

  alert('Thank you for playing ' + userName);
}

pickCandy();
