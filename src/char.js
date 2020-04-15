export class Character {
  constructor(name, profession, level, stats) {
    this.name = name;
    this.profession = profession;
    this.level = level;
    this.inventory = [];
    this.stats = {
      health: 100,
      mana: 100,
      strength:  7,
      intelligence:  6,
      dexterity: 5,
    };       
  }

  //Create the means in which a player could create a character
  characterCreation(name, profession, stats){
    let player;
    player = new Character();
    player.name = name;
    player.stats.health = 100;
    player.stats.mana = 100;
    player.profession = profession;
    player.stats.strength = strength;
    player.stats.intelligence = intelligence;
    player.stats.dexterity = dexterity;
    return player;
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