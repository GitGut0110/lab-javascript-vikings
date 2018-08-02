// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
      return this.strength;
  };
  this.receiveDamage = function(damage) {
      this.health -= damage;
  };
}


//var vlad = new Soldier(1,2)
//console.log(vlad);


// Viking
function Viking(name,health,strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) {
      var result = name + ' has received '+damage+' points of damage';
    } else {
     var result = name + ' has died in act of combat'}
    return result;
  }
  this.battleCry = function(){
    return 'Odin Owns You All!';
  }
  this.attack = function () {
    return this.strength;
};
}

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) {
      var result = 'A Saxon has received '+damage+' points of damage';
    } else {
     var result = 'A Saxon has died in combat'}
    return result;
  }
  this.attack = function () {
    return this.strength;
};
}

// War
function War() {}
