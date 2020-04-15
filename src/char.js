export class Character {
  constructor(name, profession, strength, intelligence, dexterity) {
    this.name = name;
    this.profession = profession;
    this.level = 1;
    this.inventory = [];
    this.stats = {
      health: 100,
      mana: 100,
      strength: strength,
      intelligence: intelligence,
      dexterity: dexterity
    };
  }

  heal(item){
    this.health += item;
    return this.health;
  }

  levelUp(){
    this.level += 1;
    this.stats.strength +=1;
    this.stats.intelligence +=1;
    this.stats.dexterity +=1;
    this.stats.health += 10;
    this.stats.mana += 10;
  }    
}

// export class Enemy {
//   constructor(name, strength, intelligence, dexterity) {
//     this.name = name;
//     this.level = 1;
//     this.stats = {
//       health: 20,
//       mana: 15,
//       strength: strength,
//       intelligence: intelligence,
//       dexterity: dexterity
//   };
// }