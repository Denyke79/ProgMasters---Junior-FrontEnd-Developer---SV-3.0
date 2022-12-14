// Adott egy tömb, amelynek az elemei pozitív egész számok.
// A funkcionális programozás során megismert eszközökkel írj
// egy programot, amely kiválasztja a 3-mal osztható számokat a 
// tömbből, majd összeadja azokat! Ha a tömb egy eleme sem 
// osztható 3-mal, a függvény adjon vissza nullát.

const sumOfDivisibleByThree = (arr) => {
    return arr.filter(num => num % 3 === 0).reduce((total, num) => total + num, 0);
}   

console.log(sumOfDivisibleByThree([45,4,66,34,24,76,33,36,9]));  //output: 213
console.log(sumOfDivisibleByThree([7]));  //output: 0
console.log(sumOfDivisibleByThree([99])); //output: 99

// A funkcionális programozás során megismert eszközökkel írj
// egy programot, amely visszaadja egy stringeket tartalmazó tömb 
// elemeinek első betűit nagybetűkké alakítva, egy stringként!
// Megjegyzés: a tömb elemei csak stringek lehetnek.

const uppercasedInitials = (arr) => {
    return arr.map(elements => elements[0].toUpperCase()).join('');
}

console.log(uppercasedInitials(['john', 'fitzgerald', 'kennedy'])); // output: JFK
console.log(uppercasedInitials(['league', 'of', 'legends'])); // output: LOL

module.exports = {sumOfDivisibleByThree, uppercasedInitials}