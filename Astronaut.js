// UDACITY JS Basics - Lesson 8 - JS Challenge Problems
//SOURCE -- https://classroom.udacity.com/courses/ud804/lessons/3412099388/concepts/34083087710923

//GOAL is to Reverse Last name, First Name
// Using array reorder names based on first name order

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];
var transformation;
var newMoonwalkers = [];
// var transformation = [];
function alphabetizer(names) {
    // Your code goes here!
    // transformation = names.toString();
    transformation = names.split(" ").reverse().join(" ");
    return transformation;
}

for (var i = 0; i < moonWalkers.length; i++){

	alphabetizer(moonWalkers[i]);
	newMoonwalkers.push(transformation);
}


console.log('Sorted:', newMoonwalkers.sort());

// Try logging your results to test your code!
// console.log(alphabetizer(moonWalkers));

