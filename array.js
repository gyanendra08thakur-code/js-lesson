console.log("array")

let arr= [11, true , 11.5, " shiva "]    //all non primitive type can store in this
// heap memory store

console.log(arr[0])         // charAt 


//can also be decleared by using " new Array"
let arr2= new Array(22,33,33)
console.log(arr2)


//array methods

let arr3 = [ 99,44,"shiva", false,11,22];

 arr3.push(102)         //method1    --> add element at the end
console.log(arr3)

arr3.pop()              // method    ---> remove element from the end
console.log(arr3);

arr3.unshift(22)       // method     --> add element at the start 
console.log(arr3);

arr3.shift()
console.log(arr3);     // method       --> remove first element

arr3.includes(false)      //method --------> boolean expression
console.log(arr3);

arr3.indexOf("shiva")    //method    -----> give position of ofindex
console.log(arr3)

const newArr= arr2.join()
console.log(typeof newArr)    //method  -------> chnge array to string

let method2 = arr3.slice(2,4)              //method  ----> last range element not included
console.log(method2);

let method3 =arr2.splice(1,2)
console.log(method3);        //method  -------> last range elemnt included  // manupulate original array
console.log(arr2)

let arr4= [ [22,33], [44 ,55] , [66,77] , [ 1,2,3,[234,234],4]]   //method  ----> add subarray to make a main array
let method4 = arr4.flat(Infinity)   //flat( value of baby string that wants to change into main string lile 1,2,3 ..infinity)
console.log(method4);

const myArr = [1, 2, 3, 4, 5, 6];  
const method5 = myArr.flatMap(x => [x, x * 10]);   //           
console.log(method5);//method---> method first maps all elements of an array and then creates a new array by   -flattening the array.

 arr2.push(arr);
console.log(arr2);    //method--> adding one array as an element in another array

let arr5=arr.concat(arr3)  // merging two arrays to make a string having both array elemnts
console.log(arr5); 

let array6 = [...arr3, ...arr4, ...arr5, ...arr]  //merging two or more arrays to make a string having all array elemnts
console.log(array6);             //method ------> spread 


console.log(Array.isArray("happy birthday"));  //to check the value is array or not

console.log(Array.from("happy birthday")); // to make a string other datatype into array

//special case
console.log(Array.from({ag2: 22}))  // empty array return as didnt mention whom to make array key or values

let score=200
let score2= 300;   // converts all variables into array
let score3= 600;
let score4 = 400;
console.log(Array.of(score, score2, score3, score4));



































