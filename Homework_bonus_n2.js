console.clear()
function multiply(array){
    function multiply2(num){
        let new_arr = []
        for(let i=0; i<array.length; i++){
            new_arr.push(array[i]*num)
        }
        return new_arr
    }
    return multiply2
}
console.log(multiply([1,2,3,4])(10))