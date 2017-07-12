var userSignUp = [];
var a;
var b;
function setInfo(){
  a=document.getElementById('usernamesignup').value;
  b=document.getElementById('passwordsignup').value;
  userSignUp.push({username:a,password:b});
}

function getInfo() {

var username=document.getElementById('usernamelogin').value

var password=document.getElementById('passwordlogin').value
for (var i = 0; i<userSignUp.length; i++)
 {
   if (username==userSignUp[i].username && password==userSignUp[i].password) {
    document.getElementById('paragraph').innerHTML=username + " you are succesfully logged in";
    return
  }

   }
   document.getElementById('paragraph').innerHTML="SignUp before Logging In";

}




//     username:"sumbal",
//     password:"laptop123"
//
//   },
//
//   {
//     username:"gansha",
//     password:"mobile123"
//
//   },
//
//   {
//     username:"bakhtawar",
//     password:"iphone123"
//
//   }
// ]
