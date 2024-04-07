console.clear()
// 1-usuli
/*function splitNumber(number) {
    let half1 = Math.floor(number / 2)
    let half2 = Math.ceil(number / 2)
    
    return [half1, half2]
  }
console.log(splitNumber([4]))*/

// 2-usuli
function splitNumber(number) {
    let half1 = number >> 1
    let half2 = (number + 1) >> 1
    
    return [half1, half2]
}
console.log(splitNumber(11))