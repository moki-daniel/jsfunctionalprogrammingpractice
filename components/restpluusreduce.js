
const addNumber = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0)
    }
    console.log(addNumber(1,2,3,3,32,40))