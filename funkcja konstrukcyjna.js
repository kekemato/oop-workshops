function Dog(){
    this.makeSound = makeSound
}

Dog.prototype.makeSound = function(){
    console.log(this.sound)
}

Dog.prototype.sound = 'Woof'

dog0 = Dog()
const dog1 = new Dog()
const dog2 = new Dog()

dog1.makeSound()

