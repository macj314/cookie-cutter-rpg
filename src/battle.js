import { Character } from './char';
import { Enemy } from './enemy';

export function Battle(){

    Battle.prototype.playerDoDamage = function (player, enemy){
        
        player = new Character(player)
        enemy = new Enemy(this.enemyOne.stats.health)
        if(player.stats.strength <= 2){
            enemy.enemyOne.stats.health -= 15;
        } else if(player.stats.strength > 2 && player.stats.strength <= 4){
            enemy.enemyOne.stats.health -= 25;
        } else {
            enemy.enemyOne.stats.health -= 34;
        }
        return enemy.enemyOne.stats.health;
    };
 }
       

   








//   checkHealth(player,enemy) {
//     if(isAlive = false){
//       alert("you died");
//     }else {
//       alert("you win");
//     }
//   };
    

// };