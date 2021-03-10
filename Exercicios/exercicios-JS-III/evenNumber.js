function evenNumber(number) {
    
    if(number === 0) return true;
    if(number === 1) return false;

    let isEven = evenNumber(number-2);
    
    return isEven;
}

console.log(evenNumber(10));