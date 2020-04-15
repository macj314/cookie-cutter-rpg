/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './char';
// import { startGame } from './thing.js';



//Start with character creation button => character creation screen where user puts in data

$(document).ready(function(){
  $("#startTheGame").click(function(event){
    event.preventDefault();
    $("#char-creation").show();
    $("#startTheGame").hide();
    $("#create").show();
  });




  $("#create").click(function(event){
    event.preventDefault();
    
    let name = ("#name");
    let profession = ("#profession");
    let strength = ("#strength");
    let intelligence = ("#intelligence");
    let dexterity = ("#dexterity");

    let playerChar = new Character( name.val(), profession.val(), strength.val(), intelligence.val(), dexterity.val());
    $("#player-stats").text(displayCharacter(playerChar));
    // $("#player-name").text("Name: " + playerChar.name);
    // $("#player-profession").text("Profession: " + playerChar.profession);
    // $("#player-strength").text("Strength: " + playerChar.strength);
    // $("#player-intelligence").text("Intelligence: " + playerChar.intelligence);
    // $("#player-dexerity").text("Name: " + playerChar.dexterity);

  });

});