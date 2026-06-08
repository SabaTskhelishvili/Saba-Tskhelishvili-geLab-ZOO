import { Animal } from './Animal';

export class ArcticHare extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Arctic Hare');
  }

  makeSound(): void {
    console.log(`${this.name} the arctic hare squeaks: Squeak-squeak!`);
  }
}
