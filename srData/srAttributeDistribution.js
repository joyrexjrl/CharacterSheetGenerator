var srAttributesCurrentMax = [{attribute: "Body", Current: 1, Max: 0},
    {attribute: "Quickness", Current: 1, Max: 0},
    {attribute: "Strength", Current: 1, Max: 0},
    {attribute: "Charisma", Current: 1, Max: 0},
    {attribute: "Intelligence", Current: 1, Max: 0},
    {attribute: "Willpower", Current: 1, Max: 0}
];

function srRacialPointAdjuster(attPoints, charRace){
    let availableAttPoints = 0;

    let dwarfBodBonus = 1;
    let dwarfStrBonus = 2;
    let dwarfWilBonus = 1;
    let dwarfNotes = "thermographic Vision, Resistance (+2 Body) to disease/ toxin";    

    let elfQuicBonus = 1;
    let elfChaBonus = 2;
    let elfNotes = "Low-light Vision";

    let orkBodBonus = 3;
    let orkStrBonus = 2;
    let orkChaBonus = -1;
    let orkIntBonus = -1;
    let orkNotes = "Low-light Vision";

    let trollBodBonus = 5;
    let trollQuicBonus = -1;
    let trollStrBonus = 4;
    let trollIntBonus = -2;
    let trollChaBonus = -2;
    let trollNotes = "Thermographic Vision, +1 Reach for armed/unarmed combat, Dermal Armor (+1 Body)";

    let racialAttributeMaximum = 6;

    switch(charRace){
        case "Dwarf":
            srAttributesCurrentMax[0].Max += (racialAttributeMaximum + dwarfBodBonus);
            srAttributesCurrentMax[0].Current += dwarfBodBonus;
            srAttributesCurrentMax[2].Max += (racialAttributeMaximum + dwarfStrBonus);
            srAttributesCurrentMax[2].Current += dwarfStrBonus;
            srAttributesCurrentMax[5].Max += (racialAttributeMaximum + dwarfWilBonus);
            srAttributesCurrentMax[5].Current += dwarfWilBonus;
            srAttributesCurrentMax[1].Max += racialAttributeMaximum;
            srAttributesCurrentMax[3].Max += racialAttributeMaximum;
            srAttributesCurrentMax[4].Max += racialAttributeMaximum;
            srGeneralCharNotes.innerHTML += dwarfNotes;
            srGeneralCharRace.innerHTML += charRace;
            srKarmaPool.innerHTML = 0;
            availableAttPoints = attPoints - 6;            
        break;
        case "Elf":
            srAttributesCurrentMax[1].Max += (racialAttributeMaximum + elfQuicBonus);
            srAttributesCurrentMax[1].Current += elfQuicBonus;
            srAttributesCurrentMax[3].Max += (racialAttributeMaximum + elfChaBonus);
            srAttributesCurrentMax[3].Current += elfChaBonus;
            srAttributesCurrentMax[0].Max += racialAttributeMaximum;
            srAttributesCurrentMax[2].Max += racialAttributeMaximum;
            srAttributesCurrentMax[4].Max += racialAttributeMaximum;
            srAttributesCurrentMax[5].Max += racialAttributeMaximum;
            srGeneralCharNotes.innerHTML += elfNotes;
            srGeneralCharRace.innerHTML += charRace;
            srKarmaPool.innerHTML = 0;
            availableAttPoints = attPoints - 6;
        break;
        case "Ork":
            srAttributesCurrentMax[0].Max += (racialAttributeMaximum + orkBodBonus);
            srAttributesCurrentMax[0].Current += orkBodBonus;
            srAttributesCurrentMax[2].Max += (racialAttributeMaximum + orkStrBonus);
            srAttributesCurrentMax[2].Current += orkStrBonus;
            srAttributesCurrentMax[3].Max += (racialAttributeMaximum + orkChaBonus);
            srAttributesCurrentMax[4].Max += (racialAttributeMaximum + orkIntBonus);
            srAttributesCurrentMax[1].Max += racialAttributeMaximum;
            srAttributesCurrentMax[5].Max += racialAttributeMaximum;
            srGeneralCharNotes.innerHTML += orkNotes;
            srGeneralCharRace.innerHTML += charRace;
            srKarmaPool.innerHTML = 0;
            availableAttPoints = attPoints - 8;
        break;
        case "Troll":
            srAttributesCurrentMax[0].Max += (racialAttributeMaximum + trollBodBonus);
            srAttributesCurrentMax[0].Current += trollBodBonus;
            srAttributesCurrentMax[1].Max += (racialAttributeMaximum + trollQuicBonus);
            srAttributesCurrentMax[2].Max += (racialAttributeMaximum + trollStrBonus);
            srAttributesCurrentMax[2].Current += trollStrBonus;
            srAttributesCurrentMax[4].Max += (racialAttributeMaximum + trollIntBonus);
            srAttributesCurrentMax[3].Max += (racialAttributeMaximum + trollChaBonus);
            srAttributesCurrentMax[5].Max += racialAttributeMaximum;
            srGeneralCharNotes.innerHTML += trollNotes;
            srGeneralCharRace.innerHTML += charRace;
            srKarmaPool.innerHTML = 0;
            availableAttPoints = attPoints - 11;
        break;
        case "Human":
            srAttributesCurrentMax[0].Max += racialAttributeMaximum;
            srAttributesCurrentMax[1].Max += racialAttributeMaximum;
            srAttributesCurrentMax[2].Max += racialAttributeMaximum;
            srAttributesCurrentMax[3].Max += racialAttributeMaximum;
            srAttributesCurrentMax[4].Max += racialAttributeMaximum;
            srAttributesCurrentMax[5].Max += racialAttributeMaximum;
            srGeneralCharRace.innerHTML += charRace;
            srKarmaPool.innerHTML = 1;
            availableAttPoints = attPoints - 6;
        break;
    }
    srAttributePointRandomizer(availableAttPoints);
}

function srAttributePointRandomizer(attPoints) {
    let maxPoints = srAttributesCurrentMax.map(att => att.Max - att.Current).reduce((acc, val) => acc + val);

    if (attPoints > maxPoints) attPoints = maxPoints;

    while (attPoints > 0) {
        srAttributesCurrentMax = shuffleArray(srAttributesCurrentMax);

        for (let i = 0; i < srAttributesCurrentMax.length; i++) {
            if (attPoints <= 0) break;

            let att = srAttributesCurrentMax[i];
            let maxPointsToAdd = att.Max - att.Current;

            if (maxPointsToAdd > 0) {
                let pointsToAdd = Math.floor(Math.random() * Math.min(maxPointsToAdd, attPoints)) + 1;
                att.Current += pointsToAdd;
                attPoints -= pointsToAdd;
            }
        }
    }

    console.log(srAttributesCurrentMax);

    let bodyAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Body");
    let quicknessAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Quickness");
    let strengthAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Strength");
    let charismaAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Charisma");
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");

    srAttributeBody.innerHTML = bodyAttribute.Current;
    srAttributeQuickness.innerHTML = quicknessAttribute.Current;
    srAttributeStrength.innerHTML = strengthAttribute.Current;
    srAttributeCharisma.innerHTML = charismaAttribute.Current;
    srAttributeIntelligence.innerHTML = intelligenceAttribute.Current;
    srAttributeWillpower.innerHTML = willpowerAttribute.Current;
    srAttributeEssence.innerHTML = 6;

    srReaction.innerHTML = Math.floor((quicknessAttribute.Current + intelligenceAttribute.Current) /2);
    srInitiative.innerHTML = "1d6+" + srReaction.textContent;

    srDamageOverflow.innerHTML = bodyAttribute.Current;

    srCombatPool.innerHTML = Math.floor((quicknessAttribute.Current + intelligenceAttribute.Current + willpowerAttribute.Current) /2);
}
  
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}