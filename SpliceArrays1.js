/*Write a JavaScript function called removeAndReplaceNumbers that takes an array of numbers as input.
 The function should iterate through the array and do the following:

Remove all even numbers from the array using splice().
For each odd number encountered, replace it with its square using splice() as well.
Finally, return the modified array.
Test your function with various arrays to ensure it behaves as expected.
console.log([1, 2, 3, 4, 5]); // Output: [1, 9, 25]
console.log([2, 4, 6, 8]); // Output: []
console.log([1, 3, 5, 7]); // Output: [1, 9, 25, 49]
console.log([2, 3, 4, 5, 6]); // Output: [9, 25]*/

let arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

for (let i = 0 ; i < arrayOfNums.length; i++){
    if (arrayOfNums[i] % 2 === 0){
        arrayOfNums.splice(i,1);
    }
}
console.log(arrayOfNums);

for (let j = 0; j < arrayOfNums.length; j++){ 
    arrayOfNums.splice(j,1,arrayOfNums[j] * arrayOfNums[j])
}
console.log(arrayOfNums);