console.log("hello js learner...");

//element selectors in js
//by id
let heading=document.getElementById("heading1")
console.dir(heading);
console.log(heading);

//by class
let heading2=document.getElementsByClassName("heading2")
console.dir(heading2);
console.log(heading2);

//by tagname
let para=document.getElementsByTagName("p")
console.dir(para);
console.log(para);

//by queryselector(id,class,elemet)
let p=document.querySelector("p");
console.dir(p);
let h1=document.querySelector("#heading1");
console.dir(h1);