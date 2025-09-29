
const promise1 = new Promise(function(resolve, reject){
    //do an async task
    //DB cell , cryptography , network
    setTimeout(()=> {console.log('this is a async task')}, 1000)
  resolve()  //this part always comes after " ___.then" function , connect then and promise
})

promise1.then(function(){
    console.log('promise consumed');
})


// .then  --> resolve block operate and give obtained value shown in then
// .catch  --> reject block operate and give obtained value shown in catch


new Promise(function(resolve, reject){
    setTimeout(()=>{console.log("an async task2");
resolve()}, 2000)

}).then(function(){
    console.log('async resolved');
    
})


const promise3 = new Promise( function(resolve,reject){
    setTimeout(function(){
        resolve({ username:"gyanendra"})
   ,2000 })
})
promise3.then(function (user){
    console.log(user);
})                     
   


///////////////////////chaining///////////////////////////////////

const promise4= new Promise ( function( resolve, reject){
    setTimeout(function(){
        let error = true;
        if( !error){
            resolve({username:"gyanendra"})
        } else {
            reject ('this is  a error')
        }
        
    }, 2000)
}
)

promise4
.then((user) => {
console.log(user);
return user.username
})
.then( () =>{                      /// chaining of then --> multiple then allowed
    console.log(username);
})
.catch (function (error){
    console.log(error);
})
.finally(() => console.log(' the promise is ressole or rejected'))    // finally always run , either reject or resolve run




 const promise5= new Promise ( function( resolve, reject){
    setTimeout(function(){
        let error = false;
        if( !error){
            resolve({username:"shiva"})
        } else {
            reject ('this is  a err')
        }
        
    }, 2000) })

    async function consumepromise5(){               // async await and try  catch method
        try{
        const respond =  await promise5
        console.log(respond);
    } catch (error) {
        console.log(error);
    }}



    async function getuser () {
        try {
            const Response = await fetch ( 'https://jsonplaceholder.typicode.com/user')
        const data = await Response.json()
        console.log(data);
        } catch (error) {
            console.log("E" , error);   
        }
    } 

    fatch( 'https://jsonplaceholder.typicode.com/user')
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => console.log(error))

     
