//Recursion is a technique used to solve computer problems by creating a function that calls itself until your program achieves the desired result.
//A recursive function must have at least one condition where it will stop calling itself, or the function will call itself indefinitely until JavaScript 
//throws an error, called the base case scenario
//example calculating factorial of 5!
//factorial basically means multiplying 5 * 4 *3 * 2 * 1
//you need to get the base case scenario first
//in the above case the base case scenario is 1
 const factorial = (number) => {
     //base case
     if(number === 1 || number === 0) {
         return number
     }
//arguments that trigger function
//you get factorial of numnber by deducting one
return number * factorial(number - 1)
 }
 console.log(factorial(5))

 //the output will be 120 that is 5 * 4 *3 * 2 * 1 = 120

 //EXAMPLE 2 count from 5 to zero
 const countNumbers = (number) => {
     //base case
     if(number === 0) {
         return;
     }
     //print the returned number
     console.log(number)
     return countNumbers(number - 1);
 }
console.log(countNumbers(100))


//EXAMPLE 3 check if number is even or odd
let oddOrEven = (number) => {
    if (number === 0) {
        return 'Even';
    } else if (number === 1) {
        return 'Odd';
    } else {
        return oddOrEven(number - 2);
    }
};
console.log(oddOrEven(20)) // Even
console.log(oddOrEven(75)) // Odd
console.log(oddOrEven(98)) // Even
console.log(oddOrEven(113)) // Odd
console.log(oddOrEven(1000)) // Even
console.log(oddOrEven(1500)) // Odd
console.log(oddOrEven(2000)) // Even
console.log(oddOrEven(2500)) // Odd



// Exercises
// If you would like to further challenge yourself, then consider solving these recursive problems.

// Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".
// Write a program that returns the number of times a character appears in string.
// Your program should receive a string and the character. It should then return number of times the character appears in the string.
// Given the string "JavaScript" and a character "a", your program should return 2.


const reverseString = (string)=> {
   // base case
   if (string === "") {
    return "";
} else {
    // The line below is saying "reverse the last n-1 characters and move the first character to the end" (where the string has length n). This makes sense
    // if you think about it trace the recursive calls through:

    // reverse("tart") + "S"
    // (reverse("art") + "t") + "S"
    // ((reverse("rt") + "a") + "t") + "S"
    // (((reverse("t") + "r") + "a") + "t") + "S"
    // ((((reverse("") + "t") + "r") + "a") + "t") + "S"
    // Assuming a suitable stopping condition when you are left with an empty string, the method calls now return one by one:
    
    // (((("t") + "r") + "a") + "t") + "S"
    // ((("tr") + "a") + "t") + "S"
    // (("tra") + "t") + "S"
    // ("trat") + "S"
    // "tratS"
  
    return reverseString(string.substring(1)) + string.charAt(0);
}
}
console.log(reverseString("MOKI DANIEL MATHUVA"))
