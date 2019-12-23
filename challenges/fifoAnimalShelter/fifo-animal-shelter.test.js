const { AnimalShelter } = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('animal shelter tests', () => {
  it.skip('should only allow cats and dogs to be added', () =>{
    const shelter = new AnimalShelter();
    shelter.enqueue({ animal: 'cat' });
    shelter.enqueue({ animal: 'dog' });
    expect(() => shelter.enqueue({ animal: 'frog' })).toThrow();
  });
  it('should return a cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ animal: 'dog' });
    shelter.enqueue({ animal: 'dog' });
    shelter.enqueue({ animal: 'cat', name: 'felix' });
    expect(shelter.dequeue('cat')).toEqual({ animal: 'cat', name: 'felix' });
  });
  it('should return to the first cat added of a number', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ animal: 'dog', name: 'spot' });
    shelter.enqueue({ animal: 'cat', name: 'felix' });
    shelter.enqueue({ animal: 'cat', name: 'garfield' });
    shelter.enqueue({ animal: 'cat', name: 'jerry' });
    expect(shelter.dequeue('cat').name).toEqual('felix');
  });
  it('should return null if dequeue is called with anything other than cat or dog', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ animal: 'cat' });
    expect(shelter.dequeue('frog')).toBeNull();
  });
});
