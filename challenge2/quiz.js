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
              <input type="radio" unchecked name="question${questionNumber}" value="${currentQuestion.options[i].point}">
              ${currentQuestion.options[i].option}
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
     ;  



}

// get answers
// activated by sumbmit btn event listener in main.js
export function getAnswers() {
  let questions = document.getElementsByName('question0');
  let i = 0;
  let answers = [];
  myQuestions.forEach(question => {
    questions = document.getElementsByName('question' + i) 
    for(let j = 0; j < questions.length; j++) {
      if(questions[j].checked) {
        answers.push(questions.options[j]);
      }
    }
    i++
  });
  localStorage.setItem('answers', JSON.stringify(answers));
  // calcResults();
  showResults();
}

// calculate results based on options object point 
function calcResults() {
   
}

// show results
function showResults() {
  const ran = getRandomNum(myResults.length);
  let results = myResults[ran];

  resultsContainer.innerHTML = 
    `<h4>You got:</h4>
    <img id="resultsImg" src="${results.img}">
      <p class="resultPerson">${results.person}</p>
      <p data-url="https://swapi.dev/api/people/${results.number}">More info...</p>
    ` 
    quizContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
    resetButton.classList.remove('hidden');
    resultsContainer.classList.remove('hidden');
    // console.log(dataset.url);
}

export function resetQuiz() {
  quizContainer.classList.remove('hidden');
  submitButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  buildQuiz();
}

// show random results
// export function showResults() {
//   const ran = getRandomNum(myResults.length);
//   let results = myResults[ran];

//   resultsContainer.innerHTML = 
//     `<h4>You got:</h4>
//     <img id="resultsImg" src="${results.img}">
//       <p class="resultPerson">${results.person}</p>
//       <p data-url="https://swapi.dev/api/people/${results.number}">More info...</p>
//     ` 
//     quizContainer.classList.add('hidden');
//     submitButton.classList.add('hidden');
//     resetButton.classList.remove('hidden');
//     resultsContainer.classList.remove('hidden');
//     // console.log(dataset.url);
// }

// questions & results arrays 
const myQuestions = [
  {
    question: "Whose side are you on?",
    options: {
      a: { option: "Empire", point: "sith" },
      b: { option: "Republic", point: "luke" }
    },
  },
  {
    question: "What do you prefer?",
    options: {
      a: { option: "sand", point: "rey" },
      b: { option: "forest", point: "luke" },
      c: { option: "water", point: "fett" },
      d: { option: "snow", point: "han" },
      e: { option: "ships only", point: "mando" }
    }
  },
  {
    question: "How are your light saber skills?",
    options: {
      a: { option: "I am a master", point: "luke" },
      b: { option: "I am a beginner", point: "rey" },
      c: { option: "No light sabers for me, I'll stick to guns", point: "mando" },
      d: { option: "I don't use weapons", point: "c3po" },
      e: { option: "What's a light saber?", point: "c3po" }
    },
  },
  {
    question: "Who is your favorite character?",
    options: {
      a: { option: "Han Solo", point: "leia" },
      b: { option: "Mandalorian Din Djarin", point: "child" },
      c: { option: "Yoda", point: "luke" },
      d: { option: "Baby Yoda", point: "mando" },
      e: { option: "Luke Skywalker", point: "han" },
      f: { option: "Darth Vadar", point: "sith" },
      g: { option: "Obi-Wan Kenobi", point: "vadar" },
      h: { option: "Leia Organa Skywalker", point: "han" },
      i: { option: "Ashoka Tono", point: "ashoka" },
      j: { option: "Chewbacca", point: "han" },
      k: { option: "Ben Solo", point: "rey" },
      l: { option: "Rey", point: "leia" } 
    },
  },
  {
    question: "Who is your favorite pet or side kick?",
    options: {
      a: { option: "The child", point: "mando" },
      b: { option: "Chewbacca", point: "han" },
      c: { option: "R2-D2", point: "luke" },
      d: { option: "C3PO", point: "c3po" },
      e: { option: "Porg", point: "rey" },
      f: { option: "Ewok", point: "leia" },
      g: { option: "Crazy snow spider", point: "sith" },
      h: { option: "Banthas (sad peoples bison thing)", point: "ashoka" },
      i: { option: "Ashoka Tono", point: "ashoka" },
      j: { option: "BB8", point: "rey" },
      k: { option: "Jawa", point: "c3po" }
    },
  },
  {
    question: "What is most important?",
    options: {
      a: { option: "family", point: "han" },
      b: { option: "power", point: "vadar" },
      c: { option: "surviving", point: "ashoka" },
      d: { option: "protecting the child", point: "mando" },
      e: { option: "killing all Jedis", point: "sith" },
      f: { option: "defeating the empire", point: "luke" },
      g: { option: "love", point: "vadar" },
      h: { option: "being able to bring people back from the dead", point: "vadar" }
    },
  }
];

const myResults = [
  {
    person: "Luke Skywalker", // luke
    img: "img/luke-skywalker.png",
    number: "1",
    ship: "X-wing",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Han Solo", // han
    img: "img/han-solo.jpg",
    number: "14",
    ship: "Milenium Falcon",
    weapon: "Blaster pistol",
    planet: "Corellia"
  },
  {
    person: "Leia Organa Skywalker", // leia
    img: "img/liea.jpg",
    number: "5",
    ship: "n/a",
    weapon: "Blaster pistol",
    planet: "Alderaan"
  },
  {
    person: "Rey", // rey
    img: "img/rey.jpg",
    number: "",
    ship: "Milenium Falcon",
    weapon: "light saber",
    planet: "Jakku"
  },
  {
    person: "Darth Vadar", // vadar
    img: "img/vadar.jpg",
    number: "4",
    ship: "The Devastator",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Emperor Palpatine", // sith
    img: "img/sith.jpg",
    number: "21",
    ship: "The Eclipse",
    weapon: "light saber",
    planet: "Exegol"
  },
  {
    person: "Boba Fett", // boba fett
    img: "img/boba-fett.jpg",
    number: "22",
    ship: "Slave I",
    weapon: "Blaster, flame thrower, jet pack",
    planet: "Kamino"
  },
  {
    person: "Mandolorian Din Djarin",
    img: "img/mando.jpeg",
    number: "",
    ship: "Razor Crest",
    weapon: "Blaster, flame thrower, grappling line, Whistling Birds, jet pack",
    planet: ""
  },
  {
    person: "C3PO", 
    img: "img/c3po.jpeg",
    number: "2",
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "Baby Yoda", 
    img: "img/baby-yoda.jpg",
    number: "",
    ship: "Razor Crest",
    weapon: "The force",
    planet: "Tython"
  },
  {
    person: "Ahsoka Tano", // asoka
    img: "img/ahsoka-tano.png",
    number: "",
    ship: "T-6 shuttle",
    weapon: "2 light sabers",
    planet: "Shili"
  }
];
/* <li class="resultItem">Ship: ${results.ship}</li>
<li class="resultItem">Weapon: ${results.weapon}</li>
<li class="resultItem">Planet: ${results.planet}</li> */
