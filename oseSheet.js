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

const oseCharacterAbilitySkillsWeapons = document.getElementById("ose_character_ability_skills_weapons");
const oseCharacterLanguages = document.getElementById("ose_character_languages");
const oseCharacterEquipment = document.getElementById("ose_character_equipment");
const oseWeaponsArmorDisplay = document.getElementById("ose_weapons_armor_display");

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
    let baseMovementRate = 120;
    oseCharacterOverlandMovement.innerHTML = baseMovementRate/2;
    oseCharacterExplorationMovement.innerHTML = baseMovementRate;
    oseCharacterEncounterMovement.innerHTML = baseMovementRate/2;

    oseCharacterWISBonusToSpellSave.innerHTML = oseStatBonus(oseCharacterWIS);
    oseCharacterCONBonusToHP.innerHTML = oseStatBonus(oseCharacterCON);
    oseCharacterDEXBonusToAC.innerHTML = oseStatBonus(oseCharacterDEX);

    oseCharacterMeleeAttackBonus.innerHTML = oseStatBonus(oseCharacterSTR);
    oseCharacterMissileAttackBonus.innerHTML = oseStatBonus(oseCharacterDEX);

    oseCharacterInitiative.innerHTML = oseStatBonus(oseCharacterDEX);
    oseCharacterCHABonusToReactions.innerHTML = oseStatBonus(oseCharacterCHA);

    oseCharacterUnarmouredAC.innerHTML = 10 + oseStatBonus(oseCharacterDEX);
    oseCharacterAttackBonus.innerHTML = 0;

    oseCharacterListenDoorExplore.innerHTML = 1;
    oseCharacterOpenDoorExplore.innerHTML = oseStatBonus(oseCharacterSTR);
    if(oseCharacterOpenDoorExplore.textContent < 0) oseCharacterOpenDoorExplore.innerHTML = 0;
    oseCharacterSecretDoorExplore.innerHTML = 1;
    oseCharacterFindTrapExplore.innerHTML = 1;
    
    oseCharacterGoldCoins.innerHTML = parseInt((oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6)) * 10);
}

function oseAlingmentPicker(characterAlingment){
    let rolledAlingment = 0;
    rolledAlingment = oseDieRoller(1, characterAlingment.length) -1;
    oseCharacterAlignment.innerHTML = characterAlingment[rolledAlingment];
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
            classesAvailable.push("Assassin", "Cleric", "Fighter", "Thief");
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
    let tempHp = parseInt(oseDieRoller(1, dieType));
    oseCharacterMaxHP.innerHTML = tempHp + parseInt(oseCharacterCONBonusToHP.textContent);
    if(tempHp < 1) tempHp = 1;    
    oseCharacterCurrentHP.innerHTML = oseCharacterMaxHP.textContent;
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

function oseCharacterLanguagePicker(INTBonus, racialLanguagesBonus, otherLanguages){
    let tempNumber = 0;
    if(INTBonus < 0) INTBonus = 0;
    if(INTBonus > 0){
        for(let i = INTBonus; i > 0; i--){
            tempNumber = oseDieRoller(1, otherLanguages.length);
            racialLanguagesBonus.push(otherLanguages[tempNumber]);
        }
    }
    for(let j = 0; j < racialLanguagesBonus.length; j++){
        oseCharacterLanguages.innerHTML += racialLanguagesBonus[j] + "<br>";
    }
}

function oseCharacterNameGenerator(characterRace){
    let elfFirstNames = ["Elara", "Eadric", "Eirlys", "Gaelyn", "Galadriel", "Lirien", "Nessa", "Niamh", "Tahlia", "Aeloria", "Arwen", "Calantha", "Celadriel", "Darian", "Elenwë", "Erith", "Eiluned", "Fëanor", "Gwindor", "Gwendolyn", "Ithilien", "Lúthien", "Melian", "Orodreth", "Rúmil", "Rhoslyn", "Soronúmë", "Turgon", "Ulmo", "Varda", "Yavanna", "Zinnober", "Beryndiel"];
    let elfLastNames = ["Moonwhisper", "Starlight", "Silverthorn", "Moonblade", "Windrunner", "Woodwhisper", "Moonstone", "Wildheart", "Treesinger", "Stormchaser", "Starweaver", "Skydancer", "Shadowstrike", "Seaswept", "Riverflow", "Rainwhisper", "Nightshade", "Mountainborn", "Mistdancer", "Lunarfall", "Leafwhisper", "Lakeheart", "Iceborn", "Highborn", "Hearthfire", "Hawkwing", "Havensoul", "Greenshadow", "Gemheart", "Fireheart", "Fernshadow", "Farseer", "Eaglewing", "Dreamweaver", "Dragonheart", "Dawnchaser", "Darkwater", "Crimsonwing", "Cloudwhisper", "Cedarfall", "Celestial", "Celestia", "Celestiel", "Celestyn", "Chantriel"];
    let dwarfFirstNames = ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Dalgal", "Darrak", "Delg", "Eberk", "Einkil", "Elmar", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Ulrich", "Vondal", "Agar", "Aram", "Lorg", "Orlen", "Rakkulf", "Dur", "Durgur", "Orthr", "Al’Dan", "Stwulf", "Argon", "Bargur", "Fisthel", "Kron", "Dulg", "Klond", "Durgal", "Lurg", "Smut", "Kragg", "Thalrus", "Torr", "Gern", "Klag", "Borjal", "Gurjarn", "Narguraz", "Komraz", "Ork", "Mogun", "Yonala", "Dathak", "Eiran", "Rhonda", "Haudra", "Mudskull", "Kalla", "Seimur", "Deimra", "Picarvella", "Dolund", "Carys", "Esmund", "Karaza", "Dregur", "Gyzunna", "Mornaugr", "Fionnuala", "Lucildel", "Rassur", "Whelanda", "Balda", "Dotty", "Bardur"];
    let dwarfLastNames = ["Battlehammer", "Blacksmith", "Brightblade", "Copperbeard", "Deepdelver", "Fireforge", "Frostbeard", "Gemcutter", "Goldenhorn", "Ironfist", "Ironforge", "Ironhewer", "Ironstrike", "Longbeard", "Mithrilforge", "Mountainheart", "Redbeard", "Rockseeker", "Silverblade", "Silverforge", "Steelbeard", "Stonefist", "Strongheart", "Thickbeard", "Thunderfist", "Tunnelfinder", "Underfoot", "Warhammer", "Whiteshield", "Wildstrike", "Wyrmslayer", "Adamantforge", "Dwarfthunder", "Earthenheart", "Fireheart", "Gemheart", "Granitefist", "Grimforge", "Ironheart", "Mountainfist", "Rockfist", "Stonedelver", "Stormheart", "Thunderheart", "Underhill", "Wrathforge", "Hulgdirth", "Firecoal", "Stwulfson", "Runestone", "Vahk", "Al’Dawn", "Dawnnose", "Deeprock", "Barrelbelly", "Niblock", "Stubbleback", "Stoneminded", "Stonehide", "Torlek", "Brutemaul", "Oakenskin", "Thunderbelly", "Klagdor", "Udgson", "Sikgwil", "Gernwulf", "Zurgash", "Thunderbeard", "Ghostaxe", "Thunderbeard", "Nargrim", "Stonehide", "Darkface", "Thunderfist", "Dawnstone", "Zarzur", "Tundra", "Glacier", "Moonrock", "Nargrum", "Mountainbeard", "Nargnur", "Valantyr", "Klaggor", "Arktur", "Dobroldson", "Grumbar", "Nargrim", "Dawnskull", "Doomskull", "Fireking", "Gurgaz", "Neckscalde"];
    let duergarLastNames = ["Blackaxe", "Darkforge", "Deepdelver", "Graybeard", "Grimforge", "Ironclad", "Ironfist", "Ironmask", "Ironmine", "Ironvein", "Leadbeard", "Malachite", "Obsidian", "Onyxclaw", "Quicksilver", "Shadowstrike", "Silvershield", "Stonefist", "Stonemantle", "Stonerage", "Stonewalker", "Stormshield", "Underfoot", "Underhill", "Undermine", "Undertow", "Underworld", "Veinsplitter", "Whiteshield", "Wrathforge", "Barrenbreath", "Skullrest", "Flintpride", "Brokeneye", "Doomsorrow", "Shadowaxe", "Blackslice", "Hellslice", "Wrathmaster", "Rustforge", "Moltenbrow", "Vicehunt", "Shadowgrace", "Flamerock", "Blackfavor", "Undercrusher", "Ashfury", "Madgore", "Darkeater"];
    let gnomeFirstNames = ["Adan", "Adva", "Aiko", "Amorette", "Aripine", "Armida", "Belita", "Bonita", "Brenna", "Brooke", "Bingles", "Banxi", "Bink", "Banli", "Bitsy", "Bitty", "Bixi", "Carlin", "Charlene", "Celqys", "Carnoa", "Darra", "Demi", "Dinky", "Elfi", "Flimp", "Giggbert", "Half-Pint", "Herble", "Helna", "Hisxif", "Dustseeker", "Nuttlattle", "Bernifitlacks", "Ipswoms", "Pelletsniffer", "Tinkerfoot", "Gemhair", "Blaesocket", "Sabblewloth", "Muwlebra", "Giobibaar", "Woh", "Apleldosp", "Mirlon", "Peedlupnon", "Krackhig", "Deedler", "Khaalkru", "Shaget", "Thitlu", "Waicke", "Theghaddi", "Wote", "Shetturs", "Tothul", "Manais", "Iskiryi", "Graknan", "Hegilli", "Ghickut", "Wudgend", "Huskill", "Theghiala", "Kraknank", "Karthmi", "Dakturs", "Ussin", "Ghiegglac", "Neghalni", "Madlili", "Khontrut", "Thigglud", "Thanee", "Yamga"];
    let gnomeLastNames = ["Bearslayer", "Brightblade", "Clockwinder", "Copperpot", "Deepdelver", "Gemcutter", "Goldenhorn", "Greenbottle", "Ironfist", "Ironforge", "Laughingloon", "Longbeard", "Mithrilforge", "Moonwhisper", "Redbeard", "Rockseeker", "Silverblade", "Silverforge", "Steelbeard", "Stonefist", "Tinkertop", "Tunnelfinder", "Underfoot", "Whiteshield", "Wildheart", "Wildstrike", "Wyrmslayer", "Yellowbell", "Zephyrwhistle", "Bratlic Turfsurvey", "Fruklu Terratemp", "Schnartank Eartwister", "Gigget Pilwicken", "Krankle Slyfox", "Bink Leffery", "Dugguld Lapisseizer", "Wilfiz Klulnulme", "Frelwic Littlefoot", "Gontull Claymoulder", "Warver Eyeswitcher", "Xogim Flintsweeper", "Tanziver Cobblemug", "Merfan Rapleth", "Graziver Slatenose", "Merzu Shelfbender", "Warkas Coppersnatcher", "Dokli Rubyforger", "Tildrull Dustsnorter", "Snegick Boulderforger", "Drendan Dirtcarrier", "Figglar Gemfinger"];
    let drowFirstNames = ["Balok", "Baragh", "Belaern", "Belgos", "Bemril", "Berg’inyon", "Bhintel", "Brorn", "Bruherd", "Caelkoth", "Callimar", "Chakos", "Chaszmyr", "Coranzen", "Dantrag", "Dhuunyl", "Dinin", "Dresmorlin", "Dro", "Duagloth", "Durdyn", "Hadrogh", "Hatch’net", "Honemmeth", "Houndaer", "Ildan", "Ilmryn", "Ilphrin", "Imbros", "Irennan", "Istolil", "Istorvir", "Iymril", "Jaezred", "Jalynfein", "Jeggred", "Jevan", "Jhaamdath", "Jhaldrym", "Jivvin", "Jyslin", "K’yorl", "Vielyn", "Vlondril", "Vorn", "Vuzlyn", "Welverin", "Xarann", "Xundus", "Yazston", "Yuimmar", "Zaknafein", "Zeerith", "Zyn", "Akordia", "Alaunirra", "Alystin", "Amalica", "Angaste", "G’eldriia", "Gaussra", "Ghilanna", "Greyanna", "Gurina", "Haelra", "Halisstra", "Ilharess", "Lledrith", "Llolfaen", "Lualyrr", "Lythrana", "Malice", "Maya", "Menzoberra", "Mez’Barris", "Micarlin", "Miz’ri", "Mizzrym", "Myrymma", "Urmelena", "Vhondryl", "Viconia", "Vierna", "Vornalla", "Waerva", "Wuyondra", "Xalyth", "Xullrae", "Xune", "Yasrena", "Yvonnel", "Z’ress", "Zarra", "Zebeyana", "Zeerith", "Zelpassa", "Zendalure", "Zesstra", "Zilvra"];
    let drowLastNames = ["A’Daragon", "Abaeir", "Abbylan", "Argith", "Baenre", "Beltaulur", "Blaerabban", "Blundyth", "Chaulssin", "Coborel", "Coloara", "Cormrael", "Daevion’lyr", "Dalael", "Dhalmass", "Dhunnyl", "Diliriy", "Dinoryn", "Dryaalis", "Duskryn", "Dyrr", "Elpragh", "Elpragh", "Faertala", "Filifar", "Gallaer", "Glannath", "Glaurach", "Helviiryn", "Hune", "Hunzrin", "Hyluan", "Icharyd", "Ilaleztice", "Illistyn", "Illykur", "Jhalavar", "Jusztiirn", "Keteeruae", "Khalazza", "Kront’tane", "Mizzrym", "Mlezziir", "Naerth", "Nirinath", "Olonrae", "Omriwin", "Philiom", "Quavein", "Rhomduil", "Rrostarr", "Seerear", "Ssambra", "T’orgh", "T’sarran", "Tanor’Thal", "Telenna", "Tlin’orzza", "Tlintarn", "Tuin", "Uloavae", "Vrammyr", "Vrinn", "Waeglossz", "Xiltyn", "Yauntyrr", "Yauthlo", "Yril’Lysaen", "Zaphresz", "Zauviir", "Zolond"];
    let svirfneblinLastNames = ["Flintbasher", "Lodgeeyes", "Zircontooth", "Quartztwister", "Roughfinder", "Slabmelter", "Rubymoulder", "Millbrowser", "Zincbasher", "Depositbrowser", "Slabbasher", "Soilmug", "Limesniffer", "Zirconbasher", "Diamondtemperer", "Amethystsenser", "Seamwatcher", "Brickgrinder", "Sturdytemperer", "Scrapfingers", "Slateseizer", "Millsmelter", "Rocksweeper", "Bronzetrader", "Sandmaker", "Nuggetswitcher", "Jointsnatcher", "Fossilscratcher", "Wiresplitter", "Moldpacker", "Irondigger", "Boulderduster", "Depositscanner", "Bouldereye", "Pelletcrusher", "Wedgebreaker", "Dustsenser", "Peridotforger", "Lumpsorter", "Metalrater", "Metalchewer", "Geopusher", "Pelletwatcher", "Masonteeth", "Lapisfinder", "Agatechest", "Orechin", "Rubyfist", "Cobbleeyes", "Bedrockmender", "Sturdyleg", "Shelfstamper", "Limefeet", "Clayviewer"];
    let halflingFirstNames = ["Seraphina", "Asphodel", "Hilda", "Mazzy", "Balbina", "Merry", "Bonita", "Diamond", "Merla", "Arabella", "Mirabella", "Ayita", "Susannah", "Alora", "Lavinia", "Belinda", "Charmaine", "Lidda", "Gelvira", "Berylla", "Portia", "Primula", "Angelica", "Asphodel", "Ruby", "Brunella", "Armida", "Aiko", "Malva", "Belladonna", "Peony", "Rose", "Arabella", "Carlotta", "Bellisima", "Garret", "Cottar", "Adelard", "Bill", "Otho", "Anson", "Andwise", "Hob", "Ronald", "Beau", "Olo", "Kepli", "Bodo", "Balbo", "Drogo", "Hildigrim", "Adric", "Dudo", "Eder", "Largo", "Rufus", "Rorimac", "Haldon", "Barner", "Joyas", "Tarkas", "Adelard", "Valkas", "Gokin"];
    let halflingLastNames = ["Ashworthy", "Moonward", "Longfoot", "Headstrong", "Hamson", "Dudley", "Faneth", "Fleetfoot", "Billberry", "Bolger", "Brandybuck", "Bullroarer", "Dale", "Devix", "Gardner", "Gammidge", "Rosetopple", "Shadowbrand", "Rumblecrest", "Freebough", "Appleleaf", "Grandbelly", "Cherryhand", "Laughingwillow", "Lightwater", "Barleyglide", "Ravenlade", "Smoothhearth", "Heartmane", "Hillflow", "Glowsong", "Whisperbloom", "Flintglide", "Cinderbranch"];
    let halfOrcNames = ["Tandrech", "Kul", "Daavaim", "Krivuun", "Gnibad", "Crukazvi", "Nod", "Thralulro", "Miadurk", "Nirdal", "Cimex", "Ningish", "Bol", "Sardi", "Nuzuh", "Gox", "Hoth", "Wighidin", "Cex", "Dord", "Gim", "Kiavi", "Nird", "Dorravaa", "Met", "Nimex", "Rangu", "Hastrach", "Crelradhuch", "Brot", "Brukraidirk", "Lash", "Gnud", "Likrulirg", "Biath", "Bredungem", "Weglay", "Futh", "Pamge", "Kih", "Sodlo", "Wex", "Orluth", "Thenge", "Cin", "Casduco", "Hitu", "Aisi", "Tish"];
    let humanFirstNames = ["Carden", "Draven", "Barkley", "Mikel", "Oskar", "Larry", "Arnhold", "Lindon", "Otto", "Hans", "Per", "Darrion", "Jacque", "Wassilie", "Ian", "Marden", "Tomke", "Lincoln", "Loga", "Hetdt", "Juliette", "Bridgette", "Kyleigh", "Isalda", "Aggy", "Wilf", "Tiara", "Sam", "Dasia", "Jacalynn", "Alysha", "Shar", "Shelby", "Pell", "Reese", "Ryland", "Hein", "Beldon", "Ravin", "Nelles", "Bastle", "Joey", "Sylvester", "Vardon", "Brooks", "Pierce", "Rudi", "Akim", "Levin", "Luther", ""];
    let humanLastNames = ["Uan", "Cieng", "Jindurne", "Gizulda", "Zammed", "Cidu", "Rapidscribe", "Fletcher", "Shoemaker", "Tailer", "Hydrapelt", "Sesk", "Merdosk", "Mournclaw", "Lehrihpafk", "Biltram", "Zuvintetva", "Dua", "Bidrinil", "Yalve", "Qing", "Nei", "Sulilda", "Daoy", "Merdosk", "Zuvintetve", "Dulmugu", "Dua", "Hastu", "Zeimmu", "Mossbinder", "Scribe", "Susk", "Sokrosk", "Vuntezd", "Chubok", "Qao", "Jassi", "Velas", "Estorus", "Khussom", "Danaz", "Granddorb", "Trodurgano", "Mokyadze", "Dao", "Zula"];

    let characterNamePlaceholder = "";
    let firstNameNumber = 0;
    let secondNameNumber = 0;

    switch(characterRace){
        case "Svirfneblin":
            characterNamePlaceholder = gnomeFirstNames[(oseDieRoller(1, gnomeFirstNames.length)-1)] + " " + svirfneblinLastNames[(oseDieRoller(1, svirfneblinLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Duergar":
            characterNamePlaceholder = dwarfFirstNames[(oseDieRoller(1, dwarfFirstNames.length)-1)] + " " + duergarLastNames[(oseDieRoller(1, duergarLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Dwarf":
            characterNamePlaceholder = dwarfFirstNames[(oseDieRoller(1, dwarfFirstNames.length)-1)] + " " + dwarfLastNames[(oseDieRoller(1, dwarfLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Gnome":
            characterNamePlaceholder = gnomeFirstNames[(oseDieRoller(1, gnomeFirstNames.length)-1)] + " " + gnomeLastNames[(oseDieRoller(1, gnomeLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Drow":
            characterNamePlaceholder = drowFirstNames[(oseDieRoller(1, drowFirstNames.length)-1)] + " " + drowLastNames[(oseDieRoller(1, drowLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Elf":
            characterNamePlaceholder = elfFirstNames[(oseDieRoller(1, elfFirstNames.length)-1)] + " " + elfLastNames[(oseDieRoller(1, elfLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Half-Elf":
            firstNameNumber = (oseDieRoller(1, 2));

            if(firstNameNumber == 1) characterNamePlaceholder = elfFirstNames[(oseDieRoller(1, elfFirstNames.length)-1)];
            else characterNamePlaceholder = humanFirstNames[(oseDieRoller(1, humanFirstNames.length)-1)];

            secondNameNumber = (oseDieRoller(1, 2));

            if(secondNameNumber == 1) characterNamePlaceholder += " " + elfLastNames[(oseDieRoller(1, elfLastNames.length)-1)];                
            else characterNamePlaceholder += " " + humanLastNames[(oseDieRoller(1, humanLastNames.length)-1)];

            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Halfling":
            characterNamePlaceholder = halflingFirstNames[(oseDieRoller(1, halflingFirstNames.length)-1)] + " " + halflingLastNames[(oseDieRoller(1, halflingLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Half-Orc":
            characterNamePlaceholder = halfOrcNames[(oseDieRoller(1, halfOrcNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
        case "Human":
            characterNamePlaceholder = humanFirstNames[(oseDieRoller(1, humanFirstNames.length)-1)] + " " + humanLastNames[(oseDieRoller(1, humanLastNames.length)-1)];
            oseCharacterName.innerHTML = characterNamePlaceholder;
            break;
    }
}

function oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations){
    let weaponsTypeLearned = ["Battle axe", "Club", "Crossbow", "Dagger", "Hand axe", "Javelin", "Lance", "Long bow", "Mace", "Polearm", "Short bow", "Short sword", "Sling", "Spear", "Staff", "Sword", "Two-handed sword", "War hammer"];
    let weaponTypeKnown = [];
    let numberOfRolls = 1;
    let randomRoll = 0;
    let weaponSpecialisation = "";
    let weaponOfChoice = "";
    if(martialType == "martial") numberOfRolls = 4;
    if(martialType == "semi-martial") numberOfRolls = 3;
    oseCharacterAbilitySkillsWeapons.innerHTML += "Weapon Proficiency:" + "<br>";

    if(weaponLimitations.length > 0){
        for(let i = 0; i < numberOfRolls; i++){
            randomRoll = oseDieRoller(1, weaponLimitations.length) -1;
            weaponTypeKnown.push(weaponLimitations[randomRoll]);
            weaponOfChoice = weaponTypeKnown[0];
        }
    }else{
        for(let i = 0; i < numberOfRolls; i++){
            randomRoll = oseDieRoller(1, weaponsTypeLearned.length) -1;
            weaponTypeKnown.push(weaponsTypeLearned[randomRoll]);
            weaponOfChoice = weaponTypeKnown[0];
        }
    }
    
    for(let i = 0; i < weaponTypeKnown.length; i++){
        for(let j = i+1; j < weaponTypeKnown.length; j++){
            if(weaponTypeKnown[i] === weaponTypeKnown[j]){
                weaponSpecialisation += weaponTypeKnown[i] + " -weapon specialisation, +1 to attack and damage"
                weaponTypeKnown.splice(j, 1);
                weaponOfChoice = weaponTypeKnown[i];
                weaponTypeKnown.splice(i, 1);                
                weaponTypeKnown.push(weaponSpecialisation);                
            }
        }
    }
    
    for(let i = 0; i < weaponTypeKnown.length; i++){
        oseCharacterAbilitySkillsWeapons.innerHTML += "• " + weaponTypeKnown[i] + "<br>";
    }

    oseWeaponPicker(weaponOfChoice);
}

function weaponQualitiesDisplayer(qualitiesArray){
    let quality = "";
    switch(qualitiesArray){
        case "Blunt":
            return quality += "• " + "Blunt: May be used by clerics." + "<br>";
        case "Brace":
            return quality += "• " + "Brace: Bracing against the ground doubles damage against charging monsters." + "<br>";
        case "Charge":
            return quality += "• " + "Charge: While mounted, moving at least 60' in a round and attacking doubles any damage done with a successful hit." + "<br>";
        case "Melee":
            return quality += "• " + "Melee: Close quarters weapon (5' or less)." + "<br>";
        case "Missile":
            return quality += "• " + "Missile: Thrown or fired weapons (grater than 5' distance). The distance for short (+1 to hit), medium, and long (-1 to hit) range are shown in parentheses." + "<br>";            
        case "Reload":
            return quality += "• " + "Reload (optional rule): Requires a round to reload between shots; can only be fired every second round." + "<br>";
        case "Slow":
            return quality += "• " + "Slow: The character acts last in each combat round." + "<br>";
        case "Splash weapon":
            return quality += "• " + "Splash weapon: On a successful attack, the container smashes and douses the target with the liquid. The listed damage is inflicted for two rounds, as the liquid drips off." + "<br>";
        case "Two-handed":
            return quality += "• " + "Two-handed: Requires both hands; the character cannot use a shield." + "<br>";
    }
}

function oseWeaponPicker(weaponOfChoice){
    const battleAxe = {weapon:"Battle axe", cost:7, damage:"1d8", weight:50, qualities:["Melee", "Slow", "Two-handed"]};
    const club = {weapon:"Club", cost:3, damage:"1d4", weight:50, qualities:["Blunt", "Melee"]};
    const crossbow = {weapon:"Crossbow", cost:30, damage:"1d6", weight:50, qualities:["Missile", "Reload", "Slow", "Two-handed"], range:"(5'-80'/ 81'-160'/ 161'-240')"};
    const dagger = {weapon:"Dagger", cost:3, damage:"1d4", weight:10, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"};
    const handAxe = {weapon:"Hand axe", cost:4, damage:"1d6", weight:30, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"};
    const holyWaterVial = {weapon:"Holy water vial", cost:25, damage:"1d8", weight:1, qualities:["Missile", "Splash weapon"], range:"(5'-10'/ 11'-30'/ 31'-50')"};
    const javelin = {weapon:"Javelin", cost:1, damage:"1d4", weight:20, qualities:["Missile"], range:"(5'-30'/ 31'-60'/ 61'-90')"};
    const lance = {weapon:"Lance", cost:1, damage:"1d6", weight:120, qualities:["Charge", "Melee"]};
    const longBow = {weapon:"Long Bow", cost:40, damage:"1d6", weight:30, qualities:["Missile", "Two-handed"], range:"(5'-70'/ 71'-140'/ 141'-210')"};
    const mace = {weapon:"Mace", cost:5, damage:"1d6", weight:30, qualities:["Blunt", "Melee"]};
    const oilFlaskBurning = {weapon:"Oil flask, burning", cost:2, damage:"1d8", weight:1, qualities:["Missile", "Splash weapon"], range:"(5'-10'/ 11'-30'/ 31'-50')"};
    const polearm = {weapon:"Polearm", cost:7, damage:"1d10", weight:150, qualities:["Brace", "Melee", "Slow", "Two-handed"]};
    const shortBow = {weapon:"Short bow", cost:25, damage:"1d6", weight:30, qualities:["Missile", "Two-handed"], range:"(5'-50'/ 51'-100'/ 101'-150')"};
    const shortSword = {weapon:"Short sword", cost:7, damage:"1d6", weight:30, qualities:["Melee"]};
    const silverDagger = {weapon:"Silver dagger", cost:30, damage:"1d4", weight:10, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"};
    const sling = {weapon:"Sling", cost:2, damage:"1d4", weight:20, qualities:["Blunt", "Missile"], range:"(5'-40'/ 41'-80'/ 81'-160')"};
    const spear = {weapon:"Spear", cost:3, damage:"1d6", weight:30, qualities:["Brace", "Melee", "Missile"], range:"(5'-20'/ 21'-40'/ 41'-60')"};
    const staff = {weapon:"Staff", cost:2, damage:"1d4", weight:40, qualities:["Blunt", "Melee", "Slow", "Two-handed"]};
    const sword = {weapon:"Sword", cost:10, damage:"1d8", weight:60, qualities:["Melee"]};
    const torch = {weapon:"Torch", cost:1, damage:"1d4", weight:1, qualities:["Melee"]};
    const twoHandedSword = {weapon:"Two-handed sword", cost:15, damage:"1d10", weight:150, qualities:["Melee", "Slow", "Two-handed"]};
    const warHammer = {weapon:"War hammer", cost:5, damage:"1d6", weight:30, qualities:["Blunt", "Melee"]};

    const weaponsArray = [battleAxe, club, crossbow, dagger, handAxe, holyWaterVial, javelin, lance, longBow, mace, oilFlaskBurning, polearm, shortBow, shortSword, silverDagger, sling, spear, staff, sword, torch, twoHandedSword, warHammer];

    for (let i = 0; i < weaponsArray.length; i++) {
        if(weaponsArray[i].weapon == weaponOfChoice){
            oseCharacterEquipment.innerHTML += weaponsArray[i].weapon + " - weight" + " " + weaponsArray[i].weight + "<br>";
            let weaponQualitiesArray = weaponsArray[i].qualities;
            let qualityToBeAdded = "";
            for (let j = 0; j < weaponQualitiesArray.length; j++) {
                qualityToBeAdded = weaponQualitiesDisplayer(weaponsArray[i].qualities[j]);                
                oseCharacterEquipment.innerHTML += qualityToBeAdded;
                if(weaponsArray[i].qualities[j] == "Missile") oseCharacterEquipment.innerHTML += "Range " + weaponsArray[i].range;
            }
            oseWeaponsArmorDisplay.innerHTML += weaponsArray[i].weapon + " - damage" + " " + weaponsArray[i].damage + "<br>";

        }        
    }
}

function oseItemPicker(){
    const backpack = {item:"Backpack", cost:5};
    const crowbar = {item:"Crowbar", cost:10};
    const garlic = {item:"Garlic", cost:5};
    const grapplingHook = {item:"Grappling hook", cost:25};
    const hammer = {item:"Hammer (small)", cost:2};
    const holySymbol = {item:"Holy symbol", cost:25};
    const holyWater = {item:"Holy water (vial)", cost:25};
    const ironSpikes = {item:"Iron spikes (12)", cost:1};
    const lantern = {item:"Lantern", cost:10};
    const mirror = {item:"Mirror (hand-sized, steel)", cost:5};
    const oil = {item:"Oil (1 flask)", cost:2};
    const pole = {item:"Pole (10' long, wooden)", cost:1};
    const rationsIron = {item:"Iron rations (7 days)", cost:15};
    const rationsStandard = {item:"Standard rations (7 days)", cost:5};
    const rope = {item:"Rope (50')", cost:1};
    const sackLarge = {item:"Sack (large)", cost:2};
    const sackSmall = {item:"Sack (small)", cost:1};
    const stakes = {item:"Stakes (3) and mallet", cost:3};
    const thievesTools = {item:"Thieves tools", cost:25};
    const tinderBox = {item:"Tinder box (flint & steel)", cost:3};
    const torches = {item:"Torches (6)", cost:1};
    const waterskin = {item:"Waterskin", cost:1};
    const wine = {item:"Wine (2 pints)", cost:1};
    const wolfsbane = {item:"Wolfsbane (1 bunch)", cost:10};

    const itemsArray = [backpack, crowbar, garlic, grapplingHook, hammer, holySymbol, holyWater, ironSpikes, lantern, mirror, oil, pole, rationsIron, rationsStandard, rope, sackLarge, sackSmall, stakes, thievesTools, tinderBox, torches, waterskin, wine, wolfsbane];
}

function oseArmourPicker(armourWorn){
    const leather = {armour:"Leather", cost:20, armourClass:12, weight:200};
    const chainmail = {armour:"Chainmail", cost:40, armourClass:14, weight:400};
    const plateMail = {armour:"Plate mail", cost:60, armourClass:16, weight:500};
    const shield = {armour:"Shield", cost:10, armourClass:1, weight:100};

    const armourArray = [leather, chainmail, plateMail, shield];

    for (let i = 0; i < armourArray.length; i++) {
        if(armourArray[i].armour == armourWorn){
            oseCharacterEquipment.innerHTML += armourArray[i].armour + " - weight" + " " + armourArray[i].weight + "<br>";
            oseWeaponsArmorDisplay.innerHTML += armourArray[i].armour + " - armour class" + " " + armourArray[i].armourClass + "<br>";

        }        
    }
}

function oseEquipmentPicker(weaponOfChoice){

}

function oseCharacterClassInformation(characterRace, characterClass){
    let tempStat = 0;
    let maxLevel = parseInt(oseCharacterMaxLevel(characterRace, characterClass));
    let xpNeededToLevel = parseInt(oseCharacterExpNeededToLevel(characterClass));
    let racialLanguagesAvailable = [];
    let otherLanguagesAvailable = [];
    let characterAlingment = [];
    let weaponLimitations = [];
    let martialType = "";

    oseCharacterCurrentEXP.innerHTML = 0;
    oseCharacterNextLevelEXPNeeded.innerHTML = xpNeededToLevel;
    oseCharacterLevel.innerHTML = "1/ " + maxLevel;

    switch(characterRace){
        case "Svirfneblin":
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Earth elemental", "Gnomish", "Dwarvish", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Duergar":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Dwarf":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Gnome":
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Gnomish", "Dwarvish", "Burrow animals", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Drow":            
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Elvish", "Gnomish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Elf":
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish", "Gnoll", "Hobgoblin", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnomish", "Goblin", "Halfling", "Harpy", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Half-Elf":
            oseCharacterSecretDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Halfling":
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Halfling"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Half-Orc":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -2);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, 1);
            racialLanguagesAvailable = ["Common", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
        case "Human":
            racialLanguagesAvailable = ["Common"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(characterRace);
            break;
    }
    switch(characterClass){
        case "Acrobat":
            martialType = "semi-martial";
            weaponLimitations = ["Dagger", "Sword", "Short sword", "Polearm", "Spear", "Staff", "Crossbow", "Javelin", "Long bow", "Short bow", "Sling"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Assassin":
            martialType = "semi-martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
            break;
        case "Druid":
            martialType = "semi-martial";
            weaponLimitations = ["Club", "Dagger", "Sling", "Spear", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseCharacterAlignment.innerHTML = "Neutral";
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Cleric":
            martialType = "semi-martial";
            weaponLimitations = ["Club", "Mace", "Sling", "Staff", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Fighter":
            martialType = "martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Magic-User":
            martialType = "non-martial";
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Thief":
            martialType = "semi-martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
            break;
        case "Barbarian":
            martialType = "martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            tempStat = oseCharacterSTR.textContent < oseCharacterCON.textContent ? oseCharacterSTR.textContent : oseCharacterCON.textContent;
            
            if(oseCharacterSTR.textContent >= 16 && oseCharacterCON.textContent >= 16) oseCharacterPrimeStatBonusToEXP.innerHTML = 10;
            else if(oseCharacterSTR.textContent >= 13 || oseCharacterCON.textContent >= 13) oseCharacterPrimeStatBonusToEXP.innerHTML = 5;
            else oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(tempStat));

            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Bard":
            martialType = "semi-martial";
            weaponLimitations = ["Club", "Crossbow", "Dagger", "Hand axe", "Javelin", "Long bow", "Mace", "Short bow", "Short sword", "Sling", "Spear", "Sword", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterCHA.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Illusionist":
            martialType = "non-martial";
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Paladin":
            martialType = "martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseCharacterAlignment.innerHTML = "Law";
            tempStat = oseCharacterSTR.textContent < oseCharacterWIS.textContent ? oseCharacterSTR.textContent : oseCharacterWIS.textContent;
            
            if(oseCharacterSTR.textContent >= 16 && oseCharacterWIS.textContent >= 16) oseCharacterPrimeStatBonusToEXP.innerHTML = 10;
            else if(oseCharacterSTR.textContent >= 13 || oseCharacterWIS.textContent >= 13) oseCharacterPrimeStatBonusToEXP.innerHTML = 5;
            else oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(tempStat));

            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Necromancer":
            martialType = "non-martial";
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Knight":
            martialType = "martial";
            weaponLimitations = ["Battle axe", "Club", "Dagger", "Hand axe", "Lance", "Mace", "Polearm", "Short sword", "Spear", "Sword", "Two-handed sword", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Ranger":
            martialType = "martial";
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            characterAlingment = ["Law", "Neutral"];
            oseAlingmentPicker(characterAlingment);
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