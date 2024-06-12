const url="https://cat-fact.herokuapp.com/facts";

const getFacts = async ()=>{
    console.log("getting data...");
    let response= await fetch(url);
    console.log(response);  //json format
}

//AJAX is asynchronous js and xml
//JSON is javascript object notation
//json()method: returns a second promise that resolves with the result of parsing 
//the resoponse body text as JSON .(input is JSON, output is JS object)
