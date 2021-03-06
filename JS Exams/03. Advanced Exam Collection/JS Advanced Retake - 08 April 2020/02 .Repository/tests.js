let {
    Repository
} = require("./solution.js");

describe("Tests …", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    // Add two entities
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    beforeEach(() => {
        let repository = new Repository(properties);
    })


    describe("Test Class", function () {
        it("Class must be Object", function () {
            expect(repository).to.be.equal({});
        });






    });
    
});