import { buildQuiz } from './quiz.js';
import { getJSON } from './utilities.js';
import { showResults } from './quiz.js';
import { resetQuiz } from './quiz.js';

// import { showResults } from './quiz.js';

buildQuiz();
console.log(getJSON("https://swapi.dev/api/people/"));

document.getElementById('submit').addEventListener('click', showResults);
document.getElementById('reset').addEventListener('click', resetQuiz);