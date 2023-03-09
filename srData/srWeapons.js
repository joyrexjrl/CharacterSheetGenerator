const srMeleeWeapons = [
    {type: "Personal Weapons", name: ["Forearm Snap Blades", "Katana", "Knife", "Sword", "Survival Knife", "Club", "Sap", "Stun Baton", "Combat Axe", "Pole Arm", "Staff", "Monofilament Whip", "Shock Glove", "Whip", "Cougar Fineclade Knife (short)", "Cougar Fineclade Knife (Long)", "Katar", "Kris", "Laser Crescent Axe", "Macauitl", "Ares Monosword", "Tomahawk", "Vibro Knife", "Vibro Sword", "Extendable Baton", "Mace", "Spiked Mace", "Rattan Stick", "Sai", "AZ - 150 Stun Baton", "Bo Staff", "Claymore", "Harpoon", "Javelin", "No-Dachi", "Spear", "Telescoping Staff", "Kusarigama", "Manriki-gusari", "Morning Star", "Nunchaku", "Three-section Staff"]}
];

const srProjectileWeapons = [
    {type: "Standard Bow", name: []},
    {type: "Crossbow", name: []},
    {type: "Throwing Weapons", name: []}
];

const srFirearmWeapons = [
    {type: "Hold-Out", name: []},
    {type: "Light", name: []},
    {type: "Machine Pistols", name: []},
    {type: "Heavy Pistols", name: []},
    {type: "Special Weapons", name: []},
    {type: "SMGs", name: []},
    {type: "Rifles", name: []},
    {type: "Shotguns", name: []},
    {type: "Assault Rifles", name: []},
    {type: "Machine Guns", name: []},
    {type: "Heavy Weapons", name: []},
    {type: "Grenade Launchers", name: []},
    {type: "Missile Launchers", name: []}
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
    let chosenWeapon = weaponType[Math.floor(Math.random() * weaponType.length)].type;

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
        srWeaponCost = 0;
    }else{
        srWeaponInfoClearAll()
        srWeaponCost = 0;
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