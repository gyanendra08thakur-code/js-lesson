console.log("iterations");

//for loop

for (let index = 0; index < 5; index++) {

    const element = index;
    console.log(index);
      if (element==3){
        console.log(`this is number ${index}`);
        
      }
    
}


for (let index = 0; index < 9 ; index++) {
    console.log(` this is outer number ${ index}`);
    
      
    for (let p = 0; p <5 ;  p++) {
        console.log(` this is inner number ${p}`);
        ;
        
    }
}


for (let index = 1; index < 9 ; index++) {
    console.log(` this is table of  ${ index}`);
    
      
    for (let p = 1; p <9 ;  p++) {
        console.log(`${index} * ${ p } = ${index*p}`);
        ;
        
    }
}


let arr= ["shaktiman ", "krish" , "flyingjatt"];
console.log(arr.length);


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
 
}


//break and continue in loop

for (let index = 0; index <= 20; index++) {


    if (index==5) {
        console.log(` detected number 5`);
        break                                        // break stop the looping 
        
    }
    console.log(` value of index is ${index}`);

}
for (let index = 0; index <= 20; index++) {


    if (index==5) {
        console.log(` detected number 5`);
       continue                                  // continue  it continue the loop even after getting if value
        
    }
    console.log(` value of index is ${index}`);

}



// while and do while loop
let number = 0;

while ( number <= 20) {

     console.log(`the number is ${number}`);
     number = number+2

    }

 /*let arr2= [ `batman`, "superman", "sipder man"];
let arr3 = 0;
while  ( arr3 < arr2.length) {
    console.log(` value is ${arr2[arr3]}`);
  arr = arr+1
}*/

//do while loop 
// frst do will act then condition in whilw check 
 let score = 10;

do {
    console.log(` score is ${ score }`);
   score++
 } while ( score <= 5);


 //high order array specific loops 
 // these are :- For in loop , for each loop (important), for of loop

 // for of loop
const arry = [1,2,3,4,5]             // for of loop on array
 for (const value  of arry) {           // here object refer to the element on whom loop should apply

    console.log( value);
    
 }


const greeting = " hello world"          // for of loop on string
for ( const greet of greeting) {
    console.log(greet);
    
}


//maps  ---> typeof-- an object , key value pair

const map=  new Map         //syntex
 map.set( 'in', 'india');
 map.set( 'usa', 'united state of america')
 map.set( 'fr ', ' france ')

 console.log(map);
 
 for (const [key , value] of map ) {            //destructure of array   , map in for of loop
    console.log(key, ':-', value);
    
 }

/*  const myobj ={                     object is not iterable in the for of loop
    'game 1' : ' nfs',
     'game 2' : 'spiderman',

}

for ( const [key, value ] of myobj) {
    console.log( key, ":-", value );
    
}
*/



 // for in loop   ( also applicable for object )

const myObject ={                   //object in for in
    js: "javascript ",
    cpp : " c plus plus",
    rb : "ruby",
    swift : " swift by apple"

}

for (const key in myObject) {

    console.log( `${key} shortcut is for ${myObject[key]}`);

}

 let lang= ['js', 'c++', 'java', 'python']   //

for ( let key in lang) {
    console.log(lang[key])
}

const map2=  new Map            // map is not iterable here 
 map.set( 'in', 'india');
 map.set( 'usa', 'united state of america')
 map.set( 'fr ', ' france ')

for ( const key in map2){
    console.log(key);
    
}

// for each loop

const coding = ['js', ' ruby' , 'c++', 'swift', 'flutter']         //for each in array

coding.forEach( function (iteam) {                  //call back function dont have name 

console.log( iteam)

})

coding.forEach( (iteam) => {                                // using arrow function without name
    console.log( iteam);
    
})

// another method to call foreach loop
function printme(iteam){
    console.log(iteam);
}

coding.forEach(printme);               //give the refrence/name only not the execution/()


coding.forEach( (iteam, index , arr) => {                        // function have other parameter like arr, index, values, iteam        
    console.log( iteam , index, arr); 
    
})


const details =[

    {
        name: " gyanendra singh",
       religion : " hindu"
    },
    {
        name: " Nurani ansari",
        religion: " muslim",

    },
    {
        name : "robert ",
        religion : " cristen"
    },
    {
        name : " pranjal jain",
        religion : " jain"
    }
]

details.forEach( (item) => {
    console.log(item.name);
    
})



//****************************filters , maps , reduce*********************************************//

//filters
const nums= [1,2,3,4,5,6,7,8,9,10]
   let num2 = nums.filter( (num) =>  num>4)
console.log(num2);

   let num3 = nums.filter( (num) => { return  num >=4})
console.log(num3);


const detail2 =[               //"" not allowd in string otherwise string(value) with its key cannot be detected in filter

    {
        name: " gyanendra singh",
       religion : ' hindu',                       // use single quote in string decleare otherwise we not able to use filter on it
       dob: '22 janurary',
    },
    {
        name: " shiva singh",
       religion :' hindu',
       dob: '8 october',
    },
    {
        name: " Nurani ansari",
        religion: 'muslim' ,
        dob :  ' 8 spetember'

    },
    {
        name: " hizabuddin ansari",
        religion: 'muslim',
        dob :  ' 15 spetember'

    },
    {
        name : "robert ",
        religion : 'cristian',
        dob : ' 6 may'
    },
    {
        name : " pranjal jain",
        religion : ' jain',
        dob : " 19 october"
    }
]

let data= detail2.filter( (muslims) => muslims.religion === 'muslim')

console.log(data);

let data2 = detail2.filter( (dateOfBirth) => { return dateOfBirth.dob=== '8 october'}); // dont forget to use return after using {}
console.log(data2);

let data3= detail2.filter( ( givaName) => givaName.name=== 'gyanendra singh');  //emoty string, undetectale reason: written is "" 
console.log(data3);

let data4 = detail2.filter( (records) => {return records.religion === 'hindu' && records.dob==='8 october' });
console.log(data4);





//*************************map******************************//

const mynums= [1,2,3,4,5,6,7,8,9.10]
const newNums = mynums.map( (num) => num+10 );
console.log(newNums);

//chaining //

const numss = [ 1,2,3,4,5,6,7,8,9,10]
 const newnumss = numss
 .map( (numss) => numss* 10)
 .map ( (numss)  => numss+1)
 .filter( (numss) => numss+22)

console.log(numss);





//***************************reduce****************************//

const num4 = [1,2,3]    //cuurent value
  const thenum = num4.reduce( function ( accumulator, currentValue){
    console.log(`accumuator ${accumulator}, cuurent value ${currentValue} `);
    
    return accumulator + currentValue
  } , 0 //initial value or accumulator//
  )


console.log(thenum);

const myTotal = num4.reduce( (accumulator, currentValue) => accumulator+ currentValue ,0)

console.log(myTotal);


const shoppingCart= [ 
    {
        iteamName : 't shirt',
        price : 2200
    },
    {
        iteamName : 'jeans',
        price : 28000
    },
    {
        iteamName : 'casual shoes',
        price : 10000
    },
    {
        iteamName : 'shirt',
        price : 4200
    },
    {
        iteamName : 'hankey',
        price : 200
    },
    {
        iteamName : 'purfume',
        price : 22000
    },

]

 const totalpayment = shoppingCart.reduce( (acc, iteam) => (acc + iteam.price  ) ,0  )
console.log(totalpayment);




































































































































































































































































































