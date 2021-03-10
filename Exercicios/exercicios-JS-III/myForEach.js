function myForEach(array) {
    if(array.length == 0) return;

    console.log(array[0]);
    
    array.shift();
    myForEach(array);

    return array[0]
}

console.log(myForEach([1, 2, 9]));