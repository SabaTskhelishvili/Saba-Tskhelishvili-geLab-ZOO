export interface IAnimal {
  name: string;
  age: number;
  species: string;
  makeSound(): void;
  getInfo(): string;
}
