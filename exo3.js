/*
JavaScript exercise

Ask user for 5 integer
Store them in an array
Print index of highest integer
Print average
*/


// ---- import scanf library --------
let scanf = require('scanf');
// -------------------------------



// ---- initialize array ---------
let integersArray = [];
// ------------------------------------------



// ----  user inputs ------------------------
for(let i = 0 ; i < 5 ; i++){
    console.log(`Enter integer number ${i} : `);
    let userInteger = scanf("%d");
    integersArray.push(userInteger);
}
// -----------------------------------------

// ----  print maximum ----------------------------
console.log(`Max is ${Math.max(...integersArray)} and index is 
 ${integersArray.indexOf(Math.max(...integersArray))}`);
// ---------------------------------------------


// ----  print average -----------------------------

// defining the average calculating function 
const averageCalculating = (accumulator, currentValue) => accumulator + currentValue;

// Explaining reduce method for self-learning :
//---------------------------------------------------
// reduce method will apply the average calculating function
// accumulator starts at 0
// accumulator is the value returned by the last callback
// first it equals 0 then it equals 0 + the first value in the array and so on

console.log(`Average is ${integersArray.reduce(averageCalculating, 0)/integersArray.length}`);
// ---------------------------------------------
