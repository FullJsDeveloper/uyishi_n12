console.clear()
function returnVowel(array) {
    const unlilar = ['a', 'e', 'i', 'o', 'u']
    const new_arr = []
    for (let word of array) {
        let sentences = word.toLowerCase()
        let newWord = ''
        for (let word of sentences) {
            if (unlilar.includes(word) && word === word.toLowerCase()) {
                newWord += word
            }
        }
        new_arr.push(newWord)
    }
    return new_arr
}
console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"]))