// 1. feladat

// Írj egy olyan függvényt, amely a kapott stringből kiválogatja a számokat, és az előfordulási sorrendjükben
// vissza is adja őket! A bemenő adat egy string, amelyben betűk és számok is lehetnek. (Például "3ed4w2q" -> 342)
// Ha nincs egy szám se a bemeneti stringben, adjon vissza 0-t a függvény!

function filterString(str) {
    return +(str.replace(/\D+/g, ''));
}

// console.log(filterString("123"));        // output: 123
// console.log(filterString("3e37ui8"));    // output: 3378
// console.log(filterString("rwefw"));      // output: 0
// console.log(filterString(""));           // output: 0

// ------------------------------------------------------------------------------------------------------------------

// 2. feladat

// Írj egy olyan függvényt, amely visszaadja a bemeneti stringből a legnagyobb és legkisebb számot (a példa szerinti módon)!
// A függvény egy olyan stringet kap bemenetként, amelyben szóközzel elválasztott számok szerepelnek.

function highAndLow(numbers) {
    let numArray = numbers.split(" ");
    return Math.max(...numArray) + " " + Math.min(...numArray);
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // output: "42 -9"
// console.log(highAndLow("7 7 7"));                        // output: "7 7"
// console.log(highAndLow("-3"));                           // output: "-3 -3"

// ------------------------------------------------------------------------------------------------------------------

// 3. feladat

// Adott egy tömb, amelyben szerepelnek egy lifttel bejárt emeletek egy épületben. Írj egy olyan függvényt, 
// amely kiszámítja, hogy hány emeletet utaztunk összesen az adott út során! Például: ha a tömb [3,2,6], 
// akkor a 3. emelet után a 2.-ra, majd a 6.-ra utaztunk, a megtett emeletek száma pedig 1 + 4 = 5 emelet.
// Tipp: Math.abs()

function elevatorDistance(array) {
    let distance = 0;

    if (array.length < 2) {
        return distance;
    }

    for (let i = 0; i < array.length - 1; i++) {
        distance += Math.abs(array[i] - array[i + 1]);
    }
    return distance;
}

// console.log(elevatorDistance([5, 2]));           // output: 3
// console.log(elevatorDistance([1, 2, 3]));        // output: 2
// console.log(elevatorDistance([7, 1, 7, 1]));     // output: 18

// ------------------------------------------------------------------------------------------------------------------

module.exports = { filterString, highAndLow, elevatorDistance }
