const priorities = [
    {priority: "A", options: ["Magic", "Attributes", "Skills", "Resources"]},
    {priority: "B", options: ["Magic", "Attributes", "Skills", "Resources"]},
    {priority: "C", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
    {priority: "D", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
    {priority: "E", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
];
var usedOptions = [];

var srAttributePoints = 0;
var srSkillPoints = 0;
var srResourceAmount = 0;
var srTotalEquipmentCost = 0;
var srRaceChoice = "";
var srIsCaster = false;
var srCasterType = "";
var srArchtype = "";

function randomOptionPicker(priority) {
    let availableOptions = priorities.find(p => p.priority === priority).options.filter(o => !usedOptions.includes(o));
    let option = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    usedOptions.push(option);
    return option;
}

function priorityRandomPlacer() {
    let priorityList = ["A", "B", "C", "D", "E"];
    let priorities = priorityList.map(p => ({ priority: p, option: randomOptionPicker(p) }));
    priorities.forEach(p => priorityPlacement(p.priority, p.option));

    srPriorityA.textContent += (" " + priorities.find(p => p.priority === "A").option);
    srPriorityB.textContent += (" " + priorities.find(p => p.priority === "B").option);
    srPriorityC.textContent += (" " + priorities.find(p => p.priority === "C").option);
    srPriorityD.textContent += (" " + priorities.find(p => p.priority === "D").option);
    srPriorityE.textContent += (" " + priorities.find(p => p.priority === "E").option);
}

function priorityPlacement(priority, option){
    let displayResult = "";
    let priBMagicType = ["Adept", "Aspected Magician"];
    let priCRaceType = ["Troll", "Elf"];
    let priDRaceType = ["Dwarf", "Ork"];
    let randomRoll;

    if(priority === "A"){
        switch(option){
            case "Magic":
                displayResult = "Full Magician";
                srAttributeMagic.innerHTML = 6;
                srIsCaster = true;
                srCasterType = displayResult;
                break;
            case "Attributes":
                displayResult = 30;
                srAttributePoints = 30;
                break;
            case "Skills":
                displayResult = 50;
                srSkillPoints = 50;
                break;
            case "Resources":
                displayResult = 1000000 + "¥";
                srResourceAmount = 1000000;
                break;
        }
        srPriorityAAmount.innerHTML = displayResult;
    }

    if(priority === "B"){
        switch(option){
            case "Magic":
                randomRoll = Math.floor(Math.random() * priBMagicType.length);
                displayResult = priBMagicType[randomRoll];
                srAttributeMagic.innerHTML = 6;
                srIsCaster = true;
                srCasterType = displayResult;
                break;
            case "Attributes":
                displayResult = 27;
                srAttributePoints = 27;
                break;
            case "Skills":
                displayResult = 40;
                srSkillPoints = 40
                break;
            case "Resources":
                displayResult = 400000 + "¥";
                srResourceAmount = 400000;
                break;
        }
        srPriorityBAmount.innerHTML = displayResult;
    }

    if(priority === "C"){
        switch(option){
            case "Race":
                randomRoll = Math.floor(Math.random() * priCRaceType.length);
                displayResult = priCRaceType[randomRoll];
                srRaceChoice = displayResult;
                break;
            case "Magic":
                displayResult = "-"
                srAttributeMagic.innerHTML = 0;
                srArchtypePicker();
                break;
            case "Attributes":
                displayResult = 24;
                srAttributePoints = 24
                break;
            case "Skills":
                displayResult = 34;
                srSkillPoints = 34
                break;
            case "Resources":
                displayResult = 90000 + "¥";
                srResourceAmount = 90000;
                break;
        }
        srPriorityCAmount.innerHTML = displayResult;
    }

    if(priority === "D"){
        switch(option){
            case "Race":
                randomRoll = Math.floor(Math.random() * priDRaceType.length);
                displayResult = priDRaceType[randomRoll];
                srRaceChoice = displayResult;
                break;
            case "Magic":
                displayResult = "-"
                srAttributeMagic.innerHTML = 0;
                srArchtypePicker();
                break;
            case "Attributes":
                displayResult = 21;
                srAttributePoints = 21
                break;
            case "Skills":
                displayResult = 30;
                srSkillPoints = 30
                break;
            case "Resources":
                displayResult = 20000 + "¥";
                srResourceAmount = 20000
                break;
        }
        srPriorityDAmount.innerHTML = displayResult;
    }

    if(priority === "E"){
        switch(option){
            case "Race":
                displayResult = "Human";
                srRaceChoice = "Human";
                break;
            case "Magic":
                displayResult = "-"
                srAttributeMagic.innerHTML = 0;
                srArchtypePicker();
                break;
            case "Attributes":
                displayResult = 18;
                srAttributePoints = 18
                break;
            case "Skills":
                displayResult = 27;
                srSkillPoints = 27
                break;
            case "Resources":
                displayResult = 5000 + "¥";
                srResourceAmount = 5000;
                break;
        }
        srPriorityEAmount.innerHTML = displayResult;
    }
}

function srArchtypePicker(){
    const archtype = ["Rigger", "Decker", "Street Samurai"];
    var randomRoll = Math.floor(Math.random() * archtype.length);
    srArchtype = archtype[randomRoll];
    console.log("character archtype " + srArchtype);
}