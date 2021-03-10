const countWords = (str) => {
    let result = new Map();
    let pattern = /[^(a-z\u00C0-\u00FF)\s+]/g;

    str = str.toLowerCase().replace(pattern, '').split(' ');
    //console.log(str);

    str.map((word) => result.has(word) ? result.set(word, result.get(word)+1) : result.set(word, 1))

    return result;
}

str = "oi, tudo bem? Tudo sim tudo tudo, e bem vocÊ? você";

console.log(countWords(str));