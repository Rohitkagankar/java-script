//strings in js
let str= "Rohit kagankar"
console.log(str[0]);

//templete literals
let specialstring="this is special string";
console.log(specialstring);

let obj={
    item: "pen",
    price:10,
}
let output = `the cost ${obj.item} is ${obj.price} rupees`;  //string interpolation
console.log(output);
console.log(`${22-3}`);

// \n, \t escape charactor

console.log("Rohit \t kagankar");
console.log("hello \nwelcome...");
let string="rohit\n";
console.log(string.length);

//string methods //immutable

let aa="Rohit Kagankar";
console.log(aa.toUpperCase());
console.log(aa);  // immutable original string cannot change
console.log(aa.toLowerCase());
let bb="   rohit kagankar   ";
console.log(bb.trim()); //start and end space removes
console.log(bb.slice(9,)); //returns part of string
console.log(aa.concat(bb));  //joins two strings
console.log(bb.replace("r","R")); // only replace first matching charactor
let n="aaabcd";
console.log(n.replaceAll("a","A")); //replace all matching charactors
console.log(bb.charAt(5));

nameof = prompt("Enter your name without spaces");
let username= "@"+nameof+nameof.length;
console.log(username);

