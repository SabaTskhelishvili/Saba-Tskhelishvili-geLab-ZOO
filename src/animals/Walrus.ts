import { Animal } from './Animal';

export class Walrus extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Walrus');
  }

  makeSound(): void {
    console.log(`${this.name} the walrus bellows: OROOOGH!`);
  }
}
