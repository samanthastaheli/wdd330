//random sentence generator 
const firstWord = ['the', 'a'];
const describe = ['small', 'big'];
const noun = ['dog', 'cat', 'bird'];
const smallWord = ['was', 'is'];
const feeling = ['happy', 'sad', 'excited', 'angry'];

function randomSentence(range, offset) {
    let randomNumber = Math.floor(Math.round() * range) + offset;
    let sentence = firstWord[randomNumber] + describe[randomNumber] + noun[randomNumber] + smallWord[randomNumber] + feeling[randomNumber];

    document.getElementById('para').innerHTML = sentence;
    
}