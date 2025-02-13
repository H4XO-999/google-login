document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault();

let hack1 = document.getElementById("hack1").value;
let hack2 = document.getElementById("hack2").value;
console.log("first input:", hack1);
console.log("second input:", hack2);
});