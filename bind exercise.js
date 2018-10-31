const makeSound = function(name, lastname){
    console.log(this.sound + " " + name + " " + lastname)
}

const cat = {
name: 'Fluffy',
sound: 'Miauuu',
makeSound: makeSound
}

makeSound('Magda', 'Brzozowska')

const bindedToCatMakeSound = makeSound.bind(cat)

bindedToCatMakeSound('Magda', 'Brzozowska')

makeSound('Magda', 'Brzozowska')