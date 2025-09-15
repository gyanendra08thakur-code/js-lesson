      console.log(" control flow");

      //if elif else break etc are called control flow where a part of code run & part of dont run based on the condition
      


    // using boolean output expression to perform on the if else
      if (true) {
                             // if the condition is true then the block of if run 
      }
      

if ( false) {

      // the scope of elemnt in if 
}


const isUserloggedIn = true;
if (isUserloggedIn){

    console.log("ypu just logged in")
}


if( 2>=1) {

    console.log("its true")
}

 let name = " gyanendra singh"
let age = 25;
let enterId=221100

if (age >= 18){
       
    console.log("yore are major ");


       if ( enterId== 221100){

        function welcome(){
        console.log(`wlcome to website ${name} `)
        }
        welcome()
    } 

    

} else{ console.log("you are a minor") }


//implicit if
const balance = 10;

//if( balance >= 100 ) console.log("you can have pizza");      //single line execution nd dont foget to use ";" at the end



// agr aisa to aisa , agr aisa nhi to aisa n , nhi to aisa
 
if (balance >= 300) {
    console.log( "you can have some bread") 
} else if (balance <= 500) {
    console.log("you can have some burger ")

} else if ( balance<=700) {
    console.log(" you can have some burger with coke")
} else if ( balance <= 1000) {
    console.log(" you can have some burger with coke and french fries")
    
}else if (balance >= 1200){
    console.log("go for chicken party with some beer")
}else ( console.log( " ghr ja ke kha "));


let usercontact = 9191888;
let debitcard = 999222999;
let email = "99188@email.com"
let googleaccount = "gyanendrasingh9298@google.com"
let guestuser = " login as guest"

if ( email || googleaccount || guestuser ){
     console.log( "you are allow to login");
     if ( debitcard && usercontact) {
        console.log(" you are allow to purchase")
     }

} else ( " sorry! you have insufficient data ")



//switch   check multiple condition at once  >>>> this or this or this or this ....
           //one key (condition) various locks , with a right match of key with lock it will execute that block of code 


const month = 8            //condition
switch ( month) {                       //syntex --> example

    case 1:
        console.log( "janurary ");
        break;
    case 2:
        console.log( "febraruary ");      //shift+alt+ downarrow to copy and down
        break;
    case 3:
        console.log( "march" );
        break;
    case 4:
        console.log( "april ");
        break;
    case 5:
        console.log( "may");
        break;
    case 6:
        console.log( "june ");
        break;
    case 7:
        console.log( "july ");
        break;
    case 8 : 
    console.log(" august")
    break;
    case 9:
        console.log( "septamber ");
     break;
    case 10:
        console.log( "october ");
        break;
    case 11:
        console.log( "november ");    // break is used to stop the run of code fater match otherwise all code will run automitacially that comes after match
        break;
    case 12:
        console.log( "december ");
        break;
    
        default:
            console.log(" not a month");               //when no case match with key then default will run
            

}


//truthy and falsey   ----> here we check the value is avaiable or not , not the condition
//truthy >>> the key should not empty or false 
//truthy values >>>   "0", 'false', " ", []
//falsy values  >>> 0,-0, 0n, "" ,null , undefine , NaN

const email2= "gyanendra@gmail.com ";
const email3= "";
if (email2){
    console.log(" yes,email two is avaliable")
} else ( " no, email two is not available");

if (email3) {
    console.log( " yes, email three is available ");
    
} else {console.log("email three is not available") }



const emptyobj = {}

    if (Object.keys(emptyobj).length===0) {


console.log("object is empty");

    }

// false==0 >> true
// false ==""  >>> true
// 0 == ""  >>> true

//nusllish coalescing oprator  (??)  : null undefine

let vall; 
vall = 5 ?? 10 

let vall2;                     // when 1st value is not available or epty or undefine then 2nd value is taken 
vall2 = null ?? 10;              // the second value could be any num , function , etc.

console.log(vall);
console.log(vall2);

let val3;
val3= null?? undefined?? 99;   //if 1,2 vales are not availiable then it will go to 3rd value
console.log(val3);



//terniary oprator
// syntex >>>   condition ? true:false

const teaprice= 400;
teaprice >= 500 ? console.log("this cost you 500+"): console.log("does not match your standerd");


const Yourteaprice= 4000;
Yourteaprice >= 500 ? console.log("you cannot afford"): console.log(`this cost you ${Yourteaprice}`);





























































