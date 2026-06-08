import { Animal } from './Animal';

export class ArcticFox extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Arctic Fox');
  }

  makeSound(): void {
    console.log(`${this.name} the arctic fox barks: Yip-yip-yip!`);
  }
}
