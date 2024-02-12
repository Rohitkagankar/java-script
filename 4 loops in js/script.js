//loops in js
//for loop
for (let i=0; i<5; i++){
    console.log("welcome from Rohit..");
}

sum=0;
n=5;
for(let i=1; i<=n; i++){
    sum=sum+i;
}
console.log(sum);

//while loop
let j=1;
while(j <=10){
    console.log(j);
    j++;
}

//do while loop
let a=1;
do{
    console.log("a=",a);
    a++
}while(a<=10);

//for-of loop(string and arrays)

let str="Rohitkagankar";
let size=0;
for (let i of str){
    console.log("i=",i);
    size++;
}
console.log(size);


//for in loop
let student = {
    name :"Rohit",
    roll_no :66,
    age :22,
};
for (let key in student){
    console.log("key=",key ,"val=",student[key]);

}

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
/*
let num = 44;
let guess=prompt("guess the number");

while(num != guess){
    guess=prompt("you guess wrong!,guess again");
}
console.log('congratulations,you gess correct');
*/
