function generateMessage(salutation, name){
    return salutation + " " + name + ".";
}

function Foo(name, things){
    this.name = name;
    this.things = things;
}

Foo.prototype = {
    sayHello : function(){
        return generateMessage("Hello my name is", this.name);
    },
    sayHelloLoudly : function(){
        return generateMessage("hello my name is", this.name).toUpperCase();
    },
    hasThing : function(thingName){
        return this.things.indexOf(thingName) != -1;
    },
    isRich: function(){
       return this.things.length >= 3; 
    }
};
module.exports = Foo;