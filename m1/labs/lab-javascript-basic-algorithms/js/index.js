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
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ac turpis et elementum. Cras euismod vitae ante a efficitur. Donec ultrices gravida nunc, a suscipit mi bibendum vel. Nullam non justo ac mauris mattis interdum. Phasellus eros mi, rutrum vitae convallis sit amet, feugiat sit amet diam. Morbi non tristique diam. Nullam condimentum gravida viverra. Nunc egestas mauris non quam molestie, in posuere nunc varius. Vestibulum vehicula ac ipsum quis luctus. Vivamus vulputate metus at nunc feugiat, vitae tempus ligula tristique. Curabitur sit amet augue eu metus dictum dignissim. Donec ullamcorper mattis massa et imperdiet. Curabitur ut orci sed nunc egestas consequat. Fusce pretium interdum eros, eu vulputate ipsum tempor eu. Donec ligula justo, iaculis consequat nulla sed, hendrerit commodo elit. Ut laoreet lectus at justo pharetra, sed hendrerit erat molestie.

Praesent fringilla, ligula ac blandit ultrices, quam ex semper tortor, a fermentum augue lectus nec nisl. Quisque tempor, diam id luctus pharetra, ante lacus auctor urna, eget fringilla nulla libero at odio. In ullamcorper, dolor vel facilisis aliquam, eros lectus sagittis leo, quis bibendum ipsum neque sed sapien. Nulla imperdiet magna diam, vel blandit est ornare non. Duis non sem scelerisque, ullamcorper libero nec, imperdiet justo. In non lobortis lacus. Quisque vitae condimentum velit, rutrum feugiat tellus. Donec id lacus ex. Curabitur eget odio mattis, eleifend est quis, pharetra velit. Aliquam nec turpis vitae nunc dapibus ultricies consectetur vel risus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rhoncus enim magna, a luctus dolor gravida ac. Integer aliquet sit amet velit in tristique. Integer euismod elementum elit at scelerisque. Praesent rutrum nunc id ex sodales, ut pharetra arcu elementum. Etiam elementum est massa, eget tempor urna facilisis eu. Quisque at augue a nunc viverra semper. Sed posuere ipsum pharetra, consectetur eros vitae, sodales neque. Morbi ex ligula, gravida vel ullamcorper id, vulputate quis nisl. Donec non lacinia arcu, quis euismod velit. Proin laoreet in magna quis consectetur. Pellentesque dolor ex, vestibulum sit amet leo non, sollicitudin consequat elit. Donec a justo in massa convallis accumsan porta et ligula. Vivamus viverra dignissim quam ac aliquet. Donec in volutpat ex.`

// Solution 1
let count = 1  // start at one to take into account the last word since the last word doesn't have a space
for(let i=0; i<paragraphs.length; i++){
  if(paragraphs[i] === ' '){
    count++
  }
}
console.log(`Paragraph has ${count} words`)

// Solution 2
console.log(`Paragraph has ${paragraphs.split(' ').length} words`)


// Bonus 2

// Solution 1
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let testStr = `Was it a car or a cat I saw?" and "No 'x' in Nixon`
let filteredStr = ''
for(let i=0; i<testStr.length; i++){
  if(alphabet.includes(testStr[i].toLocaleLowerCase())){
    filteredStr += testStr[i]
  }
}
console.log(filteredStr)

let reverseStr = ''
for(let i=filteredStr.length-1; i>=0; i--){
  reverseStr += filteredStr[i]
}
console.log(reverseStr)

if(filteredStr === reverseStr){
  console.log('The string is a Palindrome');
} else {
  console.log("The string is not a Palindrome");
}

// Solution 2
let str = `Was it a car or a cat I saw?" and "No 'x' in Nixon`
let str1 = str.toLowerCase().replace(/[\W_]/g, '');
let str2 = str1.split('').reverse().join('');
if (str1 === str2) {
  console.log('The string is a Palindrome');
} else {
  console.log("The string is not a Palindrome");
}