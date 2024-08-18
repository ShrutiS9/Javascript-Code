// factory function
function createCircle(radius){
return {
    radius: radius,
    draw: function(){
        console.log('draw');
    }
};

}