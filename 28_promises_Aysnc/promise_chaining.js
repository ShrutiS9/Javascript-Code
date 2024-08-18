// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve(56);
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{ resolve("promise 2")},2000)
//         resolve("promise 2")
//     })
// }).then((value)=>{
//     console.log("We are done")
//     return 2;
// }).then((value)=>{ console.log("Now done ")})





const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
    let script=document.createElement("script")
    script.type="text/javascript"
    script.src=src;
    document.body.appendChild(script)
    script.onload=()=>{
        resolve("Sript has been loaded")
    }
    script.onerror=()=>{reject(0)}
})
}

let  p=loadScript("https://cdnd.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
p.then((value)=>{
    console.log(value)
    return loadScript("https://cdnd.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("second script ready")
}).catch((error)=>{console.log("We are sorry but we face pblm")
})