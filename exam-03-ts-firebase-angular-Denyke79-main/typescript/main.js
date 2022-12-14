"use strict";
class Animal {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
class Dog extends Animal {
    toString() {
        console.log(`Dog: ${this.name}`);
    }
}
class Cat extends Animal {
    toString() {
        console.log(`Cat: ${this.name}`);
    }
}
class AnimalShelter {
    constructor() {
        this._animals = [];
    }
    get animals() {
        return this._animals;
    }
    addAnimal(animal) {
        if (animal) {
            this.animals.push(animal);
        }
    }
    printAnimals() {
        this.animals.forEach(d => d.toString());
    }
}
const animalShelter = new AnimalShelter();
const testDog = new Dog("Mózes");
const testCat = new Cat("Gyagyás Tódi");
animalShelter.addAnimal(testDog);
animalShelter.addAnimal(testCat);
animalShelter.printAnimals();
