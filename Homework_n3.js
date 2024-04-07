console.clear()
// 1-usuli
/*function minmax(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return [min, max];
}
console.log(minmax([1, 2, 3, 4, 5])); */


// soddaroq 2-usul
/*let array = [1, 2, 3, 4, 5];
let min = Math.min(...array);
let max = Math.max(...array);
let new_array = [];

new_array.push(min);
new_array.push(max);

console.log(new_array);*/


// 3-usuli
let array = [402, 210, 102, 10, 1, 1000]
let min = 0;max = 0
let new_array = []
array.sort((a, b) => a - b)
min = array[0]
max = array[array.length - 1]
new_array.push(min);
new_array.push(max);
console.log(new_array);