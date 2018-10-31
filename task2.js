const makeSound = function(name, lastname){
    console.log(this.sound + " " + name + " " + lastname)
}

const cat = {
name: 'Fluffy',
sound: 'Miauuu',
makeSound: makeSound
}

cat.makeSound()
makeSound.apply(cat) //przyjmuje obiekt, który zostanie kontekstem tej funkcji i jakieś argumenty wywowałanego obiektu w []
makeSound.call(cat) //przyjmuje obiekt, który zostanie kontekstem tej funkcji i jakieś argumenty wywowałanego obiektu bez []

makeSound.apply({sound: Woof})
makeSound.call({sound: Woof})