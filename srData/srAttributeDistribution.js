function srAttributePointPlacer(attPoints, charRace){
    let availableAttPoints = 0;

    let dwarfBodBonus = 1;
    let dwarfStrBonus = 2;
    let dwarfWilBonus = 1;
    let dwarfNotes = "thermographic Vision, Resistance (+2 Body) to disease/ toxin";    

    let elfQuicBonus = 1;
    let elfChaBonus = 2;
    let elfNotes = "Low-light Vision";

    let orcBodBonus = 3;
    let orcStrBonus = 2;
    let orcChaBonus = -1;
    let orcIntBonus = -1;
    let orcNotes = "Low-light Vision";

    let trollBodBonus = 5;
    let trollQuicBonus = -1;
    let trollStrBonus = 4;
    let trollIntBonus = -2;
    let trollChaBonus = -2;
    let trollNotes = "Thermographic Vision, +1 Reach for armed/unarmed combat, Dermal Armor (+1 Body)";

    let racialAttributeMaximum = 6;

    let attributesCurrentMax = [{attribute: "Body", Current: 0, Max: 0},
        {attribute: "Quickness", Current: 0, Max: 0},
        {attribute: "Strength", Current: 0, Max: 0},
        {attribute: "Charisma", Current: 0, Max: 0},
        {attribute: "Intelligence", Current: 0, Max: 0},
        {attribute: "Willpower", Current: 0, Max: 0}];

    switch(charRace){
        case "Dwarf":
            attributesCurrentMax[0].Max = racialAttributeMaximum + dwarfBodBonus;
            attributesCurrentMax[2].Max = racialAttributeMaximum + dwarfStrBonus;
            attributesCurrentMax[5].Max = racialAttributeMaximum + dwarfWilBonus;
            attributesCurrentMax[1].Max = racialAttributeMaximum;
            attributesCurrentMax[3].Max = racialAttributeMaximum;
            attributesCurrentMax[4].Max = racialAttributeMaximum;
            srGeneralCharNotes.innerHTML = dwarfNotes;
            srGeneralCharRace.innerHTML = "Dwarf";
            availableAttPoints = attPoints - 6;
        break;
        case "Elf":
            attributesCurrentMax[1].Max = racialAttributeMaximum + elfQuicBonus;
            attributesCurrentMax[3].Max = racialAttributeMaximum + elfChaBonus;
            attributesCurrentMax[0].Max = racialAttributeMaximum;
            attributesCurrentMax[2].Max = racialAttributeMaximum;
            attributesCurrentMax[4].Max = racialAttributeMaximum;
            attributesCurrentMax[5].Max = racialAttributeMaximum;
            srGeneralCharNotes.innerHTML = elfNotes;
            srGeneralCharRace.innerHTML = "Elf";
            availableAttPoints = attPoints - 6;
        break;
        case "Ork":
            attributesCurrentMax[0].Max = racialAttributeMaximum + orcBodBonus;
            attributesCurrentMax[2].Max = racialAttributeMaximum + orcStrBonus;
            attributesCurrentMax[3].Max = racialAttributeMaximum + orcChaBonus;
            attributesCurrentMax[4].Max = racialAttributeMaximum + orcIntBonus;
            attributesCurrentMax[1].Max = racialAttributeMaximum;
            attributesCurrentMax[5].Max = racialAttributeMaximum;
            srGeneralCharNotes.innerHTML = orcNotes;
            srGeneralCharRace.innerHTML = "Orc";
            availableAttPoints = attPoints - 8;
        break;
        case "Troll":
            attributesCurrentMax[0].Max = racialAttributeMaximum + trollBodBonus;
            attributesCurrentMax[1].Max = racialAttributeMaximum + trollQuicBonus;
            attributesCurrentMax[2].Max = racialAttributeMaximum + trollStrBonus;
            attributesCurrentMax[4].Max = racialAttributeMaximum + trollIntBonus;
            attributesCurrentMax[3].Max = racialAttributeMaximum + trollChaBonus;
            attributesCurrentMax[5].Max = racialAttributeMaximum;
            srGeneralCharNotes.innerHTML = trollNotes;
            srGeneralCharRace.innerHTML = "Troll";
            availableAttPoints = attPoints - 11;
        break;
        case "Human":
            srGeneralCharRace.innerHTML = "Human";
            availableAttPoints = attPoints - 6;
        break;
    }
}