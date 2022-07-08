export class MyDate {

    constructor(
        private year: number = 1993,
        public month: number = 7,
        public day: number = 9
        ){}

    printFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day} / ${month} / ${this.year}`;
    }

    private addPadding(value: number) {
        return value < 10 ? `0${value}` : `${value}`
    }

    add(amount: number, type: 'days' | 'months' | 'years') {

        if (type === 'days') {
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }

    getDay() {
        return this.day
    }
}

const myDate = new MyDate();

console.log(myDate.printFormat());

console.log(myDate.getDay())