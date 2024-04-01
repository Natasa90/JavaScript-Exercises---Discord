/*Problem: Given an array of numbers, write a JavaScript program that first filters out all numbers less than 10,
then sorts the remaining numbers in ascending order. Use a for loop for filtering and any method of your choice for sorting. 
Input example: [5, 11, 2, 16, 4, 18, 1, 20].*/

let myArray = [3, 444, 8, 11, 65, 23, 1, 20];
let newArray = []; 


for (let i = 0; i < myArray.length; i++){ 
    if (myArray[i] > 10){
        newArray.push(myArray[i]);
    }
}
newArray = newArray.sort();
console.log(newArray);


