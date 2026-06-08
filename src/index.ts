import { Zoo } from './zoo/Zoo';
import { PolarBear } from './animals/PolarBear';
import { Penguin } from './animals/Penguin';
import { Walrus } from './animals/Walrus';
import { ArcticFox } from './animals/ArcticFox';
import { SnowyOwl } from './animals/SnowyOwl';
import { HarborSeal } from './animals/HarborSeal';
import { ArcticHare } from './animals/ArcticHare';

const zoo = new Zoo();

const lorek = new PolarBear('Iorek', 8);
const pingu = new Penguin('Pingu', 2);
const wally = new Walrus('Wally', 15);
const nina = new ArcticFox('Nina', 3);
const hedwig = new SnowyOwl('Hedwig', 4);
const salto = new HarborSeal('Salto', 6);
const hopper = new ArcticHare('Hopper', 1);

zoo.addAnimal(lorek);
zoo.addAnimal(pingu);
zoo.addAnimal(wally);
zoo.addAnimal(nina);
zoo.addAnimal(hedwig);
zoo.addAnimal(salto);
zoo.addAnimal(hopper);

zoo.displayAllAnimals();

zoo.triggerAllSounds();

zoo.removeAnimal('Pingu');
console.log('After removing Pingu:');
zoo.displayAllAnimals();
