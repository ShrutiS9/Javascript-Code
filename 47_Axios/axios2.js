let btn=document.querySelector("button");
btn.addEventListener('click',async ()=>{
    let url=await getImg();
    console.log(url);
    let p=document.querySelector("#showimg");
    p.setAttribute("src",url);
    
})



let url="https://dog.ceo/api/breeds/image/random";

async function getImg(){
    try{
        // let res= await axios.get(url);
        let res1=await fetch(url);
        let res=res1.json();
        return res.data.message;
    }catch(error){
        console.log("error -",error);
        return "No img found";
    }
}
