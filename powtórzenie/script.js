Array.prototype.myOwnForEach = function (func, thisArg) {
    for(let i = 0; i < this.length; i++){
    func.call(thisArg, this[i], i, this)
    }
}

let numbers = [1, 2, 3, 4, 5]

numbers.myOwnForEach(
    function (e) {
        console.log(e, this)},
        { whateverProperty: 'this will be this'}
    )

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.forEach(element => console.log(element))