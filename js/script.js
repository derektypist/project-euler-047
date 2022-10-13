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

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if Input is Valid
    if (isNaN(num) || num.length==0 || num<2 || num>4 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 4.  Do not include leading zeros.`;
    } else {
        txt += `You have requested ${num} prime factors. <p>`;
        txt += `First Consecutive Number is ${distinctPrimeFactors(num,num)}`;
    }
    
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
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

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}