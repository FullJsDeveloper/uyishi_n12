console.clear()
// to'g'ri yechimga sal yaqinroq
/*function findPrimeNumber (arr){
    let new_arr = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 !== 0){
            new_arr.push(arr[i])
        }
    }
    return new_arr[0]
}
console.log(findPrimeNumber([2,3,4,5,6,7,8,9]))*/

// 1-chi kelgan tub sonni topish
function findPrimeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let prime_num = true
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                prime_num = false
                break
            }
        }
        if (prime_num && arr[i] > 1) {
            return arr[i]
        }
    }
}
console.log(findPrimeNumber([9,2, 3, 4, 5, 6, 7, 8, 9]))