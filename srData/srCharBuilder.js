const priorities = [
    {priority: "A", options: ["Magic", "Attributes", "Skills", "Resources"]},
    {priority: "B", options: ["Magic", "Attributes", "Skills", "Resources"]},
    {priority: "C", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
    {priority: "D", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
    {priority: "E", options: ["Race", "Magic", "Attributes", "Skills", "Resources"]},
];
const usedPriorities = [];
const usedOptions = [];

var srAttributePoints = 0;
var srSkillPoints = 0;
var srResourceAmount = 0;

function randomPriorityPicker(){
    let availablePriorities = priorities.filter(p => !usedPriorities.includes(p.priority));
    let priority = availablePriorities[Math.floor(Math.random() * availablePriorities.length)];
    usedPriorities.push(priority.priority);

    let availableOptions = priority.options.filter(o => !usedOptions.includes(o));
    let option = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    usedOptions.push(option);

    return{priority: priority.priority, option: option};
}

function priorityRandomPlacer(){
    let priorities = [];
    for (let i = 0; i < 5; i++) {
        let{priority, option} = randomPriorityPicker();
        priorities.push({priority, option});
        priorityPlacement(priority, option);
    }
    
    srPriorityADisplay.textContent += (" " +  priorities.find(p => p.priority === "A").option);
    srPriorityBDisplay.textContent += (" " +  priorities.find(p => p.priority === "B").option);
    srPriorityCDisplay.textContent += (" " +  priorities.find(p => p.priority === "C").option);
    srPriorityDDisplay.textContent += (" " +  priorities.find(p => p.priority === "D").option);
    srPriorityEDisplay.textContent += (" " +  priorities.find(p => p.priority === "E").option);
 
}

function priorityPlacement(priority, option){
    let displayResult;
    let priBMagicType = ["Adept", "Aspected Magician"];
    let priCRaceType = ["Troll", "Elf"];
    let priDRaceType = ["Dwarf", "Orc"];
    let randomRoll;

    if(priority === "A"){
        switch(option){
            case "Magic":
                displayResult = "Full Magician"
                break;
            case "Attributes":
                displayResult = 30;
                break;
            case "Skills":
                displayResult = 50;
                break;
            case "Resources":
                displayResult = 1000000 + "¥";
                break;
        }
        srPriorityAAmount.innerHTML = displayResult;
    }

    if(priority === "B"){
        switch(option){
            case "Magic":
                randomRoll = Math.floor(Math.random() * priBMagicType.length);
                displayResult = priBMagicType[randomRoll];
                break;
            case "Attributes":
                displayResult = 27;
                break;
            case "Skills":
                displayResult = 40;
                break;
            case "Resources":
                displayResult = 400000 + "¥";
                break;
        }
        srPriorityBAmount.innerHTML = displayResult;
    }

    if(priority === "C"){
        switch(option){
            case "Race":
                randomRoll = Math.floor(Math.random() * priCRaceType.length);
                displayResult = priCRaceType[randomRoll];
                break;
            case "Magic":
                displayResult = "-"
                break;
            case "Attributes":
                displayResult = 24;
                break;
            case "Skills":
                displayResult = 34;
                break;
            case "Resources":
                displayResult = 90000 + "¥";
                break;
        }
        srPriorityCAmount.innerHTML = displayResult;
    }

    if(priority === "D"){
        switch(option){
            case "Race":
                randomRoll = Math.floor(Math.random() * priDRaceType.length);
                displayResult = priDRaceType[randomRoll];
                break;
            case "Magic":
                displayResult = "-"
                break;
            case "Attributes":
                displayResult = 21;
                break;
            case "Skills":
                displayResult = 30;
                break;
            case "Resources":
                displayResult = 20000 + "¥";
                break;
        }
        srPriorityDAmount.innerHTML = displayResult;
    }

    if(priority === "E"){
        switch(option){
            case "Race":
                displayResult = "Human";
                break;
            case "Magic":
                displayResult = "-"
                break;
            case "Attributes":
                displayResult = 18;
                break;
            case "Skills":
                displayResult = 27;
                break;
            case "Resources":
                displayResult = 5000 + "¥";
                break;
        }
        srPriorityEAmount.innerHTML = displayResult;
    }
}