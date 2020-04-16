/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './char';
import { Enemy } from './enemy';
// import { Enemy } from './enemy';


//function attack(player, enemy){
//  let message;
//  var playerDmg = Math.floor(Math.random() * 5) + player.stats.strength;
//  var enemyDmg = Math.floor(Math.random() * 5) + enemy.stats.strength;
//  if(player.stats.dexterity > enemy.stats.dexterity){
//    enemy.stats.health -= playerDmg;
//    player.stats.health -= enemyDmg;
//  }else{player.stats.health -= enemyDmg;
//    enemy.stats.health -= playerDmg;
//  }
//  message = ("You did: " + playerDmg + " damage. And received: " + enemyDmg + "damage");
//  if(player.stats.health <= 0){
//    message += "You Have Died"
//  }
//  if(enemy.stats.health <= 0){
//    message += "You have defeated your enemy!"
//  }
//  return message;

//function nextEnemy(){
//  var i 
//  $("#monster-img").hide();
//  $("")

function showImg(player) {
  if(player.profession == "Rouge"){
    $("#rouge-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Ranger"){
    $("#ranger-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Knight"){
    $("#knight-img").show();
    $("#monster-img").show();
  }
  if(player.profession == "Mage"){
    $("#mage-img").show();
    $("#monster-img").show();
  }
}

function displayCharacter(player){
  $("#name-display").text( `${player.name},` + ` ` +  `Level ${player.level}` + ` ` + `${player.profession}`);
  $("#pot1-display").text(`Small Healing Potions: ${player.inv.potionOne}`);
  $("#pot2-display").text(`Large Healing Potions: ${player.inv.potionTwo}`);
  $("#strength-display").text(`Strength: ${player.stats.strength}`);
  $("#int-display").text(`Intelligence: ${player.stats.intelligence}`);
  $("#dext-display").text(`Dexterity: ${player.stats.dexterity}`);
  $("#health-display").text(`Health: ${player.stats.health}`);
  $("#mana-display").text(`Mana: ${player.stats.mana}`);        
}

function displayEnemy(enemy){
  $("#enemy-display").show();
  $("#e-name-display").text( `${enemy.enemyOne.name},` + ` ` +  `Level ${enemy.enemyOne.level}`);
  $("#e-strength-display").text(`Strength: ${enemy.enemyOne.stats.strength}`);
  $("#e-int-display").text(`Intelligence: ${enemy.enemyOne.stats.intelligence}`);
  $("#e-dext-display").text(`Dexterity: ${enemy.enemyOne.stats.dexterity}`);
  $("#e-health-display").text(`Health: ${enemy.enemyOne.stats.health}`);
}

function updateStats(player){
  setInterval(() => {
    displayCharacter(player);
    
  }, 250);
}



 

$(document).ready(function(){
  let player;
  let enemy;
 
  $("#startTheGame").click(function(event){
    event.preventDefault();
    $("#char-creation").show();
    $("#startTheGame").hide();
    $("#create").show();
    $("#check-false").hide();
  });
 
  $("#create").click(function(event){
    event.preventDefault();
    enemy = new Enemy(this.enemyOne);
    player = new Character($("#name").val(), $("#profession").val(),   $("#strength").val(), $("#intelligence").val(), $("#dexterity").val());
    $("#create").hide();
    $("#char-creation").hide();
    $("#attack").show();
    $("#char-display").show();
    displayEnemy(enemy);
    updateStats(player);
    showImg(player);
  });

  $("#small-heal").click(function(event){
    event.preventDefault();
    player.smallHeal();
  });







$("#attack").click(function(event){
  event.preventDefault();
  //battle.playerDoDamage(player, enemy);
  // $("#combat-log").text(attack(player, enemy));
  // isAlive(player);
  // isAlive(enemy);
  
  $("#rouge-img").animate({
    left: +150 }, function(){
      $("#rouge-img").stop()
    });
   });
  
});

