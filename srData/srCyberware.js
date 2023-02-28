var cyberRank = 1;
const srCyberware = [
    {cyberware: "Chipjack", essenceCost: .2, maxRank: 1, price: 1000},
    {cyberware: "Datajack", essenceCost: .2, maxRank: 1, price: 1000},
    {cyberware: "Knowsoft Link", essenceCost: .1, maxRank: 1, price: 1000},
    {cyberware: "Bone Lacing", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srBoneLacing()}},
    {cyberware: "Fingertip Compartment", essenceCost: .1, maxRank: 1, price: 3000},
    {cyberware: "Hand Blade", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srHandBlade()}},
    {cyberware: "Muscle Replacement", essenceCost: 0, maxRank: 4, price: 0, newObject: function(){ return srMuscleReplacement()}},
    {cyberware: "Smartlink", essenceCost: .5, maxRank: 1, price: 2500},
    {cyberware: "Spur", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srSpur()}},
    {cyberware: "Voice Modulator", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srVoiceModulator()}},
    {cyberware: "Reflexes", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srReflexesCyberware()}},
    {cyberware: ["Dermal Plating 1", "Dermal Plating 2", "Dermal Plating 3"], essenceCost: [.5, 1, 1.5], maxRank: 1, price: [6000, 15000, 45000]},
    {cyberware: ["Filtration Air", "Filtration Blood", "Filtration Ingested Toxin"], essenceCost: [cyberRank/10, cyberRank/5, cyberRank/5], maxRank: 10, price: [cyberRank*15000, cyberRank*10000, cyberRank*10000]},
    {cyberware: ["Vehicle Control Rig 1", "Vehicle Control Rig 2", "Vehicle Control Rig 3"], essenceCost: [2, 3, 5], maxRank: 1, price: [12000, 60000, 300000]},
    {cyberware: "Cyber Arm", essenceCost: 1, maxRank: 1, price: 75000},
    {cyberware: "Cyber Leg", essenceCost: 1, maxRank: 1, price: 75000},
    {cyberware: "Synthetic Cyber Arm", essenceCost: 1, maxRank: 1, price: 100000},
    {cyberware: "Synthetic Cyber Leg", essenceCost: 1, maxRank: 1, price: 100000}    
];

const srCyberears = [
    {cyberware: "Cyber Replacement (Ear)", essenceCost: .3, maxRank: 1, price: 4000},
    {cyberware: "Dampener", essenceCost: .1, maxRank: 1, price: 3500},
    {cyberware: "Hearing Amplification", essenceCost: .2, maxRank: 1, price: 3500},
    {cyberware: "High Frequency", essenceCost: .2, maxRank: 1, price: 3000},
    {cyberware: "Low Frequency", essenceCost: .2, maxRank: 1, price: 3000},
    {cyberware: "Recorder", essenceCost: .3, maxRank: 1, price: 7000},
    {cyberware: "Select Sound Filter", essenceCost: .2, maxRank: 5, price: 10000}
];

const srCybereyes = [
    {cyberware: "Camera", essenceCost: .4, maxRank: 1, price: 5000},
    {cyberware: "Cyber Replacement (Eye)", essenceCost: .2, maxRank: 1, price: 5000},
    {cyberware: "Display Link", essenceCost: .1, maxRank: 1, price: 1000},
    {cyberware: "Flair Compensation", essenceCost: .1, maxRank: 1, price: 2000},
    {cyberware: "Image Link", essenceCost: .2, maxRank: 1, price: 1600},
    {cyberware: "Low Light", essenceCost: .2, maxRank: 1, price: 3000},
    {cyberware: "Opticam", essenceCost: .5, maxRank: 1, price: 20000},
    {cyberware: "Retinal Clock", essenceCost: .1, maxRank: 1, price: 450},
    {cyberware: "Thermographic", essenceCost: .2, maxRank: 1, price: 3000},
    {cyberware: ["Vision Magnification (Optical 1)", "Vision Magnification (Optical 2)", "Vision Magnification (Optical 3)"], essenceCost: .2, maxRank: 1, price: [2500, 4000, 6000]},
    {cyberware: ["Vision Magnification (Electronic 1)", "Vision Magnification (Electronic 2)", "Vision Magnification (Electronic 3)"], essenceCost: .1, maxRank: 1, price: [3500, 7500, 11000]}
];

var cyberwareName = "";
var essenceCost = 0;
var cost = 0;
var randomRoll = 0;

function srReflexesCyberware(){
    let reflexType = ["Boosted Reflexes", "Wired Reflexes"];
    let reaction = parseInt(srReaction.textContent);
    let iniBonus = "";
    let reactionBonus = 0;
    let reflexRandomRoll = Math.floor(Math.random() * reflexType.length);
    let reflexTypeChosen = reflexType[reflexRandomRoll];

    randomRoll = oseDieRoller(1, 3);
    
    if(reflexTypeChosen === "Boosted Reflexes"){
        cyberwareName = "Boosted Reflexes " + randomRoll;
        switch(randomRoll){
            case 1:
                essenceCost = .5;
                cost = 15000;
                iniBonus = "2d6+";
                reactionBonus = reaction + 0;
                break;
            case 2:
                essenceCost = 1.25;
                cost = 40000;
                reactionBonus = reaction + 1;
                iniBonus = "2d6+";
                break;
            case 3:
                essenceCost = 2.8;
                cost = 90000;
                reactionBonus = reaction + 2;
                iniBonus = "3d6+";
                break;
        }
    }else{
        cyberwareName = "Wired Reflexes " + randomRoll;
        switch(randomRoll){
            case 1:
                essenceCost = 2;
                cost = 55000;
                iniBonus = "2d6+";
                reactionBonus = reaction + 2;
                break;
            case 2:
                essenceCost = 3;
                cost = 165000;
                reactionBonus = reaction + 4;
                iniBonus = "3d6+";
                break;
            case 3:
                essenceCost = 5;
                cost = 500000;
                reactionBonus = reaction + 6;
                iniBonus = "4d6+";
                break;
        }
    }
    
    srInitiative.innerHTML += "<br>" + "c(" + iniBonus + reactionBonus + ")";
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}

function srVoiceModulator(){
    let upgrades = "";
    let upgradeAmounts = oseDieRoller(0, 3);

    cyberwareName = "Voice Modulator";
    essenceCost = .2;
    cost = 45000;

    switch(upgradeAmounts){
        case 1:
            upgrades = "IV";
            cost += 10000;
            break;
        case 2:
            upgrades = "PB TS";
            essenceCost += .2;
            cost += 65000;
            break;
        case 3:
            upgrades = "IV PB TS";
            essenceCost += .2;
            cost += 75000;
            break;
        default:
            break;
    }
    if(upgrades !== ""){
        cyberwareName += "(" + upgrades + ")";
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}

function srSpur(){
    let spurType = ["Spur", "Retractable Spur"];

    randomRoll = Math.floor(Math.random() * spurType.length);
    switch(spurType[randomRoll]){
        case "Spur":
            cyberwareName = "Spur";
            essenceCost = .1;
            cost = 7000;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR)M";
            break;
        case "Retractable Spur":
            cyberwareName = "Retractable Spur";
            essenceCost = .3;
            cost = 11500;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR)M";
            break;
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}

function srMuscleReplacement(){
    let strengthBonus = srAttributesCurrentMax.find(attribute => attribute.attribute === "Strength");
    let quicknessBonus = srAttributesCurrentMax.find(attribute => attribute.attribute === "Quickness");

    randomRoll = oseDieRoller(1, 4);
    cyberwareName = "Muscle Replacement " + randomRoll;
    essenceCost = randomRoll;
    cost = 20000 * randomRoll;
    srAttributeStrength.innerHTML += " c(" + (strengthBonus.Current + randomRoll) + ")";
    srAttributeQuickness.innerHTML += " c(" + (quicknessBonus.Current + randomRoll) + ")";
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}

function srBoneLacing(){
    let boneLacingType = ["Bone Lacing (Plastic)", "Bone Lacing (Alumunum)", "Bone Lacing (Titanium)"];
    let bodyBonus = srAttributesCurrentMax.find(attribute => attribute.attribute === "Body");

    randomRoll = Math.floor(Math.random() * boneLacingType.length);
    switch(boneLacingType[randomRoll]){
        case "Bone Lacing (Plastic)":
            cyberwareName = "Bone Lacing (Plastic)";
            essenceCost = .5;
            cost = 7500;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 1) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+2)M Stun";
            break;
        case "Bone Lacing (Alumunum)":
            cyberwareName = "Bone Lacing (Alumunum)";
            essenceCost = 1.15;
            cost = 25000;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 1) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+3)M Stun";
            //+1 Body, +1 Impact armor, unarmed damage (STR+3)M Stun
            break;
        case "Bone Lacing (Titanium)":
            cyberwareName = "Bone Lacing (Titanium)";
            essenceCost = 2.25;
            cost = 75000;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 2) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+4)M Stun";
            //+2 Body, +1 impact and ballistic armor, unarmed damage (STR+4)M Stun
            break;
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}

function srHandBlade(){
    let bladeTypes = ["Hand Blade", "Retractable Hand Blade", "Hand Blade (Improved)", "Retractable Hand Blade (Improved)"];

    randomRoll = Math.floor(Math.random() * bladeTypes.length);
    switch(bladeTypes[randomRoll]){
        case "Hand Blade":
            cyberwareName = "Hand Blade";
            essenceCost = .1;
            cost = 4500;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR)L";
            break;
        case "Retractable Hand Blade":
            cyberwareName = "Retractable Hand Blade";
            essenceCost = .2;
            cost = 9000;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR)L";
            break;
        case "Hand Blade (Improved)":
            cyberwareName = "Hand Blade (Improved)";
            essenceCost = .1;
            cost = 13000;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+2)L";
            break;
        case "Retractable Hand Blade (Improved)":
            cyberwareName = "Retractable Hand Blade (Improved)";
            essenceCost = .2;
            cost = 17500;
            srCharNotesPlacer.innerHTML += '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+2)L";
            break;
    }
    return {cyberware: cyberwareName, essenceCost: essenceCost, maxRank: 1, price: cost};
}