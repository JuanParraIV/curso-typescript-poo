export class Animal{
    constructor(
        private _name:string
    ){}

    move(){
        return `${this.name} is moving along!`
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }

    get name(){
        return this._name
    }

    set name(value:string){
        this._name= value
    }
}

const fifi = new Animal('fifi');

const meowsy = new Animal('meowsy')

console.log(fifi.move());
console.log(meowsy.move());

console.log(fifi.greeting());
console.log(meowsy.greeting());
console.log(meowsy.name = 'Cacha');

console.log(meowsy.greeting());