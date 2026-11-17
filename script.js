let button = document.getElementById("calculate");

button.addEventListener("click", function(){
    let dob = document.getElementById("dob").value;

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    document.getElementById("result").innerText = "Your age is " +  age  + " years ";
});