/*1. 
function generateRandomNum(min,max) {
    let range = max - min;
    let random = Math.floor(Math.random() + range) ;
    return random;
} console.log(generateRandomNum(3,9)); */

/*2. 
function capitalizeWords (str) {
    let cappitalizedStr = "";
    let capitalizedNextLetter = true;
    for(let i=0; i<str.length; i++){
        const char = str.charAt(i);
        if (char === " ") {
        capitalizedNextLetter = true;
            cappitalizedStr += " ";
        } else {
            if (capitalizedNextLetter === true){
                cappitalizedStr += char.toUpperCase();
                capitalizedNextLetter = false;
            } else cappitalizedStr += char;
        }
    }
    return cappitalizedStr;
} console.log(capitalizeWords("hello world")) */

/*3. 
function hey(name){
    if (name) return "hello " + name;
    else return "hello stranger";
} console.log(hey("")) */

/*4. 
function average(a,b,c) {
    return (a+b+c)/3;
} const teamFirst = average(1,2,3);
const teamSec = average(4,5,6);

function winner(first,sec) {
    if (first>sec) {console.log(`first team wins ${first} points`)}
    else if (first<sec) {console.log(`sec team wins ${sec} points`)}
    else console.log("ფრე");
} winner(teamFirst,teamSec); */

/*5. 
function prime(num) {
    if (num<=1) return false;
    for (let i=2; i<Math.sqrt(num); i++){
        if (num%i===0) return false;
    }return true
} 
console.log(prime(7)) */
