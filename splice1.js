//Remove 1 at index 0 and replace it with 'a' ; Insert 'b', 'c' after 5 

let numbers = [1, 2, 3, 4, 5];
let replacement = ['a', 'b', 'c'];

numbers.splice(0,1,replacement[0]);
console.log(numbers);

numbers.splice(5,1,replacement[1], replacement[2]);
console.log(numbers);
