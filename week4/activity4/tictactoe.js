/* touchend on .littleDiv
    alternate X and O
        use if statement
        declare player 1 and player 2
         
*/
const player1 = function() {
    let p = document.createElement('p');
    p.textContent = 'X';
    return p;
}
const player2 = function() {
    let p = document.createElement('p');
    p.textContent = 'O';
    return p;
}

addEventListener('click', (click) => {
    while (i < 10) {
        addEventListener('click', player1);
        addEventListener('click', player2);
        i++;
    }
})