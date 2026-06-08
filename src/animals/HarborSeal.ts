import { Animal } from './Animal';

export class HarborSeal extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Harbor Seal');
  }

  makeSound(): void {
    console.log(`${this.name} the harbor seal barks: Arf-arf-arf!`);
  }
}
