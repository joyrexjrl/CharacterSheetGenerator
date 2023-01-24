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

const oseCharacterLanguages = document.getElementById("ose_character_languages");

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

const lineBreak = document.createElement("br");

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
    oseCharacterOverlandMovement.innerHTML = baseMovementRate/2;
    oseCharacterExplorationMovement.innerHTML = baseMovementRate;
    oseCharacterEncounterMovement.innerHTML = baseMovementRate/2;
    oseCharacterGoldCoins.innerHTML = parseInt((oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6)) * 10);
}

function oseAlingmentPicker(){
    let charAlingment = ["Law", "Neutral", "Chaos"];
    let rolledAlingment = 0;
    rolledAlingment = oseDieRoller(1, charAlingment.length) -1;
    oseCharacterAlignment.innerHTML = charAlingment[rolledAlingment];
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
    let halflingLastNames = ["Ashworthy", "Moonward", "Longfoot", "Headstrong", "Hamson", "Dudley", "Faneth", "Fleetfoot", "Billberry", "Bolger", "Brandybuck", "Bullroarer", "Dale", "Devix", "Gardner", "Gammidge"];
    let halfOrcNames = [];
    let humanFirstNames = [];
    let humanLastNames = [];
}

function oseCharacterClassInformation(characterRace, characterClass){
    let tempStat = 0;
    let maxLevel = parseInt(oseCharacterMaxLevel(characterRace, characterClass));
    let xpNeededToLevel = parseInt(oseCharacterExpNeededToLevel(characterClass));
    let racialLanguagesAvailable = [];
    let otherLanguagesAvailable = [];

    oseCharacterCurrentEXP.innerHTML = 0;
    oseCharacterNextLevelEXPNeeded.innerHTML = xpNeededToLevel;
    oseCharacterLevel.innerHTML = "1/ " + maxLevel;

    switch(characterRace){
        case "Svirfneblin":
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Earth elemental", "Gnomish", "Dwarvish", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Duergar":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Dwarf":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Gnome":
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Gnomish", "Dwarvish", "Burrow animals", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Drow":            
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Elvish", "Gnomish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Elf":
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish", "Gnoll", "Hobgoblin", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnomish", "Goblin", "Halfling", "Harpy", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Half-Elf":
            oseCharacterSecretDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Halfling":
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Halfling"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Half-Orc":
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -2);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, 1);
            racialLanguagesAvailable = ["Common", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            break;
        case "Human":
            racialLanguagesAvailable = ["Common"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
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
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
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
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
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
oseAlingmentPicker();
oseCharacterRaceAvailable();
