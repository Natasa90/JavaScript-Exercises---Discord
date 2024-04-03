/*Write a JavaScript program that generates a simple math quiz question using random numbers and asks the user for the answer using prompt().
 Use a switch statement to randomize between addition, subtraction, and multiplication questions. 
 For example, "What is 3 + 4?" or "What is 10 - 3?" or "What is 5 * 2?" */

 let text;
 let mathQuiz = prompt("What is 3 + 4?", 7);
 switch(mathQuiz) {
   case 7:
     text = "Your answer is correct.";
     break;
   case "10":
     text = "That is not a correct answer";
     break;
   default:
     text = "I have never heard of that one!";
 }
 console.log(mathQuiz);