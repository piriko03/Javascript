/* 1. work day or weekend
let day = (prompt("day: "));
switch (day){
    case "monday": 
        console.log("work");
        break;
        case "tuesday": 
        console.log("work");
        break;
        case "wednesday": 
        console.log("work");
        break;
        case "thursday": 
        console.log("work");
        break;
        case "friday": 
        console.log("work");
        break;
        case "saturday": 
        console.log("weekend");
        break;
        case "sunday": 
        console.log("weekend");
        break;

} */
/*-------------------------------------------
 2. A program that accepts a number as input and calculates its factorial (while / for)
let num =  Number(prompt("რიცხვი"));
let result = 1;
for (let i=1; i<=num; i++){
    result = result * i;
} console.log(result); 

let num =  Number(prompt("number: "));
let result = 1;
let i = 1;
while (i<=num) {
    result = result * i;
    i++
} console.log(result); */
/*------------------------------------------------
3. Guess a random number from 0 to 10. do while loop
let random = Math.floor(Math.random()*10);
let input;
do {
    input = Number(prompt("number"));
} while (input !== random); */
/*-------------------------------------------------
4. A right triangle which height is 7
for(let i=1; i<8; i++){
    console.log("#".repeat(i))
} */
/*--------------------------------------------------
5. A program that prints numbers from 1 to 100 with two exceptions: print fizz instead of numbers divisible by 3 only, buzz by 5, fizzbuzz by both.
for (let i=1; i<100; i++){
    if (i%3===0 && i%5===0) console.log("fizzbuzz")
    else if (i%3===0) console.log("fizz")
    else if (i%5===0) console.log("buzz")
    else console.log(i)
} */
/*---------------------------------------------------
6. chess form string (8x8)
let size =8;
let output = "";
for (let i=1; i<size; i++){
    for (let j=0; j<size; j++) {
    if ((i+j)%2===0) output =+ " ";
    else output =+ "#"
        output += "#";
    }
    output += "\n";
} console.log(output); */
