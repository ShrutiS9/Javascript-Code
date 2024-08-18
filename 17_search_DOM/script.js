//change the card title color to red
let ctitle=document.getElementsByClassName("card-title")[0]
ctitle.style.color="red"

let ctitles=document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="pink"
ctitles[2].style.color="gray"
console.log(ctitles)

document.querySelector(".this").style.color="red"
document.querySelector(".this").style.backgroundColor="gray"

console.log(document.getElementsByTagName("a")) 
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))