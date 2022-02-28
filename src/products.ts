import {Product} from "./models/Product"

const products: Product[] = [
    {
        name: "burrito",
        price: 8
    },
    {
        name: "taco",
        price: 3
    },
    {
        name: "flauta",
        price: 2
    },
];

export const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
    let sum = 0;
    arrayOfProducts.forEach((item)=> {
        sum += item.price;
    });
    return sum / arrayOfProducts.length;
}

// Returns the average price as a number, using reduce
export const calcAverageProductPriceV2 = (arrayOfProducts: Product[]): number => {
    if (arrayOfProducts.length === 0) {
        return 0;
    } else {
        return arrayOfProducts.reduce((pv,cv)=> pv + cv.price, 0)/arrayOfProducts.length;
    }
}
console.log(calcAverageProductPriceV2(products));

// const numbers: number[] = [50,50];
// console.log(numbers.reduce((pv,cv)=> pv+cv,50));

// Returns an object that has the most expensive price
const findMostExpensive = (array: Product[]): Product => {
    return array.reduce((pv,cv)=> cv.price > pv.price ? cv:pv);
}


