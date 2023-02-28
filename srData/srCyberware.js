var cyberRank = 1;
const srCyberware = [
    {cyberware: "Chipjack", essenceCost: .2, maxRank: 1, price: 1000},
    {cyberware: "Datajack", essenceCost: .2, maxRank: 1, price: 1000},
    {cyberware: "Knowsoft Link", essenceCost: .1, maxRank: 1, price: 1000},
    {cyberware: "Bone Lacing", essenceCost: 0, maxRank: 1, price: 0, newObject: function(){ return srBoneLacing()}},
    {cyberware: "Fingertip Compartment", essenceCost: .1, maxRank: 1, price: 3000},
    {cyberware: ["Hand Blade", "Retractable Hand Blade"], essenceCost: [.1, .25], maxRank: 1, price: [7500, 10000]},
    {cyberware: ["Hand Razors", "Retractable Hand Razors"], essenceCost: [.1, .2], maxRank: 1, price: [4500, 9000]},
    {cyberware: ["Muscle Replacement 1", "Muscle Replacement 2", "Muscle Replacement 3", "Muscle Replacement 4"], essenceCost: [1, 2, 3, 4], maxRank: 1, price: [20000, 40000, 60000, 80000]},
    {cyberware: ["Smartlink", "Built-in Smartgun Link"], essenceCost: [.5, .25], maxRank: 1, price: 2500},
    {cyberware: ["Spur", "Retractable Spur"], essenceCost: [.1, .3], maxRank: 1, price: [7000, 11500]},
    {cyberware: ["Voice Modulator", "Voice Increased Volume", "Voice Playback", "Voice Tonal Shift"], essenceCost: [.2, 0, .2, 0], maxRank: 1, price: [45000, 10000, 40000, 25000]},
    {cyberware: ["Boosted Reflexes 1", "Boosted Reflexes 2", "Boosted Reflexes 3"], essenceCost: [.5, 1.25, 2.8], maxRank: 1, price: [15000, 40000, 90000]},
    {cyberware: ["Dermal Plating 1", "Dermal Plating 2", "Dermal Plating 3"], essenceCost: [.5, 1, 1.5], maxRank: 1, price: [6000, 15000, 45000]},
    {cyberware: ["Filtration Air", "Filtration Blood", "Filtration Ingested Toxin"], essenceCost: [cyberRank/10, cyberRank/5, cyberRank/5], maxRank: 10, price: [cyberRank*15000, cyberRank*10000, cyberRank*10000]},
    {cyberware: ["Vehicle Control Rig 1", "Vehicle Control Rig 2", "Vehicle Control Rig 3"], essenceCost: [2, 3, 5], maxRank: 1, price: [12000, 60000, 300000]},
    {cyberware: ["Wired Reflex 1", "Wired Reflex 2", "Wired Reflex 3"], essenceCost: [2, 3, 5], maxRank: 1, price: [55000, 165000, 50000]},
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

function srBoneLacing(){
    let boneLacingType = ["Bone Lacing (Plastic)", "Bone Lacing (Alumunum)", "Bone Lacing (Titanium)"];
    let name = "";
    let essenceCost = 0;
    let cost = 0;
    let bodyBonus = srAttributesCurrentMax.find(attribute => attribute.attribute === "Body");

    let randomRoll = Math.floor(Math.random() * boneLacingType.length);
    switch(boneLacingType[randomRoll]){
        case "Bone Lacing (Plastic)":
            name = "Bone Lacing (Plastic)";
            essenceCost = .5;
            cost = 7500;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 1) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + name + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+2)M Stun";
            break;
        case "Bone Lacing (Alumunum)":
            name = "Bone Lacing (Alumunum)";
            essenceCost = 1.15;
            cost = 25000;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 1) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + name + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+3)M Stun";
            //+1 Body, +1 Impact armor, unarmed damage (STR+3)M Stun
            break;
        case "Bone Lacing (Titanium)":
            name = "Bone Lacing (Titanium)";
            essenceCost = 2.25;
            cost = 75000;
            srAttributeBody.innerHTML += " c(" + (bodyBonus.Current + 2) + ")";
            srCharNotesPlacer.innerHTML += '<span class="bold">' + name + " Unarmed Damage" + "</span>" + "<br>" + "• (STR+4)M Stun";
            //+2 Body, +1 impact and ballistic armor, unarmed damage (STR+4)M Stun
            break;
    }
    return {cyberware: name, essenceCost: essenceCost, maxRank: 1, price: cost};
}