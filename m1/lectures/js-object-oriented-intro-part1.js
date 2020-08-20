// Review objects

// Create an object
// - remeber curly braces, colon, commas
let obj = {
  property1: "hi",
  p2: "hola"
}
// Dot notation
console.log(obj.p2)
// Add a new property
obj.p3 = "bonjour"
console.log(obj)
// Delete a property
delete obj.property1
console.log(obj)
// Edit a property
obj.p2 = "Kon'nichiwa"
console.log(obj)
// Can you have functions as values?
let obj2 = {
  property1: "hi",
  p2: "hola",
  p3: function(){ // what is another way to declare the function? () => {}
    console.log("Wazzaaaaaaaa")
  }
}
// call the function of that object
obj2.p3()
// this keyword
let obj2 = {
  property1: "hi",
  p2: "hola",
  p3: () => {
    console.log(this.p2)  // this keyword is a reference to an object, a shortcut, it will chance depending on the context where it is invoked
  }
}
// call the function of that object
obj2.p3()


// Goals
// Explain OOP
// Why use objects
// How to create objects
// Access object properties
// Use the this keyword

/**
 * Official definition of object-oriented programming (OOP) is that it is a programming paradigm 
 * based on the concept of “objects”, which can contain data, in the form of fields (often known as attributes), 
 * and code, in the form of procedures (often known as methods).
 */

// There's different programming paradigms
// Functional, procedural, logical, OOP, etc...

// Monopoly Game - Object Literal approach
// Example of a VERY simple Monopoly game simulation
 
// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
const squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// --- Initialization ---

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000
}

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000
}

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000
}

// --- Display info  ---
console.log("Before the first turn")
console.log(player1);
console.log(player2);
console.log(player3);

// --- Turn of Player 1 ---
// The dice is a random integer between 1 and 6
var dice = 1+Math.floor(6*Math.random());
// The position is always between 0 and 15 (the numbers of squares - 1)
player1.position = (player1.position + dice) % squares.length;
// The cash is updated based on the values of squares and player1.position
player1.cash += squares[player1.position];
// If the player doesn't have anymore cash, player is out of game
if (player1.cash < 0) {
  console.log(`Game over for ${player1.name}.`);
}

// --- Turn of Player 2 --- 
var dice = 1+Math.floor(6*Math.random());
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash < 0) {
  console.log(`Game over for ${player2.name}.`);
}

// --- Turn of Player 3 --- 
var dice = 1+Math.floor(6*Math.random());
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash < 0) {
  console.log(`Game over for ${player3.name}.`);
}

// --- Display info  ---
console.log("After the first turn")
console.log(player1);
console.log(player2);
console.log(player3);

/**
 * pros of this approach
 * - straight forward code
 * - very little code
 * - flexible declaration
 */

/**
 * cons of this approach
 * - there isn't a fast way to create the object
 * - we don't have method for our objects (i.e. it would be nice to have a player.move() method)
 */

// Monopoly Game - with methods
// methods vs functions
// methods are actions that objects can do

// Example of a VERY simple Monopoly game simulation
 
let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// --- Initialization with methods ---

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move: () => {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: () => {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  move: () => {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: () => {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000,
  move: () => {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: () => {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

// --- Display info  ---
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// now the code is more reusable 

// Summary
// - Why use methods
// - Makes code more reusable

// New syntax
// - keyword this