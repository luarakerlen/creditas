const checkMagazine = (magazine, note) => {

    for (const item of note) {
        if (!magazine.includes(item)) {
            console.log("No")
            return;
        } else {
            magazine[magazine.indexOf(item)] = null;
        }
    }
    console.log("Yes")
    return;
}

magazine = "two times three is not four";
note = "two times is four";
magazine = magazine.split(' ');
note = note.split(' ');

console.log(checkMagazine(magazine, note));