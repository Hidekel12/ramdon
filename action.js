 var  Students;

document.getElementById("submit").onclick = function(){ 
Students = document.getElementById("text1").value;
console.log(Students);

document.getElementById("welcome").innerHTML =" Welcome to Hd " + Students + "!"
}


