/*Given an array of names, use a for loop to print each name with an added greeting.
 For example, ["Alice", "Bob", "Charlie"] should print "Hello, Alice!", "Hello, Bob!", and "Hello, Charlie!*/

 let arrayNames = ["Alice", "Bob", "Charlie"];

 for (let i = 0; i < arrayNames.length; i++){ 
    console.log ("Hello, " + arrayNames[i] + "!");
 }