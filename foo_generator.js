var Foo = require("./foo");

module.exports = {
    generate: function(){
        return [ new Foo('x'), new Foo('y'), new Foo('z')];
    } 
}