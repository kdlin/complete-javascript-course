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

console.log(`end of Prob 1 & 2`);


// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

1) Understand the problem 
each num in arr into string 

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4] */ 

const printForecast = function(arr) { 
  let output = '...'; 
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]}c in ${i + 1} days ...`;
  } 

  return output;
}

console.log(printForecast([17,21,23]));
console.log(printForecast([12, 5, -5, 0, 4]));


///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/ 

const tracker = function(arr) {
   let totalHrs = arr.reduce((acc, x) => acc + x , 0); 
   let mostHrs = Math.max(...arr);

  const obj = { 
    totalHrs, 
    'avgHrs': totalHrs / arr.length,
    'mostHrs': Math.max(...arr), 
    'numDaysWorked': arr.filter(hours => hours > 0).length,
    'isFullTime': totalHrs >= 35,
  }
   return obj;
}

console.log(tracker([7.5, 8, 6.5, 0, 8.5, 4, 0]));