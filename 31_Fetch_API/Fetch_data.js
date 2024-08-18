let url="https://catfact.ninja/fact";
fetch(url).then((res) =>{
    console.log(res);
    return res.json();
}).then((res) =>{
    console.log("data =",res.fact);
    return fetch(url);
}).then((res)=>{
    console.log(res);
    return res.json();
}).then((res2) =>{
    console.log(res2);
}).catch((error)=>{
    console.log("ERROR - ",error)
})
console.log("helloooo","everyone")