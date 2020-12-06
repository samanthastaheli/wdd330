import { buildQuiz } from './quiz.js';
import { getJSON } from './quiz.js';
import { getAnswers } from './quiz.js';
// import { showResults } from './quiz.js';

buildQuiz();
console.log(getJSON("https://swapi.dev/api/people/"));

document.getElementById('submit').addEventListener('click', getAnswers());