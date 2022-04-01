const numbers = [ 23, 78, 90, 67, 43, 15000, 87, 1000,12, 10, 11, 35]
const maxNumber = numbers.reduce((accumulator, value) => value > accumulator ? value : accumulator)
console.log(maxNumber)