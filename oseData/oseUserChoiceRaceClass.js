const oseRaceSelect = document.getElementById("ose_user_race_selection");
const oseClassSelect = document.getElementById("ose_user_class_selection");

const oseRaces = {
    Random:["Random", "Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "MagicUser", "Thief", "Bard", "Barbarian", "Illusionist", "Paladin", "Necromancer", "Knight", "Ranger"],
    Drow:["Random", "Acrobat", "Assassin", "Cleric", "Fighter", "MagicUser", "Thief", "Necromancer", "Knight", "Ranger"],
    Elf:["Random", "Acrobat", "Assassin", "Cleric", "Fighter", "MagicUser", "Thief", "Necromancer", "Knight", "Ranger"],
    Dwarf:["Random", "Assassin", "Cleric", "Fighter", "Thief"],
    Duergar:["Random", "Assassin", "Cleric", "Fighter", "Thief"],
    Gnome:["Random", "Assassin", "Cleric", "Fighter", "Thief", "Illusionist"],
    Svirfneblin:["Random", "Assassin", "Cleric", "Fighter", "Thief", "Illusionist"],
    HalfElf:["Random", "Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "MagicUser", "Thief", "Bard", "Paladin", "Knight", "Ranger"],
    Halfling:["Random", "Druid", "Fighter", "Thief"],
    HalfOrc:["Random", "Acrobat", "Assassin", "Cleric", "Fighter", "Thief"],
    Human:["Random", "Acrobat", "Assassin", "Cleric", "Druid", "Fighter", "MagicUser", "Thief", "Bard", "Barbarian", "Illusionist", "Paladin", "Necromancer", "Knight", "Ranger"]
};

const oseClasses = {
    Random:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc", "Svirfneblin", "Duergar", "Dwarf", "Gnome", "Halfling"],
    Acrobat:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc"],
    Assassin:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc", "Svirfneblin", "Duergar", "Dwarf", "Gnome"],
    Cleric:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc", "Svirfneblin", "Duergar", "Dwarf", "Gnome"],
    Druid:["Random", "Human", "Elf", "HalfElf", "Halfling"],
    Fighter:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc", "Svirfneblin", "Duergar", "Dwarf", "Gnome", "Halfling"],
    MagicUser:["Random", "Human", "Drow", "Elf", "HalfElf"],
    Thief:["Random", "Human", "Drow", "Elf", "HalfElf", "HalfOrc", "Svirfneblin", "Duergar", "Dwarf", "Gnome", "Halfling"],
    Bard:["Random", "Human", "HalfElf"],
    Barbarian:["Random", "Human"],
    Illusionist:["Random", "Human", "Svirfneblin", "Gnome"],
    Paladin:["Random", "Human", "HalfElf"],
    Necromancer:["Random", "Human", "Drow", "Elf", "HalfElf"],
    Knight:["Random", "Human", "Elf", "HalfElf"],
    Ranger:["Random", "Human", "Drow", "Elf", "HalfElf"]
};

var oseUserSelectedRace = "Random";
var oseUserSelectedClass = "Random";
var osePopulatedRacesArray = [];
var osePopulatedClassesArray = [];

const osePopulateClasses = () => {
    osePopulatedClassesArray = [];
    oseClassSelect.innerHTML = "";
    if(oseUserSelectedRace === "Random"){
        Object.keys(oseClasses).forEach((characterClass) => {
            const option = document.createElement("option");
            option.value = characterClass;
            option.text = characterClass;
            oseClassSelect.appendChild(option);
            if(characterClass !== "Random") osePopulatedClassesArray.push(characterClass);
        });
    }else if(oseRaces[oseUserSelectedRace]){
        oseRaces[oseUserSelectedRace].forEach((characterClass) => {
            const option = document.createElement("option");
            option.value = characterClass;
            option.text = characterClass;
            oseClassSelect.appendChild(option);
            if(characterClass !== "Random") osePopulatedClassesArray.push(characterClass);
        });
    }
    oseClassSelect.value = oseUserSelectedClass;
};

const osePopulateRaces = () => {
    osePopulatedRacesArray = [];
    oseRaceSelect.innerHTML = "";
    if(oseUserSelectedClass === "Random"){
        Object.keys(oseRaces).forEach((race) => {
            const option = document.createElement("option");
            option.value = race;
            option.text = race;
            oseRaceSelect.appendChild(option);
            if(race !== "Random") osePopulatedRacesArray.push(race);
        });
    }else if(oseClasses[oseUserSelectedClass]){
        oseClasses[oseUserSelectedClass].forEach((race) => {
            const option = document.createElement("option");
            option.value = race;
            option.text = race;
            oseRaceSelect.appendChild(option);
            if(race !== "Random") osePopulatedRacesArray.push(race);
        });
    }
    oseRaceSelect.value = oseUserSelectedRace;
};

oseRaceSelect.addEventListener("change", (event) => {
    oseUserSelectedRace = event.target.value;
    osePopulateClasses();
});

oseClassSelect.addEventListener("change", (event) => {
    oseUserSelectedClass = event.target.value;
    osePopulateRaces();
});

function oseUserClassRaceSelectionReset(){
    oseUserSelectedRace = "Random";
    oseUserSelectedClass = "Random";
    osePopulateClasses();
    osePopulateRaces();
}

oseUserSelectedRace = "Random";
oseUserSelectedClass = "Random";
osePopulateClasses();
osePopulateRaces();