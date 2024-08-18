let num=[1,2,3,4,45]
let b=num.toString()
console.log(b)
let c=num.join("_")
console.log(c,typeof c)
let r=num.pop()
console.log(num,r)
let bt=num.push(54)
console.log(num,bt)//push return the new array length
let q=num.shift()
console.log(q,num)//it will remove 1st element
let s=num.unshift(87)
console.log(s,num)