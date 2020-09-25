//random sentence generator 
const firstWord = ['the', 'a'];
const describe = ['small', 'big'];
const noun = ['dog', 'cat', 'bird'];
const smallWord = ['was', 'is'];
const feeling = ['happy', 'sad', 'excited', 'angry'];

function randomSentence() {
    // let randomNumber = Math.floor(Math.round());
    // let sentence = firstWord[randomNumber] + describe[randomNumber] + noun[randomNumber] + smallWord[randomNumber] + feeling[randomNumber];

    let sentence = firstWord[Math.floor(Math.round())] + describe[Math.floor(Math.round())] + noun[Math.floor(Math.round())] + smallWord[Math.floor(Math.round())] + feeling[Math.floor(Math.round())];

    document.getElementById('para').innerHTML = sentence;
    
}