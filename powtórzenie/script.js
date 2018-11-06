function myOwnForEach(arr, func, thisArg) {
    for(let i = 0; i < arr.length; i++){
    func.call(thisArg, arr[i], i, arr)
    }
}

let numbers = [1, 2, 3, 4, 5]

const result = myOwnForEach(
    numbers,
    function (e) {
        console.log(e, this)},
        { whateverProperty: 'this will be this'}
    )

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.forEach(element => console.log(element))