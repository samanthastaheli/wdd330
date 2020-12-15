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
        answers.push(questions[j].value);
      }
    }
    i++
  });
  localStorage.setItem('answers', JSON.stringify(answers));

  console.log(answers.filter(answer => answers.values == 'sith' > 2));
  
  answers.forEach(function(item, index, array) {
    //console.log(item, index);
    if(item == 'luke'){
      showResults(myResults[0]);
    } else if(item == 'han'){
      showResults(myResults[1]);
    } else if(item == 'leia'){
      showResults(myResults[2]);
    } else if(item == 'rey'){
      showResults(myResults[3]);
    } else if(item == 'vadar'){
      showResults(myResults[4]);
    } else if(item == 'sith'){
      showResults(myResults[5]);
    } else if(item == 'fett'){
      showResults(myResults[6]);
    } else if(item == 'mando'){
      showResults(myResults[7]);
    } else if(item == 'c3po'){
      showResults(myResults[8]);
    } else if(item == 'child'){
      showResults(myResults[9]);
    } else if(item == 'ahsoka'){
      showResults(myResults[10]);
    }
  })

  // for(let i = 0; i < answers.length; i++){
  //   if(answers['luke']){}
  // }
}

// calculate results based on options object point 
function calcResults() {
  answers.forEach(myResults => {
    for(let i = 0; i < myResults.length; i++) {
      if(answers[i] = 'luke'){
        showResults(myResults[6]); 
      }
    }
  })
}

// show results
function showResults(results) {
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

//show random results
function showRandom() {
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
  // clear local storage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

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
    codeName: "luke",
    img: "img/luke-skywalker.png",
    number: "1",
    ship: "X-wing",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Han Solo", // han
    codeName: "han",
    img: "img/han-solo.jpg",
    number: "14",
    ship: "Milenium Falcon",
    weapon: "Blaster pistol",
    planet: "Corellia"
  },
  {
    person: "Leia Organa Skywalker", // leia
    codeName: "leia",
    img: "img/liea.jpg",
    number: "5",
    ship: "n/a",
    weapon: "Blaster pistol",
    planet: "Alderaan"
  },
  {
    person: "Rey", // rey
    codeName: "rey",
    img: "img/rey.jpg",
    number: "",
    ship: "Milenium Falcon",
    weapon: "light saber",
    planet: "Jakku"
  },
  {
    person: "Darth Vadar", // vadar
    codeName: "vadar",
    img: "img/vadar.jpg",
    number: "4",
    ship: "The Devastator",
    weapon: "light saber",
    planet: "Tatooine"
  },
  {
    person: "Emperor Palpatine", // sith
    codeName: "sith",
    img: "img/sith.jpg",
    number: "21",
    ship: "The Eclipse",
    weapon: "light saber",
    planet: "Exegol"
  },
  {
    person: "Boba Fett", // boba fett
    codeName: "fett",
    img: "img/boba-fett.jpg",
    number: "22",
    ship: "Slave I",
    weapon: "Blaster, flame thrower, jet pack",
    planet: "Kamino"
  },
  {
    person: "Mandolorian Din Djarin",
    codeName: "mando",
    img: "img/mando.jpeg",
    number: "",
    ship: "Razor Crest",
    weapon: "Blaster, flame thrower, grappling line, Whistling Birds, jet pack",
    planet: ""
  },
  {
    person: "C3PO", 
    codeName: "c3po",
    img: "img/c3po.jpeg",
    number: "2",
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "Baby Yoda", 
    codeName: "child",
    img: "img/baby-yoda.jpg",
    number: "",
    ship: "Razor Crest",
    weapon: "The force",
    planet: "Tython"
  },
  {
    person: "Ahsoka Tano", // asoka
    codeName: "ahsoka",
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
