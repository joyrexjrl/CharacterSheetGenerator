const oseCustomName = document.getElementById("ose_custom_name");

const oseCharacterName = document.getElementById("ose_character_name");
const oseCharacterClass = document.getElementById("ose_character_class");
const oseCharacterRace = document.getElementById("ose_character_race");
const oseCharacterAlignment = document.getElementById("ose_character_alignment");
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
const oseCharacterSpellsMountsOther = document.getElementById("ose_character_spells_mounts_other");
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

const fullClearArray = [oseCharacterName, oseCharacterClass, oseCharacterRace, oseCharacterAlignment, oseCharacterLevel, oseCharacterSTR, oseCharacterDEX, oseCharacterCON, oseCharacterINT, oseCharacterWIS, oseCharacterCHA, oseCharacterDeathSave, oseCharacterWandsSave, oseCharacterParalysisSave, oseCharacterBreathSave, oseCharacterSpellSave, oseCharacterWISBonusToSpellSave, oseCharacterCurrentHP, oseCharacterMaxHP, oseCharacterCONBonusToHP, oseCharacterCurrentAC, oseCharacterUnarmouredAC, oseCharacterDEXBonusToAC, oseCharacterAttackBonus, oseCharacterMeleeAttackBonus, oseCharacterMissileAttackBonus, oseCharacterInitiative, oseCharacterCHABonusToReactions, oseCharacterListenDoorExplore, oseCharacterOpenDoorExplore, oseCharacterSecretDoorExplore, oseCharacterFindTrapExplore, oseCharacterOverlandMovement, oseCharacterExplorationMovement, oseCharacterEncounterMovement, oseCharacterAbilitySkillsWeapons, oseCharacterLanguages, oseCharacterEquipment, oseCharacterSpellsMountsOther, oseWeaponsArmorDisplay, oseCharacterCurrentEXP, oseCharacterNextLevelEXPNeeded, oseCharacterPrimeStatBonusToEXP, oseCharacterGoldCoins, oseCharacterTreasureWeight, oseCharacterWeaponsArmorWeight, oseCharacterTotalCarriedWeight];

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
    if(oseCharacterOpenDoorExplore.textContent <= 0) oseCharacterOpenDoorExplore.innerHTML = 1;
    oseCharacterSecretDoorExplore.innerHTML = 1;
    oseCharacterFindTrapExplore.innerHTML = 1;
    
    oseCharacterGoldCoins.innerHTML = parseInt((oseDieRoller(1, 6) + oseDieRoller(1, 6) + oseDieRoller(1, 6)) * 10);
}

function oseClearUserInputs(){
    oseFileInput.value = "";
    osePortaitDisplay.src = "";
    oseCustomName.value = "";
    oseUserClassRaceSelectionReset();
}

function oseClearAllSheet(){    
    for (let i = 0; i < fullClearArray.length; i++) {
        fullClearArray[i].innerHTML = "";
    }
}

function oseBuildMyCharacter(){
    let availableRaces = [];
    let availableClasses = [];
    let randomRoll = 0;
    let randomClassSelection = "";
    let magicUserClassNameDisplayFix = "Magic-User";
    let userChosenHalfElfDisplayFix = "Half-Elf";
    let userChosenHalfOrcDisplayFix = "Half-Orc";
    
    oseClearAllSheet()
    equipmentWeight = 0;

    oseStatRoller();

    if(oseUserSelectedRace === "Random" && oseUserSelectedClass === "Random"){        
        availableRaces = oseCharacterRaceAvailable();
        availableClasses = oseCharacterRacePicker(availableRaces);
        oseCharacterClassAvailable(availableClasses);         
    }else if(oseUserSelectedRace === "Random"){
        availableClasses = oseCharacterRacePicker(osePopulatedRacesArray);

        if(oseUserSelectedClass === "MagicUser") oseCharacterClass.innerHTML = magicUserClassNameDisplayFix;
        else oseCharacterClass.innerHTML = oseUserSelectedClass;
        oseCharacterClassInformation(availableClasses ,oseUserSelectedClass);
    }else if(oseUserSelectedClass === "Random"){
        randomRoll = oseDieRoller(1, osePopulatedClassesArray.length) -1;
        randomClassSelection = osePopulatedClassesArray[randomRoll];

        if(oseUserSelectedRace === "HalfElf") oseCharacterRace.innerHTML = userChosenHalfElfDisplayFix;
        else if(oseUserSelectedRace === "HalfOrc") oseCharacterRace.innerHTML = userChosenHalfOrcDisplayFix;
        else oseCharacterRace.innerHTML = oseUserSelectedRace;

        if(randomClassSelection === "MagicUser") oseCharacterClass.innerHTML = magicUserClassNameDisplayFix;
        else oseCharacterClass.innerHTML = randomClassSelection;
        oseCharacterClassInformation(oseUserSelectedRace, randomClassSelection);
    }else{
        if(oseUserSelectedRace === "HalfElf") oseCharacterRace.innerHTML = userChosenHalfElfDisplayFix;
        else if(oseUserSelectedRace === "HalfOrc") oseCharacterRace.innerHTML = userChosenHalfOrcDisplayFix;
        else oseCharacterRace.innerHTML = oseUserSelectedRace;

        if(oseUserSelectedClass === "MagicUser") oseCharacterClass.innerHTML = magicUserClassNameDisplayFix;
        else oseCharacterClass.innerHTML = oseUserSelectedClass;
        oseCharacterClassInformation(oseUserSelectedRace, oseUserSelectedClass);
    }

    oseEquipmentWeightDisplayer(equipmentWeight);
    oseTotalEquipmentWeightDisplayer(oseCharacterTreasureWeight.textContent, oseCharacterWeaponsArmorWeight.textContent); 
}