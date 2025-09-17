console.log("events");





/*document.querySelector("#fruit3").onclick= function(){
  /* alert('fruit3 clicked')
                                                         old approch*/


  //document.querryselector("#fruit3").addEventListner( 'click', () => { alert(' you clicked fruit 3')})


  // learn about false and true in the event listner

//***** old methods***//
// attachEventListner
// jQuerry  - on

// important event object (browserevent, environtment event)
//types (like mouse event keyboard events etc)
// timestamp 
// prevent  default
// to element
// source elemnt
//current target
//client x, client y, tilt x, tilt y, screen x, screen y
// alt key, control key, shiftkey, keycode
// bubbling up     ( child elemnt to parent element)
// capturing up   ( parent elemnt to child element)
//stop propogation

//right way to create the event function
function nameupdate() {let head= document.querySelector("#heading3")
head.textContent= " hello shiva";}

let head= document.querySelector("#heading3")
head.addEventListener('mouseover', nameupdate);  // dont give execution , give only refrence of the function

head.removeEventListener('mouseover', nameupdate);


// addElement phase applyng to bubbling phase by defalult
// 

//event object




// changing the default behaviour of element like changing the achor tag to prevent the the link openinng


  let anchrele= document.querySelector('#link');
  anchrele.addEventListener('click', 
    function(event) {
      event.preventDefault();
      anchrele.textContent ='you clicked me'
    }
  )




  //target property  
  //( can ignore this bucky code and follow the below one)
/*let divs = document.querySelector('div') 
function alertdiv(event) {
  alert('you have clicked on div: ')
}

for(let  i =0 ; i< divs.length; i++) {
   let div = divs[i];
   console.log("event listner added");
   
   div.addEventListener('click', alertdiv);
}  */



// avoid too many listner

function heading(event) {
  if (event.target.nodename==='heading') {
   alert( ' you have clicked on heading :'+ event.target.textContent)
  }
}
let  mydiv = document.querySelector('.container');
document.addEventListener('click', heading);

// learn about dom content loaded























