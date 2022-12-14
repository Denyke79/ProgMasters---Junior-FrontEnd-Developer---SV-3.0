abstract class Animal {
    constructor(
        private readonly _name: string
    ) { }

    abstract toString(): string;

    get name(): string {
        return this._name;
    }
}

class Dog extends Animal {

    toString(): string {
        console.log(`Dog: ${this.name}`);
    }
}

class Cat extends Animal {

    toString(): string {
        console.log(`Cat: ${this.name}`);
    }
}

class AnimalShelter {
    private readonly _animals: Animal[] = [];

    get animals(): Animal[] {
        return this._animals;
    }

    addAnimal(animal: Animal) {
        if (animal) {
            this.animals.push(animal);
        }
    }

    printAnimals() {
        this.animals.forEach(d => d.toString())
    }
}

const animalShelter: AnimalShelter = new AnimalShelter();

const testDog = new Dog("Mózes");
const testCat = new Cat("Gyagyás Tódi");

animalShelter.addAnimal(testDog);
animalShelter.addAnimal(testCat);
animalShelter.printAnimals();