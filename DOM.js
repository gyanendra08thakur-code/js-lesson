console.log( " DOM in JS");



// selectors



 document.getElementById( 'id name');          // give the elemnt of given id
 document.getElementById( " id name").id ;     // give the id of elemnt ehom id is provided
 document.getElementById('title').class;       // to obtain the class of elent by giving id
 document.getElementById( "id name").getAttribute('type')  // give attributes of that id elemnt
 document.getElementById('idname').setAttribute(" name of attribute")  // the attribute we want to set , it always overwrite the existing attribute
 document.getElementsByClassName(' class name here');
 "Tittle".style.background ="green"      // css can be apply on by this name



// getting content
'title'.textcontent; // that text which is  visible and hidden show by this method ( display none type)
'title'.innerhtml;   // complete html text show of that element
'tittle'.innerText   // the txt that is visible will show inner text 


//querry  selector  ---> gve single element
document.querySelector ('input[type= password]');

//querry selctor all  ---> give all elemnt
document.querySelectorAll(' h2');
 


