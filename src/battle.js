import { Character } from './char';
import { Enemy } from './char';

export class Battle
{
  attack(player, enemy){
   
    let playerDmg = Math.floor(Math.random() * 5) + player.stats.strength;
    let npcDmg = Math.floor(Math.random() * 3) + strength;
    console.log(playerDmg);
    console.log(npcDmg);
    console.log("working");
    if( player.dexerity > enemy.dexerity){
    enemy.health -= playerDmg;
    player.health -= npcDmg;
    }else{        
    player.health -= npcDmg;
    enemy.health -= playerDmg;
    }
    return [player.health, enemy.health];
  }

  checkHealth(player,enemy){
    if(isAlive = false){
      alert("you died");
    }else {
      alert("you win");
    }
    
  }


}