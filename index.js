const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function batteries (accumulator, currentValue) {
//     return accumulator + currentValue
// }

// let totalBatteries = batteryBatches.reduce(batteries, 0)

let totalBatteries = batteryBatches.reduce((total, batteris) => total+batteris, 0)