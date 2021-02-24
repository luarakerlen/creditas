const rotLeft = (a, d) => {
    for (let i = 1; i <= d; i++) {
        const temp = a[0];
        a.shift();
        a.push(temp);
    }
    return a;
}

console.log(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13));