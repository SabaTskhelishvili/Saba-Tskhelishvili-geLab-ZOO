// 1. Interface: Defines the contract for any animal in our zoo.
interface IAnimal {
    name: string;
    age: number;
    readonly species: string; // FIX 5: added readonly
    makeSound(): void;
    getInfo(): string;
}

// 2. Abstract Class (Encapsulation & Inheritance)
abstract class Animal implements IAnimal {
    constructor(
        public readonly name: string,    // FIX 3: was public, now readonly
        public readonly age: number,     // FIX 3: was public, now readonly
        public readonly species: string
    ) {}

    abstract makeSound(): void;

    getInfo(): string {
        return `${this.name} is a ${this.age}-year-old ${this.species}.`;
    }
}

// 3. Concrete Classes (Polymorphism - Arctic Edition ❄️)
class PolarBear extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Polar Bear");
    }

    makeSound(): void {
        console.log(`${this.name} growls: GRRR-Ruff! 🐻‍❄️`);
    }
}

class Penguin extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Emperor Penguin");
    }

    makeSound(): void {
        console.log(`${this.name} honks: Noot noot! 🐧`);
    }
}

class Walrus extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Walrus");
    }

    makeSound(): void {
        console.log(`${this.name} bellows: OROOOGH! 🦭`);
    }
}

// 4. Zoo Class — FIX 4: removed decorative generic <T>
class Zoo {
    private animals: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animals.push(animal);
        console.log(`[+] Added ${animal.name} the ${animal.species} to the arctic enclosure.`);
    }

    removeAnimal(name: string): void {
        const initialCount = this.animals.length;
        this.animals = this.animals.filter(animal => animal.name !== name);

        if (this.animals.length < initialCount) {
            console.log(`[-] Removed ${name} from the zoo.`);
        } else {
            console.log(`[!] Animal named ${name} not found.`);
        }
    }

    displayAllAnimals(): void {
        console.log('\n--- 📋 Arctic Zoo Registry ---');
        if (this.animals.length === 0) {
            console.log('The zoo is currently empty.');
            return;
        }
        this.animals.forEach(animal => console.log(animal.getInfo()));
        console.log('------------------------------\n');
    }

    triggerAllSounds(): void {
        console.log('\n--- 🔊 Arctic Sounds ---');
        if (this.animals.length === 0) {
            console.log('Silence... the zoo is empty.');
            return;
        }
        this.animals.forEach(animal => animal.makeSound());
        console.log('------------------------\n');
    }
}

// 5. Execution
const myArcticZoo = new Zoo(); // FIX 4: removed <Animal> type parameter

const lorek = new PolarBear("Iorek", 8);
const pingu = new Penguin("Pingu", 2);
const wally = new Walrus("Wally", 15);

myArcticZoo.addAnimal(lorek);
myArcticZoo.addAnimal(pingu);
myArcticZoo.addAnimal(wally);

myArcticZoo.displayAllAnimals();
myArcticZoo.triggerAllSounds();

myArcticZoo.removeAnimal("Pingu");
myArcticZoo.displayAllAnimals();