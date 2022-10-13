# Project Euler 047 - Distinct Primes Factors

The first two consecutive numbers to have two distinct prime factors are:

- 14 = 2 x 7
- 15 = 3 x 5

The first three consecutive numbers to have three distinct prime factors are:

- 644 = 2<sup>2</sup> x 7 x 3
- 645 = 3 x 5 x 43
- 646 = 2 x 17 x 19

Find the first four consecutive integers to have four distinct prime factors each.  What is the first of these numbers?

Information at [Project Euler 047](https://projecteuler.net/problem=47)

## UX

**Getting Started**

Enter the number of prime factors as a whole number between 2 and 4 (without leading zeros such as 02).  Enter the number of consecutive numbers as a whole number between 2 and 5 (without leading zeros). Click on the Submit Button.  You will see the first consecutive number to have that number of distinct prime factors, unless you have made an invalid input.  For example, if you submitted 2 as the number of prime factors and 2 as the number of consecutive numbers, you would expect the result to return 14.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Entering text other than a number in either of the two input fields or both
- Not enter anything in either of the two input fields or both
- Entering a number less than 2 or greater than 4 in the first input field (Number of Prime Factors)
- Entering a number less than 2 or greater than 5 in the second input field (Number of Consecutive Numbers)
- Including Leading Zeros (e.g. 02) in either of the two input fields or both
- Entering a number, but it is not an integer in either of the two input fields or both

As a user, I expect the function `distinctPrimesFactors(2,2)` to return a number.

As a user, I expect the function `distinctPrimesFactors(2,2)` to return 14.

As a user, I expect the function `distinctPrimesFactors(3,3)` to return 644.

As a user, I expect the function `distinctPrimesFactors(4,4)` to return 134043.

User Stories on function `distinctPrimesFactors(targetNumPrimes,targetConsecutive)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 047](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-47-distinct-primes-factors)

**Information Architecture**

The function `distinctPrimesFactors(targetNumPrimes,targetConsecutive)` returns a number.  The parameters `targetNumPrimes` and `targetConsecutive` are both numbers.

`targetNumPrimes` ranges from 2 to 4 and `targetConsecutive` ranges from 2 to 5.

