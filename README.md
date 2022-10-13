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

Enter a whole number between 2 and 4 (without leading zeros such as 02) and click on the Submit Button.  You will see the first consecutive number to have that number of distinct prime factors, unless you have made an invalid input.  For example, if you submitted 2, you would expect the result to return 14.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect the function `distinctPrimesFactors(2,2)` to return a number.

As a user, I expect the function `distinctPrimesFactors(2,2)` to return 14.

As a user, I expect the function `distinctPrimesFactors(3,3)` to return 644.

As a user, I expect the function `distinctPrimesFactors(4,4)` to return 134043.

User Stories on function `distinctPrimesFactors(targetNumPrimes,targetConsecutive)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 047](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-47-distinct-primes-factors)

**Information Architecture**

The function `distinctPrimesFactors(targetNumPrimes,targetConsecutive)` returns a number.  The parameters `targetNumPrimes` and `targetConsecutive` are both numbers.

`targetNumPrimes` ranges from 2 to 4 and `targetConsecutive` ranges from 2 to 4.

