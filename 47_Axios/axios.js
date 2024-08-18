let btn=document.querySelector("button");
btn.addEventListener('click',async ()=>{
    let fact=await getFact();
    console.log(fact);
    let p=document.querySelector("#factdisp");
    p.innerHTML=fact;
})



let url="https://catfact.ninja/fact";

async function getFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(error){
        console.log("error -",error);
        return "No fact found";
    }
}
