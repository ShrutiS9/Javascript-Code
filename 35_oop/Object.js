// object oriented programming
const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw: function(){
        console.log('draw');
    }
};
console.log(circle.draw())
console.log(circle.location['x'])