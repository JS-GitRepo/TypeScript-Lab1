import { calcAverageProductPriceV2 } from "../src/products";

describe("products.ts", ()=> {
    test("calcAverageproductPrice return a number when proved a non-empty array", ()=> {
        expect(calcAverageProductPriceV2([
            {name:"burrito", price: 8},
            {name: "flauta", price: 2}
        ])).toBe(5);
    });
    // test("")
})