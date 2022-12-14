const { filterString, highAndLow, elevatorDistance } = require('../exercises');

describe('1. feladat', () => {
    test('test for just numbers', () => expect(filterString("123")).toBe(123));
    test('test for random string 1', () => expect(filterString("a1b2c3")).toBe(123));
    test('test for random string 2', () => expect(filterString("aa1bb2cc3dd")).toBe(123));
    test('empty string', () => expect(filterString("")).toBe(0));
    test('string without numbers', () => expect(filterString("abcdefgh")).toBe(0));
});

describe("2. feladat", () => {
    test('test for random numbers', () => expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9"));
    test('all numbers are the same', () => expect(highAndLow("7 7 7 7 7")).toBe("7 7"));
    test('only negative numbers', () => expect(highAndLow("-4 -9 -12 -44 -25")).toBe("-4 -44"));
    test('only one number', () => expect(highAndLow("6")).toBe("6 6"));
    test('only one negative number', () => expect(highAndLow("-4")).toBe("-4 -4"));
});

describe("3. feladat", () => {
    test('test for 2 floors', () => expect(elevatorDistance([5, 2])).toBe(3));
    test('test for 3 floors', () => expect(elevatorDistance([1, 2, 3])).toBe(2));
    test('test for 4 floors', () => expect(elevatorDistance([7, 1, 7, 1])).toBe(18));
    test('test for 1 floor', () => expect(elevatorDistance([3])).toBe(0));
});
