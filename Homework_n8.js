console.clear()
function spelling(word) {
    let new_arr = [];
    let words = "";
    for (let i = 0; i < word.length; i++) {
        words += word[i];
        new_arr.push(words);
    }
    return new_arr;
}
console.log(spelling("happy"));