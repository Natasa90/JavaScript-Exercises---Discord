//Create an array of numbers, then use a for loop to find and print the smallest number in the array.

let arrayOfNums = [7,2,8,4,22,977,43,1]; 
let smallestNum = arrayOfNums[0];
let biggestNum = [0]; 

for (let i = 0; i <= arrayOfNums.length; i++){
    if (smallestNum > arrayOfNums[i])
        smallestNum = arrayOfNums[i];

    else if (biggestNum < arrayOfNums[i])
        biggestNum = arrayOfNums[i];
}
console.log("The smallest number in an array is " + smallestNum + ".");
console.log("The biggest number in an array is " + biggestNum + ".");
