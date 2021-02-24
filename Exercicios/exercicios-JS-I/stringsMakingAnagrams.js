const makingAnagrams = (a, b) => {
    let result = 0

    a = a.split('');
    b = b.split('');

    for (let indexA = 0; indexA < a.length; indexA++) {
        for (let indexB = 0; indexB < b.length; indexB++) {
            if((b[indexB] != null) && (a[indexA] == b[indexB])) {
                console.log(a[indexA]);
                console.log(b[indexB]);
                b[indexB] = null;
                a[indexA] = null;
                
                result++;
            }
        }
    }
    return a.length + b.length - (result*2);
}

console.log(makingAnagrams("hello", "world"));