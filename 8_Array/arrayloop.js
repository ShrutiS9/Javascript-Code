let num=[3,53,45,2,7]
// for(i=0;i<num.length;i++)
// {
//     console.log(num[i])
// }


//for each loop
num.forEach((element)=>{
    console.log(element*element)
})
 
//array.from
let name="harry"
let arr= Array.from(name)
console.log(arr)

//for....of
for(let i of name)
{
    console.log(i)
}

//for .... in
for(let i in num)
{
    console.log(num[i])
}
