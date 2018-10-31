const myOwnNew = (constructorFn, argArray) => {
    const newInstance = Object.create(constructorFn.prototype)

    constructorFn.apply(newInstance, argArray)

    return newInstance
}

function Dog(){
    this.makeSound = makeSound
}

Dog.prototype.makeSound = function(){
    console.log(this.sound)
}

Dog.prototype.sound = 'Woof'

dog0 = Dog()
const dog1 = myOwnNew (Dog, ['Puszek'])


dog1.makeSound()

