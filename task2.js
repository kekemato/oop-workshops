const makeSound = function(name, lastname){
    console.log(this.sound + " " + name + " " + lastname)
}

const cat = {
name: 'Fluffy',
sound: 'Miauuu',
makeSound: makeSound
}

cat.makeSound()
makeSound.apply(cat, ['Magda', 'Brzozowska']) //przyjmuje obiekt, który zostanie kontekstem tej funkcji i jakieś argumenty wywowałanego obiektu w []
makeSound.call(cat, 'Magda', 'Brzozowska') //przyjmuje obiekt, który zostanie kontekstem tej funkcji i jakieś argumenty wywowałanego obiektu bez []

makeSound.apply({sound: 'Woof'}, ['Magda', 'Brzozowska'])
makeSound.call({sound: 'Woof'}, 'Magda', 'Brzozowska')

makeSound('Magda', "Brzozowska")
cat.makeSound('Magda', "Brzozowska")