function generateMessage(salutation, name){
    return salutation + " " + name + ".";
}

function Foo(name, things){
    this.name = name;
    this.things = things;
    this.sayHello = function(){
        return generateMessage("Hello my name is", this.name);
    }
    this.sayHelloLoudly = function(){
        return generateMessage("hello my name is", this.name).toUpperCase();
    }
    this.hasThing = function(thingName){
        return this.things.indexOf(thingName) != -1;
    }
}
module.exports = Foo;