console.log('Math.PI',Math.PI);
console.log('Math.max',Math.max(1,2,3,4,3,5,6,10));

class MyMath {
   static readonly PI=3.14;

   static max(...numbers: number[]){
    console.log(numbers)
    return numbers.reduce((max, item)=> max>=item ? max : item,0)
   }
}


console.log('MyMath PI',MyMath.PI)

const array= [1,2,3,4,5,6]
console.log('MyMath max',MyMath.max(...array))
