console.clear()
function boolean(arr){
    let sum = 0
    for (let i=0; i<arr.length;i++){
        if (arr[i] == true){
            sum += arr[i]
        }
    }
    return `massiv ichida ${sum} ta true qiymat bor`
}
console.log(boolean([true, false, false, true, false]))
console.log(boolean([false, false, false, false]))