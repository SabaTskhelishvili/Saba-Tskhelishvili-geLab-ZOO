import { Animal } from '../animals/Animal';

export class Zoo<T extends Animal> {
  private animals: T[] = [];

  addAnimal(animal: T): void {
    const exists = this.animals.some(a => a.name === animal.name);
    if (exists) {
      console.log(`[!] ${animal.name} is already in the zoo.`);
      return;
    }
    this.animals.push(animal);
    console.log(`[+] Added ${animal.name} the ${animal.species}.`);
  }

  removeAnimal(name: string): void {
    const index = this.animals.findIndex(animal => animal.name === name);
    if (index === -1) {
      console.log(`[!] Animal named ${name} not found.`);
      return;
    }
    this.animals.splice(index, 1);
    console.log(`[-] Removed ${name} from the zoo.`);
  }

  displayAllAnimals(): void {
    console.log('\n--- Arctic Zoo Registry ---');
    if (this.animals.length === 0) {
      console.log('The zoo is currently empty.');
      return;
    }
    this.animals.forEach(animal => console.log(animal.getInfo()));
    console.log(`Total: ${this.animals.length} animal(s)`);
    console.log('--------------------------\n');
  }

  triggerAllSounds(): void {
    console.log('\n--- Arctic Sounds ---');
    if (this.animals.length === 0) {
      console.log('Silence... the zoo is empty.');
      return;
    }
    this.animals.forEach(animal => animal.makeSound());
    console.log('---------------------\n');
  }
}
