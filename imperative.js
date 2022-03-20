//declare the array
const originalArray = [1,2,3,4,5,6,7]
//declare a new a double array
const doubleArray = [];
//loop in each item in the original array
originalArray.forEach(function(item) {
    //declare the doubleItem and multiply each item by two
    const doubleItem = item * 2;
    //doulble each item in the array and push to the empty doubleArray variable  declared above
    doubleArray.push(doubleItem);
});
//show the output
doubleArray;