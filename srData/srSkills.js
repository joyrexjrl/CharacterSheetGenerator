const srSkills = [
    {skillAttribute: "Body", skillOptions: ["Athletics", "Diving"]},
    {skillAttribute: "Strength", skillOptions: ["Edged Weapons", "Clubs", "Pole Arms/ Staffs", "Cyber-Implant Combat", "Unarmed Combat", "Throwing Weapons", "Projectile Weapons", "Heavy Weapons", "Underwater Combat"]},
    {skillAttribute: "Quickness", skillOptions: ["Pistols", "Submachine Guns", "Rifles", "Assault Rifles", "Shotguns", "Laser Weapons", "Whips", "Stealth"]},
    {skillAttribute: "Intelligence", skillOptions: ["Demolitions", "Gunnery", "Launch Weapons", "Computer", "Electronics", "Biotech", "Build/Repair"]},
    {skillAttribute: "Charisma", skillOptions: ["Etiquette", "Instruction", "Interrogation", "Intimidation", "Leadership", "Negotiation"]},    
    {skillAttribute: "Reaction", skillOptions: ["Bike", "Car", "Hovercraft", "Motorboat", "Ship", "Sailboat", "Winged Aircraft", "Rotor Aircraft", "Vector Thrust Aircraft", "LTA Aircraft", "Submarine"]}
];

const srCasterSkills = [
    {skillAttribute: "Willpower", skillOptions: ["Conjuring", "Sorcery"]},
    {skillAttribute: "Intelligence", skillOptions: ["Aura Reading"]}
]

const srSkillSpecializations = [
    {skillName: "Assault Rifles", skillSpecialization: ["AK-97", "AK-98", "FN HAR", "Ares Alpha", "Ares HVAR", "Colt M22A2", "Colt M-23", "HK G12A3z", "HK G38 Assault Rifle", "HK G38 Carbine Rifle", "HK G38 LMG", "Semopal vz/88V", "Steyr AUG-CSL Assault Rifle", "Steyr AUG-CSL Carbine", "Steyr AUG-CSL SMG", "Steyr AUG-CSL LMG"]},
    {skillName: "Clubs", skillSpecialization: ["Club", "Sap", "Stun Baton", "Extendable Baton", "Mace", "Spiked Mace", "AZ-150 Stun Baton"]},
    {skillName: "Cyber-Implant Combat", skillSpecialization: ["Hand Blade", "Hand Razors", "Spur"]},
    {skillName: "Edged Weapons", skillSpecialization: ["Forearm Snap Blades", "Katana", "Knife", "Sword", "Survival Knife", "Cougar Fineblade Knife (short)", "Cougar Fineblade Knife (long)", "Katar", "Kris", "Laser Crescent Axe", "Macauitl", "Ares Monosword", "Tomahawk", "Vibro Knife", "Vibro Sword", "Sai", "Claymore", "No-dachi"]},
    {skillName: "Gunnery", skillSpecialization: ["Ares Vermicide Autocannon", "Water Cannon", "ArmTech MGL-6", "ArmTech MGL-12", "M-12 Portable"]},
    {skillName: "Heavy Weapons", skillSpecialization: ["Ingram Valiant", "RPK HMG", "Ultimax MMG", "Vigorous Assault Cannon", "Ares HV MP-LMG", "Ares MP-LMG", "FN MAG-5 MMG", "Vindicator Minigun", "Panther Cannon", "Stoner-Ares M107"]},
    {skillName: "Laser Weapons", skillSpecialization: ["Heavy Laser Plus", "Laser III", "Redline"]},
    {skillName: "Launch Weapons", skillSpecialization: ["Ares Antioch", "IWS Multi-Launcher", "Aztechnology Lasher4", "Spike", "Arbelast II MAW", "Ballista", "Great Dragon", "M79B1 LAW", "Vogeljager"]},
    {skillName: "Pistols", skillSpecialization: ["Streetline Special", "Walther Palm Pistol", "Beretta Model 101T", "Colt American L36", "Fichetti Security 500", "Fichetti Security 500a","Ceska Black Scorpion", "Ares Predator", "Ares Viper Silvergun", "Browning Max-Power", "Remington Roomsweeper", "Ruger Super Warhawk", "Defiance Super Shock", "Cavalier Scout", "Morrissey Elan", "Raecor Sting", "Tiffani Needler", "Tiffani Self-Defender", "Ares Light Fire 70", "Beretta 200ST", "Ceska vz/120", "Colt Asp", "Executive Action", "Hammeril Model 610S", "SA Puzzler", "Seco LD-120", "Taurus Multi-6", "Walther PB-120", "Ares Crusader", "Steyr TMP", "Ares Predator II", "Ares Predator III", "Browning Ultra-Power", "Cavalier Deputy", "Colt Manhunter", "Elchiro Hatamoto II", "FN 5-7C", "Morrissey Alta", "Morrissey Elite", "Ruger Thunderbolt", "Savalette Guardian", "WW Infiltrator", "Yamaha Pulsar"]},
    {skillName: "Pole Arms/ Staffs", skillSpecialization: ["Combat Axe", "Pole Arm", "Staff", "Rattan Stick", "Bo Staff", "Harpoon", "Javelin", "Spear", "Telescoping Staff"]},
    {skillName: "Projectile Weapons", skillSpecialization: ["Pull-Bows", "Crossbows", "Pistol Crossbow", "Ranger-X Bow", "Repeater Crossbow", "Slingshot"]},
    {skillName: "Rifles", skillSpecialization: ["Remington 750", "Remington 950", "Ranger Arms SM-3", "Ruger 100", "Barret Model 121", "Walther MA-2100"]},
    {skillName: "Shotguns", skillSpecialization: ["Defiance T-250", "Enfield AS-7", "Franchi SPAS-22", "Mossberg CMDT", "Mossberg SM-SMDT", "Remington 990", "Street Sweeper"]},
    {skillName: "Submachine Guns", skillSpecialization: ["AK-97 SMG/Carbine", "Heckler & Koch HK227", "HK227-S", "Ingram Smartgun", "Uzi III", "Beretta Model 70", "Colt Cobra TZ-110", "Colt Cobra TZ-115", "Colt Cobra TZ-118", "Colt Water Carbine", "HK MP-5 TX", "Ingram SuperMach 100", "Ingram Warrior-10", "Sandler TMP", "SCK model 100"]},
    {skillName: "Throwing Weapons", skillSpecialization: ["Throwing Knife", "Shuriken"]},
    {skillName: "Unarmed Combat", skillSpecialization: ["Subduing Combat", "Martial Arts Technique", "Fists", "Head Butts", "Kicks", "Shock Glove"]},
    {skillName: "Underwater Combat", skillSpecialization: ["Unarmed Attack", "Armed Attack"]},
    {skillName: "Whips", skillSpecialization: ["Monofilament Whip", "Whip", "Kusarigama", "Manriki-gusari", "Morning Star", "Nunchaku", "Three-section Staff"]},
    {skillName: "Aura Reading", skillSpecialization: ["Auras", "Signatures", "Sorcery", "Conjuring"]},
    {skillName: "Sorcery", skillSpecialization: ["Spellcasting", "Spell Defense", "Dispelling", "Astral Combat", "Combat Spells", "Detection Spells", "Health Spells", "Illusion Spells", "Manipulation Spells"]},
    {skillName: "Conjuring", skillSpecialization: ["Summoning", "Banishing", "Controlling"]},
    {skillName: "Athletics", skillSpecialization: ["Running", "Climbing", "Lifting", "Jumping", "Escape Artist", "Swimming"]},
    {skillName: "Diving", skillSpecialization: ["Deep-water Diving", "Mixed-gas Diving"]},
    {skillName: "Stealth", skillSpecialization: ["Alertness", "Hiding", "Sneaking", "Theft"]},
    {skillName: "Etiquette", skillSpecialization: ["Matrix", "Corporate", "Magical Groups", "Tribal", "Gangs"]},
    {skillName: "Instruction", skillSpecialization: []}, // add instruction subject types here
    {skillName: "Interrogation", skillSpecialization: ["Verbal", "Lie Detector", "Voice-Stress Analysis", "Torture", "Drug-Aided"]},
    {skillName: "Intimidation", skillSpecialization: ["Physical", "Mental"]},
    {skillName: "Leadership", skillSpecialization: ["Political", "Military", "Commercial", "Strategy", "Tactics", "Morale"]},
    {skillName: "Negotiation", skillSpecialization: ["Bargain", "Bribe", "Con", "Fast Talk"]},
    {skillName: "Biotech", skillSpecialization: ["Cybertechnology Implantation", "Extended Care", "First Aid", "Organ Culture & Growth", "Surgery", "Transplant Surgery"]},
    {skillName: "Build/Repair", skillSpecialization: ["Armor", "Assault Rifles", "Clubs Weapons", "Computer", "Cybernetics", "Cyber Implant Weapons", "Diving Equipment", "Edged Weapons", "Electronics", "Security Systems", "Gunnery Equipment", "Heavy Weapons", "Laser Weapons", "Launch Weapons", "Pistols", "Pole Arms/Staffs", "Projectile Weapons", "Rifles", "Shotguns", "Submachine Guns", "Throwing Weapons", "Whips", "Bike", "Car", "Fixed Wing Aircraft", "Hovercraft", "LTA Aircraft", "Motorboat", "Rotor Aircraft", "Sailboat", "Ship", "Submarine", "Vector thrust Aircraft"]},
    {skillName: "Computer", skillSpecialization: ["Hardware", "Decking", "Programming", "Cybernetics"]},
    {skillName: "Demolitions", skillSpecialization: ["Commercial Explosives", "Plastic Explosives", "Improvised Explosives"]},
    {skillName: "Electronics", skillSpecialization: ["Control Systems", "Electronic Warfare", "Maglocks", "Linking between Devices", "Diagnostics", "Cybertechnology"]},
    {skillName: "Bike", skillSpecialization: ["Remote Operations", "Dodge Scoot", "Harley-Davidson Scorpion", "Yamaha Rapier"]},
    {skillName: "Car", skillSpecialization: ["Remote Operations", "Chrysler-Nissan Jackrabbit", "Eurocar Westwind 2000", "Ares Roadmaster", "Ford-Canada Bison", "Ares Citymaster", "Chrysler-Nissan Patrol-1", "Doc Waggon Osprey II"]},
    {skillName: "Hovercraft", skillSpecialization: ["Remote Operations", "Chrysler-Nissan G12A", "GMC Beachcraft Patroller"]},
    {skillName: "LTA Aircraft", skillSpecialization: ["Remote Operations", "GMC Banshee"]},
    {skillName: "Motorboat", skillSpecialization: ["Remote Operations", "Samuvani Criscraft Otter"]},
    {skillName: "Rotor Aircraft", skillSpecialization: ["Remote Operations", "Ares Dragon", "Northrup Wasp (PRC-42B Variant)"]},
    {skillName: "Sailboat", skillSpecialization: ["Remote Operations", "Sendanko Marlin"]},
    {skillName: "Ship", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Submarine", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Vector Thrust Aircraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Winged Aircraft", skillSpecialization: ["Remote Operations", "Cessna C750"]},
];

var srWeaponSpecializationFocus = [];

function srSkillsRandomizer(){            
    let skillAttributeLink = srSkills[Math.floor(Math.random() * srSkills.length)].skillAttribute;
    let skillOptionChosen = srSkills.find(skill => skill.skillAttribute === skillAttributeLink).skillOptions[Math.floor(Math.random() *
        srSkills.find(skill => skill.skillAttribute === skillAttributeLink).skillOptions.length)];

    return{attribute: skillAttributeLink, option: skillOptionChosen};
}

function srRandomSkillPlacer(skillPoints){
    const srSkillsParent = srSkillsBlockPlacer;
    let selectedSkills = [];
    let skillAttributeSoftCap = 0;
    let skillRating = 0;
    let isSpecialized = false;
    let optionPlusSpecialization = "";

    if(srIsCaster){
        selectedSkills.push("Cyber-Implant Combat");
    }

    if(srIsCaster && srCasterType !== "Adept"){
        for (let i = 0; i < srCasterSkills.length; i++) {
            const {skillAttribute, skillOptions} = srCasterSkills[i];
            for (let j = 0; j < skillOptions.length; j++) {
                const option = skillOptions[j];
                const srSkillsSection = document.createElement("div");
                const srSkillsName = document.createElement("p");
                const srSkillsRating = document.createElement("p");                

                let randomNumber = oseDieRoller(1, 10);

                if(randomNumber < 3){
                    isSpecialized = true;
                    optionPlusSpecialization = srSkillSpecialPicker(option);
                }

                srSkillsName.classList.add("sr_skill_name");
                if(isSpecialized) srSkillsName.textContent = optionPlusSpecialization;
                else srSkillsName.textContent = option;

                if(option === "Aura Reading"){
                    skillRating = oseDieRoller(1, 6);
                    srSkillsRating.classList.add("sr_skill_rating");
                    if(isSpecialized){
                        let lowerByOne = skillRating - 1;
                        let raiseByOne = skillRating + 1;
                        if(lowerByOne < 1) lowerByOne = 1;
                        srSkillsRating.textContent = lowerByOne + " (" + raiseByOne + ")";
                    }else srSkillsRating.textContent = skillRating;
                }else{
                    skillRating = 6;
                    srSkillsRating.classList.add("sr_skill_rating");
                    if(isSpecialized) srSkillsRating.textContent = "5 (7)";
                    else srSkillsRating.textContent = skillRating;
                } 

                srSkillsRating.classList.add("sr_skill_rating");
                if(isSpecialized) srSkillsRating.textContent = "5 (7)";
                else srSkillsRating.textContent = skillRating;

                isSpecialized = false;

                srSkillsSection.classList.add("sr_information_block_spacer");
                srSkillsSection.appendChild(srSkillsName);
                srSkillsSection.appendChild(srSkillsRating);
                srSkillsParent.appendChild(srSkillsSection);

                skillAttributeSoftCap = srAttributesCurrentMax.find(attr => attr.attribute === skillAttribute).Current
                
                if(skillRating <= skillAttributeSoftCap){
                    skillPoints -= skillRating;
                }else if(skillRating > skillAttributeSoftCap && skillRating <= skillPoints){
                    let pointsOver = 2 * (skillRating - skillAttributeSoftCap);
                    let skillCost = (skillAttributeSoftCap) + (pointsOver);
                    skillPoints -= skillCost;
                }
            }            
        }
    }

    while (skillPoints > 0){
        let {attribute, option} = srSkillsRandomizer();

        if(selectedSkills.includes(option)) continue;

        const srSkillsSection = document.createElement("div");
        const srSkillsName = document.createElement("p");
        const srSkillsRating = document.createElement("p");

        let randomNumber = oseDieRoller(1, 10);

        if(randomNumber < 3){
            isSpecialized = true;
            optionPlusSpecialization = srSkillSpecialPicker(option);
        }

        srSkillsName.classList.add("sr_skill_name");
        if(isSpecialized) srSkillsName.textContent = optionPlusSpecialization;
        else srSkillsName.textContent = option;

        srSkillsRating.classList.add("sr_skill_rating");
        skillAttributeSoftCap = srAttributesCurrentMax.find(attr => attr.attribute === attribute)?.Current || parseInt(srReaction.textContent);

        skillRating = oseDieRoller(1,6);

        if(skillRating > skillPoints){
            skillRating = skillPoints;
        }
        
        if(skillRating <= skillAttributeSoftCap){
            skillPoints -= skillRating;
        }else if(skillRating > skillAttributeSoftCap){
            let pointsOver = 2 * (skillRating - skillAttributeSoftCap);
            let skillCost = (skillAttributeSoftCap) + (pointsOver);
            if(skillCost >= skillPoints){
                skillRating = skillAttributeSoftCap + Math.floor((skillPoints - 1) / 2);
                skillPoints = 0;
            }else{
                skillPoints -= skillCost;
            }            
        }

        if(isSpecialized){
            let lowerByOne = skillRating - 1;
            let raiseByOne = skillRating + 1;
            if(lowerByOne < 1) lowerByOne = 1;
            srSkillsRating.textContent = lowerByOne + " (" + raiseByOne + ")";
        }else srSkillsRating.textContent = skillRating;

        srSkillsSection.classList.add("sr_information_block_spacer");
        srSkillsSection.appendChild(srSkillsName);
        srSkillsSection.appendChild(srSkillsRating);
        srSkillsParent.appendChild(srSkillsSection);

        selectedSkills.push(option);
        isSpecialized = false;
    }
}

function srSkillSpecialPicker(skillName){
    var specializationOptions = [];
    for (var i = 0; i < srSkillSpecializations.length; i++) {
        if (srSkillSpecializations[i].skillName === skillName) {
            specializationOptions = srSkillSpecializations[i].skillSpecialization;
            break;
        }
    }
    
    var skillSpecialization = specializationOptions[Math.floor(Math.random() * specializationOptions.length)];

    if(skillName === "Assault Rifles" || skillName === "Clubs" || skillName === "Edged Weapons" || skillName === "Gunnery" || 
    skillName === "Heavy Weapons" || skillName === "Laser Weapons" || skillName === "Launch Weapons" || skillName === "Pistols" || 
    skillName === "Pole Arms/ Staffs" || skillName === "Projectile Weapons" || skillName === "Rifles" || skillName === "Shotguns" || 
    skillName === "Submachine Guns" || skillName === "Throwing Weapons" || skillName === "Whips"){
        srWeaponSpecializationFocus.push(skillSpecialization);
    } 
    
    return skillName + " (" + skillSpecialization + ")";
}