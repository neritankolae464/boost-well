/* 
Filename: complexCode.js

Description: This code is a simulation of a virtual ecosystem with different animals, plants, and their interactions. It includes advanced concepts such as inheritance, polymorphism, and event handling.

NOTE: This code is provided only as an example and may not function as a fully working system. 

*/

// Animal class
class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Herbivore class, inherits from Animal
class Herbivore extends Animal {
  constructor(name, species, age) {
    super(name, species, age);
    this.diet = 'herbivore';
  }

  graze() {
    console.log(`${this.name} is grazing.`);
  }
}

// Carnivore class, inherits from Animal
class Carnivore extends Animal {
  constructor(name, species, age) {
    super(name, species, age);
    this.diet = 'carnivore';
  }

  hunt() {
    console.log(`${this.name} is hunting.`);
  }
}

// Plant class
class Plant {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  grow() {
    console.log(`${this.name} is growing.`);
  }

  reproduce() {
    console.log(`${this.name} is reproducing.`);
  }
}

// Event class
class Event {
  constructor(eventName) {
    this.eventName = eventName;
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscribers() {
    console.log(`Event: ${this.eventName}`);
    this.subscribers.forEach((subscriber) => {
      subscriber.update();
    });
  }
}

// Simulation
console.log('Starting the Ecosystem Simulation...');

const rabbit = new Herbivore('Roger', 'Rabbit', 2);
const lion = new Carnivore('Simba', 'Lion', 4);
const tree = new Plant('Oak', 'Tree');

console.log('\nAnimals:');
console.log(rabbit);
console.log(lion);

console.log('\nPlants:');
console.log(tree);

console.log('\nSimulation in progress...');

// Registering event subscribers
const eatEvent = new Event('Eat Event');
const sleepEvent = new Event('Sleep Event');
eatEvent.addSubscriber(rabbit);
sleepEvent.addSubscriber(rabbit);
eatEvent.addSubscriber(lion);
eatEvent.addSubscriber(tree);
sleepEvent.addSubscriber(tree);

// Triggering events
eatEvent.notifySubscribers();
sleepEvent.notifySubscribers();

console.log('\nSimulation completed.');