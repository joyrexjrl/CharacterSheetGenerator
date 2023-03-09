var srWeaponCost = 0;

function srWeaponRangeFinder(weaponType){
    let short = "";
    let medium = "";
    let long = "";
    let extreme = "";
    switch (weaponType) {
        case "Hold-out Pistol":
        case "Light Pistol":
            short = "0-5";
            medium = "6-15";
            long = "16-30";
            extreme = "31-50";
        break;
        case "Heavy Pistol":
            short = "0-5";
            medium = "6-20";
            long = "21-40";
            extreme = "41-60";
        break;
        case "SMG":
            short = "0-10";
            medium = "11-40";
            long = "41-80";
            extreme = "81-150";
        break;
        case "Taser":
            short = "0-5";
            medium = "6-10";
            long = "11-12";
            extreme = "13-15";
        break;
        case "Shotgun":
            short = "0-10";
            medium = "11-20";
            long = "21-50";
            extreme = "51-100";
        break;
        case "Sporting Rifle":
            short = "0-100";
            medium = "101-250";
            long = "251-500";
            extreme = "501-750";
        break;
        case "Sniper Rifle":
            short = "0-150";
            medium = "151-300";
            long = "301-700";
            extreme = "701-1000";
        break;
        case "Assault Rifle":
            short = "0-50";
            medium = "51-150";
            long = "151-350";
            extreme = "351-550";
        break;
        case "Light Machine Guns":
            short = "0-75";
            medium = "76-200";
            long = "201-400";
            extreme = "401-800";
        break;
        case "Medium Machine Guns":
            short = "0-80";
            medium = "81-250";
            long = "251-750";
            extreme = "751-1200";
        break;
        case "Heavy Machine Guns":
            short = "0-80";
            medium = "81-250";
            long = "251-800";
            extreme = "801-1500";
        break;
        case "Assault Cannon":
            short = "0-100";
            medium = "101-300";
            long = "301-900";
            extreme = "901-2400";
        break;
        case "Grenade Launcher":
            short = "5-50";
            medium = "51-100";
            long = "101-150";
            extreme = "151-300";
        break;
        case "Missile Launcher":
            short = "20-150";
            medium = "151-450";
            long = "451-1200";
            extreme = "1201-3000";
        break;
        case "Standard Bow":
            short = "0-STR";
            medium = "To STRx10";
            long = "To STRx30";
            extreme = "To STRx60";
        break;
        case "Light Crossbow":
            short = "0-STRx2";
            medium = "To STRx8";
            long = "To STRx20";
            extreme = "To STRx40";
        break;
        case "Medium Crossbow":
            short = "0-STRx3";
            medium = "To STRx12";
            long = "To STRx30";
            extreme = "To STRx50";
        break;
        case "Heavy Crossbow":
            short = "0-STRx5";
            medium = "To STRx15";
            long = "To STRx40";
            extreme = "To STRx60";
        break;
        case "Thrown Knife":
            short = "0-STR";
            medium = "To STRx2";
            long = "To STRx3";
            extreme = "To STRx5";
        break;
        case "Shuriken":
            short = "0-STR";
            medium = "To STRx2";
            long = "To STRx5";
            extreme = "To STRx7";
        break;
    }

    return {short: short, medium: medium, long: long, extreme: extreme};
}

function srWeaponBuilder(weaponType, weaponName){
    const weaponRange = srWeaponRangeFinder(weaponType);

    let srWeaponName = weaponName;
    let srWeaponType = "";
    let srWeaponConceal = "";
    let srWeaponReach = "";
    let srWeaponMode = "";
    let srWeaponAmmo = "";
    let srShort = weaponRange.short;
    let srMedium = weaponRange.medium;
    let srLong = weaponRange.long;
    let srExtreme = weaponRange.extreme;
    let srWeaponDamage = "";
    let srWeaponMods = "";
    
    let bowStrMin = 0;

    switch(weaponName){
        case "Bow":
            bowStrMin = oseDieRoller(1, 4);
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR " + bowStrMin+2 + ")M";
            srWeaponMods = "STR Min " + bowStrMin+1;
            srWeaponCost += bowStrMin*100; 
        break;
        case "Ranger-X Bow":
            bowStrMin = oseDieRoller(1, 4);
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR " + bowStrMin+4 + ")M";
            srWeaponMods = "STR Min " + bowStrMin+2;
            srWeaponCost += bowStrMin*120; 
        break;
        case "Slingshot":
        break;
        case "Light Crossbow":
        break;
        case "Medium Crossbow":
        break;
        case "Heavy Crossbow":
        break;
        case "Pistol Crossbow":
        break;
        case "Repeater Crossbow":
        break;
        case "Throwing Knife":
        break;
        case "Shuriken":
        break;
    } 

    return {name: srWeaponName, type: srWeaponType, conceal: srWeaponConceal, reach: srWeaponReach, mode: srWeaponMode, ammo: srWeaponAmmo,
        rangeShort: srShort, rangeMedium: srMedium, rangeLong: srLong, rangeExtreme: srExtreme, damage: srWeaponDamage, modifiers: srWeaponMods};
}