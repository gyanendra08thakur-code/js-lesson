console.log("object")

//object decleare and access

//singelton object
//object.create ----> use to create this type of object



// litral object

let newsymb = Symbol("happy birthday");  //declearing symbol outside of object
console.log(typeof newsymb);
 
const jssuser = {  //dont forget to use , and : in the object format--> key: value,

name: "gyanendra singh", 
age: 24,
conatct:91985557779,
email: "gyanendrasingh@gmail.com",
//[specialDay]: 'happy birthday',          // use [] to decleare the symbol
"location": "mirzapur",

}
console.log(jssuser);
//console.log( typeof jssuser[specialDay])             // use  this syntex to access a symbol

console.log( jssuser.email);  //use--> objName.(name of key)  to access a particular key
console.log(typeof jssuser["location"]);         //// use  this syntex to access a symbol



jssuser.email="harshitasingh983808@gmail.com";  // overwrite use to change the value of key
 console.log(jssuser.email);
// Object.freeze(jssuser)  //no change allowed in the object from now
 jssuser.email="devakisingh@gmail.com";   //not updated
 console.log(jssuser.email);
 

 jssuser.greeting= function(){    //declearing key outside the object     object can store both primitive annd non primitive values
    console.log(`hello js user, ${this.name}`);

 }
console.log(jssuser.greeting())



//example
 const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person)

const theuser= new Object()  //method to declearethe object
console.log(theuser);

theuser.Name= "gyanendra singh";
theuser.email= "gyanendra@gmail.com";
theuser.contactnum = 9198555779;
theuser.orders = 20;
console.log(theuser);


let theuser2 = {                 //object in the object
         
  email: "devakisingh@gmail.com",
  fullname : {
   username :{
    firstName : "gyanendra",
     lastname: "singh",
   }
}
} 

console.log(theuser2);
console.log(theuser2.fullname.username.firstName);    //accessing nested object 

let obj1= {a:1, b:2}
let obj3= {c:1, d:2}
let obj2= {e:1, f:2}

let mergingObj= {obj1, obj2, obj3}  //all three object are store seprately in an object
console.log(mergingObj)

let mergingObj2=Object.assign( {}, obj1, obj2, obj3);  // all elelmts of all object stored in a single onject syntex-->(targetobject, sourceobj1, sourceobj2, ....)
console.log(mergingObj2);

let mergingObj3= {...obj1, ...obj2, ...obj3}            // spread  --->similar  to assign with easy syntex
console.log(mergingObj3);


console.log(Object.keys(jssuser));   //can access all the keys of the objecct   note--> an array is return which stored all keys  that is now array methods can be applied
console.log(Object.values(jssuser));  // can access all the values of the object   note--> an array is return which stored all values  that is now array methods can be appilied
console.log(Object.entries(jssuser));  // it return each  individual key values in array that further stored in larger array



const user = [
  {
    id: 1,
    email: " gaynendrasingh@gmail.com"
  },
     {
      id: 2,
    email: " gaynendrasingh@gmail.com"
     },

          {
      id: 3,
    email: " gaynendrasingh@gmail.com"
     },
          {
      id: 4,
    email: " gaynendrasingh@gmail.com"
     },
          {
      id: 5,
    email: " gaynendrasingh@gmail.com"
     }
]
console.log(  user[0].id);            // accessing the object nested inside the array


console.log(Object.hasOwnProperty(jssuser.conatct));



// object destructuring

const course= {

courseName: "the web development course",
price: 600,
teacherName: "gyanendra"


}

const {teacherName}= course  //elemnt can access by this method
console.log(teacherName);


const {teacherName: faculity} = course  //an another name can give to key and can access by that name
console.log(faculity);



//json

 //format ---> note key and value both are in string and name of json not given

//format1

/*{
  "courseName": "web development",
  "faculity": "gyanendra singh",
  "fee" : 500,
  "coursecontent": ["html", "css", {language: "javascript", jsFramework:"react"} ],
  "rating": "five",

}  */

//format2

/*  [
    {},
    {},
    {}

  ] */






