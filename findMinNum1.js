//Create an array of numbers, then use a for loop to find and print the smallest number in the array.

let myArray = [5, 7, 1, 98, 22]; 
let minNum = myArray[0];

for (let i = 0; i < myArray.length; i++){
    if (minNum > myArray[i]){
        minNum = myArray[i];
    }
}
console.log(minNum);