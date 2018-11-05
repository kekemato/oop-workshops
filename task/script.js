function Cat(name) {
   this.name = name
}

Cat.prototype.makeSound = function () {
    console.log('Meowww!')
}

const cat1 = new Cat('Puszek')
cat1.makeSound()

// class Cat {
//     constructor(name){
//         this.name = name
//     }
//     makeSound () {
//         console.log('Meowww!')
//     }
// }

// const cat2 = new Cat('Puszek')
// cat2.makeSound()
