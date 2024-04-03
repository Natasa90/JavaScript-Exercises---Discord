let arrayBrandAndModel = [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }];

let objectsOfBrands = {}; 

for (let i = 0; i < arrayBrandAndModel.length; i++){ 
    let brand = arrayBrandAndModel[i].brand; 
    let item = " item: "; 
    let model = ""; 
    for (let j = 0; j < arrayBrandAndModel[i].model.length; j++){
        model += arrayBrandAndModel[i];
    }

    if (objectsOfBrands[item] === undefined){ 
        objectsOfBrands[item] = [];
    }
    objectsOfBrands[item].push(brand);
    if (objectsOfBrands[])

}
console.log(objectsOfBrands);