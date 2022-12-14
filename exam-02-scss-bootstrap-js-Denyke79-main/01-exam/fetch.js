// Hozz létre egy HTML file-t és kösd be a .js file-t!

// Írj egy függvényt, amely híváskor a következő feladatokat hajtja végre:
// Küldjön egy http GET kérést a következő URL-re: https://randomuser.me/api/?results=20
// Írja ki a konzolra a parse-olt objektum 'results' kulcsához tartozó tömb négyes indexű elemét!

// A függvény térjen vissza egy Promise-sal, amelyben egy kételemű tömb van, amelyben az előbbi 
// elem második és harmadik kulcsának neve szerepel stringként!

// Példa: ha az objektumom a következő:
// const exampleObj = {
//     email: '',
//     address: '',
//     name: '',
//     phone: '',
//     results: [
//         {}, {}, {}, {
//             zero: '',
//             one: '',
//             two: '',
//             three: '',
//             four: ''
//         }, {}
//     ],
//     nationality: ''
// };
// a visszatérés resolve esetén: [one, two].

// Hiba esetén írja ki a konzolra, hogy "Something went wrong!"

// Megjegyzés: Ha ki szeretnéd próbálni böngészőben a kódod, ki kell kommentelned a legalsó sorban látható
// module.exports = { getRequest }; kifejezést, de a végleges leadás előtt MINDENKÉPPEN legyen aktív a sor!!


const getRequest = () => {
    const url = 'https://randomuser.me/api/?results=20';
    const params = {
        method: 'GET',
        headers:  {"Content-type":"application/json; charset=UTF-8"}
    };

    fetch(url, params)
        .then(data => data.json())
        .then(parsedData => {
            console.log('Second and Third key: ' + Object.keys(parsedData[4]));
        })
        .catch(err => console.log("Something went wrong!"));

}

module.exports = { getRequest };