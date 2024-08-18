//nn ss bb u
//primitive datatype 
let a=null;
let b=352;
let c="shruti";
let d=Symbol("This is the symbol");
let e=true;
let f=BigInt("5480897")+BigInt("5480897");
let g=undefined

console.log(a,b,c,d,e,f,g) //null 352 shruti Symbol(This is the symbol) true 10961794n undefined
console.log(typeof d)

//object in js
const item={
    "harry":true,
    "shubh":false,
    "lavish":63,
}

console.log(item["lavish"])
console.log(item.shubh)

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };