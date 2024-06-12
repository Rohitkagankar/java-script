//conditional statements
let age = 22;

let result = age > 18 ? "you can vote ": "you cannot vore"; //ternary operator
console.log(result);
if(age > 18) {
    console.log("you can vote");
}else{
    console.log("you cannot vote..");
}

let mode = "white";
let color;

if(mode === 'dark'){
    color="black"
}else if(mode==="blue"){
    color= "blue";
}else if(mode === "white"){
    color= "white"
}else{
    color="white"
}

console.log(color);


let num=11;
if (num % 2 === 0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}


let n=prompt("enter a number");
if (n%5 === 0){
    console.log(n,"is multiple of 5");
}else{
    console.log(n,"is not multiple of 5");
}

let mark=9;
let grade;

if (mark>=80 && mark<=100){
    console.log("grade = A");
}else if(mark>=70 && mark<80){
    console.log("grade=B");
}else if(mark>=60 && mark<70){
    console.log("grade=c");
}else if(mark>=50 && mark<60){
    console.log(grade=D);
}else{
    console.log("grade=f");
}