var tempStat = 0;
var characterAlingment = [];
var weaponLimitations = [];
var martialType = "";
var armourAllowed = [];
var classSkillsArray = [];

function acrobatBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather"];
    weaponLimitations = ["Dagger", "Sword", "Short sword", "Polearm", "Spear", "Staff", "Crossbow", "Javelin", "Long bow", "Short bow", "Sling"];
    classSkillsArray = acrobatSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function assassinBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather", "Shield"];
    weaponLimitations = [];
    classSkillsArray = assassinSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
    oseItemPicker();
}

function druidBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather", "Shield"];
    weaponLimitations = ["Club", "Dagger", "Sling", "Spear", "Staff"];
    classSkillsArray = druidSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    oseCharacterAlignment.innerHTML = "Neutral";
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
    oseHitPointRoller(6);
    oseCharacterSaves(characterClass);
    oseCharacterEquipment.innerHTML += oseItems[5].item + "<br>";
    oseCharacterEquipment.innerHTML += oseItems[5].description + "<br>";
    oseItemPicker();
}

function clericBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
    weaponLimitations = ["Club", "Mace", "Sling", "Staff", "War hammer"];
    classSkillsArray = clericSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterWIS.textContent));
    oseHitPointRoller(6);
    oseCharacterSaves(characterClass);
    oseCharacterEquipment.innerHTML += oseItems[5].item + "<br>";
    oseCharacterEquipment.innerHTML += oseItems[5].description + "<br>";
    oseItemPicker();
}

function fighterBuilder(characterClass){
    martialType = "martial";
    armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
    weaponLimitations = [];
    classSkillsArray = fighterSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
    oseHitPointRoller(8);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function magicUserBuilder(characterClass){
    martialType = "non-martial";
    armourAllowed = [];
    weaponLimitations = ["Dagger", "Staff"];
    classSkillsArray = magicUserSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function thiefBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather"];
    weaponLimitations = [];
    classSkillsArray = thiefSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterDEX.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    if(oseCharacterListenDoorExplore.textContent < 2) oseCharacterListenDoorExplore.innerHTML = 2;
    oseCharacterEquipment.innerHTML += oseItems[18].item + "<br>";
    oseCharacterEquipment.innerHTML += oseItems[18].description + "<br>";
    oseItemPicker();
}

function barbarianBuilder(characterClass){
    martialType = "martial";
    armourAllowed = ["Leather", "Chainmail", "Shield"];
    weaponLimitations = [];
    classSkillsArray = barbarianSkills;
    classSkillsDisplayer(classSkillsArray);
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
    oseItemPicker();
}

function bardBuilder(characterClass){
    martialType = "semi-martial";
    armourAllowed = ["Leather", "Chainmail"];
    weaponLimitations = ["Club", "Crossbow", "Dagger", "Hand axe", "Javelin", "Long bow", "Mace", "Short bow", "Short sword", "Sling", "Spear", "Sword", "War hammer"];
    classSkillsArray = bardSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterCHA.textContent));
    oseHitPointRoller(6);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function illusionistBuilder(characterClass){
    martialType = "non-martial";
    armourAllowed = [];
    weaponLimitations = ["Dagger", "Staff"];
    classSkillsArray = illusionistSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function paladinBuilder(characterClass){
    martialType = "martial";
    armourAllowed = ["Leather", "Chainmail", "Plate mail", "Shield"];
    weaponLimitations = [];
    classSkillsArray = paladinSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    oseCharacterAlignment.innerHTML = "Law";
    tempStat = oseCharacterSTR.textContent < oseCharacterWIS.textContent ? oseCharacterSTR.textContent : oseCharacterWIS.textContent;
    
    if(oseCharacterSTR.textContent >= 16 && oseCharacterWIS.textContent >= 16) oseCharacterPrimeStatBonusToEXP.innerHTML = 10;
    else if(oseCharacterSTR.textContent >= 13 || oseCharacterWIS.textContent >= 13) oseCharacterPrimeStatBonusToEXP.innerHTML = 5;
    else oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(tempStat));

    oseHitPointRoller(8);
    oseCharacterSaves(characterClass);
    oseCharacterEquipment.innerHTML += oseItems[5].item + "<br>";
    oseCharacterEquipment.innerHTML += oseItems[5].description + "<br>";
    oseItemPicker();
}
function necromancerBuilder(characterClass){
    martialType = "non-martial";
    armourAllowed = [];
    weaponLimitations = ["Dagger", "Staff"];
    classSkillsArray = necromancerSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterINT.textContent));
    oseHitPointRoller(4);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function knightBuilder(characterClass){
    martialType = "martial";
    armourAllowed = ["Chainmail", "Plate mail", "Shield"];
    weaponLimitations = ["Battle axe", "Club", "Dagger", "Hand axe", "Lance", "Mace", "Polearm", "Short sword", "Spear", "Sword", "Two-handed sword", "War hammer"];
    classSkillsArray = knightSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral", "Chaos"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
    oseHitPointRoller(8);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}

function rangerBuilder(characterClass){
    martialType = "martial";
    armourAllowed = ["Leather", "Chainmail", "Shield"];
    weaponLimitations = [];
    classSkillsArray = rangerSkills;
    classSkillsDisplayer(classSkillsArray);
    oseCharacterWeaponProficiencyPicker(martialType, weaponLimitations);
    oseArmourPicker(armourAllowed, true);
    characterAlingment = ["Law", "Neutral"];
    oseAlingmentPicker(characterAlingment);
    oseCharacterPrimeStatBonusToEXP.innerHTML = osePrimeReqExpBonus(parseInt(oseCharacterSTR.textContent));
    oseHitPointRoller(8);
    oseCharacterSaves(characterClass);
    oseItemPicker();
}