/*1. sum of two nums
function sum (x,y) {
   return x+y
}
console.log(sum(2,3)) */

/*2. string length
function text (sentence) {
  console.log(sentence.length)
}
text("hello world") */

/*3. even or odd
function odd(num) {
  if(num%2===0) console.log("even")
  else console.log("odd")
} 
odd(9) */

/*4. num and size
function num(number) {
  let str = String(number);
  return str.length;
}
console.log(num(74934)) */

/*5.A function called sumDigits that takes a number as an argument and returns the sum of its digits
function sumDigits(num) {
  let sum = 0;
  let str = String(num);
  for (let i=0; i<str.length; i++){
    sum += Number(str[i]);
  } return sum;
} console.log(sumDigits(123)) */

/*6. A function named min that takes two arguments and returns the minimum of them
function min(x,y){
return Math.min(x,y)
} console.log(min(2,3)) */

/*7. A countBs function that takes a string as an argument and returns how many uppercase Bs there are in it
function countBs(str){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]=="B") count++;
    } return count;
} console.log(countBs("BarBer")) */

/*8. The function takes a name as an argument and returns a greeting
function hey(str) {
    return "hello " + str;
} console.log(hey("mari")) */

/* 9.average of two nums
function avg(x,y) {
    return (x+y)/2;
} console.log(avg(2,3)) */
