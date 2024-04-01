/* Given an array of objects where each object has properties name and age, write a JavaScript program to 
transform this array into an object of arrays categorized by age. If the input array is: 
[{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }]
output
{ '20': ['Amy'], '25': ['John', 'cam'] } */

let myArray = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }];
let objectOfArrays = {}; 
let newArray = []; 


for (let i = 0; i < myArray.length; i++){ 
    for (key in myArray[i]){
        for (val in myArray[i][key]){
            if (typeof myArray[i][key][val] === Number ){
                newArray.push(myArray[i][key][val]);
            }
        }
    }
}
console.log(newArray);
