var fullname = prompt ("What is your full name?");
var username = prompt ("What is your username?");

var sex = "What is your gender? \n Press ok if you are male \n Press cancel if you are female";

if(confirm(sex)==true){
    sex = "Male";
    alert("Your gender is set to male");
}else{
    sex = "Female";
    alert("Your gender is set to female");
}

var description = prompt ("Please type a brief description of yourself");
var birthyear = prompt ("Please enter your birth year?");

var age = 2023 - birthyear;

var img = "Do you want to use a custom profile picture?";

if(confirm(img) == true) {
    var con = prompt("Please enter the file name of the picture. (Ex: wow.jpg)")
} else{
    alert ("No image has been set")
}

document.getElementById("fname").innerHTML= fullname;
document.getElementById("gender").innerHTML=sex;
document.getElementById("username").innerHTML=username;
document.getElementById("year").innerHTML=birthyear;
document.getElementById("age").innerHTML=age;
document.getElementById("desc").innerHTML=description;
document.getElementById("ppic").src=con;