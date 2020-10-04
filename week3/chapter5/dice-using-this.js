// Dice gernator using this

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
dice.roll();

// property = sides
// object = dice
// method = roll()
