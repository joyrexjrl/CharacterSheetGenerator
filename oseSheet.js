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
    oseCharacterUnarmouredAC.innerHTML = 10 + oseStatBonus(oseCharacterDEX);
    oseCharacterAttackBonus.innerHTML = 0;
    oseCharacterGoldCoins.innerHTML = parseInt((oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6)) * 10);
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

function osePrimeReqExpBonus(primeStat){
    let expBonus = 0;

    switch(primeStat){
        case 3:
        case 4:
        case 5:
            expBonus = -20;
            break;
        case 6:
        case 7:
        case 8:
            expBonus = -10;
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            expBonus = 0;
            break;
        case 13:
        case 14:
        case 15:
            expBonus = 5;
            break;
        case 16:
        case 17:
        case 18:
            expBonus = 10;
            break;   
    }

    return expBonus;
}

function oseHitPointRoller(dieType){
    let tempHp = parseInt((oseDieRoller(1, dieType)) + oseCharacterCONBonusToHP);
    if(tempHp < 1) tempHp = 1;
    oseCharacterMaxHP.innerHTML = tempHp;
    oseCharacterCurrentHP.innerHTML = tempHp;
}

function oseCharacterMaxLevel(charRace, charClass){
    let levelPassed = 0;

    switch(charClass){
        case "Acrobat":
            if(charRace == "Drow" || charRace == "Elf") levelPassed = 10;
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Half-Orc") levelPassed = 8;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Assassin":
            if(charRace == "Svirfneblin" || charRace == "Half-Orc") levelPassed = 8;
            if(charRace == "Duergar" || charRace == "Dwarf") levelPassed = 9;
            if(charRace == "Gnome") levelPassed = 6;
            if(charRace == "Drow" || charRace == "Elf") levelPassed = 10;
            if(charRace == "Half-Elf") levelPassed = 11;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Druid":
            if(charRace == "Elf") levelPassed = 8;
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Halfling") levelPassed = 6;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Cleric":
            if(charRace == "Svirfneblin" || charRace == "Gnome") levelPassed = 7;
            if(charRace == "Duergar" || charRace == "Dwarf") levelPassed = 8;
            if(charRace == "Drow") levelPassed = 11;
            if(charRace == "Elf") levelPassed = 7;
            if(charRace == "Half-Elf") levelPassed = 5;
            if(charRace == "Half-Orc") levelPassed = 4;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Fighter":
            if(charRace == "Svirfneblin" || charRace == "Gnome") levelPassed = 6;
            if(charRace == "Duergar") levelPassed = 9;
            if(charRace == "Dwarf") levelPassed = 10;
            if(charRace == "Elf" || charRace == "Drow") levelPassed = 7;
            if(charRace == "Half-Elf") levelPassed = 8;
            if(charRace == "Halfling") levelPassed = 6;
            if(charRace == "Half-Orc") levelPassed = 10;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Magic-User":
        case "Necromancer":
        case "Ranger":
            if(charRace == "Drow") levelPassed = 9;
            if(charRace == "Elf") levelPassed = 11;
            if(charRace == "Half-Elf") levelPassed = 8;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Thief":
            if(charRace == "Svirfneblin" || charRace == "Gnome") levelPassed = 8;
            if(charRace == "Duergar" || charRace == "Dwarf") levelPassed = 9;
            if(charRace == "Drow") levelPassed = 11;
            if(charRace == "Elf") levelPassed = 10;
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Halfling" || charRace == "Half-Orc") levelPassed = 8;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Barbarian":
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Bard":
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Illusionist":
            if(charRace == "Svirfneblin" || charRace == "Gnome") levelPassed = 7;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Paladin":
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Human") levelPassed = 14;
            break;
        case "Knight":
            if(charRace == "Elf") levelPassed = 11;
            if(charRace == "Half-Elf") levelPassed = 12;
            if(charRace == "Human") levelPassed = 14;
            break;
    }

    return levelPassed;    
}

function oseCharacterSaves(characterClass){
    let characterSavesArray = [oseCharacterDeathSave, oseCharacterWandsSave, oseCharacterParalysisSave,
        oseCharacterBreathSave, oseCharacterSpellSave, oseCharacterWISBonusToSpellSave];

    switch(characterClass){
        case "Acrobat":
        case "Assassin":
        case "Bard":
        case "Illusionist":
        case "Magic-User":
        case "Thief":
        case "Necromancer":
            characterSavesArray[0].innerHTML = 13;
            characterSavesArray[1].innerHTML = 14;
            characterSavesArray[2].innerHTML = 13;
            characterSavesArray[3].innerHTML = 16;
            characterSavesArray[4].innerHTML = 15;
            break;
        case "Knight":
        case "Ranger":
        case "Fighter":
            characterSavesArray[0].innerHTML = 12;
            characterSavesArray[1].innerHTML = 13;
            characterSavesArray[2].innerHTML = 14;
            characterSavesArray[3].innerHTML = 15;
            characterSavesArray[4].innerHTML = 16;
            break;
        case "Druid":
        case "Cleric":
            characterSavesArray[0].innerHTML = 11;
            characterSavesArray[1].innerHTML = 12;
            characterSavesArray[2].innerHTML = 14;
            characterSavesArray[3].innerHTML = 16;
            characterSavesArray[4].innerHTML = 15;
            break;
        case "Barbarian":
            characterSavesArray[0].innerHTML = 10;
            characterSavesArray[1].innerHTML = 13;
            characterSavesArray[2].innerHTML = 12;
            characterSavesArray[3].innerHTML = 15;
            characterSavesArray[4].innerHTML = 16;
            break;
        case "Paladin":
            characterSavesArray[0].innerHTML = 10;
            characterSavesArray[1].innerHTML = 11;
            characterSavesArray[2].innerHTML = 12;
            characterSavesArray[3].innerHTML = 13;
            characterSavesArray[4].innerHTML = 14;
            break;        
    }
}

function oseCharacterExpNeededToLevel(characterClass){
    let xpNeeded = 0;
    switch(characterClass){
        case "Barbarian":
        case "Illusionist":
        case "Magic-User":
        case "Knight":
        case "Necromancer":
            xpNeeded = 2500;
            break;
        case "Druid":
        case "Bard":
        case "Fighter":
            xpNeeded = 2000;
            break;
        case "Acrobat":
        case "Thief":
            xpNeeded = 1200;
            break;
        case "Cleric":
        case "Assassin":
            xpNeeded = 1500;
            break;
        case "Ranger":
            xpNeeded = 2250;
            break;
        case "Paladin":
            xpNeeded = 2750;
            break;
    }
    return xpNeeded;
}

function oseCharacterRaceAbilityModifier(abilityScore, abilityMod){
    let tempScore = parseInt(abilityScore) + parseInt(abilityMod);
    if(tempScore < 3) tempScore = 3;
    if(tempScore > 18) tempScore = 18;
    return tempScore;
}

function oseCharacterClassInformation(characterRace, characterClass){
    let tempStat = 0;
    let maxLevel = parseInt(oseCharacterMaxLevel(characterRace, characterClass));
    let xpNeededToLevel = parseInt(oseCharacterExpNeededToLevel(characterClass));

    oseCharacterCurrentEXP.innerHTML = 0;
    oseCharacterNextLevelEXPNeeded.innerHTML = xpNeededToLevel;
    oseCharacterLevel.innerHTML = "1/ " + maxLevel;

    switch(characterRace){
        case "Svirfneblin":
            break;
        case "Duergar":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            break;
        case "Dwarf":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            break;
        case "Gnome":
            break;
        case "Drow":            
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            break;
        case "Elf":
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            break;
        case "Half-Elf":
            break;
        case "Halfling":
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            break;
        case "Half-Orc":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -2);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, 1);
            break;
        case "Human":
            break;
    }
    switch(characterClass){
        case "Acrobat":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Assassin":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Druid":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Cleric":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Fighter":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Magic-User":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Thief":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Barbarian":
            tempStat = oseCharacterSTR.textContent < oseCharacterCON.textContent ? oseCharacterSTR.textContent : oseCharacterCON.textContent;
            
            if(oseCharacterSTR.textContent >= 16 && oseCharacterCON.textContent >= 16) oseCharacterPrimeStatBonusToEXP.innerHTML = 10;
            else if(oseCharacterSTR.textContent >= 13 || oseCharacterCON.textContent >= 13) oseCharacterPrimeStatBonusToEXP.innerHTML = 5;
            else oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(tempStat));

            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Bard":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterCHA.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Illusionist":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Paladin":
            tempStat = oseCharacterSTR.textContent < oseCharacterWIS.textContent ? oseCharacterSTR.textContent : oseCharacterWIS.textContent;
            
            if(oseCharacterSTR.textContent >= 16 && oseCharacterWIS.textContent >= 16) oseCharacterPrimeStatBonusToEXP.innerHTML = 10;
            else if(oseCharacterSTR.textContent >= 13 || oseCharacterWIS.textContent >= 13) oseCharacterPrimeStatBonusToEXP.innerHTML = 5;
            else oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(tempStat));

            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Necromancer":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Knight":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Ranger":
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;        
    }
}

function oseDieRoller(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

oseStatRoller();
oseStatBonusAssigner();
oseCharacterRaceAvailable();
