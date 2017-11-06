console.log('dice.js has started!');
// 
function Dice(sides) {
    this.sides = sides;
}

// Roll method prototype.
Dice.prototype.roll = function diceRoll() {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1; //use dot notation to work!
    console.log(randomNumber);
    return randomNumber;
}

// Dice sides.
var dice = new Dice(6);
var dice12 = new Dice(12);

console.log(dice.roll === dice12.roll); // for performance.