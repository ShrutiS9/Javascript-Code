let a=fetch(" https://api.potterdb.com/v1/characters")
a.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    console.log(value.headers)
    //console.log(value.text());
    return value.json()
}).then ((value)=>{
  console.log(value);
})
//console.log(a)