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

//DOM manupulation Properties

//tagName  returns tag for element nodes
let tagname=document.querySelector("div").tagName;
console.dir(tagname);
console.log(tagname);

//innerText returns text content of the elements and all its children
let intext=document.querySelector("div").innerText;
console.dir(intext);
console.log(intext);

//innerHTML returns plain text and html content in the element
let inrtext=document.querySelector("div").innerHTML;
console.dir(inrtext);
console.log(inrtext);

//textContent returns textual content even for hidden elements
let content = document.querySelector("div").textContent;
console.log(content);

let h2=document.querySelector("h2");
h2.innerText=h2.innerText+" learning with spirit";
console.dir(h2);

let div=document.querySelectorAll(".div");
div[0].innerText="first div";
div[1].innerText="second div";
div[2].innerText="third div";
console.dir(div);


let idx=1;
for (d of div){
    d.innerText = `div-${idx}`;
    idx++;
}