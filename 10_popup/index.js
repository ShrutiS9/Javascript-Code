alert("your script works")
let a=prompt("enter the value of a here","545")
a=Number.parseInt(a)
alert("you entered a of type "+(typeof a))
let write=confirm("do you want to write it to the page")
if(write)
{
document.write(a)
}
else{
    document.write("please allow me to write")
}
