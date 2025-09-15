console.log( " DOM in JS");
/*to print document in console we use */ console.dir(alert("hello js"))

// note the selector select the but not print , for that we  store selector in variable and use console

// selectors

 document.getElementById("id name");          // give the elemnt of given id
 document.getElementById("id name").id ;     // give the id of elemnt ehom id is provided
 document.getElementById("id name").class;       // to obtain the class of elent by giving id
 document.getElementById( "id name").getAttribute('type')  // give attributes of that id elemnt
 document.getElementById('idname').setAttribute(" name of attribute")  // the attribute we want to set , it always overwrite the existing attribute
 document.getElementsByClassName("class name here"); 
 document.getElementsByTagName("tag name")
 "Tittle".style.background ="green"      // css can be apply on by this name


 //querry  selector  ---> gve single element
document.querySelector ('input[type= password]');
document.querySelector ("p");  // to obtain first p tag
document.querySelector(".className"); //to obtain class , use .classname
document.querySelector("#id") //to obtain the element of that id, use #idname
//querry selctor all tag  ---> give all elemnt
document.querySelectorAll("tag name"); // to obtain all (tagname) tag
 





//properties of dom
'title'.textContent; // that text which is  visible and hidden show by this method ( display none type)
'title'.innerHTML;   // complete html text with their tags show of that element 
'tittle'.innerText   // the innertext that is visible  show  text of element and tag
'elementName'.tagName;   // obtain the tag name from id or class
//first child property
//last child property
// children property
// nodes --> text node, commment code, element node



//attribute --> someting that written along with tag like type, class, id, placeholder,src,href etc
//dom in attibute 
// let div tag assined with a id 
     // to get the attibute
let  div = document.querySelector("div");
console.log(div);
let id = div.togetAttribute("id")
 console.log(id);

//to set the attribute syntex->  .setAttribute( attribute , value)  // it can also overwrite the value i.e can the value of attribute
let para = document.querySelector("p")
console.log(para.setAttribute("class, newclass"));

  //style attribute syntex-> node.style
 let div2 = document.querySelector("div");
 div.style.backgroundColor="green"  // div elemnt have assigned property in inline css
 div.style.fontSize="20px"
console.log();



//create and insert elemnt

// methods

//syntex -> node.append(element)

//creation of elemnt
let newBtn= document.createElement("button")
newBtn.innerText =" click me!"
console.log(newBtn);

let div = document.querySelector("div") 
div.append(newBtn)  //adding button to the end of div

div.prepend(newBtn)// adding button to the start ofdiv

div.before(newBtn) // adding elemnt to the before of div

div.after(newBtn) // adding element to the after of div

// delete of elemnt
 let para2 = document.querySelector("p")
 para2.remove // removing paragrapgh tag

 
 //append child
 // remove child 









