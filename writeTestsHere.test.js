const funcOne = require('./1.js');
const funcTwo = require('./2.js');
const funcThree = require('./3.js');

describe("Function One:", () => {
    test("get sum", () => {
        expect(funcOne([1, 2, 3])).toBe(6);
        expect(funcOne([5])).toBe(5);
        expect(funcOne([0.3, 0.5, 0.7])).toBeCloseTo(1.5);
        expect(funcOne(['j', 's'])).toBe('js');
        expect(funcOne([-1, -2, -3])).toBe(-6);
        expect(funcOne([1, 10, 100])).toBeGreaterThan(110);
    })
})

describe("Function Two:", () => {
    test("does arithmetic", () => {
        expect(funcTwo(1, 2, "add")).toEqual(3);
        expect(funcTwo(5, 3, "subtract")).toBe(2);
        expect(funcTwo(3, 3, "multiply")).toBe(9);
        expect(funcTwo('a', 3, "multiply")).toBeNaN();
        expect(funcTwo(6, 3, "divide")).toBe(2);
        expect(funcTwo(6, 0, "divide")).toBe(Infinity);
        expect(funcTwo(5, 5)).toBe("No such result");
        expect(funcTwo(3, 6, "add")).toBeLessThan(10);
    })
})

describe("Function Three:", () => {
    test("check number", () => {
        expect(funcThree(3)).toBeFalsy();
        expect(funcThree(2)).toBeTruthy();
        expect(funcThree(5)).toBeFalsy();
        expect(funcThree(50)).toBeTruthy();
        expect(funcThree(100)).toBeTruthy();
        expect(funcThree(30)).not.toBeFalsy();
    })
})