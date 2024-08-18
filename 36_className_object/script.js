class RailwayForm{
    submit(){
        console.log(this.name1+"  form submitted "+ this.trainno)
    }
    cancel(){
        console.log(this.name1 +" This form is cancelled " + this .trainno)
    }
    fill(givename , trainno){
        this.name1=givename;
        this.trainno=trainno;
    }
}

let harryForm=new RailwayForm()
harryForm.fill('Harry',143151)
let rohanForm=new RailwayForm()
rohanForm.fill("Rohan",222420)

harryForm.submit();
rohanForm.submit();
harryForm.cancel();