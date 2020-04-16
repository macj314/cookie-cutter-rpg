import { Character } from './char';
import { Enemy } from './char';

export class Battle
{
    // var playerTurn;
    // var enemyTurn;
    //turnCounter
  startBattle(player, enemy){
    playerDmg = Math.floor(random() * 5) + strength;
    npcDmg = Math.floor(random() * 3) + strength;
  }

  attack(){
    if( player.dexerity > enemy.dexerity){
    enemy.health -= playerDmg;
    player.health -= npcDmg;
    }else{        
    player.health -= npcDmg;
    enemy.health -= playerDmg;
    }
  }
}