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
            srWeaponDamage = "(STR " + parseInt(bowStrMin+2) + ")M";
            srWeaponMods = "STR Min " + parseInt(bowStrMin+1);
            srWeaponCost += bowStrMin*100;
        break;
        case "Ranger-X Bow":
            bowStrMin = oseDieRoller(1, 4);
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR " + parseInt(bowStrMin+4) + ")M";
            srWeaponMods = "STR Min " + parseInt(bowStrMin+2);
            srWeaponCost += bowStrMin*120; 
        break;
        case "Slingshot":
            bowStrMin = oseDieRoller(1, 4);
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR " + parseInt(bowStrMin+2) + ")L";
            srWeaponMods = "STR Min " + parseInt(bowStrMin+1);
            srWeaponCost += bowStrMin*5; 
        break;
        case "Light Crossbow":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "6L";
            srWeaponMods = "STR Min 3";
            srWeaponCost += 300;
        break;
        case "Medium Crossbow":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "6M";
            srWeaponMods = "STR Min 4";
            srWeaponCost += 500;
        break;
        case "Heavy Crossbow":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "6S";
            srWeaponMods = "STR Min 5";
            srWeaponCost += 750;
        break;
        case "Pistol Crossbow":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "4L";
            srWeaponMods = "STR Min 2";
            srWeaponCost += 200;
        break;
        case "Repeater Crossbow":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "6M";
            srWeaponMods = "STR Min 4";
            srWeaponCost += 800;
        break;
        case "Throwing Knife":
            srWeaponConceal = "9";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)L";
            srWeaponMods = "";
            srWeaponCost += 20;
        break;
        case "Shuriken":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)L";
            srWeaponMods = "";
            srWeaponCost += 30;
        break;
        case "Forearm Snap Blades":
            srWeaponConceal = "7";
            srWeaponReach = "0";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 850;
        break;
        case "Katana":
            srWeaponConceal = "3";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Knife":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)L";
            srWeaponMods = "";
            srWeaponCost += 30;
        break;
        case "Sword":
            srWeaponConceal = "4";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Survival Knife":
            srWeaponConceal = "6";
            srWeaponReach = "0";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)L";
            srWeaponMods = "";
            srWeaponCost += 450;
        break;
        case "Club":
            srWeaponConceal = "5";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M Stun";
            srWeaponMods = "";
            srWeaponCost += 10;
        break;
        case "Sap":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M Stun";
            srWeaponMods = "";
            srWeaponCost += 10;
        break;
        case "Stun Baton":
            srWeaponConceal = "4";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "6S Stun";
            srWeaponMods = "";
            srWeaponCost += 750;
        break;
        case "Combat Axe":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)S";
            srWeaponMods = "";
            srWeaponCost += 750;
        break;
        case "Pole Arm":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)S";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Staff":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M Stun";
            srWeaponMods = "";
            srWeaponCost += 50;
        break;
        case "Monofilament Whip":
            srWeaponConceal = "10";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "10S";
            srWeaponMods = "";
            srWeaponCost += 3000;
        break;
        case "Shock Glove":
            srWeaponConceal = "9";
            srWeaponReach = "0";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR-1)M Stun" + "<br>" + "+7S Stun";
            srWeaponMods = "";
            srWeaponCost += 950;
        break;
        case "Whip":
            srWeaponConceal = "5";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)L";
            srWeaponMods = "";
            srWeaponCost += 300;
        break;
        case "Cougar Fineclade Knife (short)":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 800;
        break;
        case "Cougar Fineclade Knife (Long)":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M";
            srWeaponMods = "";
            srWeaponCost += 1500;
        break;
        case "Katar":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)L";
            srWeaponMods = "";
            srWeaponCost += 800;
        break;
        case "Kris":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Laser Crescent Axe":
            srWeaponConceal = "2";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)S";
            srWeaponMods = "";
            srWeaponCost += 3500;
        break;
        case "Macauitl":
            srWeaponConceal = "3";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M";
            srWeaponMods = "";
            srWeaponCost += 3000;
        break;
        case "Ares Monosword":
            srWeaponConceal = "3";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Tomahawk":
            srWeaponConceal = "6";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "Vibro Knife":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Vibro Sword":
            srWeaponConceal = "3";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)S";
            srWeaponMods = "";
            srWeaponCost += 2000;
        break;
        case "Extendable Baton":
            srWeaponConceal = "9/5";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M Stun";
            srWeaponMods = "";
            srWeaponCost += 25;
        break;
        case "Mace":
            srWeaponConceal = "4";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)M Stun";
            srWeaponMods = "";
            srWeaponCost += 150;
        break;
        case "Spiked Mace":
            srWeaponConceal = "3";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M";
            srWeaponMods = "";
            srWeaponCost += 150;
        break;
        case "Rattan Stick":
            srWeaponConceal = "5";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M Stun";
            srWeaponMods = "";
            srWeaponCost += 10;
        break;
        case "Sai":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)L Stun";
            srWeaponMods = "";
            srWeaponCost += 100;
        break;
        case "AZ - 150 Stun Baton":
            srWeaponConceal = "5";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "8S Stun";
            srWeaponMods = "";
            srWeaponCost += 1500;
        break;
        case "Bo Staff":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+3)M Stun";
            srWeaponMods = "";
            srWeaponCost += 50;
        break;
        case "Claymore":
            srWeaponConceal = "-";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)S";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Harpoon":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Javelin":
            srWeaponConceal = "3";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)L";
            srWeaponMods = "";
            srWeaponCost += 100;
        break;
        case "No-Dachi":
            srWeaponConceal = "-";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)S";
            srWeaponMods = "";
            srWeaponCost += 3000;
        break;
        case "Spear":
            srWeaponConceal = "2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+4)L";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "Telescoping Staff":
            srWeaponConceal = "5/2";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M Stun";
            srWeaponMods = "";
            srWeaponCost += 100;
        break;
        case "Kusarigama":
            srWeaponConceal = "8";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "Manriki-gusari":
            srWeaponConceal = "10";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)L Stun";
            srWeaponMods = "";
            srWeaponCost += 150;
        break;
        case "Morning Star":
            srWeaponConceal = "4";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M";
            srWeaponMods = "";
            srWeaponCost += 250;
        break;
        case "Nunchaku":
            srWeaponConceal = "7";
            srWeaponReach = "1";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+1)M Stun";
            srWeaponMods = "";
            srWeaponCost += 100;
        break;
        case "Three-section Staff":
            srWeaponConceal = "4";
            srWeaponReach = "2";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR+2)M Stun";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case:
            srWeaponConceal = "";
            srWeaponReach = "";
            srWeaponMode = "";
            srWeaponAmmo = "";
            srWeaponDamage = "";
            srWeaponMods = "";
            srWeaponCost += 0;
        break;
    } 

    return {name: srWeaponName, type: srWeaponType, conceal: srWeaponConceal, reach: srWeaponReach, mode: srWeaponMode, ammo: srWeaponAmmo,
        rangeShort: srShort, rangeMedium: srMedium, rangeLong: srLong, rangeExtreme: srExtreme, damage: srWeaponDamage, modifiers: srWeaponMods};
}