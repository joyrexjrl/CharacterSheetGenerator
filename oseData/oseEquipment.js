var oseArmour = [{armour:"Leather", cost:20, armourClass:12, weight:200},
    {armour:"Chainmail", cost:40, armourClass:14, weight:400},
    {armour:"Plate mail", cost:60, armourClass:16, weight:500},
    {armour:"Shield", cost:10, armourClass:1, weight:100}];

var oseWeapons = [{weapon:"Battle axe", cost:7, damage:"1d8", weight:50, qualities:["Melee", "Slow", "Two-handed"]},
    {weapon:"Club", cost:3, damage:"1d4", weight:50, qualities:["Blunt", "Melee"]},
    {weapon:"Crossbow", cost:30, damage:"1d6", weight:50, qualities:["Missile", "Reload", "Slow", "Two-handed"], range:"(5'-80'/ 81'-160'/ 161'-240')"},
    {weapon:"Dagger", cost:3, damage:"1d4", weight:10, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"},
    {weapon:"Hand axe", cost:4, damage:"1d6", weight:30, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"},
    {weapon:"Holy water vial", cost:25, damage:"1d8", weight:1, qualities:["Missile", "Splash weapon"], range:"(5'-10'/ 11'-30'/ 31'-50')"},
    {weapon:"Javelin", cost:1, damage:"1d4", weight:20, qualities:["Missile"], range:"(5'-30'/ 31'-60'/ 61'-90')"},
    {weapon:"Lance", cost:1, damage:"1d6", weight:120, qualities:["Charge", "Melee"]},
    {weapon:"Long bow", cost:40, damage:"1d6", weight:30, qualities:["Missile", "Two-handed"], range:"(5'-70'/ 71'-140'/ 141'-210')"},
    {weapon:"Mace", cost:5, damage:"1d6", weight:30, qualities:["Blunt", "Melee"]},
    {weapon:"Oil flask, burning", cost:2, damage:"1d8", weight:1, qualities:["Missile", "Splash weapon"], range:"(5'-10'/ 11'-30'/ 31'-50')"},
    {weapon:"Polearm", cost:7, damage:"1d10", weight:150, qualities:["Brace", "Melee", "Slow", "Two-handed"]},
    {weapon:"Short bow", cost:25, damage:"1d6", weight:30, qualities:["Missile", "Two-handed"], range:"(5'-50'/ 51'-100'/ 101'-150')"},
    {weapon:"Short sword", cost:7, damage:"1d6", weight:30, qualities:["Melee"]},
    {weapon:"Silver dagger", cost:30, damage:"1d4", weight:10, qualities:["Melee", "Missile"], range:"(5'-10'/ 11'-20'/ 21'-30')"},
    {weapon:"Sling", cost:2, damage:"1d4", weight:20, qualities:["Blunt", "Missile"], range:"(5'-40'/ 41'-80'/ 81'-160')"},
    {weapon:"Spear", cost:3, damage:"1d6", weight:30, qualities:["Brace", "Melee", "Missile"], range:"(5'-20'/ 21'-40'/ 41'-60')"},
    {weapon:"Staff", cost:2, damage:"1d4", weight:40, qualities:["Blunt", "Melee", "Slow", "Two-handed"]}, 
    {weapon:"Sword", cost:10, damage:"1d8", weight:60, qualities:["Melee"]}, 
    {weapon:"Torch", cost:1, damage:"1d4", weight:1, qualities:["Melee"]}, 
    {weapon:"Two-handed sword", cost:15, damage:"1d10", weight:150, qualities:["Melee", "Slow", "Two-handed"]}, 
    {weapon:"War hammer", cost:5, damage:"1d6", weight:30, qualities:["Blunt", "Melee"]}];

var oseItems = [{item:"Backpack", cost:5, description:"• Has twos traps and can be worn on the back, keeping the hands free. Holds up to 400 coins."},
    {item:"Crowbar", cost:10, description:"• 2-3' long and made of solid iron. Can be used for forcing doors and other objects open."},
    {item:"Garlic", cost:5, description:"• Good for fighting vampires, and good in pasta."},
    {item:"Grappling hook", cost:25, description:"• Has 3 or 4 prongs. Can be used for anchoring a rope."},
    {item:"Hammer (small)", cost:2, description:"• Can be used for construction or as a mallet with iron or wooden spikes."},
    {item:"Holy symbol", cost:25, description:"• A divine spell caster is required to own a holy symbol of their deity, often worn as a necklace. Each religion has its own holy symbol."},
    {item:"Holy water (vial)", cost:25, description:"• Water that has been blessed by a holy person. It is used in some religious rituals and inflicts damage on undead monsters. Holy water does not retain its power if stored in any other container then the special vials it is blessed in."},
    {item:"Iron spikes (12)", cost:1, description:"• May be used for wedging doors open or shut, as an anchor to attach a rope to, and many other purposes"},
    {item:"Lantern", cost:10, description:"• Can be closed to hide the light. Burns one oil flask every four hours (24 turns). Casts light in a 30' radius."},
    {item:"Mirror (hand-sized, steel)", cost:5, description:"• Useful for looking around corners or for reflecting a gaze attack."},
    {item:"Oil (1 flask)", cost:2, description:"• A flask of oil fuels a lantern for four hours (24 turns). In addition to fuelling lanterns, oil can be used as a weapon. Pg 37 ose Classic Games Character book."},
    {item:"Pole (10' long, wooden)", cost:1, description:"• A 2 inch thick wooden pole useful for poking and prodding suspicious items in a dungeon."},
    {item:"Iron rations (7 days)", cost:15, description:"• Dried and preserved food to be carried on long voyages when securing fresh food may be uncertain."},
    {item:"Standard rations (7 days)", cost:5, description:"• Fresh, unpreserved food."},
    {item:"Rope (50')", cost:1, description:"• Can hold the weight of approximately three human-sized beings."},
    {item:"Sack (large)", cost:2, description:"• Can hold up to 600 coins."},
    {item:"Sack (small)", cost:1, description:"• Can hold up to 200 coins."},
    {item:"Stakes (3) and mallet", cost:3, description:"• A wooden mallet and three 18 inch long stakes."},
    {item:"Thieves tools", cost:25, description:"• This kit contains all of the tools needed to pick locks."},
    {item:"Tinder box (flint & steel)", cost:3, description:"• Used to light fires, including torches. Using a tinder box takes one round. There is a 2-in-6 chance of success per round."},
    {item:"Torches (6)", cost:1, description:"• A torch burns for 1 hour (6 turns), clearly illuminating a 30' radius. Torches may also be used in combat."},
    {item:"Waterskin", cost:1, description:"• This container, made of hide, will hold 2 pins (1 quart) of fluid."},
    {item:"Wine (2 pints)", cost:1, description:"• A bottle of wine with many different uses, including drinking. Let your imagination flow."},
    {item:"Wolfsbane (1 bunch)", cost:10, description:"• This herb can be used to repel lycanthropes. The creature must be hit with the herb in melee combat."}];

var equipmentWeight = 0;

function oseWeaponQualitiesDisplayer(qualitiesArray){
    let quality = "";
    switch(qualitiesArray){
        case "Blunt":
            return quality += "• " + "Blunt: May be used by clerics." + "<br>";
        case "Brace":
            return quality += "• " + "Brace: Bracing against the ground doubles damage against charging monsters." + "<br>";
        case "Charge":
            return quality += "• " + "Charge: While mounted, moving at least 60' in a round and attacking doubles any damage done with a successful hit." + "<br>";
        case "Melee":
            return quality += "• " + "Melee: Close quarters weapon (5' or less)." + "<br>";
        case "Missile":
            return quality += "• " + "Missile: Thrown or fired weapons (grater than 5' distance). The distance for short (+1 to hit), medium, and long (-1 to hit) range are shown in parentheses." + "<br>";            
        case "Reload":
            return quality += "• " + "Reload (optional rule): Requires a round to reload between shots; can only be fired every second round." + "<br>";
        case "Slow":
            return quality += "• " + "Slow: The character acts last in each combat round." + "<br>";
        case "Splash weapon":
            return quality += "• " + "Splash weapon: On a successful attack, the container smashes and douses the target with the liquid. The listed damage is inflicted for two rounds, as the liquid drips off." + "<br>";
        case "Two-handed":
            return quality += "• " + "Two-handed: Requires both hands; the character cannot use a shield." + "<br>";
    }
}

function oseArmourPicker(startingArmourArray, startingArmourChoice){
    if(startingArmourChoice && startingArmourArray.length > 0){
        let randomRoll = Math.floor(Math.random() * startingArmourArray.length);
        for (let i = 0; i < oseArmour.length; i++) {
            if(startingArmourArray[randomRoll] == oseArmour[i].armour){
                oseCharacterEquipment.innerHTML += "<span class='bold'>" + oseArmour[i].armour + "</span>" + " - weight" + " " + oseArmour[i].weight + "<br>";
                oseWeaponsArmorDisplay.innerHTML += "<span class='bold'>" + oseArmour[i].armour + "</span>" + " - armour class" + " " + oseArmour[i].armourClass + "<br>";
                let itemsArmourClass = oseArmour[i].armourClass;
                oseArmourClassCalculator(itemsArmourClass);
                equipmentWeight += (parseInt(oseArmour[i].weight));
                return;
            }
        }
    }
}

function oseWeaponPicker(weaponOfChoice, weaponProfPicker){    
    if(weaponProfPicker){
        for (let i = 0; i < oseWeapons.length; i++) {
            if(oseWeapons[i].weapon == weaponOfChoice){
                oseCharacterEquipment.innerHTML += "<span class='bold'>" + oseWeapons[i].weapon + "</span>" + " - weight" + " " + oseWeapons[i].weight + "<br>";
                equipmentWeight += (parseInt(oseWeapons[i].weight));
                let weaponQualitiesArray = oseWeapons[i].qualities;
                let qualityToBeAdded = "";
                for (let j = 0; j < weaponQualitiesArray.length; j++) {
                    qualityToBeAdded = oseWeaponQualitiesDisplayer(oseWeapons[i].qualities[j]);                
                    oseCharacterEquipment.innerHTML += qualityToBeAdded;
                    if(oseWeapons[i].qualities[j] == "Missile") oseCharacterEquipment.innerHTML += "Range " + oseWeapons[i].range + "<br>";
                }
                oseWeaponsArmorDisplay.innerHTML += "<span class='bold'>" + oseWeapons[i].weapon + "</span>" + " - damage" + " " + oseWeapons[i].damage + "<br>";
            }        
        }
    }   
}

function oseItemPicker(){
    let itemsAmount = Math.floor(parseInt(oseCharacterGoldCoins.textContent) / 25);
    let randomRoll = 0;
    let itemTotalCost = 0;
    let goldAfterItemcost;

    if(oseCharacterClass.textContent === "Cleric" || oseCharacterClass.textContent === "Druid" || oseCharacterClass.textContent === "Paladin"){
        itemTotalCost += oseItems[5].cost;
        oseCharacterEquipment.innerHTML += "<span class='bold'>" + oseItems[5].item + "</span>" + "<br>";
        oseCharacterEquipment.innerHTML += oseItems[5].description + "<br>";  
    }

    for (let i = 0; i < itemsAmount; i++) {
        randomRoll = oseDieRoller(1, oseItems.length)-1;
        itemTotalCost += oseItems[randomRoll].cost;
        oseCharacterEquipment.innerHTML += "<span class='bold'>" + oseItems[randomRoll].item + "</span>" + "<br>";
        oseCharacterEquipment.innerHTML += oseItems[randomRoll].description + "<br>";        
    }

    goldAfterItemcost = oseCharacterGoldCoins.textContent -= itemTotalCost;
    oseCharacterTreasureWeight.innerHTML += goldAfterItemcost;
}

function oseEquipmentWeightDisplayer(equipmentWeight){
    let sum = parseInt(equipmentWeight);
    oseCharacterWeaponsArmorWeight.innerHTML = sum;
}

function oseTotalEquipmentWeightDisplayer(coinWeight, gearWeight){
    let sum = parseInt(coinWeight) + parseInt(gearWeight);
    oseCharacterTotalCarriedWeight.innerHTML = sum;
}