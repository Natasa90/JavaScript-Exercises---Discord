// Write a for loop that checks if a given string is a palindrome (a word that reads the same backward as forward) and prints true or false.

let givenString = "RaceCar";
let isPalindrome = true;
givenString = givenString.toLowerCase();
let stringBackwards = "";

for (let i = givenString.length - 1; i >= 0; i--){ 
        stringBackwards += givenString[i];
} 
if (stringBackwards === givenString){
        console.log('Given string is palindrome: ', isPalindrome);
}else  {
        console.log('Given string is palindrome: false');\
}




