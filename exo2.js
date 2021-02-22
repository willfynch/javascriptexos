/*
JavaScript exercise

Ask user for an integer
Return sum of integers from 1 to user's integer
*/


// ---- import scanf library --------
let scanf = require('scanf');
// -------------------------------



// ----  user inputs -------------
console.log("Enter an integer : \n");
let userInteger = scanf("%d");
// -------------------------------



// ---- initialize the sum variable ---------
let sumOfIntegers = 0;
// ------------------------------------------



// ---- loop through integers from 1 to user's integer and sum them ------
for(let i = 1 ; i <= userInteger ; i++){
    sumOfIntegers += i;
} 
// ---------------------------------------------------------------------



// print the result ------------------------------
console.log(`Your number was ${userInteger}
The sum is ${sumOfIntegers}`);
// -----------------------------------------------