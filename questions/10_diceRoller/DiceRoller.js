// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice){
  if(!sides || !numDice){
    throw new Error('Error, missing parameter');
  };
  if(typeOf sides !== 'number' || typeOf numDice !== 'number'){
      throw new Error('Error, missing parameter');
    }
  if (typeOf sides !== 'number' || typeOf numDice !== 'number') {
      throw new Error('Error, missing parameter');
    }
  this.sides = sides;
  this.numDice = numDice;
  this.history = [];
  }


  roll(){
  const allRolls = [];
  for(const _ of Array(this.numDice)){
    let randoNum = Math.floor(Math.random() * this.sides) + 1
    allRolls.push(randoNum);
  }
    this.history.push(allRolls);
    return allRolls
  }

}

module.exports = { DiceRoller };
