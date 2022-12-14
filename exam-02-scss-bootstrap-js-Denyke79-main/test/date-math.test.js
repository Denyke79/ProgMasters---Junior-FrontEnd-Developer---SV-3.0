const {calculateDays, getRandomElement} = require('../01-exam/date-math');


describe("calculateDays függvény tesztelése", () => {

    test("Példa eredmény tesztelése", () => {
        expect(calculateDays('2016-05-13', '1997-09-20')).toBe(6810);
    })

    test("Random dátum tesztelése", () => {
        expect(calculateDays('2014-05-13', '1999-09-20')).toBe(5349);
    })

})


describe("getRandomElement függvény tesztelése", () => {
    
    test("Eredeti listával tesztelés", () => {

        const textList = ["valami", "random", "szám", "generálás"];

        const result = getRandomElement(textList);

        expect(textList.includes(result)).toBeTruthy();
    })

    test("Random listával tesztelés", () => {

        const list = [1,23,3,4,523523,1512,312,123,521,52313,643,12]

        const result = getRandomElement(list);

        expect(list.includes(result)).toBeTruthy();
    })

})

