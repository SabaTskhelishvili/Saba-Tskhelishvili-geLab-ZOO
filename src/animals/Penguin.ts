import { Animal } from './Animal';

export class Penguin extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Emperor Penguin');
  }

  makeSound(): void {
    console.log(`${this.name} the penguin honks: Noot noot!`);
  }
}
