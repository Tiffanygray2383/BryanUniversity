var reader = require('readline-sync');
var inputOne = reader.questionInt("Enter first number: ");
var inputTwo = reader.questionInt("Enter second number: ");
var selectedOperator = reader.question("Enter. add/sub/div/mul ");
if(selectedOperator == "add"){
    console.log(add(inputOne, inputTwo));
} else if(selectedOperator == "sub") {
    console.log(sub(inputOne, inputTwo));
} else if (selectedOperator == "mul"){
    console.log(mul(inputOne, inoutTwo));
} else if (selectedOperator == "div"){
    console.log(div(inputOne, inputTwo));
}
function add(num1, num2){
    return "The answer is = " + (num1 + num2);
}
function sub(num1, num2){
    return "The answer is = " + (num1 - num2);
}
function mul(num1, num2){
    return "The answer is = " + (num1 * num2);
}
function div(num1, num2){
    return "The answer is = " + (num1 / num2);
}