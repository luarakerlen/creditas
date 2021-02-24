const twoStrings = (s1, s2) => {
    s1 = s1.split('');

    if((s1.filter(item => s2.includes(item))).length >= 1) {
        return "YES";
    }
    return "NO";
}

s1 = "hi";
s2 = "world";
console.log(twoStrings(s1, s2));