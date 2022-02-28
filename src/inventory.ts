import { InventoryItem } from "./models/Inventory"

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10,
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.5,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20,
    },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
    let sum = 0;
    array.forEach((item)=> {
        sum += item.product.price * item.quantity;
    });
    return sum;
};

const calcInventoryValueV2 = (array: InventoryItem[]): number => {
    return array.reduce((pv,cv)=> pv + cv.product.price, 0)/array.length;
}

console.log(calcInventoryValue(inventory));
