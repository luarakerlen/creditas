const isAnagram = (str1, str2) => {
    let result = true;
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');

    //Retorna falso previamente caso o tamanho das palavras seja diferentes
    if(str1.length != str2.length) {
        result = false;
        return result;
    }

    let x = str1.map((letter) => str2.includes(letter) ? str2.splice(str2.indexOf(letter), 1) : result = false);
    
    return result;
}

const combineAnagrams = (arr) => {
    let result = [];
    let temp = [];
    let aux = [];

    //arr.map((word) => result.has(word) ? result.set(word, result.get(word)+1) : result.set(word, 1))
    arr.forEach((word, index) => {
        if(!aux.includes(word)){
            temp = [];
            for (let i = index+1; i < arr.length; i++) {
                if((arr[i] != null) && isAnagram(word, arr[i])) {
                    temp.push(arr[i]);
                    aux.push(arr[i]);
                }
            }
            temp.unshift(word)
            result.push(temp)
        }
    });
    return result;
}

arr = [ 'CaRs', 'scream', 'foR', 'racs', 'scar', 'poTatos', 'four', 'creams'];

console.log(combineAnagrams(arr));