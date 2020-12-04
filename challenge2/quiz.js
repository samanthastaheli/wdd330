// variables 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit'); 
const baseUrl = "https://swapi.dev/api/";
const peopleUrl = "https://swapi.dev/api/people/";

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
  }
];