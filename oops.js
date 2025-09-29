

const user1= {
    username : "gyanendra",
    logincount : 8,
    signedin : true,
     getuserdetail : function (){
        console.log('got user detail from database');
        
     console.log(' username : ${this.username}');
     
    }
}

console.log(user1.getuserdetail);



//constructure

function user( username, logincount, isloggin) {
    this.username = username   //this.username is a variable , username is value 
    this.logincount  = logincount
    this.isloggin =   isloggin
}
const userone = new user('hitesg', 12, true);  // new create a new object , then a constructure function is call , then  this keyword wrap thr input, then it deliverred 
console.log(userone);
const usertwo = new user( 'gyanendra', 11 ,false);



