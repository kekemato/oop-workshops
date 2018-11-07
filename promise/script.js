const promise = fetch('https://random.user.me/api')

promise
.then(() => {
    console.log('Im on the function that will be called when promise is resoled!')
})

const promise2 = promise.then(() => { })