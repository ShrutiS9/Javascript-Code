let x=document.getElementsByTagName('span')[0]
console.log(x);
let y=document.getElementsByTagName('span')[0]
console.log(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)


first.innerHTML=" <i>Ia am Italic </i>";
console.log(first.innerHTML)
console.log(first.outerHTML)
first.outerHTML=" <div> hey </div>"


console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent)