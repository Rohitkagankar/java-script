//functions and methods in js
function myfunction(){
    console.log("hello");
    console.log("we are learning js. ");
}

myfunction();

function sum(a,b){
    s=a+b;
    return s;
    // console.log("sum of a and b is ",a+b);
}
console.log(sum(4,5));

//arrow function
const arrowSum= (a,b) =>{
    console.log(a+b);
}
console.log(arrowSum);
console.log(arrowSum(4,3));


const arrowMul = (a,b) =>{
    console.log(a*b);
}
console.log(arrowMul(21,2));

function vowels(str){
    let count=0;
    for(let i of str){
        // let arr=["a","e","i","o","u"];
        if(i ==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            console.log(i);
            count++;
        }
    }
    console.log(count);
}
vowels("Rohit");

const arrvowels = (str1) =>{
    let count=0;
    for(let i of str1){
        // let arr=["a","e","i","o","u"];
        if(i ==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            console.log(i);
            count++;
        }
    }
    console.log(count);
}
arrvowels("Rohit");

//for each on arrays (higher order method-function) methods
//new array is not formed
let arr=['a','b','c','d','e'];
arr.forEach((val) => {
    console.log(val);
});

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});

let arr2=[1,2,3,4,5];
arr2.forEach((i) =>{
    console.log(i*i);
});

//map method(new array is formed)
let num2=[33,42,43];

let newArr = num2.map((val)=>{
    return val*val;
});
console.log(newArr);

//filter method (if cond true that value is stored)
let even= arr2.filter((val) => {
    return val%2===0;
});
console.log(even);

//reduce method (calculation and gives single value)
let res=arr2.reduce((res,curr) => {
    return res+curr;
});
console.log(res);

//to find largest number from array
let resu=arr2.reduce((prev,curr) => {
    return prev > curr ? prev: curr;
});
console.log(resu);

//to find marks >= 90
let marks1=[76,55,91,90,76,95,99];
let newmarks=marks1.filter((val)=>{
    return (val>=90);
});
console.log(newmarks);

// let n1=prompt("Enter a number");
let n1=5;
let arr11=[];
for (let i=1; i<=n1; i++){
    arr11.push(i);
}
console.log(arr11);



let nmark=marks1.reduce((prev,curr)=>{
    return prev+curr;

});
console.log(nmark);

//factorial by reduce 
let mark12=[1,2,3,4,5];
let nfac=mark12.reduce((prev,curr)=>{
    return prev*curr;

});
console.log(nfac);
