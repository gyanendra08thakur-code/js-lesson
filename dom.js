  console.log("dom in js");
  
  



// dom manupulation

 console.log( document.getElementById("div1"))  // access by id
 console.log(document.getElementsByClassName("container"));  // access by class
 console.log(document.getElementById("div1").className); // acess the class by giving the id
 
 //console.log(document.getElementById("heading").class);  // class doesnot work write complete " className"
console.log(document.querySelector(".container"));   // selecting tag by giving .classname // first tag with given id/class/tag will sow
console.log(document.querySelectorAll("#heading2"));  //  by giving #id // all id of h2 show
console.log(document.getElementsByClassName("container").id)
console.log(document.querySelector( '[name = h2Heading]'));    //by 
 console.log( document.querySelector('[name= h3Heading]'));

 
  let tagname =document.querySelector(".container");
 console.log(tagname)  
 
 
 let fruits = document.querySelector(".fruitbasket")
 console.log(fruits);  // now i can acess the properties of fruits(dom properties) by writing them in console window

 //write -> fruits.innerHTML  , fruits.innerText, fruits.tagName etc in console window to access the  properties

let attri2 = document.querySelector(".heading")
let attri = attri2.getAttribute("name")
console.log(attri)
let attri3 = attri2.setAttribute("name", "h3bold") // check in code section in window
//console.log(attri3);

// style
//to access style--> first select the tag by class or id or tagname and store into variable then acess the style by variablename.style
let styl = document.querySelector("h3")
 styl.style.backgroundColor ="purple" // css assign
styl.style.fontSize= "26px"

let styl2 = document.querySelector("div")
styl2.style.backgroundColor = "pink"   // css modified


// creating element

//create element
let newbtn = document.createElement("button")
newbtn.innerText= "hit me up!";
newbtn.style.color = "brown";
newbtn.style.backgroundColor = "beige"
console.log(newbtn);
// adding to screen
let div = document.querySelector("#div1");  
div.append(newbtn); // to placce the created element in the end of parent element

/*similirarly 
__.prepand()     to at the start of parent element
__.before()      to place just before of that element
__.after()       to place just after of that element
*/



//remove element
let heading = document.querySelector(".fruitbasket")
heading.remove()

// append child 
//remove child
