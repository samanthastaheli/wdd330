const quiz = [
    ['What is Sams dogs name?', 'Olly'], 
    ['What is Sams favorite color?', 'blue'], 
    ['How do you pronounce Sams last name?', 'stay-lee']
    ];
    
    let score = 0;
    
    for(const [question, answer] of quiz){
        const response = prompt(question);
        if(response === answer){
            alert('Correct!');
            score++;
        } else {
            alert('Wrong! The correct answer was ${answer}');
            }
    }
    alert(`Game Over, you scored ${score} piont${score !== 1 ? 's' : ''}`);
    