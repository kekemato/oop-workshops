const numbers = [1, 2, 3, 4, 5]

Array.prototype.myOwnFilter = function (func){
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
        newArray.push(this[i])
        }
    }

    return newArray
}

const result = numbers.myOwnFilter((e) => e % 2 === 0)
console.log(result)