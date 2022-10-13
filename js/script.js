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

// Function to Get Information (including Invalid Input)
function getInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Values of the Input Fields
    let num1 = document.getElementById("primefacs").value;
    let num2 = document.getElementById("consec").value;
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2) || num1.length==0 || num2.length==0 || num1<2 || num1>4 || num2<2 || num2>5 || (num1.length>1 && num1[0]=="0") || (num2.length>1 && num2[0]=="0") || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        txt += `Invalid Input(s) - `;

        // Set Condition for Not a Number
        if (isNaN(num1) || isNaN(num2)) {
            // Condition if first input is not a number
            if (isNaN(num1)) txt += `The number of prime factors must be a number.  `;
            // Condition if second input is not a number
            if (isNaN(num2)) txt += `The number of consecutive numbers must be a number.  `;
        }

        // Set Condition for Empty Inputs
        if (num1.length==0 || num2.length==0) {
            // Condition if first Input is empty
            if (num1.length==0) txt += `Number of Prime Factors not entered.  `;
            // Condition if second Input is empty
            if (num2.length==0) txt += `Number of Consecutive Numbers not entered.  `;
        }

        // Set Condition if Number of Prime Factors is not in range
        if (num1<2 || num1>4) txt += `Number of Prime Factors must be between 2 and 4.  `;

        // Set Condition if Number of Consecutive Numbers is not in range
        if (num2<2 || num2>5) txt += `Number of Consecutive Numbers must be between 2 and 5.  `;

        // Set Conditions for Leading Zeros
        if ((num1.length > 1 && num1[0]=="0") || (num2.length > 1 && num2[0]=="0")) {
            // Condition if first input contains leading zeros
            if (num1.length > 1 && num1[0]=="0") txt += `Number of Prime Factors must not include a leading zero.  `;
            // Condition if second input contains leading zeros
            if (num2.length > 1 && num2[0]=="0") txt += `Number of Consecutive Numbers must not include a leading zero.  `;
        }

        // Set Conditions for Number not an integer
        if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
            // Condition if first input is a number, but not an integer
            if (!Number.isInteger(Number(num1))) txt += `Number of Prime Factors is not a whole number.  `;
            // Condition if second input is a number, but not an integer
            if (!Number.isInteger(Number(num2))) txt += `Number of Consecutive Numbers is not a whole number.  `;
        }
        
    } else {
        txt += `You have requested ${num1} prime factors and ${num2} consecutive numbers. <p>`;
        txt += `First Consecutive Number is ${distinctPrimeFactors(num1,num2)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numbersinfo").innerHTML = txt;
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
        if (NUMFACTORS[currNumber] === targetNumPrimes) {
            numConsecutive++;
        } else {
            numConsecutive = 0;
        }
        currNumber++;
    }
    return currNumber - targetConsecutive;
}