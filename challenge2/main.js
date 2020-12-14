import { buildQuiz } from './quiz.js';
import { getJSON } from './utilities.js';
import { eventListener } from './utilities.js';
// import { showResults } from './quiz.js';
import { resetQuiz } from './quiz.js';
import { getAnswers } from './quiz.js';


// import { showResults } from './quiz.js';

buildQuiz();
console.log(getJSON("https://swapi.dev/api/people/"));

eventListener('submit','click', getAnswers)
// prevent default
eventListener('reset','click', resetQuiz)
// rerun JavaScript showResults() function 
