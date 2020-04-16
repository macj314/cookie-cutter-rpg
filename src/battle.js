import { Character } from './char';
import { Enemy } from './enemy';

export function Battle(){
   
    let player = new Character()
    let enemy = new Enemy(this.enemyOne)
    
    Battle.prototype.playerDoDamage = function (){
        if(player.stats.strength <= 2){
            enemy.enemyOne.stats.health -= 15;
        } else if(player.stats.strength > 2 && player.stats.strength <= 4){
            enemy.enemyOne.stats.health -= 25
        } else {
            enemy.enemyOne.stats.health-= 34
        }
    }
};

   








//   checkHealth(player,enemy) {
//     if(isAlive = false){
//       alert("you died");
//     }else {
//       alert("you win");
//     }
//   };
    

// };