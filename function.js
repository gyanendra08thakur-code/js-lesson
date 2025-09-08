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

















































































































































































