/*1. nums between 1 and 10
let num = 0;
while(num<11){
    console.log(num)
    num = num+1;
}

for(let num=0; num<11; num++){
    console.log(num)
}*/
//------------------------------------------
/*2. evens between 1 and 20 with for loop
for(let num=0; num<20; num = num + 2){
    console.log(num)
}*/
//------------------------------------------
/*3. Write a program that takes a number as input and prints the corresponding day of the week using switch/case. If you enter 1, the week should be printed.
let num=parseInt(prompt("input a number: "))
switch(num){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;    
    case 5:
        console.log("thursday")
        break;    
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;    
}*/
/*--------------------------------------------
/4.Write a program that asks the user to enter a number and prints "hello" as many times as that number
let num = Number(prompt("input a number: "));
for (let i=0; i<num; i++){
    console.log("hello")
} */
/*--------------------------------------------
/5. sum of nums between 1 and 100 with for loop
let counter = 0;
for(let i=0; i<100; i++){
     counter = counter + i;
}  console.log(counter) */
/*--------------------------------------------
6. Write a program that takes the number of the month as input and prints the number of days in this month
let num = Number(prompt("month number:"))
switch (num) {
    case 1:
        console.log("30");
        break;
    case 2:
        console.log("28");
        break;
        case 3:
        console.log("31");
        break;
        case 4:
        console.log("30");
        break;
        case 5:
        console.log("31");
        break;
        case 6:
        console.log("30");
        break;
        case 7:
        console.log("31");
        break;
        case 8:
        console.log("30");
        break;
        case 9:
        console.log("31");
        break;
        case 10:
        console.log("30");
        break;
        case 11:
        console.log("31");
        break;
        case 12:
        console.log("30");
        break;
} */
/*----------------------------------------
7. A program that asks the user to guess a secret number between 1 and 10. Continue asking for guesses until they guess while loop
let num = Number(prompt("number: "));
let secret = 7;
while (num!==secret){
    num = Number(prompt("number:"));
} console.log("right") */
/*--------------------------------------------
8. university rate switch/case
let key = (prompt("rate: ")).toUpperCase(); 
switch(key) {
    case "A":
        console.log("excellent"); 
        break;
         case "B":
        console.log("very good"); 
        break;
         case "C":
        console.log("good"); 
        break;
         case "D":
        console.log("normal"); 
        break;
         case "E":
        console.log("enough"); 
        break;
         case "F":
        console.log("failed"); 
        break;
        default:
        console.log("not written"); 
        break;
} */
/*--------------------------------------------
9. Enter the password. The program should continue prompting for the password until the correct password is entered.
let pass = (prompt("enter password: ")); 
let key = "12345";
while (pass!=key){
    pass = (promp("enter password: ")); 
} console.log("right") */
