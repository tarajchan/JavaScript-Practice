document.addEventListener("DOMContentLoaded", main);

//GLOBAL VARIABLES
var randomlyGeneratedNumber = getRandomArbitrary(1, 100);
var resetButton;
var guesses = [];
alert(randomlyGeneratedNumber);

//function main() called after DOMContentLoaded is lodaded
function main() {

	// Get DOM elements
	var submit = document.getElementById('submit');
	var guess = document.getElementById('guess');
	var previousGuesses = document.querySelector('.previousGuesses');
	var rightOrWrong = document.querySelector('.rightOrWrong');
	var tooLowOrTooHigh = document.querySelector('.tooLowOrTooHigh');


	// Event listeners
	submit.addEventListener('click', function( event ) {
		if ( guess.value === '' ) {
			return;
		}
		var valueOfInput = Number(parseInt(guess.value));
		if ( isNaN(valueOfInput) ) {
			return;
		}

		// add the number to our guesses array
		guesses.push( valueOfInput );
		// Write the guesses to the DOM
		previousGuesses.innerHTML = "Previous Guesses: " + guesses.join(', ');
		

		// If WIN, print success & reset game
		if (valueOfInput === randomlyGeneratedNumber) {
			rightOrWrong.innerHTML = "Congratulations! You got it right!";
			rightOrWrong.style.backgroundColor = "green";
			tooLowOrTooHigh.innerHTML = "";
			gameReset();
			return;
		}

		// if OUT OF GUESSES, print lose and reset game
		if (guesses.length === 10) {
			rightOrWrong.innerHTML = "!!!GAME OVER!!!";
			tooLowOrTooHigh.innerHTML = "";
			gameReset();
			return;
		}

		// If guess was wrong, show explanation of why it is wrong
		if ( valueOfInput !== randomlyGeneratedNumber ) {
			rightOrWrong.innerHTML = "Wrong!";
			rightOrWrong.style.backgroundColor = "red";
			if (valueOfInput < randomlyGeneratedNumber) {
				tooLowOrTooHigh.innerHTML = "Last guess was too low!";		
			}
			else if (valueOfInput > randomlyGeneratedNumber) {
				tooLowOrTooHigh.innerHTML ="Last guess was too high!";
			}
		}

		// clears the input
		guess.value = "";

	});
};

function gameReset() {
	var resetButton = document.getElementById('restartGame');

	guess.disabled = true;
	submit.disabled = true;
	resetButton.style.display = "block";
	resetButton.addEventListener('click', startNewGame);
}


function startNewGame() {
	var rightOrWrong = document.querySelector('.rightOrWrong');
	var resultsReset = document.querySelectorAll('.results div');
	var resetButton = document.getElementById('restartGame');

	for (var i = 0; i < resultsReset.length; i++) {
		resultsReset[i].innerHTML = "";
	}

	resetButton.style.display = "none";
	guess.disabled = false;
	submit.disabled = false;
	guess.value = "";
	guesses = [];
	rightOrWrong.style.backgroundColor = "white";
	randomlyGeneratedNumber =  getRandomArbitrary(1, 100);
}


function getRandomArbitrary(min, max) {
  var randomArbitrary = (Math.random() * max) + min;

  return Math.ceil(randomArbitrary);
};

