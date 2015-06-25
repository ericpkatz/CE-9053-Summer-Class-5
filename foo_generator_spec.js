var FooGenerator = require("./foo_generator");
describe("FooGenerator", function(){
    it("exists", function(){
        expect(FooGenerator).toBeDefined();
    });
    describe("#generating", function(){
        var foos;
        beforeEach(function(){
            foos = FooGenerator.generate();
        });
        it("can generate 3 foos", function(){
            expect(foos.length).toEqual(3);
        });
        it("the first foo has a name", function(){
           expect(foos[0].name).toBeDefined(); 
        });
    });
});