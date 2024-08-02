/*
let arr=[1,2,3,4,5,6,7];
console.log(arr.length) 
console.log(arr[arr.length-1])   */

/*push 
arr.push("world");
console.log(arr); */

/*unshift 
arr.unshift("world");
console.log(arr); */

/*pop 
arr.pop()
console.log(arr) */

/*shift
arr.shift()
console.log(arr) */

/*
console.log(arr.indexof(5)); */

/*slice 
arr.slice()
console.log(arr) */

/*sort 
let arr=[1,9,5,2];
console.log(arr.sort((a,b)=>a-b)); 
console.log(arr.sort((a,b)=>b-a));  */

/*join
arr.join(" "); */

//------------------------------------------------

/*1. 
let array=[1,9,5,2];
function sum(arr) {
    let count = 0;
    for (let i=0; i<arr.length; i++){
        count = count + arr[i];
} return count; 
console.log(count/array.length)
} console.log(sum(array));  */

/*2.
let arr=[1,3,7,2,4,];
function sorted(array){
    let sortednum = array.sort((a,b)=>a-b);
    return sortednum[sortednum.length-1];
} console.log(sorted(arr)); */

/*3. 
let str = "hello world man";
let arr = str.split(" ");
console.log(arr);
function capitalizedwords(word) {
    let splited = str.split(" ");
    let arr=[];
    for (let i=0; i<splited.lenght; i++){
        let word=splited[i][0].toUpperCase()+splited[i].slice(1);
        arr.push(word);
    }
    return arr;
}
console.log(capitalizedwords(str)) */
