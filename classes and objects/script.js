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

//inheritance


class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{

}
let obj1= new child();

class company{
    comName(){
        console.log("Google");
    }
}
class empl extends company{
    name(name){
        console.log(`name of emp is ${name}`);
    }
    salary(){
        console.log("20 lpa");
    }
}
let emp1 = new empl();
emp1.name("Rohit");
console.log(emp1.name("Ranjit"));
console.log(emp1.comName());

//super keyword
class vehicle{
    constructor(name){
        this.name=name;
        console.log(`Name of vehicle is ${name}`);
    }
    info(milese){
        console.log(`milese is ${milese}`);
    }
}

class person extends vehicle{
    constructor(name,price){
        super(name);
        console.log(`price is ${price}`);
    }

    
}

let p1=new person("Fz","1,50,000");
console.log(p1.info(50));
