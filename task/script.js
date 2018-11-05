makeSound = () => console.log('Meowww!')

makeCat = (name) => {
    return {
        name: name,
        makeSound: makeSound
    }
}

const cat = makeCat('Puszek')

cat.makeSound()