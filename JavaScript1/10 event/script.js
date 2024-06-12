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
let heading=document.querySelector("h1");
heading.addEventListener("click", (evt) =>{
    console.log("learning listner in js");
    console.log(evt.target);
});

const click=() =>{
    console.log("learning listner in js 1");
}
heading.addEventListener("click", click);

//remove listner
heading.removeEventListener("click",click);


let curMode="light";
let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
modebtn.addEventListener("click",() =>{
    if(curMode==="light"){
        curMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curMode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMode);
})

const clrChange=document.querySelector(".newbox");
const buttonTo=document.querySelector(".btn-color");

let colors=["orange","blue","green","yellow","pink"];
let num=0;
buttonTo.addEventListener("click",()=>{
    clrChange.style.backgroundColor=`${colors[num]}`;
    console.log(colors[num]);
    num++;
    if(num===5){
        num=0;
    }
});