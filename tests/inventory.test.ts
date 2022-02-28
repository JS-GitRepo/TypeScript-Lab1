import { calcInventoryValue } from "../src/inventory";

describe("inventory.ts", ()=> {
    test("calcInventory returns a number when provided a non empty array", ()=> {
        expect(calcInventoryValue([
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
        ])).toBe(170);
    })
})