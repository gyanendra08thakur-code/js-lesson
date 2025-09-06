console.log(`numbers`);


let number=1234567890;
let number2=45.678


//basic method of number

let method1 = number.toString()                  // convert to string
console.log(method1);
console.log(typeof method1)

let method2 =  number.toExponential()          // return exponential power
console.log(method2);

let method3= number2.toFixed(2)               //num of digit want after decimal (values will be round off automatically)
console.log( method3);

let method4= number2.toPrecision(6);         //total number of digit want in number (values will be round off automatically)
console.log(method4);


let val2= (88+96).valueOf()                  //give answer after opration
console.log(val2);


//static methods of number

let str1=`22,33,44,55`
let method6= Number(str1);            //NaN when datatype cannot change into a number it returns NaN
console.log(method6)






