// synchronous programming
// let a=prompt('enter ur age: ')
// let b=prompt('whta is ur name: ')
// let c=prompt('what is u rfav color? ')
// console.log( b+ " is "+ a+ " years old and has "+ c+" favorite color");

//Asynchronous programming
// console.log("start")
// setTimeout(function()
// {
//     console.log("helllooooo");
// },3000)
// console.log("end")


//callbacks
function loadScript(url,callback)
{
    var script=document.createElement("script")
    script.src=url;
    script.onload=function(){
        console.log(" loaded script with SRC: "+url);
        callback(null,url);
    }

   // document.body.appendChid(script);
    script.onerror=function(){
        console.log("Error loading script with SRC: "+ src)
        sendEmergencyMessageToCeo();
        callback(new Error("Src got some error"),url)
    }
    document.body.appendChild(script);
    
}

function hello(error,url)
{

    if(error){
        console.log(error)
        return error
    }
    alert("hello "+ url)
}

function goodmorning(url)
{
    alert("Goog Morning! "+ url)
}
//loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)
loadScript("https://cdn.jsdelifsdfgdrgffdfvr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// When you pass a function as an argument, remember not to use parenthesis.
