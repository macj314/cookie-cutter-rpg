/* eslint-disable no-undef */
import { Character } from '../src/char';





describe('Character', () => {
jest.useFakeTimers();
let char;
  

  beforeEach(() => {
    char = new Character();
    char.stats.health = 80,
    char.stats.intelligence = 2,
    char.stats.dexterity = 2,
    char.stats.strength = 2
    char.stats.xp = 7,
    char.level = 1
  });

  afterEach(function(){
    jest.clearAllTimers();
  });
   


  test('Health should go up by 10', () => {
    char.smallHeal();
    expect(char.stats.health).toEqual(90)
  });

  test('Health should go up by 20', () => {
    char.bigHeal();
    expect( char.stats.health).toEqual (100);    
  });

  test('player stats increase', () => {
    char.levelUpTimer();
    jest.advanceTimersByTime(60001)
    expect(char.stats.intelligence).toEqual(3);
    expect(char.stats.dexterity).toEqual(3);
    expect(char.stats.strength).toEqual(3);
  
  });

  test('player level increase if xp is equal 7', () => {

    char.levelUp();
    expect(char.stats.intelligence).toEqual(3);
    expect(char.stats.dexterity).toEqual(3);
    expect(char.stats.strength).toEqual(3);
  

  })
    


});
