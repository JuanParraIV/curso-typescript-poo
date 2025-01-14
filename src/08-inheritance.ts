export class Animal{
    constructor(
        private _name:string
    ){}

    move(){
        return `${this.name} is moving along!`
    }

    greeting(){
        console.log(`Hello, I'm ${this.name}`)
    }

    get name(){
        return this._name
    }

    set name(value:string){
        this._name= value
    }
}

export class Dog extends Animal {
    constructor(
     name: string,
    public owner:string
    ){
        super(name)
    }

    roar(times:number = 1){
        for (let index = 0; index < times; index++) {
            console.log(`${this.name} is roaring`)
        }
    }
}

const kaiser = new Dog('Kaiser','nico')

kaiser.greeting()
kaiser.roar(4)

console.log(kaiser.owner);