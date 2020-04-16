export class Character {
  constructor(name, profession, strength, intelligence, dexterity) {
    this.name = name;
    this.profession = profession;
    this.level = 1;
    this.isAlive = true,
    this.inv = {
      potionOne: 3,
      potionTwo: 1

    };
    this.stats = {
      health: 70,
      mana: 100,
      strength: strength,
      intelligence: intelligence,
      dexterity: dexterity
    };
  }

  smallHeal(){
    if(this.inv.potionOne >= 0){
      this.stats.health += 10;
      if(this.stats.health > 100){
        this.stats.health = 100;
      }
    } else {
      this.stats.heal += 0;
      return true;
    }
  }

  bigHeal(){
    if(this.inv.potionTwo >=0){
      this.stats.health += 20;
      if(this.stats.healths > 100){
        this.stats.health = 100
      }
    } else {
      this.stats.health += 0;
      return true;
    }

   
  }
}


  // levelUp(){
  //   this.level += 1;
  //   this.stats.strength +=1;
  //   this.stats.intelligence +=1;
  //   this.stats.dexterity +=1;
  //   this.stats.health += 10;
  //   this.stats.mana += 10;
  // }    


