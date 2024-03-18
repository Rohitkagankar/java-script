function genfiboSeries(num){
    let series=[];
    series.push(0);
    series.push(1);
    for(let i=2; i<num; i++){
        let nextnum=series[i-1]+series[i-2];
        series.push(nextnum);
    }
    return series;
}
let num=10;
const fibo=genfiboSeries(num);
console.log("fibonacii series is ",fibo);