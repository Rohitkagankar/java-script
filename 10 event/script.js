//events in js
let btn=document.querySelector("#btn2");

btn.onclick = () =>{
    console.log("clicked");
}

let div=document.querySelector(".div1");
div.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

//event listeners
