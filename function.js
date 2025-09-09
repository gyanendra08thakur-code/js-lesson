console.log("functions")

// functions :- a block that hold alot of code and move from  once place to other by help of block

console.log("a");
console.log("b");
console.log("c");
console.log("d");
console.log("e");

function letters(){

console.log("a");
console.log("b");
console.log("c");
console.log("d");
console.log("e");

}
 letters();   // letter is refernce and () is execute , refrence give the  info of position and () give the excution 

//e.g--2

function sumOfNum( num1 , num2){
   // console.log(num1 + num2)
   let result = num1+ num2;
   console.log(result);  
   
   return result                // return means end of function execution , no code will run after return in the function        
}

sumOfNum(22,996)   // input inside the () is called the argument
sumOfNum(22,"a")
sumOfNum(22,null);

let result = sumOfNum(99+2977)
console.log("result", result);   //return of function will allow a function to store in a  variable


//e.g
function userlogin(username ){
   if(!username){
     console.log( "please enter your name");
     
   }
return` ${username}, welcome!`

}

console.log(userlogin("shiva")); 
console.log(userlogin())  // undefine, welcome


//e.g
function userlogin2(username = "shiva" ){  // if no data will pass then shiva will default value to execute the function
   if(!username){                                  // if value is  passed then username will overwrite and update with given value
     console.log( "please enter your name");
     
   }
return` ${username}, welcome!`

}
console.log(userlogin2(""));


//when uncountable arguments

//e.g1
function calculatecarprice( num1){
 return num1
}
 console.log(calculatecarprice(22,33,440))  //only 22 print


 //e.g2
function usercalculatecarprice( ...num1){   // rust oprtaior--->"..."

return num1

}
 console.log(usercalculatecarprice(22,33,440))   // o/p  [ 22, 33, 440]  that is an array which contain all the input values


//e.g3
function usercalculatecarprice( val1, val2, ...num1){   // rust oprtaior--->"..."

return num1

}
 console.log(usercalculatecarprice(22,33,440 ,880,550,443,7700))  // val1 contain fist input , val2 contain second input and remaining in num1(rust)

const user= {
   username : "gyanendra",
   price : 4499    //it we do "prices" then the value get undefine in the function as prices and price are not same , here prices is not available for function in the object
}
function handleObject(anyobject){

   console.log( ` the user name is ${anyobject.username}, and the price is ${anyobject.price}`);
   
}
handleObject(user) ;
handleObject ({
   username: "shiva singh",
   price: 68888

}) 

//array in function

const arr= [ 22,33,44 , "shiva", true, "singh"]

function getArray(givearray){

   return givearray[1]

}

console.log(getArray(arr))

//scope

let variable= 223;  // there variBLE have their scope in entire code
const variable2= 299;
var variable3= 8899;

console.log(variable);
console.log(variable2);
console.log(variable3);

function varr(){                         

   let variable=11;                    // {} in object can decleareation and remaing {} with fun,if,else etc called scope

   const variable2=22;
   var variable3= 33;            //can access these let const only inside {}
                                //scope in browser and code app is totally different




}
//[ note:- var break the scope of {} thats why we dont use it]


console.log(variable);
console.log(variable2);
console.log(variable3) ;

//nested scope

function name(){                    

const username ="shiva"

 function contact() {

   email= "gyanendrasingh";          // scope------->name cant access the contact but contact cam the name
   id= 223344;                       // child can acces the parents scope but parent cannot access the child scope
   website= "free_pani.com"
   console.log(`this is username${username}, this is email ${email}, and the id is ${id}`) //username can be access

 }

//console.log(` username is ${username}, and his website is ${ website}.`)  //website cannot acess 
console.log(username);
   contact();
}

name()

 if(true){

   const name = "father";
   
     if ( name === "father"){                 // child can acces the parents scope but parent cannot access the child scope

      const website = "www.globalscope.com";
      console.log(name + website);
      
     }

    // console.log(webite)

}
// console.log(name)


//***********************************intresting*********************************** */


// hosting 

 console.log(Addation(33)) //output obtain           // hosting before declearation is allowed  [not stored in var]

function Addation(num1){
return num1*99

}


//   console.log(sum(33))                     // hosting before decleation is not allowed          [stored in var]
let thesum = function sum( num1){                  //this is expression ( function stored in Variable )
                                                  // variable in js can store almost everything  like function object json etc

return num1+22

}


//arrow function and this


const data ={
   userName: "gyanendra",
price : 9999,

  welcomeMessage: function(){
   console.log(`welcome to website ${this.userName}`); // "this" allow to access all the element in this scope

   console.log(this);
   
  }
}

data.welcomeMessage()


data.userName ="shiva"     //value change
data.welcomeMessage()
console.log(this.price);  //undefine , as the scope of this is not define

console.log(this);       // no global object thats why it is empty

function chai(){
   username= "gyanendra"
   console.log(this)          //give some output in function whhen declesred
   console.log(this.userName)   //undefine as this function run with object only
}
chai()

//arrow function

//syntex
const coffee= () => {
  let name= "abhay";
   console.log(this.name);         // "undefine"  
   console.log(this)              // "{}"  ----> ouput
}

coffee()


const summ= (num1, num2) => {            // also called explicit return
return num1+num2;    
}                   
console.log(summ(666, 558))


//implicit return
const addTwo= (num1, num2) => num1+num2               // no need to put {} and return , used for smaller/ single line function
const addthree= (num1, num2, num3) =>   ( num1+num2+num3)       //can use () to wrap the function, if use {} then return keyword is necessry in function 



//IFFE   immediately invoked function
//for immidiate execution of function to resist from global scope pallution

//syntex

( function chaii() {                           //also called 
   console.log(`DB one is connected `);
   
})();                                      // dont forget to use "; "  it will produce error, ";" use to end the function

( ( nameone) => {
   console.log(`DB two is connected ${nameone} `);
   
})("shiva singh");


























































































































































