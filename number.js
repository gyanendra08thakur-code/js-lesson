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


let method7= Number.isInteger(number2) //boolean output
console.log(method7);

let method8= Number.isFinite(number)   //boolean output
console.log(method8);

let number3= "abc"
let method9= Number.isNaN(number3)    //boolean output
console.log(method9);

let method10= Number.isSafeInteger(number) //boolean output
console.log(method10);

//parse methods are not involved


//properties of number

//note :- number properties cannot be used on variables 
// let x=6 ,
// let y = x.MAX_VALUE  --> invalid
// Number.MAX_VALUE---> valid only with Number object


//epsilon is ES6 feature doesnot work on internet explorer

let propertie1= Number.MAX_VALUE //max possible integer
console.log(propertie1);

let propertie2=Number.MIN_VALUE //min possible integer in js
console.log(propertie2);

let propertie3=Number.MIN_SAFE_INTEGER  //only ES6 feature, dont run with internet explorer
console.log(propertie3)

let propertie4= Number.MAX_SAFE_INTEGER //only ES6 feature, dont run with internet explorer
console.log(propertie4);

let propertie5=Number.NEGATIVE_INFINITY 
console.log(propertie5);

let propertie6=Number.POSITIVE_INFINITY 
console.log(propertie6);

let x= -1/0;
console.log(typeof x)  //  -INFINITY
console.log( x)

let y= 1/0
console.log(typeof y)    //  INFINITY
console.log( y)

let property7= Number.NaN
console.log(property7)

let z= 100/"apple"
console.log(typeof z);
console.log(z);


//maths methods

let maths= 22.66
let maths2= -22.66

let mathMethod1= Math.round(maths)    //round off property
console.log(mathMethod1);

let mathMethod2= Math.ceil(maths)    //round off to nearest higher number
console.log(mathMethod2);

let mathMethod3= Math.floor(maths)   //round off to nearest lower number
console.log(mathMethod3); 

let mathMethod4= Math.trunc(maths)
console.log(mathMethod4);

let mathMethod5= Math.sign(maths)  // number positive o/p --> 1
let mathMethod6= Math.sign(maths2)  //number negative o/p --> -1
console.log(mathMethod5)            // number zero  o/p ---> 0
console.log(mathMethod6);

let maths3= (8,4)                   //(x,y) return value of x to the power of y
let mathMethod7= Math.pow(maths3)
console.log(mathMethod7);

let mathMethod8= Math.sqrt(maths)  //return the squareroot
console.log(mathMethod8);

let mathMethod9=Math.abs(maths2)
console.log(mathMethod9);        //return only positive value of number

let mathMethod10= Math.random()  //return random number betweem 0 and 1
console.log(mathMethod10);

//and many more methods





























