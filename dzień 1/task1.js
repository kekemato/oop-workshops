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
    for (i = 0; i <= x; i++) {
        arr.push({
            name: `Brother ${i}`,
            JSskill: 0,
            growJSskill: growJSskill
        })
    }
};
makeMoreBrothers(brothers, 100);
console.log(brothers);

const makePerson = function (name, initialSkill) {
    return {
        name: name,
        JSskill: initialSkill,
        growJSskill: growJSskill
    }
}
const brothers2 =
    Array(100)
        .fill(0)
        .map((e, i) => makePerson(i, 0))
