console.log("gyanendra singh");
//strings
let alphabet= "abcdefghijklmnopqrstuvwxyz"
let alphabetCount= 26

console.log(`the english alphabets are ${alphabet}, they have ${alphabetCount} latters`);

//string is accessable with ${} and can decleared with  " " or ` `


//methods of strings
// methods dont change the original value as string is stack memory

//extracting string chars
let str="abcdefghijklmnopqrstuvwxyz";

let method1= str.length        //length
console.log(method1);

let method2= str.charAt(25);    //charAt  {note: js count from 0}
console.log(method2);

let method3= str.charCodeAt(0);  //charCodeAt {return code of char (code- integer between 0 to 65535)}
console.log(method3);

let method4= str.codePointAt(0); //codePointAt  {same as charChodeAt}
console.log(method4)

let method5= str.at(6)           // at , [] , charAt are same {return the position of char}
console.log(method5)

let method6=str[6]             //[]
console.log(method6);

let y="this is alphabet"
let method7 = str.concat(" ",y)   //concat adding two string
console.log(method7)

//extracting string parts
let str2="abcde,fghij,klmno,pqrst,uvwx,yz"

let method8= str2.slice(1,3);  // (start, end)   sliced new string
console.log(method8);
let slice3= str2.slice(-3,-1)  // position count from end of string 
console.log(slice3);
let slice1= str2.slice(3)    // given position to last char of string
console.log(slice1);
let slice2= str2.slice(-3)
console.log(slice2);         // given position to last

let method9 = str2.substring(1,3) //substring same as slice the difference is start and value less then 0 treated as 0
console.log(method9);

let method10= str2.toUpperCase()
console.log(method10)           // upper case

let method11= str2.toLowerCase()  //lower case
console.log(method11);

let method12= str2.isWellFormed()  //if string is well formed :- true
console.log(method12);

let str3="      abcde,fghij,klmno,pqrst,uvwx,yz         "  
let method13= str.trim();         //trim extra space from start and end of string
console.log(method13);

let trim2 = str3.trimEnd()
console.log(trim2);

let trim3= str3.trimStart()
console.log(trim3);

//string padding
let str4="abcde,fghij,klmno,pqrst,uvwx,yz";
let method14= str4.padStart(38,"0");  //(space want,digit in space(in start))
console.log(method14);


let method15= str4.padEnd(35,"x")    //(space want,digit in space(in end))
console.log(method15);

let method16=str4.repeat(3);
console.log(method16);

let method17= str4.replaceAll("c","67890") //(kya replace krna, kisse replace krna)
console.log(method17);

let method18= str4.split(`,`);       //give array divided from string from ","
console.log(method18);

//string search
 let str5= "abcde,fghij,klmno,pqrst,uvwx,yz";

 let method19= str5.indexOf("i")     // indexof check the given value, if value dont exist then it return -1
 console.log(method19)

let index2= str5.lastIndexOf("w",5)    //
console.log(index2);

let method20= str5.search("p");      // indexof and search are similar not same , search cannot take second start position
console.log(method20);               // and indexof cannot take powerful search values

let method21= str5.match("ij,k")     // return an array containing the result of matching a string against string
console.log(method21);

//match all is es2020 feature , dont work on browser

let method22= str5.includes("o")   // include  case sensitive, boolean output
console.log(method22);

let method23= str5.startsWith("a")  // include case sensitive, boolean output
console.log(method23)
console.log(str5.startsWith("i",9))

let method24= str5.endsWith("z")    // include case sensitive, boolean output
console.log(method24);
console.log(str5.endsWith("i",9))










