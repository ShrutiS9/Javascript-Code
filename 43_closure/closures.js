// function init()
// {
//  var name="Mozilla";// name is a local variable create init
//  function displayName(){
//     //displayName() is the inner function , a closure
//     console.log(name); //use variable declare in the parent function
//  }
//     name="Harry"
//     return displayName;
// }

// let c=init();
// console.log(c)
// c()
let a=1;
function returnFunc(){
    const x=() =>{
        // let a=1;
        console.log("func of x"+a)
        const y=() => {
           // let a=2;
            console.log("func of y"+a)
            const z = () => {
                //let a=3;
                console.log("func of z"+a)
            }
            z()
        }
        a=999
        y()
    }
    return x;
}

let b=returnFunc();
b()