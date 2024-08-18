let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
       // console.log("I am a promise and I am resolve");
        resolve(true);
    },5000);
})

let p2=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
       // console.log("I am a promise and I am reject");
        reject(new Error("I am an error"))
    },5000)
})

// console.log(p1,p2)

// p1.then((value)=>{
//     console.log(value)
// })

//p2.catch((error)=>console.log("some error occur in p2"))

// p2.then((value)=>{
//     console.log(value)
//     console.log(error)
//  },(error)=>{
//     console.log(error)
// })
let p=new Promise(resolve=>{
    setTimeout(()=>resolve("done"),1000);
})
p.then(alert);