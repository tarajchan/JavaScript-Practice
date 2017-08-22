document.addEventListener("DOMContentLoaded", detectPattern, false);

/*create a function that compares the value of each box to the array index
and decides whether there is a match to any of the patterns*/
var xFlag = true;

//winning patterns by array index value
var patternArray = [[0, 1, 2],
										[3, 4, 5],
										[6, 7, 8],
										[0, 3, 6],
										[1, 4, 7],
										[2, 5, 8],
										[0, 4, 8],
										[2, 4, 6]];

// (function( s, s2 ){ console.log(s, s2) })('hello', 'friend');

//main function
function detectPattern() {
	var boxes = document.querySelectorAll('.box');

	for (var i=0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', handleClick(i));
	}
}

function handleClick(i) {

	var boxes = document.querySelectorAll('.box');

	return function( event ) {
		
		var clickedElement = event.currentTarget;
		if (xFlag) {
			clickedElement.textContent = "X";
			xFlag = false;
		}
		else {
			clickedElement.textContent =  "O";
			xFlag = true;
		}
		getValues();
	};
}

//"X" and "O" values retrieved from the textContent of each box

// values = [X, O, null, null, null, ....]

function getValues() {
	var boxes = document.querySelectorAll('.box');
	var values = [];
	var resultMessage = document.querySelector('.resultMessage');

	// get first row of values
	for (var i=0; i < boxes.length; i++) {
		var currentValue = boxes[i].textContent;
		values.push(currentValue);
	}
	patternArray.forEach(function(p){
		console.log(values[p[0]], values[p[1]], values[p[2]]);	
		console.log(JSON.stringify(p));

		if (values[p[0]] === "X" && values[p[1]] === "X" && values[p[2]] === "X") {
			resultMessage.style.display = "block";
			resultMessage.textContent = "X is the winner!";
			resetButton();
		}
		else if (values[p[0]] === "O" && values[p[1]] === "O" && values[p[2]] === "O") {
			resultMessage.style.display = "block";
			resultMessage.textContent = "O is the winner!";
			resetButton();	
		}
	});
}

function resetButton() {
	var resetButton = document.querySelector('.submit');
	var boxes = document.querySelectorAll('.box');

	for (var i=0; i < boxes.length; i++) {
		boxes[i].removeEventListener('click', handleClick(i));
	}
	resetButton.textContent = "PLAY AGAIN";
	resetButton.addEventListener('click', resetState);
}

function resetState() {
	var boxes = document.querySelectorAll('.box');
	var submit = document.querySelector('.submit');
	var resultMessage = document.querySelector('.resultMessage');

	for (var i=0; i < boxes.length; i++) {
		boxes[i].textContent = "";
	}
	submit.textContent = "START";
	resultMessage.style.display = "none";
}