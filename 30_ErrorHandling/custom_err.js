// setTimeout(()=>{

// },1000)
// console

try {
    let age=prompt("Enter your age")
    age=Number.parseInt(age)
    if(age>130){
        throw new ReferenceError("This is probably not true")
    }
    
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("This script is still running")