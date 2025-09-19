
const promise1 = new Promise(function(resolve, reject){
    //do an async task
    //DB cell , cryptography , network
    setTimeout(()=> {console.log('this is a async task')}, 1000)
  resolve()  //this part always comes after " ___.then" function
})

promise1.then(function(){
    console.log('promise consumed');
})



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
promise4.then((user) => {
console.log(user);
return user.username
}).then( () =>{
    console.log(username);
}).catch (function (error){
    console.log(error);
}).finally(() => console.log(' the promise is ressole or rejected'))


 const promise5= new Promise ( function( resolve, reject){
    setTimeout(function(){
        let error = false;
        if( !error){
            resolve({username:"gyanendra"})
        } else {
            reject ('this is  a error')
        }
        
    }, 2000) })

    async function consumepromise5(){
        const respond =  await promise5
        console.log(respond);
    } 



    async function getuser () {
        const Response = await fetch ( 'https://jsonplaceholder.typicode.com/user')
        const data = Response.json()
        console.log(data);
        
    } 
