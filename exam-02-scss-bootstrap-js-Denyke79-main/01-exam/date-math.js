// ------------- ELSŐ FELADAT ---------------

//Feladat: Adott 2 dátum stringként. Add át a "calculateDays" függvénynek, 
//és Date object használatával számold ki hány nap telt el a 2 időpont között!
//Lefele kerekítsd a megkapott számot és az így kijött eredmény legyen a függvény visszatérési értéke.

//Megjegyzés: Az első dátum mindig későbbi, mint a második.


function calculateDays(firstDate, secondDate){
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);
    const milisecInOneDay = 86400000;
    return Math.floor(Math.abs((date1 - date2) / milisecInOneDay));
}

console.log(calculateDays('2016-05-13', '1997-09-20')); //6810


// ------------- MÁSODIK FELADAT ---------------

//Feladat: "getRandomElement" függvényt egészítsd ki úgy,
//hogy generáljon egy random számot a paraméterben kapott lista hosszának megfelelően
//és a random számnak megfelelő indexű elemet állítsd be visszatérési értékként!

//Megjegyzés: a tömb soha nem üres.

const textList = ["valami", "random", "szám", "generálás"];


function getRandomElement(list){
    const randomNumber = Math.floor(Math.random() * list.length);
    return list[randomNumber];
}

console.log(getRandomElement(textList));

module.exports = {calculateDays, getRandomElement}
