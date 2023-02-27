const funcOne = require('./1.js');
const funcTwo = require('./2.js');
const funcThree = require('./3.js');

describe("Function One:", () => {
    test("get sum", () => {
        expect(funcOne([1, 2, 3])).toBe(6);
        expect(funcOne([5, 3, 1])).toBe(9);
        expect(funcOne([5, 5, 5])).toBe(15);
        expect(funcOne([10, 20, 30])).toBe(60);
        expect(funcOne([-1, -2, -3])).toBe(-6);
    })
})

describe("Function Two:", () => {
    test("does arithmetic", () => {
        expect(funcTwo(1, 2, "add")).toBe(3);
        expect(funcTwo(5, 3, "subtract")).toBe(2);
        expect(funcTwo(3, 3, "multiply")).toBe(9);
        expect(funcTwo(6, 3, "divide")).toBe(2);
        expect(funcTwo(5, 5)).toBe("No such result");
    })
})

describe("Function Three:", () => {
    test("check number", () => {
        expect(funcThree(3)).toBeFalsy();
        expect(funcThree(2)).toBeTruthy();
        expect(funcThree(5)).toBeFalsy();
        expect(funcThree(50)).toBeTruthy();
        expect(funcThree(100)).toBeTruthy();
    })
})