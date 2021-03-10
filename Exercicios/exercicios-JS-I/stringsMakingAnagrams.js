const makingAnagrams = (stringA, stringB) => {
    let equalLetters = 0

    stringA = stringA.split('');
    stringB = stringB.split('');
    //console.log(stringA);
    //console.log(stringB);

    for (let indexA = 0; indexA < stringA.length; indexA++) {
        for (let indexB = 0; indexB < stringB.length; indexB++) {
            if((stringA[indexA] == stringB[indexB]) && (stringB[indexB] != null)) {
                //console.log(stringA[indexA]);
                //console.log(stringB[indexB]);
                equalLetters++;

                stringB[indexB] = null;
                stringA[indexA] = null;

                //console.log(stringA[indexA]);
                //console.log(stringB[indexB]);
            }
        }
    }
    return stringA.length + stringB.length - (equalLetters*2);
}

console.log(makingAnagrams("hello", "world"));