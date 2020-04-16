export class Enemy {

    enemyOne(){
     this.name = "Francis The Freeze",
     this.level = 1,
     this.stats = {
         health: 100,
         strength: 3,
         intelligence: 2,
         dexterity: 2
     }    
 }
 enemyTwo(){
  this.name = "Pauline The Panda",
  this.level = 2,
  this.stats = {
      health: 100,
      strength: 5,
      intelligence: 2,
      dexterity: 3      
    }   
  // this.img = "https://i.pinimg.com/originals/bf/22/47/bf2247e2b02cdf7c2ff573c6629895a6.gif"
 }
 enemyThree(){
  this.name = "Lazlo the Lizzard",
  this.level = 3,
  this.stats = {
      health: 100,
      strength: 6,
      intelligence: 5,
      dexterity: 5
    }   
    this.img = "https://i.pinimg.com/originals/34/0d/93/340d9376f4a4ef3798a90fd9cd90b3f0.gif"
 }

 enemyFour(){
    this.name = "Torbit The Rabbit-Tortoise...",
    this.level = 1,
    this.stats = {
        health: 100,
        strength: 5,
        intelligence: 2,
        dexterity: 3
      }   
     this.img = "https://i.pinimg.com/originals/60/79/d3/6079d3590cfb577ad573857cc82c535f.gif"
   }
   
   
   enemyBoss(){
    this.name = "Pauline The Panda",
    this.level = 1,
    this.stats = {
        health: 100,
        strength: 5,
        intelligence: 2,
        dexterity: 3
      }  
      this.img = "https://i0.wp.com/68.media.tumblr.com/fc3c347379158d4ca6c444b6fdf08474/tumblr_otreieOgDj1u77u56o1_1280.gif?w=605"
   }



  //  randomBossGenerator(){
  //   const bossArray = {
  //       enemyOne,
  //       enemyTwo,
  //       enemyThree,
  //       enemyFour,
  //       enemyBoss
  //   }
  //   const randomEnemy = bossArray[Math.floor(Math.random() * bossArray.length)];

  //  }

  }