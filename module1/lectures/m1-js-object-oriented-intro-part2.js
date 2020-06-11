// class
// A class is a blueprint of something. Think a cookie cutter. 

// Example of a VERY simple Monopoly game simulation
 
let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// Creation of the class
class Player {

  // The constructor is the method triggered with the `new` keyword 
  // There can only be one constructor method in a class
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }
  
  // Method move
  move() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }
  
  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
  
}

// --- Initialisation of players ---
// When trying to create a new object from a class use the following syntax
// player 1, 2 and 3 are now an instance of the Player class, this means they share the same constructor. In other words, 
// they are copies from the same Player blueprint (i.e. class), all instances of a class share the same attributes and methods
// but the properties can have different values
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// pros
// - code is even more reusable 
// - cleaner code

// Abstraction
// - Means showing just what’s necessary to the outside world and hiding all that is unnecessary-to-be-known. 
// Imagine a car engine - you know it works right, because your car is moving, but how it works, you really 
// don’t have to know. Only show was it does not how it works. This is the case for many of the methods you
// have used thus far (e.g. reduce, length, Math.random, etc).
// SHORT EXPLANATION: Abstraction: A way of arranging complexity where the more complex details are suppressed below 
// the current level (hidden).

// Encapsulation
// - Means grouping the data and the methods that manipulate this data together. The goal is to keep them 
// safe from interference and misuse. We have to aim to hide internal implementation and to organize our 
// code as if it is a black box: it should do the job but the rest of the application should not know how 
// they do it (this is very much connected with abstraction).
// Think about the code for a bank account, the user does not have access to a method that will increase their balance
// SHORT EXPLANATION: Encapsulation: To put all the data attributes of an object and its inner working (methods) inside of it.

// Inheritance
// Inheritance is a feature of object-oriented programming that allows code reusability when a class includes property 
// (attribute or method) of another class.

// Player class
class Player { 
  // Constructor 
  constructor(name) { 
    this.name = name; 
    this.health = 100; 
    this.position = 0; 
    this.cash = 10; 
  } 
  // Method move 
  move() {
    console.log("Walk forward")
  }
  // Method attack 
  attack () {
    console.log("Punch")
  }
}
  
// Cowboy class
class Cowboy extends Player { 
  // Constructor 
  constructor(name, weapon) { 
    super(name)
    this.weapon = 'revolver';
  }
}

// Samurai class
class Samurai extends Player { 
  // Constructor 
  constructor(name, weapon) { 
    super(name)
    this.weapon = 'katana';
  } 
}

// Polymorphism 
// Means inheriting the method from the parent class but changing its functionality. ex. If you have 
// a class Person and this class has a method move(). If you extend class Child with class Person most 
// likely the child will crawl when you invoke move() method. However, if you extend class Grownup with 
// class Person, they will walk when move() is called. (overly simplified example but just to help you understand.)

// Player class
class Player { 
  // Constructor 
  constructor(name) { 
    this.name = name; 
    this.health = 100; 
    this.position = 0; 
    this.cash = 10; 
  } 
  // Method move 
  move() {
    console.log("Walk")
  }
  // Method attack 
  attack () {
    console.log("Punch")
  }
}

// Cowboy class
class Cowboy extends Player { 
// Constructor 
  constructor(name, weapon) { 
    super(name)
    this.weapon = 'revolver';
  }
  // Method move 
  move() {
    console.log("Get on horse and go")
  }
  // Method attack 
  attack () {
    console.log("Shoot")
  }

}

// Samurai class
class Samurai extends Player { 
  // Constructor 
  constructor(name, weapon) { 
    super(name)
    this.weapon = 'katana';
  } 
  // Method move 
  move() {
    console.log("Run")
  }
  // Method attack 
  attack () {
    console.log("Swing sword")
  }
}

// summary
// - a constructor is a function which is used to create instance objects

// new Syntax
// - keyword class
// - the first letter of the class is always capitalized
// - class syntax: class ClassName{}
// - methods inside of classes don't need the "normal" function syntax instead use functionName(params) {}
// - constructor
// - new keyword executes the constructor of the class and adds the methods to the object
// - in the constructor and the rest of the class "this" refers to the new object
// - keyword extends is used for inheritance