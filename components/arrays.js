//Get the longest string in an array using reduce function

const longestString = array => 
    array.reduce((base, element) => 
        element.length > base.length ? element : base
    )

console.log(longestString(["I am a senior world class developer for Nairobi Kenya"]))

//Another simple one
const longestStringTwo = (array) => array.reduce((base, element) => element.length > base.length ? element : base);
 console.log(longestStringTwo(["mimi ni mkenya halisi na napenda azimio"]));

 //using for loop to get the longest word
 const longestWord = (string) => {
     const stringArray = string.split(' ')
     let maximumWordLength = 0
     let result
     for(let word of stringArray) {
         if(word.length > maximumWordLength) {
             maximumWordLength = word.length
             result = word
         }
     }
     return result
 }
 const string = "Mimi ni mkenya Halisi, Napenda kucode"
 console.log(longestWord(string))

 //Sum of orders

const orders = [
    {amount: 100 },
    {amount: 150 },
    {amount: 300 },
    {amount: 102 },
    {amount: 101 },
    {amount: 110 }
]
const totalSum = orders.reduce((sum, order) => {
return sum + order.amount;
}, 0)
console.log(totalSum)

//similar stuff repeat till you know it

const longestWordOne = (stringOne) => {
    const stringOneArray = stringOne.split(' ')
    let maximumWordLength = 0
    let result
    for(let word of stringAOnerray) {
        if(word.length > maximumWordLength) {
            maximumWordLength = word.length
            result = word
        }
    }
    return result
}
const stringOne = "Mimi ni mkenya Halisi, Napenda kucode"
console.log(longestWord(stringOne))

//similar thing quick practice

const longWord = (str) => {
    const strArray = str.split(' ') 
    let maxi = 0
    let result
    for(let word of strArray) {
        if(word.length > maxi) {
         maxi = word.length 
            result = word
        }
    }
    return result
}
const str = "kenya ni yetu sote"
console.log(longWord(str))

//Reverse a given array

const arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']

console.log(arr.reverse())
