export class Character {
  constructor(name, health, mana, profession,) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.profession = profession;
    this.stats = {
      strength:  0,
      intelligence:  0,
      dexterity: 0,
      inventor:  []
    }
    
   
  }

  //Create the means in which a player could create a character
  characterCreation(name, health, mana, profession, strength, intelligence, dexterity){
    let player = new Character;
    player.name = name;
    player.health = 100;
    player.mana = 100;
    player.profession = profession;
    player.stats.strength = 5;
    player.stats.intelligence = 5;
    player.stats.dexterity = 5;
    return player;
  }

  displayCharacter(){
    return "Name: " + this.name + "<br>"
    + "Profession: " + this.profession + "<br>" 
    + "Strength: " + this.stats.strength + "<br>" 
    + "Intelligence: " + this.stats.intelligence + "<br>" 
    + "Dexterity: " + this.stats.dexterity
    + "Health: " + this.health
    + "Mana: " + this.mana
    + "Inventory: " + this.inventory;


  }
  //Item system ideas
  //idea1: Backpack/inventory array inside of character constructor. Which hold the items, and changes the stats of character.
  // addItem(item){

  // }
}