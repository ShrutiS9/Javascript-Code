let url="https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async () => {
    let country=document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

//let country="nepal";

function show(colArr)
{
    let list= document.querySelector("#list");
    list.innerHTML="";
    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerHTML=col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res= await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("error : ",e);
        return [];
    }
}