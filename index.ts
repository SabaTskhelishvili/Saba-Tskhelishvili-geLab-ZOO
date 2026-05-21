// 1. Interface: Defines the contract for any animal in our zoo.
interface IAnimal {
    name: string;
    age: number;
    species: string;
    makeSound(): void;
    getInfo(): string;
}

// 2. Abstract Class (Encapsulation & Inheritance)
// Provides a base blueprint. We can't instantiate 'Animal' directly, 
// but we can extend it to create specific species.
abstract class Animal implements IAnimal {
    constructor(
        public name: string,
        public age: number,
        public readonly species: string 
    ) {}

    // Abstract method: Forces all child classes to implement their own sound
    abstract makeSound(): void;

    // Shared method inherited by all animals
    getInfo(): string {
        return `${this.name} is a ${this.age}-year-old ${this.species}.`;
    }
}

// 3. Concrete Classes (Polymorphism - Arctic Edition ❄️)
// Each class extends Animal but implements the makeSound method differently.
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

// 4. Generic Zoo Class (Generics & Scalability)
// Using <T extends Animal> ensures our Zoo only accepts Animals.
class Zoo<T extends Animal> {
    private animals: T[] = [];

    addAnimal(animal: T): void {
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

// ==========================================
// 5. Execution (Console Application)
// ==========================================

// Initialize our Zoo
const myArcticZoo = new Zoo<Animal>();

// Create some arctic animals
const lorek = new PolarBear("Iorek", 8);
const pingu = new Penguin("Pingu", 2);
const wally = new Walrus("Wally", 15);

// Test Additions
myArcticZoo.addAnimal(lorek);
myArcticZoo.addAnimal(pingu);
myArcticZoo.addAnimal(wally);

// Test Display
myArcticZoo.displayAllAnimals();

// Test Polymorphic Sounds
myArcticZoo.triggerAllSounds();

// Test Removal
myArcticZoo.removeAnimal("Pingu");
myArcticZoo.displayAllAnimals();