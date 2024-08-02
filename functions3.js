/* 1. 
function iseven(num) {
    if (num===0) return true;
    else if (num===1) return false;
    else if (num<0) return iseven(-num)
    else return iseven(num-2);
}  console.log(iseven(4)) */

/*2. 
function factorial(num) {
    if (num<1) return 1;
    else return num * factorial(num-1);
} console.log(factorial(4)); */

/*3. 
 function trngl(height) {
     if (height===0) return;
     trngl(height-1)
     let row = "";
     for (let i=0; i<height; i++) {
         row = row + "#";
     } console.log(row)
 }trngl(5) */
 
 /*4. 
 function outfunc(greeting) {
     let localgreeting = greeting;
     function innerfunc(name) {
         console.log(`${localgreeting}, ${name}`);
     } return innerfunc;
 } let greeting = outfunc("hey");
 greeting("mari"); */
 
 /*5. 
 function outerfunc(count){
     return function() {
         count++;
         return count;
     }
 }
 let counter = outerfunc(0);
 console.log(counter()) */
