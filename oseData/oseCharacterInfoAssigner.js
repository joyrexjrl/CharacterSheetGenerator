function oseCharacterClassInformation(characterRace, characterClass){    
    let maxLevel = parseInt(oseCharacterMaxLevel(characterRace, characterClass));
    let xpNeededToLevel = parseInt(oseCharacterExpNeededToLevel(characterClass));
    let racialLanguagesAvailable = [];
    let otherLanguagesAvailable = [];
    let racialAbilitiesArray = [];
    let firstNameArray = [];
    let lastNameArray = [];

    oseCharacterCurrentEXP.innerHTML = 0;
    oseCharacterNextLevelEXPNeeded.innerHTML = xpNeededToLevel;
    oseCharacterLevel.innerHTML = "1/ " + maxLevel;

    switch(characterRace){
        case "Svirfneblin":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            firstNameArray = gnomeFirstNames;
            lastNameArray = svirfneblinLastNames;
            racialAbilitiesArray = svirfneblinAbilties;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Earth elemental", "Gnomish", "Dwarvish", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Duergar":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            firstNameArray = dwarfFirstNames;
            lastNameArray = duergarLastNames;
            racialAbilitiesArray = duergarAbilities;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Dwarf":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            firstNameArray = dwarfFirstNames;
            lastNameArray = dwarfLastNames;
            racialAbilitiesArray = dwarfAbilities;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCHA.textContent, -1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterFindTrapExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Dwarvish", "Gnomish", "Goblin", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Gnome":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            firstNameArray = gnomeFirstNames;
            lastNameArray = gnomeLastNames;
            racialAbilitiesArray = gnomeAbilities;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Gnomish", "Dwarvish", "Burrow animals", "Kobold"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Elvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Drow":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterINT.textContent) < 9) oseCharacterINT.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterINT.textContent) < 9) oseCharacterINT.innerHTML = 9;
            firstNameArray = drowFirstNames;
            lastNameArray = drowLastNames;
            racialAbilitiesArray = drowAbilities;
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Deepcommon", "Elvish", "Gnomish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnoll", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Elf":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterINT.textContent) < 9) oseCharacterINT.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random" && parseInt(oseCharacterINT.textContent) < 9) oseCharacterINT.innerHTML = 9;
            firstNameArray = elfFirstNames;
            lastNameArray = elfLastNames;
            racialAbilitiesArray = elfAbilities;
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterSecretDoorExplore.innerHTML = 2;
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Elvish", "Gnoll", "Hobgoblin", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Gargoyal", "Gnomish", "Goblin", "Halfling", "Harpy", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "HalfElf":
        case "Half-Elf":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCHA.textContent) < 9) oseCharacterCHA.innerHTML = 9;
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random"){
                if(parseInt(oseCharacterCHA.textContent) < 9) oseCharacterCHA.innerHTML = 9;
                if(parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            }
            let firstNameNumber = (oseDieRoller(1, 2));
            let secondNameNumber = (oseDieRoller(1, 2));
            racialAbilitiesArray = halfElfAbilities;
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
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Halfling":
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            if(oseUserSelectedRace !== "Random" && parseInt(oseCharacterDEX.textContent) < 9) oseCharacterDEX.innerHTML = 9;
            if(oseUserSelectedRace === "Random" && oseUserSelectedClass !== "Random"){
                if(parseInt(oseCharacterDEX.textContent) < 9) oseCharacterDEX.innerHTML = 9;
                if(parseInt(oseCharacterCON.textContent) < 9) oseCharacterCON.innerHTML = 9;
            }
            firstNameArray = halflingFirstNames;
            lastNameArray = halflingLastNames;
            racialAbilitiesArray = halflingAbilities;
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, -1);
            oseCharacterDEX.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterDEX.textContent, 1);
            oseCharacterListenDoorExplore.innerHTML = 2;
            racialLanguagesAvailable = ["Common", "Halfling"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "HalfOrc":
        case "Half-Orc":
            firstNameArray = halfOrcNames;
            racialAbilitiesArray = halfOrcAbilities;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, -2);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterSTR.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterSTR.textContent, 1);
            racialLanguagesAvailable = ["Common", "Orcish"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(halfOrcNames, [" "], true);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
            break;
        case "Human":
            firstNameArray = humanFirstNames;
            lastNameArray = humanLastNames;
            racialAbilitiesArray = humanAbilities;
            oseCharacterCHA.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            oseCharacterCON.innerHTML = oseCharacterRaceAbilityModifier(oseCharacterCON.textContent, 1);
            racialLanguagesAvailable = ["Common"];
            otherLanguagesAvailable = ["Bugbear", "Doppelganger", "Dragon", "Dwarvish", "Elvish", "Gargoyal", "Gnoll", "Gnomish", "Goblin", "Halfling", "Harpy", "Hobgoblin", "Kobold", "Lizard man", "Medusa", "Minotaur", "Ogre", "Orcish", "Pixie"];
            oseStatBonusAssigner();
            oseCharacterLanguagePicker(oseStatBonus(oseCharacterINT), racialLanguagesAvailable, otherLanguagesAvailable);
            oseCharacterNameGenerator(firstNameArray, lastNameArray);
            classSkillsAndAbilitiesDisplayer(racialAbilitiesArray);
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
        case "MagicUser":
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