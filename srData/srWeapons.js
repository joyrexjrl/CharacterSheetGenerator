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

    console.log("weapon based skills: " + srWeaponSkillFocus);
    console.log("weapons in the specialization skills: " + srWeaponSpecializationFocus);
    
    let weaponArrayChoice = srWeaponsToChooseFromArray[Math.floor(Math.random() * srWeaponsToChooseFromArray.length)];
    let weaponType = weaponArrayChoice[Math.floor(Math.random() * weaponArrayChoice.length)].type;
    let weaponName = weaponArrayChoice.find(type => type.type === weaponType).name[Math.floor(Math.random() * weaponArrayChoice.find(type => type.type === weaponType).name.length)];

    console.log("passed weapon type: " + weaponType);
    console.log("passed weapon name: " + weaponName);

    let rolledWeaponOfChoise = srWeaponBuilder(weaponType, weaponName);

    console.log("returned weapon info: " + rolledWeaponOfChoise.name + " " + rolledWeaponOfChoise.type + " " + rolledWeaponOfChoise.conceal + " " + rolledWeaponOfChoise.reach + " " + rolledWeaponOfChoise.mode + " " + rolledWeaponOfChoise.ammo + " " + rolledWeaponOfChoise.rangeShort + " " + rolledWeaponOfChoise.rangeMedium + " " + rolledWeaponOfChoise.rangeLong + " " + rolledWeaponOfChoise.rangeExtreme + " " + rolledWeaponOfChoise.damage + " " + rolledWeaponOfChoise.modifiers);
    
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

        srEquipmentPlacer.innerHTML += rolledWeaponOfChoise.name + "<br>"
        srWeaponInfoClearAll()

    }else{
        srWeaponInfoClearAll()
        srWeaponCost = 0;
        return;
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