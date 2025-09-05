//var let const//
const userName = "gyanendra singh";
let  userId= "gyanendra@0208";
var userContact="xxxx555xxx";  //prefer not to use var coz of issue in block and functional scope
address="jaikar kalan";  //variable can decleare by its name only

console.log(userContact,userId,userName);

// userName ="gyanendra thakur"; this is not allowed
 userId ="gyanendrathakur@08";
 userContact="xxxx0848x"; 
 address="mirzapur";
 let accountState;


 console.table([userContact,userId, userContact,address,accountState]);


 "use strict"; //treat all js code as newer version

 //primitive datatype
 let user= "Gyanendra Singh";  //string
 let contact= 9198555779;   //number (2**53)
 let isLoggin = false;     //boolean
 let amountEarn = null;   //null type (an object),(means empty)
 let ambition;           //undefine    (non decleared)
 let BigNumber= 223399n //big int (ultra bigger values)
 let id= Symbol('12a') //symbol (give different id)
 let anotherId = Symbol('12a') 

 console.table([typeof contact,user,isLoggin,amountEarn,ambition,id,BigNumber ]);
 console.log(typeof null);     // object
 console.log(id===anotherId); //false

//reference or non primitive type
const heroes= ["mikiasa", "sukana", 2233 , false]  //array

 let details = {                                  //object
    name: "gyanendra singh",
    studyStatus: false,
    amountEarn: null,
    age : 21,
    marrigeStauts: "unmarried",
}
let opration= function () {
 
    console.log("this is a function")

}

console.log(typeof opration);
console.log(typeof heroes);
console.log(typeof details);  //array is type of object in js


//type conversion
// other type convert to number
let Svalue="2233";
let Bvalue= true;
let password= "2233abc";
let arr=["22",33,true]
//let sym1= Symbol('2233')

let num = Number(Svalue);
let value = Number(Bvalue);
let pass = Number ( password);
let ar= Number(arr);
//let num4= Number(sym1);

console.log(typeof num);
console.log(typeof value);
console.log(typeof pass);  //number
console.log(typeof ar);   //number
//console.log(typeof sym1); symbol cannt convert to number

//console.log(sym1)
console.log(num);
console.log(value);
console.log(pass); // NaN
console.log(ar);  //NaN


//other type to boolean
let num1= 22;
let str= "this is my code";
let num2= -2;
let num3=0;
let str2= "";
let arr1=[22,"22",true];
let sym= Symbol('234') 

let b1= Boolean(num1);   //true
let b2= Boolean(str);    //true
let b3= Boolean(num2);  //true
let b4= Boolean(num3);  //false
let b5= Boolean(str2);  //false
let b6= Boolean(arr1);  //true
let b7= Boolean(sym)    //true

console.log(typeof b1);
console.log(typeof b2);
console.log(typeof b3);
console.log(typeof b4);
console.log(typeof b5);
console.log(typeof b6);
console.log(typeof b7);
 //all boolean

console.log(b1,b2,b3,b4,b5,b6,b7);

//other to string
let num5=22;
let b8=true;
let sym2= Symbol('228');
let arr2=[22,33,"abc",true]

let str3= String(num5);
let str4= String(b8);
let str5= String(sym2)
let str6= String(arr2);

console.log(typeof str3);
console.log(typeof str4);
console.log(typeof str5);
console.log(typeof str6)

console.log(str3,str4,str5,str6);

//opration
//arthematic opration :- +,-,*,**,%,/,++,--
let str7= "hello";
let str8= " Shiva";
console.log(str7+str8);
 //oprations on different datatype
 console.log("3"+2);
 console.log(2+"3"); 
 console.log(2+3+"a"); //added num then add str
 console.log("a"+2+3); //treat as adding string

 let addnum=201
 console.log(addnum++); //201
 console.log(++addnum); //203






