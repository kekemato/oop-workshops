const growJSskill = function () {
    this.JSskill = this.JSskill + 1;
}

const me = {
    name: 'Magda',
    JSskill: 1,
    growJSskill: growJSskill
};

const myBrother = {
    name: 'Patryk',
    JSskill: 0,
    growJSskill: growJSskill
}

me.growJSskill();
myBrother.growJSskill();

let brothers = [];
const makeMoreBrothers = function (arr, x) {
    for (i = 0; i < x; i++)
    arr.push(myBrother = {name: `Brother ${i}`,
    JSskill: 0,
    growJSskill: growJSskill })
};