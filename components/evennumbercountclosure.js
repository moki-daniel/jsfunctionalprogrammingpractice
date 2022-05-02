const countEvenNumbers = (inputArray) => {
    let instances = 0;
    inputArray.forEach(function(element) {
        if(element % 2 === 0) {
            instances ++
        }
    })
    return instances
} 
countEvenNumbers([1,40,30,12,3,78,90,13,15,17,19,21,24,56]);