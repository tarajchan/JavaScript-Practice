document.addEventListener("DOMContentLoaded", mainFunc, false);

//Global variables
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Bid Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


/*MAIN FUNCTION TO BE RUN AFTER "DOMContentLoaded"*/
function mainFunc() {
	var customName = document.getElementById('customname');
	var randomize = document.querySelector('.randomize');
	var story = document.querySelector('.story');


	randomize.addEventListener('click', result);
}

function result() {
	var newStory = storyText;
  var customName = document.getElementById('customname');	
	var story = document.querySelector('.story');
  var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/(:insertx:)/g, xItem);
  newStory = newStory.replace(/(:inserty:)/g, yItem);
  newStory = newStory.replace(/(:insertz:)/g, zItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace(/(Bob)/, name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 / 14) + ' stone';
    var temperature =  Math.round((94-32)* (5/9)) + ' centigrade';

    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

    // newStory = newStory.replace(/(9)\s(\^f+t$)/, temperature);
    // newStory = newStory.replace(/\d+\s(\^p\w+s$)/, weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}



function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


