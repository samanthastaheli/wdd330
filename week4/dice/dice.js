const rollButton = document.getElementById('roll');
const diceDiv = document.getElementById('dice');
const number = Math.floor(this.sides * Math.random() + 1);

const Dice = function(sides=6){ // sides=6 is agrument 
    this.sides = sides; // this represtents object that will be returned
    this.roll = function() {
        let dn = document.getElementById('dice').innerText = number;
        return dn;
    }
}
// roll.addEventListener('click', Dice);
console.log(Dice);