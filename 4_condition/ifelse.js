let a=prompt("hey whats your age?") //it will ask for input
console.log(typeof a) 
a=Number.parseInt(a) //converting the string into the number
console.log(typeof a) 
if(a<0)
{
    alert("This is a invalid age")
}
else if(a<9){
    alert("you are a kid and you cann't even think of driving")
}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18")
}
else{
    alert("you can drive now you are above 18");
}
console.log("done");