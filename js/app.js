'use strict';

let userName = prompt('Please enter your name:');

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
    } else {
    //   console.log('Incorrect');
      alert('Incorrect');
    }
  } else if (userResponse === 'n' || userResponse === 'no') {
    if (rightAnswer === 'no') {
    //   console.log('Correct');
      alert('Correct');
    } else {
    //   console.log('Incorrect');
      alert('Incorrect');
    }
  } else {
    // console.log('Please answer with "yes" or "no."');
    alert('Please answer with "yes" or "no."');
  }
}
questionYesNo('Question 1: Is the Earth round?', 'yes');
questionYesNo('Question 2: Is Christmas in November?', 'no');
questionYesNo('Question 3: Does the Earth have a moon?', 'yes');
questionYesNo('Question 4: Do dogs have flippers?', 'no');
questionYesNo('Question 5: Is a circle circular?', 'yes');

alert('Thank you for playing ' + userName );

