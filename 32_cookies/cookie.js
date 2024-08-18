console.log(document.cookie)
document.cookie="name=shruti"
document.cookie="name2=harry"
let key=prompt(" enter your key") // if you write semicolon the after the colon every thing will disappear
let value=prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}` // only semicolon before  word will display
console.log(document.cookie)
decodeURIComponent("shruti%3B%3Bharry");
