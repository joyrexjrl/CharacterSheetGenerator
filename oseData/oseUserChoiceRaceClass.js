const oseRaceSelect = document.getElementById("ose_user_race_selection");
const oseClassSelect = document.getElementById("ose_user_class_selection");

const oseClassByRace = {
    drow:["Acrobat", "Assassin", "Cleric", "Fighter", "Magic-User", "Thief", "Necromancer", "Knight", "Ranger"],
    elf:["Acrobat", "Assassin", "Cleric", "Fighter", "Magic-User", "Thief", "Necromancer", "Knight", "Ranger"],
    dwarf:["Assassin", "Cleric", "Fighter", "Thief"],
    duergar:["Assassin", "Cleric", "Fighter", "Thief"],
    gnome:["Assassin", "Cleric", "Fighter", "Thief", "Illusionist"],
    svirfneblin:["Assassin", "Cleric", "Fighter", "Thief", "Illusionist"],
    halfElf:["Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "Magic-User", "Thief", "Bard", "Paladin", "Knight", "Ranger"],
    halfling:["Druid", "Fighter", "Thief"],
    halfOrc:["Acrobat", "Assassin", "Cleric", "Fighter", "Thief"],
    human:["Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "Magic-User", "Thief", "Bard", "Barbarian", "Illusionist", "Paladin", "Necromancer", "Knight", "Ranger"]
};

const oseRaceByClass = {
    "Acrobat":["Human", "Drow", "Elf", "Half-Elf", "Half-Orc"],
    "Assassin":["Human", "Drow", "Elf", "Half-Elf", "Half-Orc", "Svirfneblin", "Duergar", "Dwarf", "Gnome"],
    "Cleric":["Human", "Drow", "Elf", "Half-Elf", "Half-Orc", "Svirfneblin", "Duergar", "Dwarf", "Gnome"],
    "Druid":["Human", "Elf", "Half-Elf", "Halfling"],
    "Fighter":["Human", "Drow", "Elf", "Half-Elf", "Half-Orc", "Svirfneblin", "Duergar", "Dwarf", "Gnome", "Halfling"],
    "MagicUser":["Human", "Drow", "Elf", "Half-Elf"],
    "Thief":["Human", "Drow", "Elf", "Half-Elf", "Half-Orc", "Svirfneblin", "Duergar", "Dwarf", "Gnome", "Halfling"],
    "Bard":["Human", "Half-Elf"],
    "Barbarian":["Human"],
    "Illusionist":["Human", "Svirfneblin", "Gnome"],
    "Paladin":["Human", "Half-Elf"],
    "Necromancer":["Human", "Drow", "Elf", "Half-Elf"],
    "Knight":["Human", "Elf", "Half-Elf"],
    "Ranger":["Human", "Drow", "Elf", "Half-Elf"]
};


