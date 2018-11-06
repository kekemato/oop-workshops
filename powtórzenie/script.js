const showNumbers = function innerName(i) {
    i = i || 0
    console.log(i)

    if (i < 10 ) innerName(++i)
}

showNumbers()