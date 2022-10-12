// import { filterByTerm } from './app'
//
// describe("Filter function", () => {
//     test("it should filter by a search term (link)", () => {
//         const input = [
//             { id: 1, url: "https://www.url1.dev" },
//             { id: 2, url: "https://www.url2.dev" },
//             { id: 3, url: "https://www.link3.dev" }
//         ];
//
//         const output = [{ id: 3, url: "https://www.link3.dev" }];
//
//         expect(filterByTerm(input, "link")).toEqual(output);
//     });
// });



// import {AbsoluteNumberCalculator} from "./app";
//
// describe("testFindAbsolute0", () => {
//     test("testFindAbsolute0", () => {
//         let number = 0;
//         let expected = 0;
//
//         expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
//     });
// });




import {AbsoluteNumberCalculator} from "./app";

describe("testFindAbsolute0", () => {
    test("testFindAbsolute0", () => {
        let number = 0;
        let expected = 0;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});

describe("testFindAbsolute1", () => {
    test("testFindAbsolute1", () => {
        let number = 1;
        let expected = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});

describe("testFindAbsoluteNegative1", () => {
    test("testFindAbsoluteNegative1", () => {
        let number = -1;
        let expected = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});