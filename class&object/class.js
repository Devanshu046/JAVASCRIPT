class toyotaCar{
    constructor(brand){
        console.log("creating a new object")
        this.brandName = brand ;
    }//it will automatically run 
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
   
}

let fortuner = new toyotaCar("fortuner");
let bmw = new toyotaCar();