async function heyy(){
    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg");
        },2000)
    })
    
    let BangloreiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },5000)
    })
  
    // delhiWeather.then(alert)
    // BangloreiWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait...")
    let delhiW=await delhiWeather;
    console.log("Fetched Delhi Weather: "+ delhiW);

    console.log("Fetching Banglore Weather Please wait...")
    let BangloreW=await BangloreiWeather;
    console.log("Fetched Banglore Weather: "+ BangloreW)

    return [delhiW,BangloreW];
}

const cherry= async ()=>{
    console.log("Hey i am cherry and I am not waiting");
}

const main= async ()=>{
    console.log("welcome to weather control room")
    let a= await heyy()
    let b= await cherry()
//      a.then((value)=>{
//      console.log(value)
//     console.log(a);
//  })
}
main()

