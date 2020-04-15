export class Character {
  constructor(name, profession, strength, intelligence, dexterity) {
    this.name = name;
    this.profession = profession;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
  }

  //Create the means in which a player could create a character
  characterCreation(name, profession, strength, intelligence, dexterity){
    let player = new Character;
    player.name = name;
    player.profession = profession;
    player.strength = strength;
    player.intelligence = intelligence;
    player.dexterity = dexterity;
    return player;
  }

  displayCharacter(character){
    return "Name: " + character.name + "<br>" 
    + "Profession: " + character.profession + "<br>" 
    + "Strength: " + character.strength + "<br>" 
    + "Intelligence: " + character.intelligence + "<br>" 
    + "Dexterity: " + character.dexterity;
  }
  //Item system ideas
  //idea1: Backpack/inventory array inside of character constructor. Which hold the items, and changes the stats of character.
  // addItem(item){

  // }
}