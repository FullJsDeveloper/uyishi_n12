console.clear()
function countTrue(arr) {
    let count = 0;
    for (let value of arr) {
        if (value === true) {
            count++
        }
    }
    return count
}
function chatroomStatus(users) {
    const numUsers = users.length
    if (numUsers === 0) {
        return "Hech kim onlayn emas"
    } else if (numUsers === 1) {
        return `${users[0]} online`;
    } else if (numUsers === 2) {
        return `${users[0]} and ${users[1]} online`
    } else {
        return `${users[0]}, ${users[1]} and ${numUsers - 2} more online`
    }
}
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))
