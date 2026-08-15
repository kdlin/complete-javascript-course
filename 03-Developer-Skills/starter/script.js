// Remember, we're gonna use strict mode in all scripts now!
'use strict';


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."


// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const findTempAmplitude = function(arr) { 
  const nonError = arr.filter( s => 
    typeof s === 'number'
  );

  const high = Math.max(...nonError);
  const low = Math.min(...nonError); 

  return high - low;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

console.log(findTempAmplitude(temperatures));

// Problem Two but taking two arrays rather than 1 

const findTempTwo = function(t1, t2) {
  const merged = t1.concat(t2);
  return findTempAmplitude(merged);

}

const tempTwo = [80, -40]
console.log(findTempTwo(tempTwo, temperatures));