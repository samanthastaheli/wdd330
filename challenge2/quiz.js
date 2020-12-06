// Variables 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit'); 
const baseUrl = "https://swapi.dev/api/";

// Helper Functions
// get JSON with helper function
export function getJSON(url) {
    return fetch(url).then(function (response) { // what gets passed through respose ???
        if (!response.ok) { // ! operator mean logical not, what does .ok mean ???
            throwError(response.statusText); 
        } else {
            return response.json(); // json() reads response 
                                   //returns promise
                                  //resolves with the parsed string of respose as JSON
        }
    })
    .catch(function (error) { // what passes through error 
        console.log(error)
    });
}

// Functions
// create the questions
export function buildQuiz() {
    const output = [] // var to store HTML output
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const options = []; // var to store list of possible options
        for(let i in currentQuestion.options){// for loop to create html for possible answers
            console.log(i);
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
export function getAnswers() {
  const score = [];
  
}

// show results
function showResults(){
  // get answers from the quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  // keep track of users answers
  let numCorrect = 0;
  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

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
    person: "https://swapi.dev/api/people/1/", // luke
    ship: "https://swapi.dev/api/starships/12/",
    weapon: "",
    planet: "https://swapi.dev/api/planets/1/"
  },
  {
    person: "", // han
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // leia
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // rei
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // vadar
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // sith
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // boba fet
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // mando
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // baby yoda
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // c3po
    ship: "",
    weapon: "",
    planet: ""
  },
  {
    person: "", // asoka
    ship: "",
    weapon: "",
    planet: ""
  }
];