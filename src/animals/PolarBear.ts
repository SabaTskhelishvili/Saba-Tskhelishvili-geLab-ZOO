import { Animal } from './Animal';

export class PolarBear extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Polar Bear');
  }

  makeSound(): void {
    console.log(`${this.name} the polar bear growls: GRRR-Ruff!`);
  }
}
