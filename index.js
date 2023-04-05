const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//New Variable totalBatteries
//Initial Variable

const initialValue = 0
const totalBatteries = batteryBatches.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},initialValue);


