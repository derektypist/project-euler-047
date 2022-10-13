// Global Array
const NUMFACTORS = Array(150000).fill(0);
(function initFactors(num) {
    for (let i=2;i<num;i++) {
        if (NUMFACTORS[i] === 0) {
            for (let j=i;j<num;j+=i) {
                NUMFACTORS[j]++;
            }
        }
    }
})(150000);

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = "";
    // Apply For Loop
    for (let i=2;i<=4;i++) {
        txt += `With ${i} prime factors and ${i} consecutive numbers, first consecutive number is ${distinctPrimeFactors(i,i)}.<br>`;
    }
    
    // Display Information in the Browser
    document.getElementById("solution").innerHTML = txt;
}

/*
    Function to return the first value of the first certain
    number of consecutive integers to have a certain number of
    distinct prime factors each
    distinctPrimeFactors(2,2) returns 14
    distinctPrimeFactors(3,3) returns 644
    distinctPrimeFactors(4,4) returns 134043
*/
function distinctPrimeFactors(targetNumPrimes,targetConsecutive) {
    let numConsecutive = 0;
    let currNumber = 10;
    while (numConsecutive < targetConsecutive) {
        if (NUMFACTORS[currNumber]=== targetNumPrimes) {
            numConsecutive++;
        } else {
            numConsecutive = 0;
        }
        currNumber++;
    }
    return currNumber - targetConsecutive;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}