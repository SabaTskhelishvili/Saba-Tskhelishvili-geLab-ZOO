import { Animal } from './Animal';

export class SnowyOwl extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Snowy Owl');
  }

  makeSound(): void {
    console.log(`${this.name} the snowy owl hoots: Hoot-hoot-hoot!`);
  }
}
