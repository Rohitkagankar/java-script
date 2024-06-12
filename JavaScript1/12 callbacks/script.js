const hello =()=>{
    console.log("hello");
};
setTimeout(hello,1000);

//callback
function sum(a,b){
    console.log(a+b);
}
function calculator (a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);
calculator(1,2,(a,b)=>{
    console.log(a+b);
})

//nested callbacks
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
//callback hell
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("getting data3...");
        getData(3,()=>{
            console.log("getting data4...");
            getData(4);
        });
    });
});


