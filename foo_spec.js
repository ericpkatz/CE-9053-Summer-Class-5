var Foo = require("./foo.js");
describe("Foo", function(){
    it("exists", function(){
        expect(Foo).toBeDefined();
    });
    describe("construction a new foo", function(){
        var foo;
        beforeEach(function(){
            foo = new Foo("xyz");
        });
        it("can be created", function(){
            expect(foo).toBeDefined();
        });
        it("it has a name of xyz", function(){
            expect(foo.name).toEqual("xyz");
        });
        it("can say hello", function(){
            expect(foo.sayHello()).toEqual("Hello my name is xyz.")  
        });
        it("can say hello loudly", function(){
            expect(foo.sayHelloLoudly()).toEqual("HELLO MY NAME IS XYZ.")  
        });
        
    });
    describe("#hasThing", function(){
        describe("when foo has a rock", function(){
            var foo;
            beforeEach(function(){
               foo = new Foo("xyz", ["Rock"]); 
            });
            it("hasAThing('Rock') to be true", function(){
               expect(foo.hasThing("Rock")).toEqual(true); 
            }); 
            it("hasAThing('Paper') to be true", function(){
               expect(foo.hasThing("Paper")).toEqual(false); 
            }); 
        });
    });
    
    describe("#isRich", function(){
       describe("a foo with 3 things", function(){
          var foo;
          beforeEach(function(){
             foo = new Foo('xyz', [2,3,4]); 
          });
          it("isRich is true", function(){
              expect(foo.isRich()).toEqual(true);
          }); 
       }); 
       describe("a foo with 2 things", function(){
          var foo;
          beforeEach(function(){
             foo = new Foo('xyz', [1,2]); 
          });
          it("isRich is false", function(){
              expect(foo.isRich()).toEqual(false);
          }); 
       }); 
    });
});