 
/* If 5 is greater than 3: Greater than 3!
If the length is 3: "Cat"
If cat is equal to dog: ""not the same"*/


if (5 > 3)
{
    console.log('is greater than')
}
else{
    console.log('not great than')
}

/*there are two separate ways to complete this object. This is the second way. Thank you professor.*/

var myVar1 = 5;
var myVar2 = 3;

if (myVar1 > myVar2){
    console.log("is greater than");
}
else{
    console.log("is Not greater than");
}

var myCat = 'cat'

if (myCat.length == 3){

console.log('is of the same length')
}

else {
    console.log('is not the same length')
}

var dog = "dog"
var cat = "cat"

if (dog == cat) {
    console.log('is the same')
}
else{
    console.log('not the same')
}

 
/*If age is under 18: "Not allowed to watch movie"
If name starts with "B": "Allowed to watch movie"
If name starts with "B" and older than 18: "Allowed into the movie"*/

var myAge = 12;
var myName = 'B';

if(myAge < 18) {
    console.log ('Not allowed to watch movie')
}
else{
    console.log('Allowed to watch movie')
}

if(myName == 'B') {
    console.log('Allowed to watch movie')
}
else{
    console.log('Not allowed to watch movie')
}

if(myName == 'B' + myAge < 12) {
    console.log("Allowed into the movie")
}
else{
    console.log('Not allowed to watch movie')
}

/*This is the 3rd part of the assignment 
Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
*/

var myValue = 1
var myValue2 = 2

if(myValue === 1){
    console.log('strict')
} 
else if (myValue == 1){
    console/log('loose')
}
else{
    console.log("not equal at all")
}

var myValue = 1
var myValue2 = 2
var myValue3 = 4

if(myValue == myValue2) {
    console.log('yes')
}
else(
    console.log('no')
)

if(myValue2 == myValue3){
    console.log('yes')
}
else(
    console.log('no')
)