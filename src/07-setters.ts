class MyDate {

    constructor(
        public year: number = 1994,
        private _month: number = 7,
        private _day: number = 9
        ){}

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
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
            this._month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }

    get day() {
        return this._day
    }
    get month() {
        return this._month
    }

    get isLeapYear():boolean{
       if(this.year % 400 === 0) return true;
       if(this.year % 100 === 0) return false;
        return this.year % 4 ===0;
    }

    set month(value:number){
        try {
            if(value >=1 && value <=12){

                this._month=value;
            }else {
                throw new Error('month out of range')
            }
        } catch (error) {
            
        }
        
    }
}

const myDate = new MyDate(1993,5,18);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run',myDate.month)

myDate.month = 78;
console.log('esto no debe aparecer',myDate.month)
