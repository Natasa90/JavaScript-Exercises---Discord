/*Given an array of names, use a for loop to print each name with an added greeting. 
For example, ["Alice", "Bob", "Charlie"] should print "Hello, Alice!", "Hello, Bob!", and "Hello, Charlie!"*/

let arrayOfNames = ["Natasa", "Milutin", "Jana", "Milica"]; 
let newArray = [];

for (let i = 0; i < arrayOfNames.length; i++){ 
    newArray = "Hello, " + arrayOfNames[i] + "!"; 
    console.log(newArray);
}

