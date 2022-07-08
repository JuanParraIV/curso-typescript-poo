export class MyDate {

    constructor(
        public year: number = 1994,
        public month: number = 7,
        private _day: number = 9
        ){}

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this.month);
        return `${day} / ${month} / ${this.year}`;
    }

    private addPadding(value: number) {
        return value < 10 ? `0${value}` : `${value}`
    }

    add(amount: number, type: 'days' | 'months' | 'years') {

        if (type === 'days') {
            this._day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }

    get day() {
        return this._day
    }

    get isLeapYear():boolean{
       if(this.year % 400 === 0) return true;
       if(this.year % 100 === 0) return false;
        return this.year % 4 ===0;
    }
}

const myDate = new MyDate(1993,5,18);

console.log(myDate.printFormat());
/* console.log(myDate.getDay()) */
console.log(myDate.isLeapYear)

const myDate2 = new MyDate(2000,12,14);
console.log(myDate2.printFormat());
console.log(myDate2.isLeapYear)
