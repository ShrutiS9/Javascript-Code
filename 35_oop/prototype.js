let a={
    name: "harry",
    language: "javascript",
    run :() => {
        alert("run")
    }
}

console.log(a)

let p={
    run :() => {
        alert("run")
    }
}

p.__proto__={
    name:"Jackie"
}

a.__proto__=p
a.run()
console.log(a.name)