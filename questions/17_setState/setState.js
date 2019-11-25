// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.prevsStates  = []
  }
  setState(incomingState) {
    this.prevsStates.push(this.state)
    this.state = {...this.state, ...incomingState };
    return this.state
  }

  goBack(){
    this.state = this.prevsStates.pop()
  }
}

module.exports = { StatefulThing };
