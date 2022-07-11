export class Animal{
    constructor(
        protected name:string
    ){}

    move():void{
        console.log(`${this.name} is moving along!`)
    }

    greeting(){
        console.log(`Hello, I'm ${this.name}`)
    }

    protected doSomething(){
        console.log('dooo')
    }

}

export class Dog extends Animal {
    constructor(
    name: string,
    public owner:string
    ){
        super(name);
    }

    roar(times:number = 1):void{
        for (let index = 0; index < times; index++) {
            console.log(`${this.name} is roaring`)
        }
        this.doSomething();
    }

    move(): void {
        console.log('dog is moving')
        super.move();
    }

    
    
}

const kaiser = new Dog('Kaiser','nico')


kaiser.roar(1)
kaiser.move()

