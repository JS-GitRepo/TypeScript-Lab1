import {Mountain} from "./models/Mountain";

export const mountains: Mountain[] = [
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
];

export const findNameOfTallestMountain = (mountains: Mountain[]): string => {
    const currentTallestMountain: Mountain = mountains[0];
    return (mountains.length) === 0 ? "": mountains.reduce((pv,cv)=> cv.height > pv.height ? cv:pv).name;
};

console.log("Everest", findNameOfTallestMountain(mountains));
console.log("Empty array", findNameOfTallestMountain([]));
