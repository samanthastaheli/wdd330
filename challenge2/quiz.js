// imports
import { getRandomNum } from './utilities.js';

// Variables 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit'); 
const resetButton = document.getElementById('reset');
const baseUrl = "https://swapi.dev/api/";

// Functions
// create the questions
export function buildQuiz() {
    const output = [] // var to store HTML output
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const options = []; // var to store list of possible options
        for(let i in currentQuestion.options){// for loop to create html for possible answers
            // console.log(i);
          // add html radion button
          options.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${i}">
              ${currentQuestion.options[i]}
            </label>`
          );
        }
      // add this question and its answers to the output
      output.push(
        `<div class="question">
            <h4>${currentQuestion.question}</h4>
        </div>
        <div class="option"> ${options.join('')} </div>`
      );
    });
    // join everything together and show on page
     quizContainer.innerHTML = output.join('');  
}

// get answers
// activated by sumbmit btn event listener in main.js
// export function getAnswers() {
//   const score = [];
// }

// show results
export function showResults() {
  const ran = getRandomNum(myResults.length);
  let results = myResults[ran];

  resultsContainer.innerHTML = 
    `<h4>You got:</h4>
      <p class="resultPerson">${results.person}</p>
      <p data-url="https://swapi.dev/api/people/${results.number}">More info...</p>
    ` 
    quizContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
    resetButton.classList.remove('hidden');
    resultsContainer.classList.remove('hidden');
    console.log(dataset.url);
}

export function resetQuiz() {
  quizContainer.classList.remove('hidden');
    submitButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
    resultsContainer.classList.add('hidden');
}

// // show results
// function showResults(){
//   // get answers from the quiz
//   const answerContainers = quizContainer.querySelectorAll('.answers');
//   // keep track of users answers
//   let numCorrect = 0;
//   // for each question...
//   myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
//     // if answer is correct
//     if(userAnswer === currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       numCorrect++;

//       // color the answers green
//       answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else{
//       // color the answers red
//       answerContainers[questionNumber].style.color = 'red';
//     }
//   });

//   // show number of correct answers out of total
//   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }

// questions & results arrays 
const myQuestions = [
  {
    question: "Whose side are you on?",
    options: {
      a: "Empire",
      b: "Republic"
    },
  },
  {
    question: "What do you prefer?",
    options: {
      a: "sand",
      b: "forest",
      c: "water",
      d: "snow",
      e: "ships only"
    },
  },
  {
    question: "How are your light saber skills?",
    options: {
      a: "I am a master",
      b: "I am a beginner",
      c: "No light sabers for me, I'll stick to guns",
      d: "I don't use weapons",
      e: "What's a light saber?"
    },
  },
  {
    question: "Who is your favorite character?",
    options: {
      a: "Han Solo",
      b: "Mandalorian Di Dijan", // !!!! figure out how to spell his name 
      c: "Yoda",
      d: "Baby Yoda",
      e: "Luke Skywalker",
      f: "Darth Vadar",
      g: "Obi One Kinoby", // !!!!! wrong spelling
      h: "Princess Leia",
      i: "Asoka Tono",
      j: "Chewbacca",
      k: "Ben Solo",
      l: "Rei",
      m: "Sand People"
    },
  },
  {
    question: "Who is your favorite pet or side kick?",
    options: {
      a: "The child",
      b: "Chewbacca",
      c: "R2-D2",
      d: "C3PO",
      e: "Porg",
      f: "Ewok",
      g: "Crazy snow spider",
      h: "Banthas (sad peoples bison thing)",
      i: "BB8", // !!!! check spelling
      j: "Jawa"
    },
  },
  {
    question: "What is most important?",
    options: {
      a: "family",
      b: "power", 
      c: "surviving",
      d: "killing all Jedis",
      e: "defeating the empire",
      f: "love",
      g: "being able to bring people back from the dead"
    },
  }
];

const myResults = [
  {
    person: "Luke Skywalker", // luke
    number: "1",
    ship: "X-wing",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Han Solo", // han
    number: "14",
    ship: "Milenium Falcon",
    weapon: "Blaster pistol",
    planet: "Corellia"
  },
  {
    person: "Princess Leia", // leia
    number: "5",
    ship: "n/a",
    weapon: "Blaster pistol",
    planet: "Alderaan"
  },
  {
    person: "Rei", // rei
    number: "",
    ship: "Milenium Falcon",
    weapon: "light saber",
    planet: "Jakku"
  },
  {
    person: "Darth Vadar", // vadar
    number: "4",
    ship: "The Devastator",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Emperor Palpatine", // sith
    number: "21",
    ship: "The Eclipse",
    weapon: "light saber",
    planet: "Exegol"
  },
  {
    person: "Boba Fett", // boba fett
    number: "22",
    ship: "Slave I",
    weapon: "Blaster, flame thrower, jet pack",
    planet: "Kamino"
  },
  {
    person: "Mandolorian Din Djarin", // mando
    number: "",
    ship: "Razor Crest",
    weapon: "Blaster, flame thrower, grappling line, Whistling Birds, jet pack",
    planet: ""
  },
  {
    person: "", // baby yoda
    number: "",
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "Baby Yoda", // c3po
    number: "2",
    ship: "Razor Crest",
    weapon: "The force",
    planet: "Tython"
  },
  {
    person: "Asoka Tano", // asoka
    number: "",
    ship: "T-6 shuttle",
    weapon: "2 light sabers",
    planet: "Shili"
  }
];
/* <li class="resultItem">Ship: ${results.ship}</li>
<li class="resultItem">Weapon: ${results.weapon}</li>
<li class="resultItem">Planet: ${results.planet}</li> */