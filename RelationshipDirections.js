// UDACITY JS Basics - Lesson 8 - JS Challenge Problems
//SOURCE -- https://classroom.udacity.com/courses/ud804/lessons/3412099388/concepts/34118489830923

//GOAL IS to determine if x, y are numbers (send message if not)
//If they are numbers determine which is larger, or equal :) yay
function notnum(value){
	return ("uhoh, looks like " + value + " isn't a number"); //message if x OR y is not a number
}

function getRelationship(x, y) {
    // Your code goes here!

    //First send message if x or y is not a number using above function
    if (isNaN(x) && isNaN(y)){
    	return ("These two are NOT NUMBERS: " + x + " and " + y);

    }
    if(isNaN(x)){
    	return (notnum(x));

    }

    if(isNaN(y)) {
    	return (notnum(y));
    }

    //Second check if x greater, less than or equal to y

    if (x < y){
    	return("Hey! " + x + " is less than " + y);
    } else if (x > y){
    	return("Hey! " + x + " is greater than " + y);
    } else if (x === y){
    	return ("Hey! " + x + " is equal to " + y);
    } else {
    	return ("ah oh! Something terrible went wrong :( ");
    }
};

// Try logging these functions to test your code!
// console.log(getRelationship(1,4));
console.log(getRelationship(-1,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this","something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));