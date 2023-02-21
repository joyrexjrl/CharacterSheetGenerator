const srSkills = [
    {skillAttribute: "Body", skillOptions: ["Athletics", "Diving"]},
    {skillAttribute: "Strength", skillOptions: ["Edged Weapons", "Clubs", "Pole Arms/ Staffs", "Cyber-Implant Combat", "Unarmed Combat", "Throwing Weapons", "Projectile Weapons", "Heavy Weapons", "Underwater Combat"]},
    {skillAttribute: "Quickness", skillOptions: ["Pistols", "Submachine Guns", "Rifles", "Assault Rifles", "Shotguns", "Laser Weapons", "Whips", "Stealth"]},
    {skillAttribute: "Intelligence", skillOptions: ["Aura Reading", "Demolitions", "Gunnery", "Launch Weapons", "Computer", "Electronics", "Biotech", "Build/Repair", "Knowledge Skills", "Language Skills"]},
    {skillAttribute: "Charisma", skillOptions: ["Etiquette", "Instruction", "Interrogation", "Intimidation", "Leadership", "Negotiation"]},
    {skillAttribute: "Willpower", skillOptions: ["Conjuring", "Scorcery"]},
    {skillAttribute: "Reaction", skillOptions: ["Bike", "Car", "Hovercraft", "Motorboat", "Ship", "Sailboat", "Winged Aircraft", "Rotor Aircraft", "Vector Thrust Aircraft", "LTA Aircraft", "Submarine"]}
];

const srSkillSpecializations = [
    {skillName: "Assault Rifles", skillSpecialization: []}, // add all assault weapons here
    {skillName: "Clubs", skillSpecialization: []}, // add all club weapons here
    {skillName: "Cyber-Implant Combat", skillSpecialization: []}, // add all Cyber-Implant weapons here
    {skillName: "Edged Weapons", skillSpecialization: []}, // add all Edged weapons here
    {skillName: "Gunnery", skillSpecialization: []}, // add all Gunnery weapons here
    {skillName: "Heavy Weapons", skillSpecialization: []}, // add all Heavy weapons here
    {skillName: "Laser Weapons", skillSpecialization: []}, // add all Laser weapons here
    {skillName: "Launch Weapons", skillSpecialization: []}, // add all Launch weapons here
    {skillName: "Pistols", skillSpecialization: []}, // add all Pistols weapons here
    {skillName: "Pole Arms/ Staffs", skillSpecialization: []}, // add all Pole Arms/ Staffs weapons here
    {skillName: "Projectile Weapons", skillSpecialization: ["Pull-Bows", "Crossbows"]},
    {skillName: "Rifles", skillSpecialization: []}, // add all Rifles weapons here
    {skillName: "Shotguns", skillSpecialization: []}, // add all Shotguns weapons here
    {skillName: "Submachine Guns", skillSpecialization: []}, // add all Submachine Guns weapons here
    {skillName: "Throwing Weapons", skillSpecialization: []}, // add all Throwing weapons here
    {skillName: "Unarmed Combat", skillSpecialization: ["Subduing Combat", "Martial Arts Technique", "Fists", "Head Butts", "Kicks"]},
    {skillName: "Underwater Combat", skillSpecialization: ["Unarmed Attack", "Armed Attack"]},
    {skillName: "Whips", skillSpecialization: []}, // add all Whips weapons here
    {skillName: "Aura Reading", skillSpecialization: ["Auras", "Signatures", "Sorcery", "Conjuring"]},
    {skillName: "Scorcery", skillSpecialization: ["Spellcasting", "Spell Defense", "Dispelling", "Astral Combat", "Spell Catagoty"]}, // add the different spell catagorys to the list
    {skillName: "Conjuring", skillSpecialization: ["Summoning", "Banishing", "Controlling"]},
    {skillName: "Athletics", skillSpecialization: ["Running", "Climbing", "Lifting", "Jumping", "Escape Artist", "Swimming"]},
    {skillName: "Diving", skillSpecialization: ["Deep-water Diving", "Mixed-gas Diving"]},
    {skillName: "Stealth", skillSpecialization: ["Alertness", "Hiding", "Sneaking", "Theft"]},
    {skillName: "Etiquette", skillSpecialization: ["Matrix", "Corporate", "Magical Groups", "Tribal", "Gangs"]},
    {skillName: "Instruction", skillSpecialization: []}, // add instruction subject types here
    {skillName: "Interrogation", skillSpecialization: ["Verbal", "Lie Detector", "Voice-Stress Analysis", "Torture", "Drug-Aided"]},
    {skillName: "Intimidation", skillSpecialization: ["Physical", "Mental"]},
    {skillName: "Leadership", skillSpecialization: ["Political", "Military", "Commercial", "Strategy", "Tactics", "Morale"]},
    {skillName: "Negotiation", skillSpecialization: ["Bargain", "Bribe", "Con", "Fast Talk"]},
    {skillName: "Biotech", skillSpecialization: ["Cybertechnology Implantation", "Extended Care", "First Aid", "Organ Culture & Growth", "Surgery", "Transplant Surgery"]},
    {skillName: "Computer", skillSpecialization: ["Hardware", "Decking", "Programming", "Cybernetics"]},
    {skillName: "Demolitions", skillSpecialization: ["Commercial Explosives", "Plastic Explosives", "Improvised Explosives"]},
    {skillName: "Electronics", skillSpecialization: ["Control Systems", "Electronic Warfare", "Maglocks", "Linking between Devices", "Diagnostics", "Cybertechnology"]},
    {skillName: "Bike", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Car", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Hovercraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "LTA Aircraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Motorboat", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Rotor Aircraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Sailboat", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Ship", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Submarine", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Vector Thrust Aircraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
    {skillName: "Winged Aircraft", skillSpecialization: ["Remote Operations", ""]}, // add vehicle types here
];

function srSkillsRandomizer(skillPoints){
    
}