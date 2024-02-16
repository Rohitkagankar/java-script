//DOM manupulation
let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");   //get the attribute value
console.log(id);

let para=document.querySelector("p");
para.setAttribute("class","paragraph");  //set the attribute value
//classList.add use to set class
console.log(div.style);

div.style.background="purple";
div.style.fontSize="30px";
div.innerText="hello";

//insert elements js(createElement,)

let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

// let div=document.querySelector("div");
div.append(newBtn); //append button at the end
// div.before(newBtn);

let heading=document.createElement("h3");
heading.innerText="Leaning Js";
div.prepend(heading);   //add at starting

let h2=document.createElement("h2");
h2.innerText="Inserting Elements in JS";
div.before(h2);   //before the element

let h3=document.createElement("h3");
h3.innerText="paragraph";
div.after(h3);   //after the element

newBtn.remove();
div.removeChild(newBtn);  
