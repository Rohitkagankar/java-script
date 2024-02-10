console.log('first line of js');
console.log('excited to learn js');
//data types
//1.primitive datatypes
age=22;   //number
console.log(age);
price=12;
console.log(typeof(price));

city='kolhapur';   //string
console.log(city);
console.log(typeof(city));

isfollow=true;    //boolean
console.log(isfollow);
console.log(typeof(isfollow))

let x;           //undefined
console.log(x);
console.log(typeof(x));

let y=null;     //null
console.log(y);
console.log(typeof(y));

let a=BigInt(1234);   //BigInt
console.log(a);
console.log(typeof(a));

let b=Symbol('hello');
console.log(b);
console.log(typeof(b));

//2.Non Primitive datatype
//object(arrays,functions)

const student={            //object
    name:"Rohit kagankar",
    city: "kolhapur",
    cgpa: 8.86,
    ispass:true,
    age:21
}
student['age']=student['age']+1;
console.log(student.age);
console.log(student);
console.log(student["city"]);
console.log(student.name);
console.log(typeof(student.cgpa));

