var cyberwareName = "";
var essenceCost = 0;
var cost = 0;
var randomRoll = 0;
var cyberlimbBuiltInDevice = false;

var cyberStrengthBonus = 0;
var cyberQuicknessBonus = 0;
var cyberBodyBonus = 0;
var cyberReactionBonus = 0;
var cyberInitiativeBonus = "";
var cyberImpactArmorBonus = 0;
var cyberBalisticArmorBonus = 0;

function srCyberEyes(){
    let eyeMods = ["Camera", "Display Link", "Flare Compensation", "Image Link", "Low-Light", "Opticam", "Protective Covers", "Retinal Clock", "Retinal Duplication", "Thermographic", "Vision Magnification"];
    let visionMagMods = ["Optical 1", "Optical 2", "Optical 3", "Electronic 1", "Electronic 2", "Electronic 3"];
    let freeEssenceBank = 50;
    let modEssenceCost = 0;
    let chosenMods = [];
    let addedMods = "";
    let modsToAdd = oseDieRoller(1, 8);

    cyberwareName = "Cyber Eyes: ";
    essenceCost = 20;
    cost = 5000;

    for (let i = 0; i < modsToAdd; i++) {
        const addMod = eyeMods.filter(mods => !chosenMods.includes(mods));
        const chosenMod = addMod[Math.floor(Math.random() * addMod.length)];
        const visionMod = visionMagMods[Math.floor(Math.random() * visionMagMods.length)];
        let duplicationRating = oseDieRoller(1, 6);
        
        switch(chosenMod){
            case "Camera":
                modEssenceCost += 40;
                cost += 5000;
            break;
            case "Display Link":
                modEssenceCost += 10;
                cost += 1000;
            break;
            case "Flare Compensation":
                modEssenceCost += 10;
                cost += 2000;
            break;
            case "Image Link":
                modEssenceCost += 20;
                cost += 1600;
            break;
            case "Low-Light":
                modEssenceCost += 20;
                cost += 3000;
            break;
            case "Opticam":
                modEssenceCost += 50;
                cost += 20000;
            break;
            case "Protective Covers":
                cost += 500;
            break;
            case "Retinal Clock":
                modEssenceCost += 10;
                cost += 450;
            break;
            case "Retinal Duplication":
                modEssenceCost += 10;
                cost += duplicationRating * 25000;
            break;
            case "Thermographic":
                modEssenceCost += 20;
                cost += 3000;
            break;
            case "Vision Magnification":
                switch(visionMod){
                    case "Optical 1":
                        modEssenceCost += 20;
                        cost += 2500;
                    break;
                    case "Optical 2":
                        modEssenceCost += 20;
                        cost += 4000;
                    break;
                    case "Optical 3":
                        modEssenceCost += 20;
                        cost += 6000;
                    break;
                    case "Electronic 1":
                        modEssenceCost += 10;
                        cost += 3500;
                    break;
                    case "Electronic 2":
                        modEssenceCost += 10;
                        cost += 7500;
                    break;
                    case "Electronic 3":
                        modEssenceCost += 10;
                        cost += 11000;
                    break;
                }
            break;
        }        
        if(chosenMod === "Retinal Duplication") addedMods += "•" + chosenMod + " " + duplicationRating + " ";
        else if(chosenMod === "Vision Magnification") addedMods += "•" + chosenMod + ": " + visionMod + " ";
        else addedMods += "•" + chosenMod + " ";
        chosenMods.push(chosenMod);
    }
    modEssenceCost -= freeEssenceBank;
    if(modEssenceCost < 0) modEssenceCost = 0;
    essenceCost += modEssenceCost;
    cyberwareName += addedMods;

    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srCyberEars(){
    let earMods = ["Dampener", "Hearing Amplification", "High Frequency", "Low Frequency", "Recorder", "Select Sound Filter"];
    let freeEssenceBank = 50;
    let modEssenceCost = 0;
    let chosenMods = [];
    let addedMods = "";
    let modsToAdd = oseDieRoller(1, 4);

    cyberwareName = "Cyber Ears: ";
    essenceCost = 30;
    cost = 4000;

    for (let i = 0; i < modsToAdd; i++) {
        const addMod = earMods.filter(mods => !chosenMods.includes(mods));      
        const chosenMod = addMod[Math.floor(Math.random() * addMod.length)];
        let rank = oseDieRoller(1, 5);
        switch(chosenMod){
            case "Dampener":
                modEssenceCost += 10;
                cost += 3500;
            break;
            case "Hearing Amplification":
                modEssenceCost += 20;
                cost += 3500;
            break;
            case "High Frequency":
            case "Low Frequency":
                modEssenceCost += 20;
                cost += 3000;
            break;
            case "Recorder":
                modEssenceCost += 30;
                cost += 7000;
            break;
            case "Select Sound Filter":                
                modEssenceCost += 20;
                cost += rank * 10000;
            break;
        }
        if(chosenMod === "Select Sound Filter") addedMods += "•" + chosenMod + " " + rank + " ";
        else addedMods += "•" + chosenMod + " ";
        chosenMods.push(chosenMod);
    }
    modEssenceCost -= freeEssenceBank;
    if(modEssenceCost < 0) modEssenceCost = 0;
    essenceCost += modEssenceCost;
    cyberwareName += addedMods;

    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srCyberLimbs(){
    let limbReplacement = "";
    let modsAdded = "";
    let limbTypes = ["Cyberarm Left", "Cyberarm Right", "Cyberarm Pair", "Cyberleg Left", "Cyberleg Right", "Cyberleg Pair",
        "Synthetic Cyberarm Left", "Synthetic Cyberarm Right", "Synthetic Cyberarm Pair", "Synthetic Cyberleg Left", "Synthetic Cyberleg Right", "Synthetic Cyberleg Pair"];
    let limbArmMods = ["Built-In Device", "Built-In Smartgun Link", "Direct Neural Interface", "Strength Enhancement"];
    let limbLegMods = ["Direct Neural Interface", "Strength Enhancement"];
    let chosenLimbAndMods = [];    
    let limbsToAdd = oseDieRoller(1, 2);
    let modsToAdd = oseDieRoller(0, 2);
    let cyberStrBonus = 0;

    cyberwareName = "Cyber Limb: ";

    for (let i = 0; i < limbsToAdd; i++) {
        const addedLimb = limbTypes.filter(limbs => !chosenLimbAndMods.includes(limbs));
        const armMods = limbArmMods.filter(arms => !chosenLimbAndMods.includes(arms));
        const legMods = limbLegMods.filter(legs => !chosenLimbAndMods.includes(legs));
        const chosenLimbType = addedLimb[Math.floor(Math.random() * addedLimb.length)];
        let isArm = false;
        let isLeg = false;

        switch(chosenLimbType) {
            case "Cyberarm Left":
                chosenLimbAndMods.push("Cyberarm Left", "Cyberarm Pair", "Synthetic Cyberarm Left", "Synthetic Cyberarm Pair");
                isArm = true;
                break;
            case "Cyberarm Right":
                chosenLimbAndMods.push("Cyberarm Right", "Cyberarm Pair", "Synthetic Cyberarm Right", "Synthetic Cyberarm Pair");
                isArm = true;
                break;
            case "Cyberarm Pair":                
                chosenLimbAndMods.push("Cyberarm Pair", "Cyberarm Left", "Cyberarm Right", "Synthetic Cyberarm Right", "Synthetic Cyberarm Left", "Synthetic Cyberarm Pair");
                isArm = true;
                cyberBodyBonus += 1;
                break;
            case "Synthetic Cyberarm Left":                
                chosenLimbAndMods.push("Synthetic Cyberarm Left", "Cyberarm Pair", "Cyberarm Left", "Synthetic Cyberarm Pair");
                isArm = true;
                break;
            case "Synthetic Cyberarm Right":
                chosenLimbAndMods.push("Synthetic Cyberarm Right", "Cyberarm Pair", "Cyberarm Right", "Synthetic Cyberarm Pair");
                isArm = true;
                break;
            case "Synthetic Cyberarm Pair":
                chosenLimbAndMods.push("Synthetic Cyberarm Pair", "Cyberarm Left", "Cyberarm Right", "Cyberarm Pair", "Synthetic Cyberarm Right", "Synthetic Cyberarm Left");
                isArm = true;
                cyberBodyBonus += 1;
                break;
            case "Cyberleg Left":
                chosenLimbAndMods.push("Cyberleg Left", "Cyberleg Pair", "Synthetic Cyberleg Left", "Synthetic Cyberleg Pair");
                isLeg = true;
                break;
            case "Cyberleg Right":
                chosenLimbAndMods.push("Cyberleg Right", "Cyberleg Pair", "Synthetic Cyberleg Right", "Synthetic Cyberleg Pair");
                isLeg = true;
                break;
            case "Cyberleg Pair":
                chosenLimbAndMods.push("Cyberleg Pair", "Cyberleg Right", "Cyberleg Left", "Synthetic Cyberleg Right", "Synthetic Cyberleg Left", "Synthetic Cyberleg Pair");
                isLeg = true;
                cyberBodyBonus += 2;
                break;
            case "Synthetic Cyberleg Left":
                chosenLimbAndMods.push("Synthetic Cyberleg Left", "Synthetic Cyberleg Pair", "Cyberleg Left", "Cyberleg Pair");
                isLeg = true;
                break;
            case "Synthetic Cyberleg Right":
                chosenLimbAndMods.push("Synthetic Cyberleg Right", "Synthetic Cyberleg Pair", "Cyberleg Right", "Cyberleg Pair");
                isLeg = true;
                break;
            case "Synthetic Cyberleg Pair":
                chosenLimbAndMods.push("Synthetic Cyberleg Pair", "Synthetic Cyberleg Right", "Synthetic Cyberleg Left", "Cyberleg Right", "Cyberleg Left", "Cyberleg Pair");
                isLeg = true;
                cyberBodyBonus += 2;
                break;
        }

        limbReplacement += "•" + chosenLimbType + " ";
        if(chosenLimbType === "Cyberarm Left" || chosenLimbType === "Cyberarm Right" || chosenLimbType === "Cyberleg Left" || chosenLimbType === "Cyberleg Right"){
            essenceCost += 100;
            cost += 75000;
        }else if(chosenLimbType === "Cyberarm Pair" || chosenLimbType === "Cyberleg Pair"){
            essenceCost += 200;
            cost += 150000;
        }else if(chosenLimbType === "Synthetic Cyberarm Left" || chosenLimbType === "Synthetic Cyberarm Right" ||
            chosenLimbType === "Synthetic Cyberleg Left" || chosenLimbType === "Synthetic Cyberleg Right"){
            essenceCost += 100;
            cost += 100000;
        }else if(chosenLimbType === "Synthetic Cyberarm Pair" || chosenLimbType === "Synthetic Cyberleg Pair"){
            essenceCost += 200;
            cost += 200000;
        }

        if(srRaceChoice === "Human" && characterStrength.Current > 4 || srRaceChoice === "Elf" && characterStrength.Current > 4 ||
        srRaceChoice === "Ork" && characterStrength.Current > 6 || srRaceChoice === "Dwarf" && characterStrength.Current > 6 ||
        srRaceChoice === "Troll" && characterStrength.Current > 8){
            chosenLimbAndMods.push("Strength Enhancement");
        }else if(srRaceChoice === "Human" && characterStrength.Current < 4 || srRaceChoice === "Elf" && characterStrength.Current < 4){
            cyberStrBonus = 4;
        }else if(srRaceChoice === "Ork" && characterStrength.Current < 6 || srRaceChoice === "Dwarf" && characterStrength.Current < 6){
            cyberStrBonus = 6;
        }else if(srRaceChoice === "Troll" && characterStrength.Current < 8){
            cyberStrBonus = 8;
        }

        function strEnhance(rank){
            if(rank > 3){
                let modifiedEssence = (rank - 3) * 40;
                essenceCost += parseFloat(modifiedEssence);
                cost += ((rank - 3) * 50000) + (3 * 50000);
            }else{
                cost += rank * 50000;
            }
            cyberStrBonus += rank;
            modsAdded += rank + " ";
            srAttributeStrength.innerHTML += " c(" + cyberStrBonus + ")";
        }

        if(modsToAdd > 0){
            let strModRank = oseDieRoller(1, 10);
            if(isArm){
                const chooseArmMod = armMods[Math.floor(Math.random() * armMods.length)];
                chosenLimbAndMods.push(chooseArmMod);
                modsAdded += "•" + chooseArmMod + " ";
                switch(chooseArmMod){
                    case "Built-In Device":
                        cyberlimbBuiltInDevice = true;
                    break;
                    case "Built-In Smartgun Link":
                        essenceCost += 25;
                        cost += 2500;
                    break;
                    case "Direct Neural Interface":
                        essenceCost += 10;
                        cost += 4500;
                    break;
                    case "Strength Enhancement":
                        strEnhance(strModRank);
                    break;
                }                

            }else if(isLeg){
                const chooseLegMod = legMods[Math.floor(Math.random() * legMods.length)];
                chosenLimbAndMods.push(chooseLegMod);
                modsAdded += "•" + chooseLegMod + " ";
                switch(chooseLegMod){                    
                    case "Direct Neural Interface":
                        essenceCost += 10;
                        cost += 4500;
                    break;
                    case "Strength Enhancement":
                        strEnhance(strModRank);
                    break;
                }                
            }
        }
        modsToAdd -= 1;
    }
    if(cyberBodyBonus > 0) srAttributeBody.innerHTML += " c(" + (characterBody.Current + cyberBodBonus) + ")";    
    cyberwareName += limbReplacement + modsAdded;
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srVCR(){
    randomRoll = oseDieRoller(1, 3);
    cyberwareName = "Vehicle Control Rig " + randomRoll;
    switch(randomRoll){
        case 1:
            essenceCost = 200;
            cost = 12000;
            cyberInitiativeBonus += "2d6+";
            cyberReactionBonus += 2;
            break;
        case 2:
            essenceCost = 300;
            cost = 60000;
            cyberReactionBonus += 4;
            cyberInitiativeBonus += "3d6+";
            break;
        case 3:
            essenceCost = 500;
            cost = 300000;
            cyberReactionBonus += 6;
            cyberInitiativeBonus += "4d6+";
            break;
    }
    srInitiative.innerHTML += "<br>" + "c(" + iniBonus + reactionBonus + ")";
    srPoolType3.innerHTML = "Control";
    srPoolType3Dice.innerHTML = (reactionBonus + (randomRoll*2));
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srFiltration(){
    let filterRank = 0;
    let filterTypes = ["Air", "Blood", "Ingested Toxin"];
    let chosenType = [];
    let amountToAdd = oseDieRoller(1, 3);
    let addedFilterType = "";
    
    for (let i = 0; i < amountToAdd; i++) {
        const filterTypeToAdd = filterTypes.filter(filtration => !chosenType.includes(filtration));
        const chooseFilterType = filterTypeToAdd[Math.floor(Math.random() * filterTypeToAdd.length)];
        filterRank = oseDieRoller(1, 10);
        switch(chooseFilterType){
            case "Air":
                addedFilterType += "Air "
                essenceCost += parseFloat(((filterRank /10)*100));
                cost += filterRank * 15000;
                break;
            case "Blood":
            case "Ingested Toxin":
                if(chooseFilterType === "Blood") addedFilterType += "Blood ";
                else if(chooseFilterType === "Ingested Toxin") addedFilterType += "Ingested Toxin ";
                essenceCost += parseFloat(((filterRank /5)*100));
                cost += filterRank *10000;
                break;
        }
        chosenType.push(chooseFilterType);
    }
    cyberwareName = "Filtration: " + addedFilterType + " " + filterRank;    
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srDermalPlating(){
    let bodyBonus = srAttributesCurrentMax.find(attribute => attribute.attribute === "Body");
    randomRoll = oseDieRoller(1, 3);
    cyberwareName = "Dermal Plating " + randomRoll;

    switch(randomRoll){
        case 1:
            essenceCost = 50;
            cost = 6000;
            break;
        case 2:
            essenceCost = 100;
            cost = 15000;
            break;
        case 3:
            essenceCost = 150;
            cost = 45000;
            break;
    }
    cyberBodyBonus += randomRoll;
    srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + randomRoll) + ")";
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srReflexesCyberware(){
    let reflexType = ["Boosted Reflexes", "Wired Reflexes"];
    let reflexRandomRoll = Math.floor(Math.random() * reflexType.length);
    let reflexTypeChosen = reflexType[reflexRandomRoll];

    randomRoll = oseDieRoller(1, 3);
    
    if(reflexTypeChosen === "Boosted Reflexes"){
        cyberwareName = "Boosted Reflexes " + randomRoll;
        switch(randomRoll){
            case 1:
                essenceCost = 50;
                cost = 15000;
                cyberInitiativeBonus += "2d6+";
                break;
            case 2:
                essenceCost = 125;
                cost = 40000;
                cyberReactionBonus += 1;
                cyberInitiativeBonus += "2d6+";
                break;
            case 3:
                essenceCost = 280;
                cost = 90000;
                cyberReactionBonus += 2;
                cyberInitiativeBonus += "3d6+";
                break;
        }
    }else{
        cyberwareName = "Wired Reflexes " + randomRoll;
        switch(randomRoll){
            case 1:
                essenceCost = 200;
                cost = 55000;
                cyberInitiativeBonus += "2d6+";
                cyberReactionBonus += 2;
                break;
            case 2:
                essenceCost = 300;
                cost = 165000;
                cyberReactionBonus += 4;
                cyberInitiativeBonus += "3d6+";
                break;
            case 3:
                essenceCost = 500;
                cost = 500000;
                cyberReactionBonus += 6;
                cyberInitiativeBonus += "4d6+";
                break;
        }
    }
    
    srInitiative.innerHTML += "<br>" + "c(" + iniBonus + reactionBonus + ")";
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srVoiceModulator(){
    let upgrades = "";
    let upgradeAmounts = oseDieRoller(0, 3);

    cyberwareName = "Voice Modulator";
    essenceCost = 20;
    cost = 45000;

    switch(upgradeAmounts){
        case 1:
            upgrades = "IV";
            cost += 10000;
            break;
        case 2:
            upgrades = "PB TS";
            essenceCost += 20;
            cost += 65000;
            break;
        case 3:
            upgrades = "IV PB TS";
            essenceCost += 20;
            cost += 75000;
            break;
        default:
            break;
    }
    if(upgrades !== ""){
        cyberwareName += "(" + upgrades + ")";
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srSpur(){
    let spurType = ["Spur", "Retractable Spur"];

    randomRoll = Math.floor(Math.random() * spurType.length);
    switch(spurType[randomRoll]){
        case "Spur":
            cyberwareName = "Spur";
            essenceCost = 10;
            cost = 7000;
            break;
        case "Retractable Spur":
            cyberwareName = "Retractable Spur";
            essenceCost = 30;
            cost = 11500;            
            break;
    }
    if(cyberlimbBuiltInDevice) essenceCost = 0;
    srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "•(STR)M";
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srMuscleReplacement(){
    randomRoll = oseDieRoller(1, 4);
    cyberwareName = "Muscle Replacement " + randomRoll;
    essenceCost = randomRoll * 100;
    cost = 20000 * randomRoll;
    cyberStrengthBonus += randomRoll;
    cyberQuicknessBonus += randomRoll;
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srBoneLacing(){
    let boneLacingType = ["Bone Lacing (Plastic)", "Bone Lacing (Alumunum)", "Bone Lacing (Titanium)"];

    randomRoll = Math.floor(Math.random() * boneLacingType.length);
    switch(boneLacingType[randomRoll]){
        case "Bone Lacing (Plastic)":
            cyberwareName = "Bone Lacing (Plastic)";
            essenceCost = 50;
            cost = 7500;
            cyberBodyBonus += 1;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "•(STR+2)M Stun";
            break;
        case "Bone Lacing (Alumunum)":
            cyberwareName = "Bone Lacing (Alumunum)";
            essenceCost = 115;
            cost = 25000;
            cyberBodyBonus += 1;
            cyberImpactArmorBonus += 1;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "•(STR+3)M Stun";
            break;
        case "Bone Lacing (Titanium)":
            cyberwareName = "Bone Lacing (Titanium)";
            essenceCost = 225;
            cost = 75000;
            cyberBodyBonus += 2;
            cyberImpactArmorBonus += 1;
            cyberBalisticArmorBonus += 1;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "•(STR+4)M Stun";
            break;
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}

function srHandBlade(){
    let bladeTypes = ["Hand Blade", "Retractable Hand Blade", "Hand Blade (Improved)", "Retractable Hand Blade (Improved)"];
    let unarmedDamageBonus = "";

    randomRoll = Math.floor(Math.random() * bladeTypes.length);
    switch(bladeTypes[randomRoll]){
        case "Hand Blade":
            cyberwareName = "Hand Blade";
            essenceCost = 10;
            cost = 4500;
            unarmedDamageBonus = "•(STR)L"
            break;
        case "Retractable Hand Blade":
            cyberwareName = "Retractable Hand Blade";
            essenceCost = 20;
            cost = 9000;
            unarmedDamageBonus = "•(STR)L"
            break;
        case "Hand Blade (Improved)":
            cyberwareName = "Hand Blade (Improved)";
            essenceCost = 10;
            cost = 13000;
            unarmedDamageBonus = "•(STR+2)L"
            break;
        case "Retractable Hand Blade (Improved)":
            cyberwareName = "Retractable Hand Blade (Improved)";
            essenceCost = 20;
            cost = 17500;
            unarmedDamageBonus = "•(STR+2)L"
            break;
    }
    if(cyberlimbBuiltInDevice) essenceCost = 0;
    srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + unarmedDamageBonus;
    return {cyberware: cyberwareName, essenceCost: essenceCost, price: cost};
}