const palindrome = (str) => {
    let strNormal;
    let strReverse;
    let pattern = /[^(a-z\u00C0-\u00FF)]/g;

    strNormal = str.toLowerCase().replace(pattern, '');
    str = strNormal.split('');
    strReverse = str.reverse().join('');

    if(strNormal == strReverse) {
        return true;
    }
    return false;
}

str = "a na";

console.log(palindrome(str));