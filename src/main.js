/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './char';
// import { Battle } from './battle';




//Start with character creation button => character creation screen where user puts in data





$(document).ready(function(){
  let player;
 

  function displayCharacter(player){
    $("#name-display").text(`Name: ${player.name}`);
    $("#strength-display").text(`Strength: ${player.stats.strength}`);
    $("#int-display").text(`Intelligence: ${player.stats.intelligence}`);
    $("#dext-display").text(`Dexterity: ${player.stats.dexterity}`);
    $("#mana-display").text(`Mana: ${player.stats.mana}`);
    $("#health-display")
    $("#prof-display").text(`Profession: ${player.profession}`)
    $("#")

  
  }
  
  
  $("#startTheGame").click(function(event){
    event.preventDefault();
    $("#char-creation").show();
    $("#startTheGame").hide();
    $("#create").show();
  });





  $("#create").click(function(event){
    event.preventDefault();
    $("#create").hide();
    $("#attack").show();
    $("#char-creation").hide();
    
    let name = $("#name").val();
    let profession = $("#profession").val();
    let strength = $("#strength").val();
    let intelligence = $("#intelligence").val();
    let dexterity = $("#dexterity").val();

    // let playerChar = new Character( name, profession, strength, intelligence, dexterity);
    // $("#player-stats").text(playerChar.displayCharacter());
  });


//   $("#attack").click(function(event){
//     event.preventDefault();
//       attack();
//   })

});