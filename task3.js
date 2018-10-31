const Person = function(name){
    this.name = name
}

Person.prototype.sayHello = function(){
    console.log(`Hi I'm ${this.name}`)
}

const me = new Person ('Magda')

console.log(me)
me.sayHello()
