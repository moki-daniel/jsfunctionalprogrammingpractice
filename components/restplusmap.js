const multiplyArray = (multiplier, ...numbers) => {
return numbers.map((number) => {
    return multiplier * number
})
}
console.group(multiplyArray(5, 1,3,7,10,20))