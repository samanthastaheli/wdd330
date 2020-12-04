import { buildQuiz } from './quiz.js';
import { getJSON } from './quiz.js';

buildQuiz();
console.log(getJSON("https://swapi.dev/api/people/"));