//classes and objects

//prototype
const employee={   //object
    calTax(){
        console.log("tax rate is 10%");
    },
}
const rohit={
    salary:50000,
}
rohit.__proto__=employee;

//class
class tataCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}

//object of class
let fortuner =new tataCar();
fortuner.setBrand("fortuner");