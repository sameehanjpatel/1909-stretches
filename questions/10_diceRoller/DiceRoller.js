// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice){
  this.sides = sides;
  this.numDice = numDice;
  rollHistory  = [];
  }


  roll(){
  let tot
  let randoNum = Math.floor(Math.random() * this.sides)* this.numDice
  this.rollHistory.push(randoNum)
  return randoNum
  }

}

module.exports = { DiceRoller };
