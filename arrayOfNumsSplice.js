let arrayOfNums = [1, 2, 3, 4, 5,]; 
for (let i = 0; i < arrayOfNums.length; i++){
    if (arrayOfNums[i] % 2 === 0){
        arrayOfNums.splice(i,1);   
    }
}
for (let j = 0; j < arrayOfNums.length; j++){
    arrayOfNums.splice(j,1,arrayOfNums[j]*arrayOfNums[j]);
}
console.log(arrayOfNums);
