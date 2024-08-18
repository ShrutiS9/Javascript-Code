// string initialization
let name1="Harry"
console.log(name1.length)
console.log(name1[0])
console.log(name1[1])
let frd='pratik'
console.log(frd)

//template literals
let b1="akash"
let b2="nikhil"
//nikhil is a frd of akash
let sentence=`${b1} is a frd of ${b2}`
console.log(sentence)

// Escape sequence character
let fruit='bana\'na'
console.log(fruit)
console.log(fruit.length)
let n="shruti \r sawant";
//string methods
let a="pratik bhai";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase())
console.log(a.slice(2,4))
console.log(a.slice(2))
console.log(a.replace("bhai","bhau"))
console.log(a.concat('aape'))
console.log(a.split(" "))//array
console.log(a.charAt(2))
console.log(a.charCodeAt(3))//num
console.log(a.indexOf('s'))//num

let frd2="      Menna         ";
console.log(frd2.trim())

let text = "5";
let padded = text.padStart(4,"0");
console.log(padded)
console.log(text.padEnd(3,"0"))

let text1 = "Please locate where 'locate' occurs!";
console.log(text1.search("locate"));//num
console.log(text1.includes("locate"))//boolean
console.log(text1.match("ate"))//array match() will return only the first match in the string.
console.log(text1.matchAll("at"));