// Iteration 1: Names and Input

// 1.1 
// 3 ways to declare a string
let driver = `Juan`;  // 'Juan' "Juan"

// 1.2 
console.log("The driver's name is " + driver);     // string concatenation with double quotes 
console.log(`The driver's name is ${driver}`);     // string interpolation MUST use backticks, syntax `${variable or an expression}`

// 1.3
let navigator;        // variable declaration
navigator = "Ruben";  // variable initialization

// 1.4
console.log(`The navigator's name is ${navigator}`) 

// Iteration 2: Conditionals

// 2.1
if(driver.length > navigator.length){
  console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if(driver.length < navigator.length){
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops

// 3.1
// Solution 1
let driverUpperCase = '';
// i++ is the same as i = i + 1 or i += 1
for(let i=0; i<driver.length; i++) { 
    // console.log(`Loop ${i+1} i = ${i} current char: ${driver[i]}`)
    // driverUpperCase += driver[i].toLocaleUpperCase() + ' '
    driverUpperCase = driverUpperCase + driver[i].toLocaleUpperCase() + ' '
    // console.log(driverUpperCase)
}
console.log(driverUpperCase)

// Solution 2
// let driverUpperCase = `${driver.split('').join(' ')}`;
// let uppercased = name.toUpperCase();
// console.log(uppercased);

// 3.2
let reverse = '';
for(let i=driver.length-1; i>=0; i--) { 
    reverse = reverse + driver[i]
}
console.log(reverse)

// 3.3
// localeCompare - https://www.w3schools.com/jsref/jsref_localecompare.asp 
let order = driver.localeCompare(navigator)
if(order < 0) {
    console.log(`The driver name goes first.`);
} else if(order > 0) {
    console.log(`Yo, the navigator goes first definitely.`);
} else if(order === 0) {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1
