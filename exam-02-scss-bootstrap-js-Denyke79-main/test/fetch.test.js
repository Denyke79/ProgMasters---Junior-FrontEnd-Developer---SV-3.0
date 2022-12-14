
describe("fetchet tartalmazó getRequest függvény tesztelése", () => {

    beforeAll(() => {
        fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({"results":[{}, {}, {}, {}, {"gender":"female","name":{"title":"Madame","first":"Concetta","last":"Rolland"},"location":{"street":{"number":80,"name":"Rue du Dauphiné"},"city":"Commugny","state":"Ticino","country":"Switzerland","postcode":4050,"coordinates":{"latitude":"-48.8652","longitude":"144.7799"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"concetta.rolland@example.com","login":{"uuid":"3ef40c3c-2754-4d17-b545-72147c55d454","username":"goldenladybug226","password":"dirtbike","salt":"Etq2gEBv","md5":"139c0f82d66d3493f016fc2ebc54f64b","sha1":"1602211cb1b6a77a356bcbf1990bf93b63d98cad","sha256":"551d7ff5ebacfad3d82edbefbb3f7060cad7c8d06a7ae487f9b980c2987b3291"},"dob":{"date":"1951-01-24T02:10:20.523Z","age":70},"registered":{"date":"2007-06-27T17:55:15.417Z","age":14},"phone":"076 823 27 88","cell":"075 010 14 23","id":{"name":"AVS","value":"756.4036.7972.09"},"picture":{"large":"https://randomuser.me/api/portraits/women/43.jpg","medium":"https://randomuser.me/api/portraits/med/women/43.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/43.jpg"},"nat":"CH"}]})
        }));
    })
    
    test("fourthOfResults eredmény tesztelése", async () => {
        const { getRequest } = require('../01-exam/fetch')
        const data = await getRequest();

        expect(data[0]).toBe('location');
        expect(data[1]).toBe('email');

    })

})