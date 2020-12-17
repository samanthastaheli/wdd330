import { buildQuiz, resetQuiz, getAnswers } from './quiz.js';
import { eventListener } from './utilities.js';

buildQuiz();

eventListener('submit','click', getAnswers)

eventListener('reset','click', resetQuiz)
// rerun JavaScript showResults() function 
