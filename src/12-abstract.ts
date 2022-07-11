import { Animal, Dog} from './09-protected'

const animal = new Animal('Elite')
animal.greeting();

const cheis = new Dog('Cheese','Juan');

cheis.greeting();
cheis.roar();
