var srWeaponCost = 0;

function srWeaponRangeFinder(weaponType, weaponName){
    let type = "";
    let short = "";
    let medium = "";
    let long = "";
    let extreme = "";
    switch (weaponType) {
        case "Personal Weapons":
            type = "Melee";
            short = "-";
            medium = "-";
            long = "-";
            extreme = "-";
        break;
        case "Hold-Out":
            type = "HoP"
            short = "0-5";
            medium = "6-15";
            long = "16-30";
            extreme = "31-50";
        break;
        case "Machine Pistols":
        case "Light Pistols":
            type = "LP"
            short = "0-5";
            medium = "6-15";
            long = "16-30";
            extreme = "31-50";
        break;
        case "Heavy Pistols":
            type = "HvP"
            short = "0-5";
            medium = "6-20";
            long = "21-40";
            extreme = "41-60";
        break;
        case "SMGs":
            type = "SMG"
            short = "0-10";
            medium = "11-40";
            long = "41-80";
            extreme = "81-150";
        break;
        case "Taser":
            type = "Taser"
            short = "0-5";
            medium = "6-10";
            long = "11-12";
            extreme = "13-15";
        break;
        case "Shotguns":
            type = "Shot"
            short = "0-10";
            medium = "11-20";
            long = "21-50";
            extreme = "51-100";
        break;
        case "Sporting Rifle":
            type = "Rifle"
            short = "0-100";
            medium = "101-250";
            long = "251-500";
            extreme = "501-750";
        break;
        case "Sniper Rifle":
            type = "Sniper"
            short = "0-150";
            medium = "151-300";
            long = "301-700";
            extreme = "701-1000";
        break;
        case "Assault Rifle":
            type = "AsRifle"
            short = "0-50";
            medium = "51-150";
            long = "151-350";
            extreme = "351-550";
        break;
        case "Light Machine Guns":
            type = "LMG"
            short = "0-75";
            medium = "76-200";
            long = "201-400";
            extreme = "401-800";
        break;
        case "Medium Machine Guns":
            type = "MMG"
            short = "0-80";
            medium = "81-250";
            long = "251-750";
            extreme = "751-1200";
        break;
        case "Heavy Machine Guns":
            type = "HMG"
            short = "0-80";
            medium = "81-250";
            long = "251-800";
            extreme = "801-1500";
        break;
        case "Assault Cannon":
            type = "Cannon"
            short = "0-100";
            medium = "101-300";
            long = "301-900";
            extreme = "901-2400";
        break;
        case "Grenade Launchers":
            type = "GLaunch"
            short = "5-50";
            medium = "51-100";
            long = "101-150";
            extreme = "151-300";
        break;
        case "Missile Launchers":
            type = "MisLaun"
            short = "20-150";
            medium = "151-450";
            long = "451-1200";
            extreme = "1201-3000";
        break;
        case "Standard Bow":
            type = "Bow"
            short = "0-STR";
            medium = "To STRx10";
            long = "To STRx30";
            extreme = "To STRx60";
        break;
        case "Crossbow":
            if(weaponName === "Light Crossbow" || weaponName === "Pistol Crossbow"){
                type = "Xbow"
                short = "0-STRx2";
                medium = "To STRx8";
                long = "To STRx20";
                extreme = "To STRx40";
            }else if(weaponName === "Medium Crossbow" || weaponName === "Repeater Crossbow"){
                type = "Xbow"
                short = "0-STRx3";
                medium = "To STRx12";
                long = "To STRx30";
                extreme = "To STRx50";
            }else{
                type = "Xbow"
                short = "0-STRx5";
                medium = "To STRx15";
                long = "To STRx40";
                extreme = "To STRx60";
            }            
        break;
        case "Throwing Weapons":
            if(weaponName === "Throwing Knife"){
                type = "Thrown"
                short = "0-STR";
                medium = "To STRx2";
                long = "To STRx3";
                extreme = "To STRx5";
            }else{
                type = "Thrown"
                short = "0-STR";
                medium = "To STRx2";
                long = "To STRx5";
                extreme = "To STRx7";
            }
        break;
    }

    return {type: type, short: short, medium: medium, long: long, extreme: extreme};
}

function srWeaponBuilder(weaponType, weaponName){
    const weaponRange = srWeaponRangeFinder(weaponType, weaponName);

    let srWeaponName = weaponName;
    let srWeaponType = weaponRange.type;
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
        case "Cougar Fineblade Knife (short)":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "-";
            srWeaponAmmo = "-";
            srWeaponDamage = "(STR)M";
            srWeaponMods = "";
            srWeaponCost += 800;
        break;
        case "Cougar Fineblade Knife (Long)":
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
        case "Streetline Special":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "6(c)";
            srWeaponDamage = "4L";
            srWeaponMods = "";
            srWeaponCost += 100;
        break;
        case "Walther Palm Pistol":
            srWeaponConceal = "9";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "2(b)";
            srWeaponDamage = "4L";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "Cavalier Scout":
            srWeaponConceal = "9";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "7(c)";
            srWeaponDamage = "4L";
            srWeaponMods = "";
            srWeaponCost += 600;
        break;
        case "Morrissey Elan":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(c)";
            srWeaponDamage = "5L";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Raecor Sting":
            srWeaponConceal = "9";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "5(c)";
            srWeaponDamage = "4M(f)";
            srWeaponMods = "";
            srWeaponCost += 375;
        break;
        case "Tiffani Needler":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "4(c)";
            srWeaponDamage = "5M(f)";
            srWeaponMods = "";
            srWeaponCost += 650;
        break;
        case "Tiffani Self-Defender":
            srWeaponConceal = "8";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "4(c)";
            srWeaponDamage = "4L";
            srWeaponMods = "";
            srWeaponCost += 450;
        break;
        case "Beretta Model 101T":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 350;
        break;
        case "Colt American L36":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "11(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 350;
        break;
        case "Fichetti Security 500":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 400;
        break;
        case "Fichetti Security 500a":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "25(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 1";
            srWeaponCost += 550;
        break;
        case "Ares Light Fire 70":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "16(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 475;
        break;
        case "Beretta 200ST":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "26(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 1";
            srWeaponCost += 750;
        break;
        case "Ceska vz/120":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "18(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Colt Asp":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "6(cy)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "Executive Action":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "24(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 1150;
        break;
        case "Hammeril Model 610S":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "6(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 1";
            srWeaponCost += 1300;
        break;
        case "SA Puzzler":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 900;
        break;
        case "Seco LD-120":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 400;
        break;
        case "Taurus Multi-6":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA/SS";
            srWeaponAmmo = "6(cy)";
            srWeaponDamage = "6L/7M";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Walther PB-120":
            srWeaponConceal = "8(6)";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "10(15)(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 700;
        break;
        case "Ceska Black Scorpion":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "35(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 1";
            srWeaponCost += 850;
        break;
        case "Ares Crusader":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 2";
            srWeaponCost += 950;
        break;
        case "Steyr TMP":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "";
            srWeaponCost += 900;
        break;
        case "Ares Predator":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "15(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 450;
        break;
        case "Ares Viper Silvergun":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "9S(f)";
            srWeaponMods = "";
            srWeaponCost += 600;
        break;
        case "Browning Max-Power":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "10(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 450;
        break;
        case "Remington Roomsweeper":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "8(m)";
            srWeaponDamage = "9S(f)";
            srWeaponMods = "";
            srWeaponCost += 300;
        break;
        case "Ruger Super Warhawk":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "6(cy)";
            srWeaponDamage = "10M";
            srWeaponMods = "";
            srWeaponCost += 300;
        break;
        case "Ares Predator II":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "15(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 550;
        break;
        case "Ares Predator III":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "15(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 650;
        break;
        case "Browning Ultra-Power":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "10(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 525;
        break;
        case "Cavalier Deputy":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "7(cy)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 300;
        break;
        case "Colt Manhunter":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "16(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 425;
        break;
        case "Elchiro Hatamoto II":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1(m)";
            srWeaponDamage = "8S";
            srWeaponMods = "";
            srWeaponCost += 1200;
        break;
        case "FN 5-7C":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "20(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 1";
            srWeaponCost += 700;
        break;
        case "Morrissey Alta":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 1200;
        break;
        case "Morrissey Elite":
            srWeaponConceal = "7";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 550;
        break;
        case "Ruger Thunderbolt":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "BF";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "12S";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Savalette Guardian":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "RC 1";
            srWeaponCost += 900;
        break;
        case "WW Infiltrator":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "15(c)";
            srWeaponDamage = "9M";
            srWeaponMods = "";
            srWeaponCost += 1200;
        break;
        case "Ares Redline":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "10";
            srWeaponDamage = "12M";
            srWeaponMods = "";
            srWeaponCost += 75000;
        break;
        case "Defiance Super Shock":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "4(m)";
            srWeaponDamage = "10S Stun";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Yamaha Pulsar":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "4(m)";
            srWeaponDamage = "8D Stun";
            srWeaponMods = "";
            srWeaponCost += 1350;
        break;
        case "AK-97 SMG/Carbine":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 1";
            srWeaponCost += 800;
        break;
        case "Heckler & Koch HK227":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "28(c)";
            srWeaponDamage = "7M";
            srWeaponMods = "RC 2(3)";
            srWeaponCost += 1500;
        break;
        case "HK227-S":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "28(c)";
            srWeaponDamage = "7M";
            srWeaponMods = "RC 1";
            srWeaponCost += 1200;
        break;
        case "Ingram Smartgun":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "32(c)";
            srWeaponDamage = "7M";
            srWeaponMods = "RC 2(3)";
            srWeaponCost += 950;
        break;
        case "Uzi III":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "BF";
            srWeaponAmmo = "24(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 1";
            srWeaponCost += 600;
        break;
        case "Beretta Model 70":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "35(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "";
            srWeaponCost += 900;
        break;
        case "Colt Cobra TZ-110":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "32(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 2(3)";
            srWeaponCost += 800;
        break;
        case "Colt Cobra TZ-115":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "32(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "";
            srWeaponCost += 750;
        break;
        case "Colt Cobra TZ-118":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "32(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "";
            srWeaponCost += 850;
        break;
        case "Colt Water Carbine":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "HK MP-5 TX":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "20(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 2";
            srWeaponCost += 850;
        break;
        case "Ingram SuperMach 100":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "6L";
            srWeaponMods = "RC 3";
            srWeaponCost += 850;
        break;
        case "Ingram Warrior-10":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "7M";
            srWeaponMods = "";
            srWeaponCost += 650;
        break;
        case "Sandler TMP":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "20(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 1";
            srWeaponCost += 500;
        break;
        case "SCK model 100":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "7M";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Remington 750":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(m)";
            srWeaponDamage = "7S";
            srWeaponMods = "";
            srWeaponCost += 600;
        break;
        case "Remington 950":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(m)";
            srWeaponDamage = "9S";
            srWeaponMods = "";
            srWeaponCost += 800;
        break;
        case "Ruger 100":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(m)";
            srWeaponDamage = "7S";
            srWeaponMods = "";
            srWeaponCost += 1300;
        break;
        case "Laser III":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "20";
            srWeaponDamage = "15M";
            srWeaponMods = "";
            srWeaponCost += 120000;
        break;
        case "Ranger Arms SM-3":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "6(m)";
            srWeaponDamage = "14S";
            srWeaponMods = "RC 2";
            srWeaponCost += 4000;
        break;
        case "Barret Model 121":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "14(c)";
            srWeaponDamage = "14D";
            srWeaponMods = "RC 2";
            srWeaponCost += 4800;
        break;
        case "Walther MA-2100":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "10(m)";
            srWeaponDamage = "14S";
            srWeaponMods = "";
            srWeaponCost += 6500;
        break;
        case "Heavy Laser Plus":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "50";
            srWeaponDamage = "18M";
            srWeaponMods = "";
            srWeaponCost += 300000;
        break;
        case "Defiance T-250":
            srWeaponConceal = "4";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "5(m)";
            srWeaponDamage = "10S";
            srWeaponMods = "";
            srWeaponCost += 500;
        break;
        case "Enfield AS-7":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "10(c)";
            srWeaponDamage = "8S";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Franchi SPAS-22":
            srWeaponConceal = "2(4)";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "10(m)";
            srWeaponDamage = "10S";
            srWeaponMods = "RC 1";
            srWeaponCost += 1000;
        break;
        case "Mossberg CMDT":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "8(c)";
            srWeaponDamage = "9S";
            srWeaponMods = "";
            srWeaponCost += 1000;
        break;
        case "Mossberg SM-SMDT":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "8(c)";
            srWeaponDamage = "9S";
            srWeaponMods = "";
            srWeaponCost += 1500;
        break;
        case "Remington 990":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "8(m)";
            srWeaponDamage = "8S/10D(f)";
            srWeaponMods = "";
            srWeaponCost += 650;
        break;
        case "Street Sweeper":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1(b)";
            srWeaponDamage = "10S(f)";
            srWeaponMods = "";
            srWeaponCost += 200;
        break;
        case "AK-97":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "38(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "";
            srWeaponCost += 700;
        break;
        case "AK-98":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "38(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "";
            srWeaponCost += 2500;
        break;
        case "FN HAR":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "35(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 1200;
        break;
        case "Ares Alpha":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "42(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 2000;
        break;
        case "Ares HVAR":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "50(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 3";
            srWeaponCost += 3200;
        break;
        case "Colt M22A2":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 1";
            srWeaponCost += 1600;
        break;
        case "Colt M-23":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "";
            srWeaponCost += 950;
        break;
        case "HK G12A3z":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "32(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 2200;
        break;
        case "HK G38 Assault Rifle":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 4000;
        break;
        case "HK G38 Carbine Rifle":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "7S";
            srWeaponMods = "RC 2";
            srWeaponCost += 4000;
        break;
        case "HK G38 LMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "30(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 4000;
        break;
        case "Semopal vz/88V":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "35(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 2";
            srWeaponCost += 1800;
        break;
        case "Steyr AUG-CSL Assault Rifle":
            srWeaponConceal = "2";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 1";
            srWeaponCost += 4500;
        break;
        case "Steyr AUG-CSL Carbine":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "7S";
            srWeaponMods = "RC 1";
            srWeaponCost += 4500;
        break;
        case "Steyr AUG-CSL SMG":
            srWeaponConceal = "5";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "6M";
            srWeaponMods = "RC 1";
            srWeaponCost += 4500;
        break;
        case "Steyr AUG-CSL LMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "40(c)";
            srWeaponDamage = "8M";
            srWeaponMods = "RC 1";
            srWeaponCost += 4500;
        break;
        case "Ingram Valiant":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "50(c)/Belt";
            srWeaponDamage = "7S";
            srWeaponMods = "RC 3";
            srWeaponCost += 1500;
        break;
        case "Ares HV MP-LMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SA/BF/FA";
            srWeaponAmmo = "80(c)/Belt";
            srWeaponDamage = "6S";
            srWeaponMods = "RC 3";
            srWeaponCost += 4500;
        break;
        case "Ares MP-LMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "BF/FA";
            srWeaponAmmo = "50(c)/Belt";
            srWeaponDamage = "7S";
            srWeaponMods = "RC 2(3)";
            srWeaponCost += 2200;
        break;
        case "FN MAG-5 MMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "FA";
            srWeaponAmmo = "50(box)/Belt";
            srWeaponDamage = "9S";
            srWeaponMods = "RC 2(8)";
            srWeaponCost += 3200;
        break;
        case "Ultimax MMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "FA";
            srWeaponAmmo = "40(c)/Belt";
            srWeaponDamage = "9S";
            srWeaponMods = "RC 6";
            srWeaponCost += 2500;
        break;
        case "RPK HMG":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "FA";
            srWeaponAmmo = "40(c)/Belt";
            srWeaponDamage = "10S";
            srWeaponMods = "RC 6";
            srWeaponCost += 4000;
        break;
        case "Vindicator Minigun":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "FA";
            srWeaponAmmo = "50(c)/Belt";
            srWeaponDamage = "7S";
            srWeaponMods = "";
            srWeaponCost += 2500;
        break;
        case "Stoner-Ares M107":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "FA";
            srWeaponAmmo = "40(c)/Belt";
            srWeaponDamage = "10S";
            srWeaponMods = "RC 3(9)";
            srWeaponCost += 5200;
        break;
        case "Vigorous Assault Cannon":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "20(c)/Belt";
            srWeaponDamage = "18D";
            srWeaponMods = "";
            srWeaponCost += 6500;
        break;
        case "Panther Cannon":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "22(c)/Belt";
            srWeaponDamage = "18D";
            srWeaponMods = "RC 2/1";
            srWeaponCost += 7200;
        break;
        case "Ares Antioch":
            srWeaponConceal = "6(-3)";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "6(m)";
            srWeaponDamage = "grenade";
            srWeaponMods = "";
            srWeaponCost += 1700;
        break;
        case "ArmTech MGL-6":
            srWeaponConceal = "6";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "6(c)";
            srWeaponDamage = "grenade";
            srWeaponMods = "";
            srWeaponCost += 1600;
        break;
        case "ArmTech MGL-12":
            srWeaponConceal = "3";
            srWeaponReach = "-";
            srWeaponMode = "SA";
            srWeaponAmmo = "12(c)";
            srWeaponDamage = "grenade";
            srWeaponMods = "";
            srWeaponCost += 2200;
        break;
        case "M-12 Portable":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "mortar";
            srWeaponMods = "";
            srWeaponCost += 3000;
        break;
        case "IWS Multi-Launcher":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "4(b)";
            srWeaponDamage = "missile";
            srWeaponMods = "";
            srWeaponCost += 8000;
        break;
        case "Aztechnology Lasher":
            srWeaponConceal = "4/-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1(b)";
            srWeaponDamage = "missile";
            srWeaponMods = "";
            srWeaponCost += 4000;
        break;
        case "Spike":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1(b)";
            srWeaponDamage = "missle";
            srWeaponMods = "";
            srWeaponCost += 800;
        break;
        case "Arbelast II MAW":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "15D(HE)";
            srWeaponMods = "Scatter 2D6+2";
            srWeaponCost += 900;
        break;
        case "Ballista MK I":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "14D(AV)";
            srWeaponMods = "Scatter 2D6";
            srWeaponCost += 1000;
        break;
        case "Ballista MK II":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "14D(AV)";
            srWeaponMods = "Int 6" + "<br>" + "Scatter 2D6";
            srWeaponCost += 2000;
        break;
        case "Ballista MK III":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "14D(AV)";
            srWeaponMods = "Int 5" + "<br>" + "Scatter 2D6";
            srWeaponCost += 2500;
        break;
        case "Great Dragon ATGM":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "20D(AV)";
            srWeaponMods = "Int 4" + "<br>" + "Scatter 2D6";
            srWeaponCost += 1000;
        break;
        case "M79B1 LAW":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "12D(HE)";
            srWeaponMods = "Scatter 2D6+2";
            srWeaponCost += 750;
        break;
        case "Vogeljager Missile":
            srWeaponConceal = "-";
            srWeaponReach = "-";
            srWeaponMode = "SS";
            srWeaponAmmo = "1";
            srWeaponDamage = "14D(AV)";
            srWeaponMods = "Int 5" + "<br>" + "Scatter 2D6";
            srWeaponCost += 5000;
        break;
    } 

    return {name: srWeaponName, type: srWeaponType, conceal: srWeaponConceal, reach: srWeaponReach, mode: srWeaponMode, ammo: srWeaponAmmo,
        rangeShort: srShort, rangeMedium: srMedium, rangeLong: srLong, rangeExtreme: srExtreme, damage: srWeaponDamage, modifiers: srWeaponMods};
}