import { IAnimal } from '../interfaces/IAnimal';

export abstract class Animal implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public readonly species: string
  ) {
    if (!name) {
      throw new Error('Name cannot be empty');
    }
    if (age < 0) {
      throw new Error('Age cannot be negative');
    }
  }

  abstract makeSound(): void;

  getInfo(): string {
    return `${this.name} is a ${this.age}-year-old ${this.species}.`;
  }
}
