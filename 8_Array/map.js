let arr=[34,465,36]//map use to perform operation on array
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index;
})
console.log(a)

let obj=[
    {car:"Volvo" , year:2012},
    {car:"Creata" , year:2001},
    {car:"Oodi" , year:20019}
]

obj.sort((a,b)=>{
   if(a.car>b.car){
    return 1;
   }
   if(a.car<b.car){
    return -1;
   }
   return 0
})
console.log(obj);

