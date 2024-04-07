console.clear()
function sumOfCubes (arr){
    sum = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i]**3
    }
    return sum
}
console.log(sumOfCubes([1, 5, 9]))