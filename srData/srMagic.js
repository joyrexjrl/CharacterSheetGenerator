

const srAspectMageTypes = ["Conjurer", "Elementalist", "Shamanist", "Sorcerer"];
const srFullMageTypes = ["Shamanic", "Hermetic"];

function srCasterAbilitys(casterType){
    console.log("caster skills activated, using " + casterType + " abilitys");
    let spellPoints = 0;
    let randomCasterTypeRoll = 0;
    

    switch(casterType){
        case "Full Magician":
            spellPoints = 25;
            randomCasterTypeRoll = Math.floor(Math.random() * srFullMageTypes.length);
            let fullMageType = srFullMageTypes[randomCasterTypeRoll];
            srGeneralCharNotes.innerHTML += " " + fullMageType + " tradition";
            srSpellPoolPlacer();
            srAstralCombatPoolPlacer();
            break;
        case "Adept":
            spellPoints = 6;
            break;
        case "Aspected Magician":
            spellPoints = 35;
            randomCasterTypeRoll = Math.floor(Math.random() * srAspectMageTypes.length);
            let aspectedMageType = srAspectMageTypes[randomCasterTypeRoll];
            srGeneralCharNotes.innerHTML += " " + aspectedMageType + " Aspected Magician";
            srSpellPoolPlacer();
            break;
    }
    
}

function srSpellPoolPlacer(){
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");
    let magicAttribute = 6;
    let spellPoolDice = Math.floor((intelligenceAttribute.Current + willpowerAttribute.Current + magicAttribute) / 3);

    srPoolType1.innerHTML = "Spell";
    srPoolType1Dice.innerHTML = spellPoolDice
    console.log("spell pool amount " + spellPoolDice);
}

function srAstralCombatPoolPlacer(){
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");
    let charismaAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Charisma");
    let astralCombatDice = Math.floor((intelligenceAttribute.Current + willpowerAttribute.Current + charismaAttribute.Current) /2);

    srPoolType2.innerHTML = "Astral Combat";
    srPoolType2Dice.innerHTML = astralCombatDice;
}