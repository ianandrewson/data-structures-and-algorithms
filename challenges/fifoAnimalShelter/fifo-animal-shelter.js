class AnimalShelter {
  constructor(){
    this.queue = [];
  }

  enqueue(animal){
    // if(animal.animal !== 'cat' || animal.animal !== 'dog'){
    //   throw new Error('invalid animal type');
    // }
    this.queue.push(animal);
  }

  dequeue(pref){
    if(pref === 'cat' || pref === 'dog'){
      const firstIndex = this.queue.findIndex(animal => animal.animal === pref);
      return this.queue.splice(firstIndex)[0];
    }
    return null;
  }
}

module.exports = { AnimalShelter };
