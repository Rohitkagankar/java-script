//async awit

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWetherData(){
    await api(); //1st
    await api(); //2nd
}
console.log(getWetherData());

//IIFE : immediately invoked function expression
(async function(){
    await api();
    await api();
})();