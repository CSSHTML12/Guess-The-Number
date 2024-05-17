function guessNumber() {
    var number = Math.floor(Math.random() * 11);
    var guessesMade = 0;

    while (guessesMade < 3) {
      var guess = parseInt(prompt("Guess the number from 0 to 10:"));
      guessesMade++;

      if (guess < number) {
        alert("The hidden number is bigger.");
      } else if (guess > number) {
        alert("The hidden number is smaller.");
      } else {
        alert("Congratulations! You guessed the number!");
        break;
      }
    }

    if (guess !== number) {
      alert("Alas, you didn't guess the number. It was made up: " + number);
    }
  }