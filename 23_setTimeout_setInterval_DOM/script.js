 document.write(' hey')

const sum=(a,b) =>{
    console.log("yes i am running "+(a+b))
    a+b
}
setTimeout(sum,7000,1,2)


let d=setInterval(function(){
    alert("setInterval")
},3000)
clearInterval(d)

// let a=setTimeout(function(){
//     alert("I am an insider of settimeout")
// },2000)

// let b=prompt("DO you want to run the settimeout?")
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a)


