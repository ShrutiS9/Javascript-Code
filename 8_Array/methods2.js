// let num=[4,2,3,4,5,6,7,8,9]
// let num_more=[53,673,58,63]
// console.log(num)
// delete num[0]
// console.log(num)
// console.log(num.length)
// let newArray=num.concat(num_more)  
// console.log(newArray)
// console.log(num,num_more)

//sort
  num=[14,245,3,4354,5,64,7,843,9]
//  num.sort();//alphabatic sort
//  console.log(num)

//  let compare=(a,b)=>{  
//         return a-b;
        
//  }
//  num.sort(compare)
//  console.log(num)
//  num.reverse()
//  console.log(num)

//  //splice and slice
 let deleted_values=num.splice(2,3,32,42,52)//(position,no of element delete, insert element instead)
 console.log(num)
 console.log(typeof deleted_values)

 let newnum=num.slice(2)
 console.log(newnum)
 