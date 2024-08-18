let a=function(e){
    console.log(e.target);
    console.log(e.type,e.clientX,e.clientY)
//     alert("hello world1")
 }

btn.addEventListener('click',a)





// btn.addEventListener('click',function(e){
//     alert("hello world2")
// })

// let i=prompt("what is your fav no?")
// if(i=='2'){

//     btn.removeEventListener('click',a)
// }