var database =[
    {
    username: "Mohsin",
    password:"Cyber"
}
];

var newsFeed = [
    { 
    username: "Adi",
    timeline: " Hi Vertica"
    },
    {
    username : "Vertica",
    timeline : "Hi Adi"

    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPromt = prompt("What's ur password");

function signIn(user,pass){
    if (user ===database[0].username &&
    pass === database[0].password) {
        console.log(newsFeed);
    } else{
        alert("Sorry , Wrong username or password");
    }

    }
signIn(userNamePrompt,passwordPromt);

