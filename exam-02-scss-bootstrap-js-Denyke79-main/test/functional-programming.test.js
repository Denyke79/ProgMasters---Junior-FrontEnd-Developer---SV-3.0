const { sumOfDivisibleByThree, uppercasedInitials } = require('../01-exam/functional-programming')

describe("sumOfDivisibleByThree függvény tesztelése", () => {

    test("Példa eredmény tesztelése", () => {
        expect(sumOfDivisibleByThree([45, 4, 66, 34, 24, 76, 33, 36, 9])).toBe(213);
    })
    test("Példa eredmény tesztelése", () => {
        expect(sumOfDivisibleByThree([7])).toBe(0);
    })
    test("Példa eredmény tesztelése", () => {
        expect(sumOfDivisibleByThree([99])).toBe(99);
    })
    test("Random input tesztelése", () => {
        expect(sumOfDivisibleByThree([99,99,99,1])).toBe(297);
    })
    test("Random input tesztelése", () => {
        expect(sumOfDivisibleByThree([3,3,3,3,3,4,4,4,4,4,4,1,1,1,1,1,0,0,0,0,0,0])).toBe(15);
    })
    test("Üres inputtal tesztelés", () => {
        expect(sumOfDivisibleByThree([])).toBe(0);
    })
})

describe("uppercasedInitials függvény tesztelése", () => {

    test("Példa eredmény tesztelése", () => {
        expect(uppercasedInitials(['john', 'fitzgerald', 'kennedy'])).toBe('JFK');
    })
    test("Példa eredmény tesztelése", () => {
        expect(uppercasedInitials(['league', 'of', 'legends'])).toBe('LOL');
    })
    test("Random input tesztelése", () => {
        expect(uppercasedInitials(['99,99,99,1'])).toBe('9');
    })

    test("Random input tesztelése", () => {
        expect(uppercasedInitials(['fel', 'le', 'fel', 'le'])).toBe('FLFL');
    })

    test("Üres inputtal tesztelés", () => {
        expect(uppercasedInitials([])).toBe("");
    })


})