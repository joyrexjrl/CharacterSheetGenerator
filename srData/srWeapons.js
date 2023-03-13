const srMeleeWeapons = [
    {type: "Personal Weapons", name: ["Forearm Snap Blades", "Katana", "Knife", "Sword", "Survival Knife", "Club", "Sap", "Stun Baton", "Combat Axe", "Pole Arm", "Staff", "Monofilament Whip", "Shock Glove", "Whip", "Cougar Fineclade Knife (short)", "Cougar Fineclade Knife (Long)", "Katar", "Kris", "Laser Crescent Axe", "Macauitl", "Ares Monosword", "Tomahawk", "Vibro Knife", "Vibro Sword", "Extendable Baton", "Mace", "Spiked Mace", "Rattan Stick", "Sai", "AZ - 150 Stun Baton", "Bo Staff", "Claymore", "Harpoon", "Javelin", "No-Dachi", "Spear", "Telescoping Staff", "Kusarigama", "Manriki-gusari", "Morning Star", "Nunchaku", "Three-section Staff"]}
];

const srProjectileWeapons = [
    {type: "Standard Bow", name: ["Bow", "Ranger-X Bow", "Slingshot"]},
    {type: "Crossbow", name: ["Light Crossbow", "Medium Crossbow", "Heavy Crossbow", "Pistol Crossbow", "Repeater Crossbow"]},
    {type: "Throwing Weapons", name: ["Throwing Knife", "Shuriken"]}
];

const srFirearmWeapons = [
    {type: "Hold-Out", name: ["Streetline Special", "Walther Palm Pistol", "Cavalier Scout", "Morrissey Elan", "Raecor Sting", "Tiffani Needler", "Tiffani Self-Defender"]},
    {type: "Light Pistols", name: ["Beretta Model 101T", "Colt American L36", "Fichetti Security 500", "Fichetti Security 500a", "Ares Light Fire 70", "Beretta 200ST", "Ceska vz/120", "Colt Asp", "Executive Action", "Hammeril Model 610S", "SA Puzzler", "Seco LD-120", "Taurus Multi-6", "Walther PB-120"]},
    {type: "Machine Pistols", name: ["Ceska Black Scorpion", "Ares Crusader", "Steyr TMP"]},
    {type: "Heavy Pistols", name: ["Ares Predator", "Ares Viper Silvergun", "Browning Max-Power", "Remington Roomsweeper", "Ruger Super Warhawk", "Ares Predator II", "Ares Predator III", "Browning Ultra-Power", "Cavalier Deputy", "Colt Manhunter", "Elchiro Hatamoto II", "FN 5-7C", "Morrissey Alta", "Morrissey Elite", "Ruger Thunderbolt", "Savalette Guardian", "WW Infiltrator", "Ares Redline"]},
    {type: "Taser", name: ["Defiance Super Shock", "Yamaha Pulsar"]},
    {type: "SMGs", name: ["AK-97 SMG/Carbine", "Heckler & Koch HK227", "HK227-S", "Ingram Smartgun", "Uzi III", "Beretta Model 70", "Colt Cobra TZ-110", "Colt Cobra TZ-115", "Colt Cobra TZ-118", "Colt Water Carbine", "HK MP-5 TX", "Ingram SuperMach 100", "Ingram Warrior-10", "Sandler TMP", "SCK model 100"]},
    {type: "Sporting Rifle", name: ["Remington 750", "Remington 950", "Ruger 100", "Laser III"]},
    {type: "Sniper Rifle", name: ["Ranger Arms SM-3", "Barret Model 121", "Walther MA-2100", "Heavy Laser Plus"]},
    {type: "Shotguns", name: ["Defiance T-250", "Enfield AS-7", "Franchi SPAS-22", "Mossberg CMDT", "Mossberg SM-SMDT", "Remington 990", "Street Sweeper"]},
    {type: "Assault Rifle", name: ["AK-97", "AK-98", "FN HAR", "Ares Alpha", "Ares HVAR", "Colt M22A2", "Colt M-23", "HK G12A3z", "HK G38 Assault Rifle", "HK G38 Carbine Rifle", "HK G38 LMG", "Semopal vz/88V", "Steyr AUG-CSL Assault Rifle", "Steyr AUG-CSL Carbine", "Steyr AUG-CSL SMG", "Steyr AUG-CSL LMG"]},
    {type: "Light Machine Guns", name: ["Ingram Valiant", "Ares HV MP-LMG", "Ares MP-LMG"]},
    {type: "Medium Machine Guns", name: ["FN MAG-5 MMG", "Ultimax MMG"]},
    {type: "Heavy Machine Guns", name: ["RPK HMG", "Vindicator Minigun", "Stoner-Ares M107"]},
    {type: "Assault Cannon", name: ["Vigorous Assault Cannon", "Panther Cannon"]},
    {type: "Grenade Launchers", name: ["Ares Antioch", "ArmTech MGL-6", "ArmTech MGL-12"]},
    {type: "Missile Launchers", name: ["M-12 Portable", "IWS Multi-Launcher", "Aztechnology Lasher", "Spike", "Arbelast II MAW", "Ballista MK I", "Ballista MK II", "Ballista MK III", "Great Dragon ATGM", "M79B1 LAW", "Vogeljager Missile"]}
];

const srWeaponsBySkill = [
    {skillType: "Assault Rifles", weaponType: ["Assault Rifle"]},
    {skillType: "Clubs", weaponType: ["Personal Weapons"], weaponsAvailable: ["Club", "Sap", "Stun Baton", "Extendable Baton", "Mace", "Spiked Mace", "AZ - 150 Stun Baton"]},
    {skillType: "Edged Weapons", weaponType: ["Personal Weapons"], weaponsAvailable: ["Forearm Snap Blades", "Katana", "Knife", "Sword", "Survival Knife", "Cougar Fineblade Knife (short)", "Cougar Fineblade Knife (long)", "Katar", "Kris", "Laser Crescent Axe", "Macauitl", "Ares Monosword", "Tomahawk", "Vibro Knife", "Vibro Sword", "Sai", "Claymore", "No-dachi"]},
    {skillType: "Gunnery", weaponType: ["Assault Cannon"]},
    {skillType: "Heavy Weapons", weaponType: ["Light Machine Guns", "Medium Machine Guns", "Heavy Machine Guns"]},
    {skillType: "Laser Weapons", weaponType: ["Laser"], weaponsAvailable: ["Heavy Laser Plus", "Laser III", "Ares Redline"]},
    {skillType: "Launch Weapons", weaponType: ["Grenade Launchers", "Missile Launchers"]},
    {skillType: "Pistols", weaponType: ["Hold-Out", "Light Pistols", "Machine Pistols", "Heavy Pistols", "Taser"]},
    {skillType: "Pole Arms/ Staffs", weaponType: ["Personal Weapons"], weaponsAvailable: ["Combat Axe", "Pole Arm", "Staff", "Rattan Stick", "Bo Staff", "Harpoon", "Javelin", "Spear", "Telescoping Staff"]},
    {skillType: "Projectile Weapons", weaponType: ["Standard Bow", "Crossbow"]},
    {skillType: "Rifles", weaponType: ["Sporting Rifle", "Sniper Rifle"]},
    {skillType: "Shotguns", weaponType: ["Shotguns"]},
    {skillType: "Submachine Guns", weaponType: ["SMGs"]},
    {skillType: "Throwing", weaponType: ["Throwing Weapons"]},
    {skillType: "Whips", weaponType: ["Personal Weapons"], weaponsAvailable: ["Monofilament Whip", "Whip", "Kusarigama", "Manriki-gusari", "Morning Star", "Nunchaku", "Three-section Staff"]}
];

const srWeaponsToChooseFromArray = [srMeleeWeapons, srProjectileWeapons, srFirearmWeapons];

var nameOfWeapon = "";
var typeOfWeapon = "";
var concealOfWeapon = "";
var reachOfWeapon = "";
var modeOfWeapon = "";
var ammoOfWeapon = "";

var weaponRangeShort = "";
var weaponRangeMedium = "";
var weaponRangeLong = "";
var weaponRangeExtreme = "";

var damageOfWeapon = "";
var modifiersOfWeapon ="";

function srWeaponsPicker(){
    const weaponsNamePlacer = srWeaponName;
    const weaponsTypePlacer = srWeaponType;
    const weaponsConealPlacer = srWeaponConceal;
    const weaponsReachPlacer = srWeaponReach;
    const weaponsModePlacer = srWeaponMode;
    const weaponsAmmoPlacer = srWeaponAmmo;
    const weaponsShortPlacer = srWeaponShort;
    const weaponsMedPlacer = srWeaponMed;
    const weaponsLongPlacer = srWeaponLong;
    const weaponsExtremePlacer = srWeaponExtreme;
    const weaponsDamagePlacer = srWeaponDamage;
    const weaponsModsPlacer = srWeaponMods;

    //srWeaponSpecializationFocus
    //srWeaponSkillFocus

    //console.log("specialized weapon skills: " + srWeaponSpecializationFocus + " general weapon skills: " + srWeaponSkillFocus);

    if(srWeaponSpecializationFocus.length > 0){        
        for (let i = 0; i < srWeaponSpecializationFocus.length; i++) {            
            let weaponToAdd = srWeaponSpecializationFocus[i];
            let weaponTypeToAdd = "";
            for (let j = 0; j < srWeaponsToChooseFromArray.length; j++) {                
                for (let k = 0; k < srWeaponsToChooseFromArray[j].length; k++) {
                    let weapon = srWeaponsToChooseFromArray[j][k].name;
                    if(weapon.includes(weaponToAdd)){
                        weaponTypeToAdd = srWeaponsToChooseFromArray[j][k].type;
                        weaponsPlacer(weaponTypeToAdd, weaponToAdd);
                    }                    
                }
                if(weaponTypeToAdd) break;
            }            
        }
    }else if(srWeaponSkillFocus.length > 0 && srWeaponSpecializationFocus.length == 0){
        for (let i = 0; i < srWeaponSkillFocus.length; i++) {
            const matchingSkillType = srWeaponsBySkill.find(obj => obj.skillType === srWeaponSkillFocus[i]);
            console.log("skill type to match: " + matchingSkillType);
            let weaponToAdd;
            let weaponsType;
            let selectedWeaponToAdd;

            if(matchingSkillType.weaponsAvailable){
                const weaponsAvailable = matchingSkillType.weaponsAvailable;
                const randomIndex = Math.floor(Math.random() * weaponsAvailable.length)
                weaponToAdd = weaponsAvailable[randomIndex];
                weaponsType = matchingSkillType.weaponType[0];
                console.log("weapon to add with weaponsAvailable option in object:");
                console.log("weapon: " + weaponToAdd);
                console.log("weapon type: " + weaponsType);
                console.log("-------------------------");
                weaponsPlacer(weaponsType, weaponToAdd);
            }else{
                const weaponType = matchingSkillType.weaponType[0];
                let possibleWeapons;
                console.log("non specialized weapon search, looking for type: " + weaponType);
                switch(weaponType){
                    case "Personal Weapons":
                        console.log("entered personal weapons section");
                        possibleWeapons = srMeleeWeapons;
                    break;
                    case "Standard Bow":
                    case "Crossbow":
                        console.log("entered Standard Bow and Crossbow section section");
                        possibleWeapons = srProjectileWeapons;
                    break;
                    default:
                        console.log("entered all other sections");
                        possibleWeapons = srFirearmWeapons;
                }
                const matchingWeapons = possibleWeapons.filter(obj => obj.type === weaponType);
                const randomIndex = Math.floor(Math.random() * matchingWeapons.length)
                const weaponInfo = matchingWeapons[randomIndex];
                weaponToAdd = weaponInfo.name;
                console.log("trying to add a weapon from this array: " + weaponToAdd);
                selectedWeaponToAdd = weaponToAdd[Math.floor(Math.random() * weaponToAdd.length)];
                weaponsType = weaponInfo.type;                
                console.log("weapon to add without weaponsAvailable option:");
                console.log("weapon: " + selectedWeaponToAdd);
                console.log("weapon type: " + weaponsType);
                console.log("-------------------------");
                weaponsPlacer(weaponsType, selectedWeaponToAdd);
            }
        }
    }else{
        let weaponArrayChoice = srWeaponsToChooseFromArray[Math.floor(Math.random() * srWeaponsToChooseFromArray.length)];
        let weaponType = weaponArrayChoice[Math.floor(Math.random() * weaponArrayChoice.length)].type;
        let weaponName = weaponArrayChoice.find(type => type.type === weaponType).name[Math.floor(Math.random() * weaponArrayChoice.find(type => type.type === weaponType).name.length)];

        weaponsPlacer(weaponType, weaponName);
    }

    //console.log("weapon based skills: " + srWeaponSkillFocus);
    //console.log("weapons in the specialization skills: " + srWeaponSpecializationFocus);
    
    function weaponsPlacer(weaponType, weaponName){

        let rolledWeaponOfChoise = srWeaponBuilder(weaponType, weaponName);
        console.log("weapon cost: " + srWeaponCost);
        console.log("yen before weapon cost: " + srResourceAmount);
        
        if(srResourceAmount > srWeaponCost){
            srResourceAmount -= srWeaponCost;

            console.log("yen left over after weapon cost: " + srResourceAmount);
            
            const weaponsNameDiv = document.createElement('div');
            weaponsNameDiv.innerHTML += `
                <div class="sr_weapons_info_spacer_large"><p class="sr_inner_section_title">${rolledWeaponOfChoise.name}</p></div>
            `;
            const weaponsTypeDiv = document.createElement('div');
            weaponsTypeDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.type}</p></div>
            `;
            const weaponsConealDiv = document.createElement('div');
            weaponsConealDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.conceal}</p></div>
            `;
            const weaponsReachDiv = document.createElement('div');
            weaponsReachDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.reach}</p></div>
            `;
            const weaponsModeDiv = document.createElement('div');
            weaponsModeDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.mode}</p></div>
            `;
            const weaponsAmmoDiv = document.createElement('div');
            weaponsAmmoDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.ammo}</p></div>
            `;
            const weaponsShortDiv = document.createElement('div');
            weaponsShortDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.rangeShort}</p></div>
            `;
            const weaponsMedDiv = document.createElement('div');
            weaponsMedDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.rangeMedium}</p></div>
            `;
            const weaponsLongDiv = document.createElement('div');
            weaponsLongDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.rangeLong}</p></div>
            `;
            const weaponsExtremeDiv = document.createElement('div');
            weaponsExtremeDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.rangeExtreme}</p></div>
            `;
            const weaponsDamageDiv = document.createElement('div');
            weaponsDamageDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.damage}</p></div>
            `;
            const weaponsModsDiv = document.createElement('div');
            weaponsModsDiv.innerHTML += `
                <div><p class="sr_inner_section_title sr_center_text">${rolledWeaponOfChoise.modifiers}</p></div>
            `;

            weaponsNamePlacer.appendChild(weaponsNameDiv);
            weaponsTypePlacer.appendChild(weaponsTypeDiv);
            weaponsConealPlacer.appendChild(weaponsConealDiv);
            weaponsReachPlacer.appendChild(weaponsReachDiv);
            weaponsModePlacer.appendChild(weaponsModeDiv);
            weaponsAmmoPlacer.appendChild(weaponsAmmoDiv);
            weaponsShortPlacer.appendChild(weaponsShortDiv);
            weaponsMedPlacer.appendChild(weaponsMedDiv);
            weaponsLongPlacer.appendChild(weaponsLongDiv);
            weaponsExtremePlacer.appendChild(weaponsExtremeDiv);
            weaponsDamagePlacer.appendChild(weaponsDamageDiv);
            weaponsModsPlacer.appendChild(weaponsModsDiv);

            srEquipmentPlacer.innerHTML += rolledWeaponOfChoise.name + "<br>";
            srWeaponInfoClearAll();

        }else{
            srWeaponInfoClearAll();
            srWeaponCost = 0;
            return;
        }
    }        
    srWeaponCost = 0;
}

function srWeaponInfoClearAll(){
    const clearAllInfoArray = [nameOfWeapon, typeOfWeapon, concealOfWeapon, reachOfWeapon,
        modeOfWeapon, ammoOfWeapon, weaponRangeShort, weaponRangeMedium, weaponRangeLong,
        weaponRangeExtreme, damageOfWeapon, modifiersOfWeapon];

    for (let i = 0; i < clearAllInfoArray.length; i++) {
        clearAllInfoArray[i] = "";        
    }
}