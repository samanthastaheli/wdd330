//fucntion declaration
function negative(num) {
    return num * -1;
}
negative(3); //use

//function expression
const negative2 = function(num) {
    return num * -1;
}
negative2(3); //use

//arrow function
const negative3 = (num) => num * -1;
negative3(3); //use

//Simulate random dice roll
//Get random number between 1-6
console.log(Math.floor(Math.random()*6)+1);

//Get random number between 22-36
function rand(range, offset) {
    return Math.floor(Math.random() * range) + offset;
}
//range = 14 offset = 22
