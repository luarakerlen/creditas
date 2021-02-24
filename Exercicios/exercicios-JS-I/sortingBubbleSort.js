const countSwaps = (a) => {
    let numSwap = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                //swap(a[j], a[j + 1]);
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
                numSwap++;
            }
        }
    }
    console.log(`Array is sorted in ${numSwap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}

n = [6, 4, 1]
console.log(countSwaps(n));