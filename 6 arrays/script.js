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