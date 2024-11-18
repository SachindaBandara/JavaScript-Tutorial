// How to accept user inputs

// 1. Using window.prompt() - easy way
// 2. Using HTML textbox - professional way

//-------------------------------------------------------

// let userName;
// userName = window.prompt("What is your name ?");
// console.log(userName);

//-------------------------------------------------------

let userName;
document.getElementById("mySubmit").onclick = function(){
   userName = document.getElementById("myText").value;
   document.getElementById("head1").textContent = `Hello ${userName}`;
   console.log(userName);
}
