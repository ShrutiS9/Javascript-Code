let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Hey I am  not resolved")
        resolve(1);
    },2000);
})

p.then(()=>{
    console.log("congo  this promise is resolved now")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },2000);      
    })
}).then((value)=>{
     console.log(value);
})

p.then(()=>{
    console.log("Hurry")
})