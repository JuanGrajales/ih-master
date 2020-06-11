// Soldier
class Soldier{
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength; 
  }
  
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` 
    :  
    `${this.name} has died in act of combat`
  }
  
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `A Saxon has received ${damage} points of damage`
    :
     'A Saxon has died in combat'
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  attack (attackers, victim ) {
    let randAttacker = attackers[Math.floor(Math.random() * attackers.length)];
    let randomVictim = victim[Math.floor(Math.random() * victim.length)];
    let outcome = randomVictim.receiveDamage(randAttacker.strength);
    if(randomVictim.health <= 0) {
      victim.splice(victim.indexOf(randomVictim), 1);
    }
    return outcome
  }

  vikingAttack() {
    let outcome = this.attack(this.vikingArmy, this.saxonArmy);
    return outcome;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let outcome = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
    return outcome;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

/******************* CODE TESTING *******************/
let warOf1600 = new War;

let viking0 = new Viking("Juan", 100, 85);
let viking1 = new Viking("Stefano", 100, 65);
let viking2 = new Viking("Masaki", 100, 70);
let viking3 = new Viking("Davi", 100, 30);
let viking4 = new Viking("Angel", 100, 99);
let viking5 = new Viking("Brie", 100, 55);

warOf1600.vikingArmy.push(viking0);
warOf1600.vikingArmy.push(viking1);
warOf1600.vikingArmy.push(viking2);
warOf1600.vikingArmy.push(viking3);
warOf1600.vikingArmy.push(viking4);
warOf1600.vikingArmy.push(viking5);

let saxon0 = new Saxon(100, 85);
let saxon1 = new Saxon(100, 65);
let saxon2 = new Saxon(100, 70);
let saxon3 = new Saxon(100, 30);
let saxon4 = new Saxon(100, 99);
let saxon5 = new Saxon(100, 55);

warOf1600.saxonArmy.push(saxon0);
warOf1600.saxonArmy.push(saxon1);
warOf1600.saxonArmy.push(saxon2);
warOf1600.saxonArmy.push(saxon3);
warOf1600.saxonArmy.push(saxon4);
warOf1600.saxonArmy.push(saxon5);

console.log(warOf1600.vikingArmy);
console.log(warOf1600.saxonArmy);