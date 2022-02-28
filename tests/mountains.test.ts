import { mountains, findNameOfTallestMountain } from "../src/mountains";

describe("mountains.ts", ()=> {
    test("mountains array exists with given data.", ()=> {
        expect(mountains).toEqual([
            {
                name: "Kilimanjaro",
                height: 19341,
            },
            {
                name: "Everest",
                height: 29029,
            },
            {
                name: "Denali",
                height: 20310,
            }
        ]);
    });
    test("findNameOfTallestMountain returns the tallest mountain", ()=> {
        expect(findNameOfTallestMountain(mountains)).toBe("Everest");
    })
});


