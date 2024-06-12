//promises
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};
let promises=new getData(123);
console.log(promise);

//------------

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise is delivered...");
        resolve("success");
        // reject("error");
    });
};

let promise = getPromise();


promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});


//--------------

function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}


console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res)=>{
    
    console.log("fetching data2...");
    let p2 =asyncFunc2();
    p2.then((res)=>{
        
    });
});

asyncFunc1().then((res)=>{
    return asyncFunc2();
});

console.log("fetching data2...");
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
});