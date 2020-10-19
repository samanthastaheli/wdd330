function squareRoot(number = document.getElementsByName('number')) {
    // 'use strict';
    if(number < 0) {
        throw new RangeError("You cannot find the sqaure root of negative numbers")
    }
    answer = Math.sqrt(number);
    document.getElementById('answer').textContent = answer;
}
// test
// function squareRootTest() {
//     return squareRoot(25) === 5;
// }
// console.log(squareRootTest())

// console.log(squareRoot(-2));
// squareRoot(document.getElementsByName('number'));