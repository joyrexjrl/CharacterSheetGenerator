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

var oseItems = [{item:"Backpack", cost:5},
    {item:"Crowbar", cost:10},
    {item:"Garlic", cost:5},
    {item:"Grappling hook", cost:25},
    {item:"Hammer (small)", cost:2},
    {item:"Holy symbol", cost:25},
    {item:"Holy water (vial)", cost:25},
    {item:"Iron spikes (12)", cost:1},
    {item:"Lantern", cost:10},
    {item:"Mirror (hand-sized, steel)", cost:5},
    {item:"Oil (1 flask)", cost:2},
    {item:"Pole (10' long, wooden)", cost:1},
    {item:"Iron rations (7 days)", cost:15},
    {item:"Standard rations (7 days)", cost:5},
    {item:"Rope (50')", cost:1},
    {item:"Sack (large)", cost:2},
    {item:"Sack (small)", cost:1},
    {item:"Stakes (3) and mallet", cost:3},
    {item:"Thieves tools", cost:25},
    {item:"Tinder box (flint & steel)", cost:3},
    {item:"Torches (6)", cost:1},
    {item:"Waterskin", cost:1},
    {item:"Wine (2 pints)", cost:1},
    {item:"Wolfsbane (1 bunch)", cost:10}];

