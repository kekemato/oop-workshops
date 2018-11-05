class Animal {
    constructor(name){
        this.name = name
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
        this.sound = 'Meowww!'
    }

    makeSound() {
        console.log(this.sound)
    }

    changeSound(newSound){
        this.sound = newSound
    }
}

const cat = new Cat('Puszek')

cat.makeSound()
cat.changeSound('Kłaczek')
cat.makeSound()

// function Cat(name) {
//     this.name = name
//     this.sound = 'Meowww!'
// }

// Cat.prototype.makeSound = function () {
//     console.log(this.sound)
// }
// Cat.prototype.changeSound = function (newSound) {
//     this.sound = newSound
// }

// const cat = new Cat('Puszek')

// cat.makeSound()
// cat.changeSound('Kłaczek')
// cat.makeSound()