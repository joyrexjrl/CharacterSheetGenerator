const srMeleeWeapons = [
    {weaponName: "Forearm Snap Blades", reach: 0, damage: "(STR)M", cost: 850},
    {weaponName: "Katana", reach: 1, damage: "(STR+3)M", cost: 1000},
    {weaponName: "Knife", reach: 0, damage: "(STR)L", cost: 30},
    {weaponName: "Sword", reach: 1, damage: "(STR+2)M", cost: 500},
    {weaponName: "Survival Knife", reach: 0, damage: "(STR+2)L", cost: 450},
    {weaponName: "Club", reach: 1, damage: "(STR+1)M Stun", cost: 10},
    {weaponName: "Sap", reach: 0, damage: "(STR+2)M Stun", cost: 10},
    {weaponName: "Stun Baton", reach: 1, damage: "6S Stun", cost: 750},
    {weaponName: "Combat Axe", reach: 2, damage: "(STR)S", cost: 750},
    {weaponName: "Pole Arm", reach: 2, damage: "(STR+3)S", cost: 500},
    {weaponName: "Staff", reach: 2, damage: "(STR+2)M Stun", cost: 50},
    {weaponName: "Monofilament Whip", reach: 2, damage: "10S", cost: 3000},
    {weaponName: "Shock Glove", reach: 0, damage: "(STR-1)M Stin + 7S Stun", cost: 950},
    {weaponName: "Whip", reach: 2, damage: "(STR)L", cost: 300},
    {weaponName: "Cougar Fineclade Knife (short)", reach: 0, damage: "(STR)M", cost: 800},
    {weaponName: "Cougar Fineclade Knife (Long)", reach: 0, damage: "(STR+1)M", cost: 1500},
    {weaponName: "Katar", reach: 0, damage: "(STR+3)L", cost: 800},
    {weaponName: "Kris", reach: 0, damage: "(STR)M", cost: 1000},
    {weaponName: "Laser Crescent Axe", reach: 1, damage: "(STR)S", cost: 3500},
    {weaponName: "Macauitl", reach: 1, damage: "(STR+2)M", cost: 3000},
    {weaponName: "Ares Monosword", reach: 1, damage: "(STR+3)M", cost: 1000},
    {weaponName: "Tomahawk", reach: 1, damage: "(STR)M", cost: 200},
    {weaponName: "Vibro Knife", reach: 0, damage: "(STR)M", cost: 1000},
    {weaponName: "Vibro Sword", reach: 1, damage: "(STR)S", cost: 2000},
    {weaponName: "Extendable Baton", reach: 1, damage: "(STR+1)M Stun", cost: 25},
    {weaponName: "Mace", reach: 1, damage: "(STR+3)M Stun", cost: 150},
    {weaponName: "Spiked Mace", reach: 1, damage: "(STR+1)M", cost: 150},
    {weaponName: "Rattan Stick", reach: 1, damage: "(STR+1)M Stun", cost: 10},
    {weaponName: "Sai", reach: 0, damage: "(STR+2)L Stun", cost: 100},
    {weaponName: "AZ - 150 Stun Baton", reach: 1, damage: "8S Stun", cost: 1500},
    {weaponName: "Bo Staff", reach: 2, damage: "(STR+3 M Stun)", cost: 50},
    {weaponName: "Claymore", reach: 2, damage: "(STR+1)S", cost: 1000},
    {weaponName: "Harpoon", reach: 2, damage: "(STR+2)M", cost: 500},
    {weaponName: "Javelin", reach: 2, damage: "(STR+2)L", cost: 100},
    {weaponName: "No-Dachi", reach: 2, damage: "(STR+1)S", cost: 3000},
    {weaponName: "Spear", reach: 2, damage: "(STR+4)L", cost: 200},
    {weaponName: "Telescoping Staff", reach: 2, damage: "(STR+2)M Stun", cost: 100},
    {weaponName: "Kusarigama", reach: 2, damage: "(STR+1)M", cost: 200},
    {weaponName: "Manriki-gusari", reach: 2, damage: "(STR+2)L Stun", cost: 150},
    {weaponName: "Morning Star", reach: 2, damage: "(STR+2)M", cost: 250},
    {weaponName: "Nunchaku", reach: 1, damage: "(STR+1)M Stun", cost: 100},
    {weaponName: "Three-section Staff", reach: 2, damage: "(STR+2)M Stun", cost: 200}
];

const srProjectileWeapons = [
    {weaponName: "Bow", minSTR: 0, damage: "", cost: 0, newObject: function(){return customFunctionHere()}},
    {weaponName: "Crossbow", minSTR: 0, damage: "", cost: 0, newObject: function(){return crossbowCode()}},
    {weaponName: "Throwing Knife", minSTR: 0, damage: "(STR)L", cost: 20},
    {weaponName: "Shuriken", minSTR: 0, damage: "(STR)L", cost: 30}
];

const srFirearmWeapons = [
    {weaponName: "Hold-Out", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Light", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Machine Pistols", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Heavy Pistols", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Special Weapons", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "SMGs", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Rifles", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Shotguns", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Assault Rifles", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Machine Guns", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Heavy Weapons", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Grenade Launchers", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}},
    {weaponName: "Missile Launchers", ammo: "", mode: "", damage: "", cost: 0, newObject: function(){return allTheFunctionsHere()}}
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
    let totalWeaponCost = 0;
    
    let weaponType = srWeaponsToChooseFromArray[Math.floor(Math.random() * srWeaponsToChooseFromArray.length)];    
    let chosenWeapon = weaponType[Math.floor(Math.random() * weaponType.length)].weaponName;

    if(weaponType == srMeleeWeapons){
        weaponRangeShort = "-";
        weaponRangeMedium = "-";
        weaponRangeLong = "-";
        weaponRangeExtreme = "-";
    }

    if(chosenWeapon.newObject){
        //make new const newChosenWeapon = chosenWeapon.newObject(); here
        //pass all values newChosenWeapon.whatever values here etc
    }else{
        //pass all other values here
    }

    if(srResourceAmount > totalWeaponCost){
        srResourceAmount -= totalWeaponCost;
        //create HTML placer here
        srWeaponInfoClearAll()
    }else{
        srWeaponInfoClearAll()
        return;
    }        
}

function srWeaponInfoClearAll(){
    const clearAllInfoArray = [nameOfWeapon, typeOfWeapon, concealOfWeapon, reachOfWeapon,
        modeOfWeapon, ammoOfWeapon, weaponRangeShort, weaponRangeMedium, weaponRangeLong,
        weaponRangeExtreme, damageOfWeapon, modifiersOfWeapon];

    for (let i = 0; i < clearAllInfoArray.length; i++) {
        clearAllInfoArray[i] = "";        
    }
}