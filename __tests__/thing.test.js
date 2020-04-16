import { Character } from '../src/char';
import { Battle } from '../src/battle';
import { Enemy} from '../src/enemy'

describe('Character', () => {
jest.useFakeTimers();
let char;
let battle;
let enemy;
  

  beforeEach(() => {
    battle = new Battle();
    char = new Character();
    char.stats.health = 0,
    char.stats.intelligence = 2,
    char.stats.dexterity = 2,
    char.stats.strength = 2
    char.xP = 7,
    char.level = 1
    enemy = new Enemy();
    enemy.enemyOne.stats.health = 100;
    
  });

  afterEach(function(){
    jest.clearAllTimers();
  });
   


  test('Health should go up by 10', () => {
    char.smallHeal();
    expect(char.stats.health).toEqual(10)
  });

  test('Health should go up by 20', () => {
    char.bigHeal();
    expect( char.stats.health).toEqual (20);    
  });

  test('player stats increase', () => {
    
    char.levelUpTimer();
    jest.advanceTimersByTime(60001)
    expect(char.stats.intelligence).toEqual(3);
    expect(char.stats.dexterity).toEqual(3);
    expect(char.stats.strength).toEqual(3);
  });

  test('player stats increase if level increase', () => {
    
    char.levelUp();
    expect(char.stats.intelligence).toEqual(3);
    expect(char.stats.dexterity).toEqual(3);
    expect(char.stats.strength).toEqual(3);
  });

  test('player level increase after hitting 7 xp' ,() => {
    
    char.levelUp();
    expect(char.level).toEqual(2);
  });

  test('if player health is 0 should be dead', () => {

    char.checkPlayer();
    expect(char.isAlive).toEqual(false);

  });

 test('player does damage to enemy depending on strength', () =>{
  battle.playerDoDamage();
  expect(enemy.enemyOne.stats.health).toEqual(85);
 })

});
