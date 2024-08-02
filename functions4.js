//1. bubble sort
/*function bubblesort(arr) {
    return arr.sort((a,b) => b - a);
}
console.log(bubblesort([1,4893,2929,90,2])) 

function bubble(arr) {
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<arr.length-1-i; j++) {
            if(arr[j]<arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubble([1,4893,2929,90,2])) */

//2. 
/* function convert(string){
    let words = string.split(" ");
    for (let i=0; i<words.length; i++){
        words[i]=words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(convert("hello world")) */
