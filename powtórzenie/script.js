function call10Times(func) {
    for (let i = 0; i < 10; i++)
    func('BU!')
}

call10Times(console.log)
