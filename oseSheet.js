const oseCharacterName = document.getElementById("ose_character_name");
const oseCharacterClass = document.getElementById("ose_character_class");
const oseCharacterAlignment = document.getElementById("ose_character_alignment");
const oseCharacterTitle = document.getElementById("ose_character_title");
const oseCharacterLevel = document.getElementById("ose_character_level");

const oseCharacterSTR = document.getElementById("ose_character_str");
const oseCharacterINT = document.getElementById("ose_character_int");
const oseCharacterWIS = document.getElementById("ose_character_wis");
const oseCharacterDEX = document.getElementById("ose_character_dex");
const oseCharacterCON = document.getElementById("ose_character_con");
const oseCharacterCHA = document.getElementById("ose_character_cha");

const oseCharacterDeathSave = document.getElementById("ose_character_d_save");
const oseCharacterWandsSave = document.getElementById("ose_character_w-save");
const oseCharacterParalysisSave = document.getElementById("ose_character_p_save");
const oseCharacterBreathSave = document.getElementById("ose_character_b_save");
const oseCharacterSpellSave = document.getElementById("ose_character_s_save");
const oseCharacterWISBonusToSpellSave = document.getElementById("ose_character_wis_bonus_to_s_saves");

const oseCharacterCurrentHP = document.getElementById("ose_character_current_hp");
const oseCharacterMaxHP = document.getElementById("ose_character_max_hp");
const oseCharacterCONBonusToHP = document.getElementById("ose_character_con_bonus_to_hp");

const oseCharacterCurrentAC = document.getElementById("ose_character_current_ac");
const oseCharacterUnarmouredAC = document.getElementById("ose_character_unarmoured_ac");
const oseCharacterDEXBonusToAC = document.getElementById("ose_character_dex_bonus_to_ac");

const oseCharacterAttackBonus = document.getElementById("ose_character_attack_bonus");
const oseCharacterMeleeAttackBonus = document.getElementById("ose_character_melee_attack_bonus");
const oseCharacterMissileAttackBonus = document.getElementById("ose_character_missile_attack_bonus");

const oseCharacterInitiative = document.getElementById("ose_character_initiative");
const oseCharacterCHABonusToReactions = document.getElementById("ose_character_cha_bonus_to_reactions");

const oseCharacterListenDoorExplore = document.getElementById("ose_character_listen_door_explore");
const oseCharacterOpenDoorExplore = document.getElementById("ose_character_open_door_explore");
const oseCharacterSecretDoorExplore = document.getElementById("ose_character_secret_door_explore");
const oseCharacterFindTrapExplore = document.getElementById("ose_character_find_trap_explore");

const oseCharacterOverlandMovement = document.getElementById("ose_character_overland_movement");
const oseCharacterExplorationMovement = document.getElementById("ose_character_exploration_movement");
const oseCharacterEncounterMovement = document.getElementById("ose_character_encounter_movement");

const oseCharacterCurrentEXP = document.getElementById("ose_character_current_exp");
const oseCharacterNextLevelEXPNeeded = document.getElementById("ose_character_next_level_exp_needed");
const oseCharacterPrimeStatBonusToEXP = document.getElementById("ose_character_prime_stat_bonus_to_exp");

const oseCharacterPlatinumCoins = document.getElementById("ose_character_platinum_coins");
const oseCharacterGoldCoins = document.getElementById("ose_character_gold_coins");
const oseCharacterElectrumCoins = document.getElementById("ose_character_electrum_coins");
const oseCharacterSilverCoins = document.getElementById("ose_character_silver_coins");
const oseCharacterCopperCoins = document.getElementById("ose_character_copper_coins");

const oseCharacterTreasureWeight = document.getElementById("ose_character_treasure_coin_weight");
const oseCharacterWeaponsArmorWeight = document.getElementById("ose_character_weapons_armour_weight");
const oseCharacterTotalCarriedWeight = document.getElementById("ose_character_total_carried_weight");

const oseStatsArray = [oseCharacterSTR, oseCharacterINT, oseCharacterWIS, oseCharacterDEX, oseCharacterCON, oseCharacterCHA];

function oseStatRoller(){
    let numberedRolled;
    
    for (let i = 0; i < oseStatsArray.length; i++){
        numberedRolled = (oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6));
        oseStatsArray[i].innerHTML = numberedRolled;
        console.log(oseStatsArray[i]);
    }    
}

function oseStatBonus(stat){
    let statBonus = 0;
    let number = parseInt(stat.textContent);
    switch(number){
        case 3:
            statBonus = -3;
            break;
        case 4:
        case 5:
            statBonus = -2;
            break;
        case 6:
        case 7:
        case 8:
            statBonus = -1;
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            statBonus = 0;
            break;
        case 13:
        case 14:
        case 15:
            statBonus = +1;
            break;
        case 16:
        case 17:
            statBonus = +2;
            break;
        case 18:
            statBonus = +3;
            break;
        default:
            break;
    }
    return statBonus;
}

function oseStatBonusAssigner(){
    oseCharacterWISBonusToSpellSave.innerHTML = oseStatBonus(oseCharacterWIS);
    oseCharacterCONBonusToHP.innerHTML = oseStatBonus(oseCharacterCON);
    oseCharacterDEXBonusToAC.innerHTML = oseStatBonus(oseCharacterDEX);
    oseCharacterMeleeAttackBonus.innerHTML = oseStatBonus(oseCharacterSTR);
    oseCharacterMissileAttackBonus.innerHTML = oseStatBonus(oseCharacterDEX);
    oseCharacterInitiative.innerHTML = oseStatBonus(oseCharacterDEX);
    oseCharacterCHABonusToReactions.innerHTML = oseStatBonus(oseCharacterCHA);
}

function oseCharacterRaceAvailable(){
    let racesAvailable = ["Half-Orc", "Human"];

    if(parseInt(oseCharacterCON.textContent) >= 9) racesAvailable.push("Svirfneblin", "Duergar", "Dwarf", "Gnome");    
    if(parseInt(oseCharacterINT.textContent) >= 9) racesAvailable.push("Drow", "Elf");    
    if(parseInt(oseCharacterCHA.textContent) >= 9 && parseInt(oseCharacterCON.textContent) >= 9) racesAvailable.push("Half-Elf");    
    if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterDEX.textContent) >= 9) racesAvailable.push("Halfling");    
    
    oseCharacterRacePicker(racesAvailable);
}

function oseCharacterRacePicker(availableRaces){
    let chosenRace = oseDieRoller(1, availableRaces.length) -1;
    let race = availableRaces[chosenRace];

    oseCharacterClass.innerHTML = race + "/ ";
    oseCharacterClassAvailable(race);
}

function oseCharacterClassAvailable(characterRace){
    let classesAvailable = [];
    let rolledClass = 0;
    let chosenClass = "";

    switch(characterRace){
        case "Drow":
        case "Elf":
            classesAvailable.push("Acrobat", "Assassin", "Cleric", "Fighter", "Magic-User", "Thief");
            if(parseInt(oseCharacterWIS.textContent) >= 9) classesAvailable.push("Necromancer");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Knight");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterWIS.textContent) >= 9) classesAvailable.push("Ranger");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Duergar":
        case "Dwarf":
            classesAvailable.push("Assassin", "Cleric", "Fighter", "Thief");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Gnome":
        case "Svirfneblin":
            classesAvailable.push("Acrobat", "Cleric", "Fighter", "Thief");
            if(parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Illusionist");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Half-Elf":
            classesAvailable.push("Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "Magic-User", "Thief");
            if(parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Bard");
            if(parseInt(oseCharacterCHA.textContent) >= 9) classesAvailable.push("Paladin");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Knight");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterWIS.textContent) >= 9) classesAvailable.push("Ranger");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Halfling":
            classesAvailable.push("Druid", "Fighter", "Thief");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Half-Orc":
            classesAvailable.push("Acrobat", "Assassin", "Cleric", "Fighter", "Thief");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
        case "Human":
            classesAvailable.push("Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "Magic-User", "Thief");
            if(parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Bard", "Barbarian", "Illusionist");
            if(parseInt(oseCharacterCHA.textContent) >= 9) classesAvailable.push("Paladin");
            if(parseInt(oseCharacterWIS.textContent) >= 9) classesAvailable.push("Necromancer");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterDEX.textContent) >= 9) classesAvailable.push("Knight");
            if(parseInt(oseCharacterCON.textContent) >= 9 && parseInt(oseCharacterWIS.textContent) >= 9) classesAvailable.push("Ranger");
            rolledClass = oseDieRoller(1, classesAvailable.length) -1; 
            chosenClass = classesAvailable[rolledClass];
            break;
    }

    oseCharacterClass.innerHTML += chosenClass;
    oseCharacterClassInformation(characterRace, chosenClass);
}

function oseCharacterClassInformation(characterRace, characterClass){
    switch(characterRace){
        case "Svirfneblin":
            break;
        case "Duergar":
            break;
        case "Dwarf":
            break;
        case "Gnome":
            break;
        case "Drow":
            break;
        case "Elf":
            break;
        case "Half-Elf":
            break;
        case "Halfling":
            break;
        case "Half-Orc":
            break;
        case "Human":
            break;
    }
    switch(characterClass){
        case "Acrobat":
            break;
        case "Assassin":
            break;
        case "Druid":
            break;
        case "Cleric":
            break;
        case "Fighter":
            break;
        case "Magic-User":
            break;
        case "Theif":
            break;
        case "Barbarian":
            break;
        case "Bard":
            break;
        case "Illusionist":
            break;
        case "Paladin":
            break;
        case "Necromancer":
            break;
        case "Knight":
            break;
        case "Ranger":
            break;
        
    }
}

function oseDieRoller(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

oseStatRoller();
oseStatBonusAssigner();
oseCharacterRaceAvailable();
