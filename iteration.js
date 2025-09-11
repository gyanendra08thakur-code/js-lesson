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


 