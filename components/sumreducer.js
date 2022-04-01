//reducer reducer an array to a single item e.g by calculating sum, or grouping products or grouping employees

const numbers = [20, 50, 40,60, 34,86, 90, 100, 60000, 10000]
// // use single line code
const sumSingleLineCode = numbers.reduce((accumulator, item) => accumulator + item
, 0)

console.log(sumSingleLineCode);


const numbersMultipleLineCode = [20, 50, 40,60, 34,86, 90, 100, 60000, 10000]
// // use multiple lines of code
const sumMultipleLine = numbers.reduce((accumulator, item) => {
    return accumulator + item
}, 0)

console.log(sumMultipleLine);


