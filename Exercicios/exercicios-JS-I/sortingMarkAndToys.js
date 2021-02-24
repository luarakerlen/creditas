const maximumToys = (prices, k) => {
    let maxToys = 0;
    let sum = 0;

    prices.sort((a, b) => a - b);

    for (const item of prices) {
        sum += item;
        maxToys++;
        
        if(sum > k) {
            maxToys--;
            console.log(maxToys);
            return maxToys;
        }
    }
    return maxToys;
}

prices = [1, 12, 5, 111, 200, 1000, 10];
k = 50;
console.log(maximumToys(prices, k));