// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

// 1 and 0 are not prime === false
// let sqRt = Math.sqrt(int)

// const isPrime = int => {
//   // sqRt = Math.sqrt(int)
//   for(let i = 2; i <= sqRt; i++)
//   // set up conditions for if the input(int) where it cannot equal 0 or 1
//     if(int % i === 0) return false
//   return int !== 1 && int !== 0;
// }

// sample from Stack Overflow: 
// const isPrime = num => {
//   s = Math.sqrt(num)
//     for(let i = 2; i <= s; i++)
//         if(num % i === 0) return false; 
//     return num !== 1 && num !== 0;
// }

//can I not use a for loop as a variable and how would I? 
  let loop = int => {
                    let sqRt = Math.sqrt(int)
                    for(let i=2; i <= sqRt; i++){
                      if(int % i === 0)return false
                    }
                  }
const isPrime2 = (int) => {
  // int !== 0 && int !== 1 && !loop ? true : false
  if(int !== 0 && int !== 1 && int !== -1 && !loop) return true
}
// console.log(isPrime(3))
console.log(isPrime2(3))