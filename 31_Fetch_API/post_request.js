
// A POST request in JavaScript, often referred to as an HTTP POST request, 
// is a way to send data to a server or an API in order to create or update a resource on the server.


const createTodo= async (todo)=>
{
let options=
   {
    method:"POST",
    Headers: {
        "Content-type":"application/json"
            },
    body: JSON.stringify(todo)
    }
    let p=  await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response=await p.json()
       return response
}


const getTodo= async (id)=>{
    let response= await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      let r=await response.json()                                                                                    
       return r;
}


const mainfunc = async ()=>{
    let todo={
        title: 'shgf',
        body: 'bertter',
        userId: 16576,
                };
    let todor=await createTodo(todo)   //.then((response) => response.json()).then((json) => console.log(json));
    console.log(todor)
    //console.log( await getTodo(5))
    
    getTodo(5).then((value)=>{
        console.log(value)
    })
}

mainfunc()



