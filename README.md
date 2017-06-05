# Front-End Web Developer Nanodegree

## JavaScript Basics Quiz

### Resources Used
* [JavaScript Basics @ Udacity](https://www.udacity.com/course/ud804)

#### Relationship Directions v.2

We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <
If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
Notice in the second example, because the y value was missing, the output said that undefined was not a number.

Adapted from UVa problem 11172.


