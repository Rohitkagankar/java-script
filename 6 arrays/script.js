// arrays in js (mutable)
let marks=[56,88,99,100];
console.log(marks);
console.log(marks.length);

// array indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[3]);
marks[0]=99;
console.log(marks);

//looping in arrays
let num=[88,89,87,99,76,78,98,85];

//for loop
for (let i=0; i<num.length; i++){
    console.log(num[i]);
}

//for of loop
for(let element of num){
    console.log(element);
}

let sum=0;
for (let i=0; i<marks.length; i++){
    sum=sum+marks[i];

}
console.log(sum/marks.length);

let sums=0;
for (let val of marks){
    sums= sums+val;
}
console.log("average marks is : ",sums/marks.length);

let i=0;
let prices=[250,645,300,900,50];
for (let val of prices){
    let offer= val/10;
    prices[i]=prices[i] - offer;
    i++;
}
console.log(prices);

for (let i=0; i<prices.length; i++){
    let offer= prices[i]/10;
    prices[i]=prices[i] - offer;
}
console.log(prices);

//array methods

let items_fruits=["apple", "mango","banana"];
items_fruits.push("grapes");   //push at the end
console.log(items_fruits);

let deleted=items_fruits.pop();  //pop deletes last item
console.log(deleted);
console.log(items_fruits.toString());

let fruit=["grapes","peru"];
let newlist=fruit.concat(items_fruits);  //concate joins two arrays
console.log(newlist);

fruit.unshift("orange");   //unshift returns value at start 
console.log(fruit);

let delval=fruit.shift();  //shift deletes the start value
console.log(delval);

console.log(fruit.slice(0,));  //slice

let arr1=[22,33,44,55,66,77,88];  //splice add remove replace
arr1.splice(1,2,1,2);       //replace  
console.log(arr1);

arr1.slice(1,0,123);
console.log(arr1);

arr1.slice(0,1);
console.log(arr1);

let companies=["Blooberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
