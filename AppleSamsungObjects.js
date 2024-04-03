/*Problem: Given an array of objects where each object has properties brand and model, write a JavaScript program to transform this array 
into an object of arrays categorized by brand. If the input array is:

[{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }]

output:
[{ item: 'Apple', quantity: 2 }, { item: 'Banana', quantity: 4 }, { item: 'Apple', quantity: 1 }]*/

let arrayBrandAndModel = [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }];

let objectsOfBrands = {}; 

for (let i = 0; i < arrayBrandAndModel.length; i++){ 
    let brand = arrayBrandAndModel[i].brand; 
    let model = arrayBrandAndModel[i].model;


    if (objectsOfBrands[brand] === undefined){ 
        objectsOfBrands[brand] = [];
    }
    objectsOfBrands[brand].push(model);

}
console.log(objectsOfBrands);