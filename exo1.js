/*
JavaScript exercise

Asking user for 2 Strings
Checking if first String is twice the length of second String's
*/


// ---- import scanf library --------
var scanf = require('scanf');
// -------------------------------

// ----  user inputs -------------
console.log("First chain : \n");
let myChain1 = scanf("%S");
console.log("Second chain : \n");
let myChain2 = scanf("%S");
// -------------------------------

// checking if myChain1 is twice as long as myChain2 -----------------
if(myChain1.length == myChain2.length*2){
    console.log(`${myChain1} is twice as long as ${myChain2} !`);
}else{
    console.log(`${myChain1} is not twice as long as ${myChain2} !`);
}
// ---------------------------------------------------------------------