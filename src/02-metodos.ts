 export class MyDate {
    year:number;
    month:number;
    day:number;

    constructor(year:number,month:number,day:number) {
        this.year=year;
        this.month=month;
        this.day=day;
    }

    printFormat() : string{
        return `${this.day} / ${this.month} / ${this.year}`;
    }

    add(amount:number , type:'days' | 'months' | 'years'){

        if (type ==='days') {
            this.day += amount;
        }
        if (type ==='months') {
            this.month += amount;
        }
        if (type ==='years') {
            this.year += amount;
        }
        

    }
}

const myBirthday = new MyDate(1993,5,18);

console.log(myBirthday.printFormat());
myBirthday.add(5,'days');
console.log(myBirthday.printFormat());
myBirthday.add(1,'months');
console.log(myBirthday.printFormat());
myBirthday.add(1,'years');
console.log(myBirthday.printFormat());

console.log(myBirthday.day)
console.log(myBirthday.month)
console.log(myBirthday.year)



