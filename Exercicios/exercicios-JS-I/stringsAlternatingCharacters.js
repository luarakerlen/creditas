const alternatingCharacters = (s) => {
    let result = 0;
    s = s.split('');

    for (let i = 1; i < s.length; i++) {
        if(s[i] === s[i-1]) {
            result++;
        }
    }
    return result;
}

string = "AABAAB"
console.log(alternatingCharacters(string));