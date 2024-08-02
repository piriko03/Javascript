/*1. 
function longest(arr){
    let longestname="";
    for (let i=0; i<arr.length; i++){
        if (arr[i].length> longestname.length){
            longestname = arr[i];
        }
    }
    console.log(longestname);
}
longest(["georgia", "germ", "usa"]) */

/*2. 
function biggest(arr){
    const numbers = arr.sort((a,b) => a-b);
    console.log(numbers[1]);
   console.log(numbers[numbers.length-2]);
}
biggest([5,3,4,15,2]) */

/*3. 
function touppercase(sentence){
    const arr = sentence.split(" ");
    const newarr = [];
    for (let i=0; i<arr.length; i++){
        newarr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    console.log(newarr);
}
touppercase("hello world") */
