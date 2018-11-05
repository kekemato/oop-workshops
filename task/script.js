const makeSound = () => console.log('Meowww!')

const makeCat = (name) => ({
        name: name,
        makeSound: makeSound
    })

const cat = makeCat('Puszek')

cat.makeSound()