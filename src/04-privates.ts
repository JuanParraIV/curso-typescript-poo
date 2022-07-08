export class MyDate {
    private year:number;
    public month:number;
    public day:number;
 
     constructor(year:number,month:number,day:number) {
         this.year=year;
         this.month=month;
         this.day=day;
     }
 
     printFormat() : string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
         return `${day} / ${month} / ${this.year}`;
     }

     private addPadding(value:number){
       return value < 10 ? `0${value}` :`${value}`
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

     getDay(){
        return this.day
     }
 }
 
 const myDate = new MyDate(1993,7,9);

 console.log(myDate.printFormat());

console.log(myDate.getDay())
 