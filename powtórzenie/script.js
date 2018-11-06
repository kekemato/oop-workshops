const showNumbers = function innerName(i) {
    i = i || 0
    console.log(i)

    if (i < 10 ) innerName(++i)
}

showNumbers()

const showNumbersReversed = function innerName2(i) {
    i = (i === undefined) ? 10 : i
    console.log(i)

    if (i > 0 ) innerName2(--i)
}

showNumbersReversed(10)

const showNumbersReversed2 = function innerName3(i) {
    i = i || 0
    console.log(10 - i)

    if (i < 10 ) innerName3(++i)
}

showNumbersReversed2()