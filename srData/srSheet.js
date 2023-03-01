const srGeneralCharName = document.getElementById("sr_general_info_name");
const srGeneralCharRace = document.getElementById("sr_general_info_race");
const srGeneralCharSex = document.getElementById("sr_general_info_sex");
const srGeneralCharAge = document.getElementById("sr_general_info_age");
const srGeneralCharDescription = document.getElementById("sr_general_info_description");
const srGeneralCharNotes = document.getElementById("sr_general_info_notes");

const srPriorityA = document.getElementById("sr_priority_A");
const srPriorityB = document.getElementById("sr_priority_B");
const srPriorityC = document.getElementById("sr_priority_C");
const srPriorityD = document.getElementById("sr_priority_D");
const srPriorityE = document.getElementById("sr_priority_E");

const srPriorityAAmount = document.getElementById("sr_priority_A_displayer");
const srPriorityBAmount = document.getElementById("sr_priority_B_displayer");
const srPriorityCAmount = document.getElementById("sr_priority_C_displayer");
const srPriorityDAmount = document.getElementById("sr_priority_D_displayer");
const srPriorityEAmount = document.getElementById("sr_priority_E_displayer");

const srAttributeBody = document.getElementById("sr_attribute_body");
const srAttributeQuickness = document.getElementById("sr_attribute_quickness");
const srAttributeStrength = document.getElementById("sr_attribute_strength");
const srAttributeCharisma = document.getElementById("sr_attribute_charisma");
const srAttributeIntelligence = document.getElementById("sr_attribute_intelligence");
const srAttributeWillpower = document.getElementById("sr_attribute_willpower");
const srAttributeEssence = document.getElementById("sr_attribute_essence");
const srAttributeMagic = document.getElementById("sr_attribute_magic");

const srReaction = document.getElementById("sr_reaction");
const srInitiative = document.getElementById("sr_initiative");

const srDamageOverflow = document.getElementById("sr_damage_overflow");

const srKarmaPool = document.getElementById("sr_karma_pool");
const srGoodKarma = document.getElementById("sr_good_karma");

const srSkillsBlockPlacer = document.getElementById("sr_skills_information_block_placer");
const srSkillName = document.getElementById("sr_skill_name");
const srSkillRating = document.getElementById("sr_skill_rating");

const srCombatPool = document.getElementById("sr_combat_pool_dice");

const srPoolType1 = document.getElementById("sr_pool_type1");
const srPoolType1Dice = document.getElementById("sr_type1_pool_dice");
const srPoolType2 = document.getElementById("sr_pool_type2");
const srPoolType2Dice = document.getElementById("sr_type2_pool_dice");
const srPoolType3 = document.getElementById("sr_pool_type3");
const srPoolType3Dice = document.getElementById("sr_type3_pool_dice");

const srArmorBlockPlacer = document.getElementById("sr_armor_information_block_placer");
const srArmorName = document.getElementById("sr_armor_name");
const srArmorRating = document.getElementById("sr_armor_rating");
const srTotalArmorRatings = document.getElementById("sr_total_armor_ratings");

const srCyberBioBlockPlacer = document.getElementById("sr_cyberware_bioware_information_block_placer");
const srCyberBioName = document.getElementById("sr_cyber_bio_name");
const srCyberBioRating = document.getElementById("sr_cyber_bio_rating");

const srSpellsSectionNonadept = document.getElementById("sr_spells_section_nonadept");
const srSpellName = document.getElementById("sr_spell_name_placer");
const srSpellForce = document.getElementById("sr_spell_force_placer");
const srSpellDrain = document.getElementById("sr_spell_drain_placer");

const srAdeptSpellsSection = document.getElementById("sr_adept_spells_section");
const srSpellAdeptAbilityPlacer = document.getElementById("sr_spell_adept_ability_placer");
const srSpellAdeptLevelPlacer = document.getElementById("sr_spell_adept_level_placer");

const srEdgeFlawLeftPlacer = document.getElementById("sr_edge_flaw_left_side_information_block_placer");
const srEdgeFlawLeftName = document.getElementById("sr_edge_flaw_left_name");
const srEdgeFlawLeftRating = document.getElementById("sr_edge_flaw_left_rating");

const srEdgeFlawRightPlacer = document.getElementById("sr_edge_flaw_right_side_information_block_placer");
const srEdgeFlawRightName = document.getElementById("sr_edge_flaw_right_name");
const srEdgeFlawRightRating = document.getElementById("sr_edge_flaw_right_rating");

const srWeaponName = document.getElementById("sr_weapons_name");
const srWeaponType = document.getElementById("sr_weapons_type");
const srWeaponConceal = document.getElementById("sr_weapons_conceal");
const srWeaponReach = document.getElementById("sr_weapons_reach");
const srWeaponMode = document.getElementById("sr_weapons_mode");
const srWeaponAmmo = document.getElementById("sr_weapons_ammo");
const srWeaponShort = document.getElementById("sr_weapons_short");
const srWeaponMed = document.getElementById("sr_weapons_medium");
const srWeaponLong = document.getElementById("sr_weapons_long");
const srWeaponExtreme = document.getElementById("sr_weapons_extreme");
const srWeaponDamage = document.getElementById("sr_weapons_damage");
const srWeaponMods = document.getElementById("sr_weapons_modifiers");

const srEquipmentPlacer = document.getElementById("sr_equipment_placer");

const srContactsPlacer = document.getElementById("sr_contacts_information_placer");

const srCharNotesPlacer = document.getElementById("sr_character_notes_placer");

const srVehicleType = document.getElementById("sr_vehicle_type_placer");
const srVehicleHandling = document.getElementById("sr_vehicle_attribute_handling");
const srVehicleSpeed = document.getElementById("sr_vehicle_attribute_speed");
const srVehicleBody = document.getElementById("sr_vehicle_attribute_body");
const srVehicleArmor = document.getElementById("sr_vehicle_attribute_armor");
const srVehicleSignature = document.getElementById("sr_vehicle_attribute_signature");
const srVehicleAutopilot = document.getElementById("sr_vehicle_attribute_autopilot");
const srVehicleFirmpoints = document.getElementById("sr_vehicle_attribute_firmpoints");
const srVehicleHardpoints = document.getElementById("sr_vehicle_attribute_hardpoints");
const srVehicleNotes = document.getElementById("sr_vehicle_notes");

// inner html div creation
const srSectionDiv = document.createElement("div");
const srNameP = document.createElement("p");
const srRatingP = document.createElement("p");

priorityRandomPlacer();
srRacialPointAdjuster(srAttributePoints, srRaceChoice);
srRandomSkillPlacer(srSkillPoints);
if(srIsCaster){
    if(srCasterType === "Adept"){
        srSpellsSectionNonadept.classList.add("hide");
        srAdeptSpellsSection.classList.remove("hide");        
    }else{
        srSpellsSectionNonadept.classList.remove("hide");
        srAdeptSpellsSection.classList.add("hide");
    }
    srCasterAbilitys(srCasterType);    
}
if(srArchtype === "Rigger");
if(srArchtype === "Decker");
if(srArchtype === "Street Samurai");

srCyberLimbs()