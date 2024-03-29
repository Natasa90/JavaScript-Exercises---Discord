// replace 1 with "a" and 5 with "b" and "c"
let numbers = [1, 2, 3, 4, 5];
let replacement = ['a', 'b', 'c'];

numbers.splice(0,1,replacement[0]);
console.log (numbers);

numbers.splice(4,1,...replacement[1],replacement[2]);
console.log(numbers);

//replace 3 with 2 last values from an array 

let nums = [1, 2, 3, 4, 5];
let rep = ['a', 'b', 'c'];
nums.splice(1,2,rep[rep.length - 2],rep[rep.length - 1]);
console.log(nums);