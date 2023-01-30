function oseStatRoller(){
    let numberedRolled;
    
    for (let i = 0; i < oseStatsArray.length; i++){
        numberedRolled = (oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6));
        oseStatsArray[i].innerHTML = numberedRolled;
    }    
}

function oseStatBonus(stat){
    let statBonus = 0;
    let passedStat = parseInt(stat);
    switch(passedStat){
        case 3:
            statBonus = -3;
            return statBonus;
        case 4:
        case 5:
            statBonus = -2
            return statBonus;
        case 6:
        case 7:
        case 8:
            statBonus = -1
            return statBonus;
        case 9:
        case 10:
        case 11:
        case 12:
            return statBonus;
        case 13:
        case 14:
        case 15:
            statBonus = 1
            return statBonus;
        case 16:
        case 17:
            statBonus = 2
            return statBonus;
        case 18:
            statBonus = 3
            return statBonus;
        default:
            break;
    }
}

function oseStatBonusAssigner(){
    let baseMovementRate = 120;
    oseCharacterOverlandMovement.innerHTML = baseMovementRate/2;
    oseCharacterExplorationMovement.innerHTML = baseMovementRate;
    oseCharacterEncounterMovement.innerHTML = baseMovementRate/2;

    oseCharacterWISBonusToSpellSave.innerHTML = oseStatBonus(oseCharacterWIS.textContent);
    oseCharacterCONBonusToHP.innerHTML = oseStatBonus(oseCharacterCON.textContent);
    oseCharacterDEXBonusToAC.innerHTML = oseStatBonus(oseCharacterDEX.textContent);

    oseCharacterMeleeAttackBonus.innerHTML = oseStatBonus(oseCharacterSTR.textContent);
    oseCharacterMissileAttackBonus.innerHTML = oseStatBonus(oseCharacterDEX.textContent);

    oseCharacterInitiative.innerHTML = oseStatBonus(oseCharacterDEX.textContent);
    oseCharacterCHABonusToReactions.innerHTML = oseStatBonus(oseCharacterCHA.textContent);

    oseCharacterUnarmouredAC.innerHTML = 10 + oseStatBonus(oseCharacterDEX.textContent);
    oseCharacterAttackBonus.innerHTML = 0;

    oseCharacterListenDoorExplore.innerHTML = 1;
    oseCharacterOpenDoorExplore.innerHTML = oseStatBonus(oseCharacterSTR.textContent);
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

function oseCharacterNameGenerator(firstName, lastName, isHalfOrc){
    let firstNameRolled;
    let lastNameRolled;
    let randomNumber

    randomNumber = (oseDieRoller(1, firstName.length)-1);
    firstNameRolled = firstName[randomNumber];
    randomNumber = (oseDieRoller(1, lastName.length)-1);
    lastNameRolled = lastName[randomNumber];
    
    if(isHalfOrc) oseCharacterName.innerHTML = firstNameRolled;
    else oseCharacterName.innerHTML = firstNameRolled + " " + lastNameRolled;    
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

    oseWeaponPicker(weaponOfChoice, true);
}

function oseWeaponQualitiesDisplayer(qualitiesArray){
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

function oseArmourClassCalculator(armourWornValue){

    let acDexBonus = parseInt(oseCharacterDEXBonusToAC.textContent);
    if(armourWornValue == 0){
        oseCharacterCurrentAC.innerHTML = oseCharacterUnarmouredAC.innerHTML;
    }
    else if(armourWornValue == 1){
        let shieldOnlyAC = 10 + armourWornValue;        
        oseCharacterCurrentAC.innerHTML = acDexBonus + shieldOnlyAC;        
    }else{
        oseCharacterCurrentAC.innerHTML = acDexBonus + armourWornValue;
    }
}

function oseWeaponPicker(weaponOfChoice, weaponProfPicker){    
    if(weaponProfPicker){
        for (let i = 0; i < oseWeapons.length; i++) {
            if(oseWeapons[i].weapon == weaponOfChoice){
                oseCharacterEquipment.innerHTML += oseWeapons[i].weapon + " - weight" + " " + oseWeapons[i].weight + "<br>";
                let weaponQualitiesArray = oseWeapons[i].qualities;
                let qualityToBeAdded = "";
                for (let j = 0; j < weaponQualitiesArray.length; j++) {
                    qualityToBeAdded = oseWeaponQualitiesDisplayer(oseWeapons[i].qualities[j]);                
                    oseCharacterEquipment.innerHTML += qualityToBeAdded;
                    if(oseWeapons[i].qualities[j] == "Missile") oseCharacterEquipment.innerHTML += "Range " + oseWeapons[i].range + "<br>";
                }
                oseWeaponsArmorDisplay.innerHTML += oseWeapons[i].weapon + " - damage" + " " + oseWeapons[i].damage + "<br>";
            }        
        }
    }   
}

function oseItemPicker(){
    
}

function oseArmourPicker(startingArmourArray, startingArmourChoice){
    if(startingArmourChoice && startingArmourArray.length > 0){
        let randomRoll = Math.floor(Math.random() * startingArmourArray.length);
        for (let i = 0; i < oseArmour.length; i++) {
            if(startingArmourArray[randomRoll] == oseArmour[i].armour){
                oseCharacterEquipment.innerHTML += oseArmour[i].armour + " - weight" + " " + oseArmour[i].weight + "<br>";
                oseWeaponsArmorDisplay.innerHTML += oseArmour[i].armour + " - armour class" + " " + oseArmour[i].armourClass + "<br>";
                let itemsArmourClass = oseArmour[i].armourClass;
                oseArmourClassCalculator(itemsArmourClass);
                return;
            }
        }
    }
}

function oseEquipmentPicker(){
    
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
    let armourAllowed = [];
    let firstNameArray = [];
    let lastNameArray = [];

    oseCharacterCurrentEXP.innerHTML = 0;
    oseCharacterNextLevelEXPNeeded.innerHTML = xpNeededToLevel;
    oseCharacterLevel.innerHTML = "1/ " + maxLevel;

    switch(characterRace){
        case "Svirfneblin":
            firstNameArray = gnomeFirstNames;
            lastNameArray = svirfneblinLastNames;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Earth elemental", "Gnomish", "Dwarvish", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Duergar":
            firstNameArray = dwarfFirstNames;
            lastNameArray = duergarLastNames;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Dwarf":
            firstNameArray = dwarfFirstNames;
            lastNameArray = dwarfLastNames;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Gnome":
            firstNameArray = gnomeFirstNames;
            lastNameArray = gnomeLastNames;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Gnomish", "Dwarvish", "Burrow animals", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Drow":
            firstNameArray = drowFirstNames;
            lastNameArray = drowLastNames;            
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Elvish", "Gnomish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Elf":
            firstNameArray = elfFirstNames;
            lastNameArray = elfLastNames;
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish", "Gnoll", "Hobgoblin", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnomish", "Goblin", "Halfling", "Harpy", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Half-Elf":
            let firstNameNumber = (oseDieRoller(1, 2));
            let secondNameNumber = (oseDieRoller(1, 2));
            if(firstNameNumber == 1) firstNameArray = elfFirstNames;
            else firstNameArray = humanFirstNames;
            
            if(secondNameNumber == 1) lastNameArray = elfLastNames;                
            else lastNameArray = humanLastNames;

            oseCharacterSecretDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Halfling":
            firstNameArray = halflingFirstNames;
            lastNameArray = halflingLastNames;
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Halfling"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Half-Orc":
            firstNameArray = halfOrcNames;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -2);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, 1);
            racialLanguagesAvailable = ["Common", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(halfOrcNames, [" "], true);
            break;
        case "Human":
            firstNameArray = humanFirstNames;
            lastNameArray = humanLastNames;
            racialLanguagesAvailable = ["Common"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
    }
    switch(characterClass){
        case "Acrobat":
            martialType = "semi-martial";
            armourAllowed = ["Leather"];
            weaponLimitations = ["Dagger", "Sword", "Short sword", "Polearm", "Spear", "Staff", "Crossbow", "Javelin", "Long bow", "Short bow", "Sling"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Assassin":
            martialType = "semi-martial";
            armourAllowed = ["Leather", "Shield"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
            break;
        case "Druid":
            martialType = "semi-martial";
            armourAllowed = ["Leather", "Shield"];
            weaponLimitations = ["Club", "Dagger", "Sling", "Spear", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            oseCharacterAlignment.innerHTML = "Neutral";
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Cleric":
            martialType = "semi-martial";
            armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
            weaponLimitations = ["Club", "Mace", "Sling", "Staff", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Fighter":
            martialType = "martial";
            armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Magic-User":
            martialType = "non-martial";
            armourAllowed = [];
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Thief":
            martialType = "semi-martial";
            armourAllowed = ["Leather"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
            break;
        case "Barbarian":
            martialType = "martial";
            armourAllowed = ["Leather", "Chainmail", "Shield"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
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
            armourAllowed = ["Leather", "Chainmail"];
            weaponLimitations = ["Club", "Crossbow", "Dagger", "Hand axe", "Javelin", "Long bow", "Mace", "Short bow", "Short sword", "Sling", "Spear", "Sword", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterCHA.textContent));
            oseHitPointRoller(6);
            oseCharacterSaves(characterClass);
            break;
        case "Illusionist":
            martialType = "non-martial";
            armourAllowed = [];
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Paladin":
            martialType = "martial";
            armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
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
            armourAllowed = [];
            weaponLimitations = ["Dagger", "Staff"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
            oseHitPointRoller(4);
            oseCharacterSaves(characterClass);
            break;
        case "Knight":
            martialType = "martial";
            armourAllowed = ["Chainmail", "Plate mail", "Shield"];
            weaponLimitations = ["Battle axe", "Club", "Dagger", "Hand axe", "Lance", "Mace", "Polearm", "Short sword", "Spear", "Sword", "Two-handed sword", "War hammer"];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
            characterAlingment = ["Law", "Neutral", "Chaos"];
            oseAlingmentPicker(characterAlingment);
            oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
            oseHitPointRoller(8);
            oseCharacterSaves(characterClass);
            break;
        case "Ranger":
            martialType = "martial";
            armourAllowed = ["Leather", "Chainmail", "Shield"];
            weaponLimitations = [];
            oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
            oseArmourPicker(armourAllowed, true);
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