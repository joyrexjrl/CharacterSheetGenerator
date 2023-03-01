var cyberRank = 1;
const srCyberware = [
    {cyberware: "Chipjack", essenceCost: .2, price: 1000},
    {cyberware: "Datajack", essenceCost: .2, price: 1000},
    {cyberware: "Knowsoft Link", essenceCost: .1, price: 1000},
    {cyberware: "Bone Lacing", essenceCost: 0, price: 0, newObject: function(){ return srBoneLacing()}},
    {cyberware: "Fingertip Compartment", essenceCost: .1, price: 3000},
    {cyberware: "Hand Blade", essenceCost: 0, price: 0, newObject: function(){ return srHandBlade()}},
    {cyberware: "Muscle Replacement", essenceCost: 0, price: 0, newObject: function(){ return srMuscleReplacement()}},
    {cyberware: "Smartlink", essenceCost: .5, price: 2500},
    {cyberware: "Spur", essenceCost: 0, price: 0, newObject: function(){ return srSpur()}},
    {cyberware: "Voice Modulator", essenceCost: 0, price: 0, newObject: function(){ return srVoiceModulator()}},
    {cyberware: "Reflexes", essenceCost: 0, price: 0, newObject: function(){ return srReflexesCyberware()}},
    {cyberware: "Dermal Plating", essenceCost: 0, price: 0, newObject: function(){ return srDermalPlating()}},
    {cyberware: "Filtration", essenceCost: 0, price: 0, newObject: function(){ return srFiltration()}},
    {cyberware: "Vehicle Control Rig", essenceCost: 0, price: 0, newObject: function(){ return srVCR()}},
    {cyberware: "Cyber Limb", essenceCost: 1, price: 0, newObject: function(){ return srCyberLimbs()}},  
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

