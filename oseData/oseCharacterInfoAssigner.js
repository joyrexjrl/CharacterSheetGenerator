function oseCharacterClassInformation(characterRace, characterClass){    
    let maxLevel = parseInt(oseCharacterMaxLevel(characterRace, characterClass));
    let xpNeededToLevel = parseInt(oseCharacterExpNeededToLevel(characterClass));
    let racialLanguagesAvailable = [];
    let otherLanguagesAvailable = [];    
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
        case "Gnome":
            firstNameArray = gnomeFirstNames;
            lastNameArray = gnomeLastNames;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Gnomish", "Dwarvish", "Burrow animals", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
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
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(halfOrcNames, [" "], true);
            break;
        case "Human":
            firstNameArray = humanFirstNames;
            lastNameArray = humanLastNames;
            racialLanguagesAvailable = ["Common"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            break;
    }
    switch(characterClass){
        case "Acrobat":
            acrobatBuilder(characterClass);
            break;
        case "Assassin":
            assassinBuilder(characterClass);
            break;
        case "Druid":
            druidBuilder(characterClass);
            break;
        case "Cleric":
            clericBuilder(characterClass);
            break;
        case "Fighter":
            fighterBuilder(characterClass);
            break;
        case "Magic-User":
            magicUserBuilder(characterClass);
            break;
        case "Thief":
            thiefBuilder(characterClass);
            break;
        case "Barbarian":
            barbarianBuilder(characterClass);
            break;
        case "Bard":
            bardBuilder(characterClass);
            break;
        case "Illusionist":
            illusionistBuilder(characterClass);
            break;
        case "Paladin":
            paladinBuilder(characterClass);
            break;
        case "Necromancer":
            necromancerBuilder(characterClass);
            break;
        case "Knight":
            knightBuilder(characterClass);
            break;
        case "Ranger":
            rangerBuilder(characterClass);
            break;        
    }
}