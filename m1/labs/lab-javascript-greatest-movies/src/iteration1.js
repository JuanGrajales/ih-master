// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

/**
 * Steps
 * 1. Define the function that takes in an array as the parameter
 * 2. How not to copy an array
 * 3. Copy array - 5 ways to copy (spread, for/while loop, slice, Array.from(ogArr), arr.concat())
 * 4. Sort without compare function
 * 5. Sort with compare function
 * 6. Sort using selection and insertation
 *    selection - find the smallest number then find the second smallest, and so on
 *    insertion - put each number in its place one at a time
 */

/**
 * Resources
 * spread - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
 * Array.from - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from 
 * slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 
 * concat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat 
 * sort - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * localeCompare - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
 * sorting algorithms - https://www.geeksforgeeks.org/sorting-algorithms/ 
 */

/**
 * 1. Define the function that takes in an array as the parameter
 */
// function orderByYear(arr){

// }

/**
 * 2. How not to copy an array
 */
// Why you can't use = to copy an array
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let fakeSheeps = sheeps;
// let cloneSheeps = [...sheeps];
// console.log(sheeps === fakeSheeps);
// // true --> it's pointing to the same memory space
// console.log(sheeps === cloneSheeps);
// // false --> it's pointing to a new memory space

/**
 * 3. Copy array - 5 ways to copy (spread, for/while loop, slice, Array.from(ogArr), arr.concat())
 */
// Spread operator
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = [...sheeps];
// console.log(sheeps);
// console.log(cloneSheeps);

// for loop
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = [];
// for(let i = 0; i < sheeps.length; i++){
//   // clonesSheeps[i] = sheeps[i]; INCORRECT, array is not initialized thus you cannot change the values of the indexes
//   cloneSheeps.push(sheeps[i]);
// }
// console.log(sheeps);
// console.log(cloneSheeps);

// while loop
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = [];
// let i = 0;
// while(i < sheeps.length){
//   cloneSheeps.push(sheeps[i]);
//   i++
// }
// console.log(sheeps);
// console.log(cloneSheeps);

// slice
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = sheeps.slice();
// console.log(sheeps);
// console.log(cloneSheeps);

// Array.from(originalArr)
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = Array.from(sheeps);
// console.log(sheeps);
// console.log(cloneSheeps);

// concat
// let sheeps = ['1🐑', '2🐑', '3🐑', '4🐑', '5🐑', '6🐑'];
// let cloneSheeps = sheeps.concat()
// console.log(sheeps);
// console.log(cloneSheeps);

// function orderByYear(arr){
//   let newArr =[];
//   newArr = [...arr];

//   return newArr;
// }

/**
 * 4. Sort without compare function
 */
// let stringArray = ['Blue', 'Humpback', 'Beluga'];
// let numericStringArray = ['80', '9', '700'];
// let numberArray = [40, 1, 5, 200];
// let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
// console.log(stringArray.sort())
// console.log(numericStringArray.sort())
// console.log(numberArray.sort())
// console.log(mixedNumericArray.sort())

/**
 * 5. Sort with compare function
 */
// let numbers = [4, 2, 5, 1, 3];
// let newNumbers = numbers.sort(function(a, b) {
//   console.log(`${a} - ${b} = ${a - b}`);
//   return a - b;
// });

// Using arrow function
// let numbers = [4, 2, 5, 1, 3];
// let newNumbers = numbers.sort((a, b) => {
//   console.log(`${a} - ${b} = ${a - b}`);
//   return a - b;
// }); 

// short version
// let numbers = [4, 2, 5, 1, 3];
// let newNumbers = numbers.sort((a, b) => a - b);
// console.log(newNumbers)

// localeCompare - for strings only
// let stringArray = ['Blue', 'Humpback', 'Beluga'];
// let newArr = stringArray.sort((a, b) => a.localeCompare(b));
// console.log(newArr)

/**
 * 6. Sort using selection and insertation
 *    selection - find the smallest number then find the second smallest, and so on
 *    insertion - put each number in its place one at a time
 * sorting algorithms - https://www.geeksforgeeks.org/sorting-algorithms/
 */

// Sort by year only 
function orderByYear(arr){
  let newArr = [...arr];
  newArr.sort((a,b) => { 
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
      return -1;
    }
    else { // if they are equal
      return 0; // you don't need to specify this, sort will know
    }
  });
  return newArr;
}

// Sort by year and title  
function orderByYear(arr){
  let newArr = [...arr];
  newArr.sort((a,b) => { 
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
      return -1;
    }
    else { // if they are equal
      if(a.title > b.title) {
        return 1;
      }
      else if(a.title < b.title) {
        return -1;
      }
      else{
        return 0;
      }
    }
  });
  return newArr;
}

// Fancy function
function orderByYear(arr){
  let newArr = [...arr];
  newArr.sort((a,b) => { 
    if(a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
      return -1;
    }
    else { // if they are equal
      return a.title.localeCompare(b.title);
    }
  });
  return newArr;
}