//Write a loop that generates and prints the multiplication table for numbers 1 through 10 

for (let i = 1; i <= 10; i++){
    let row = ""; 
    for (let j = 1; j <= 10; j++){
        row += j * i + "\t";
    }
    console.log(row);
}

    