/* Given string
let givenString = "racecar";
let isPalindrome = true; // Assume the string is a palindrome until proven otherwise

// Convert the string to the same case to ensure the comparison is case-insensitive
givenString = givenString.toLowerCase();*/

let givenString = "NatasaStefanovic";
let isPalindrome = true; 
let backwardString = "";

givenString = givenString.toLowerCase(); 

for (let i = givenString.length - 1; i >= 0; i--){
    backwardString += givenString[i];
}
    if (backwardString === givenString){
        console.log(isPalindrome);     
    } else { 
        console.log (false); 
    }
