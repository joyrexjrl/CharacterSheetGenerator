const srAspectMageTypes = ["Conjurer", "Elementalist", "Shamanist", "Sorcerer"];
const srFullMageTypes = ["Shamanic", "Hermetic"];
const srShamanSpiritAnimalTotem = [
    {totem: "Bear totem", advantage: "• Advantage: +2 dice for health spells, +2 dice for forest spirits", disadvantage: "• Disadvantage: Bear shamans can go berserk when wounded. Whenever a Bear shaman takes physical damage in combat, the player makes a Willpower (4) Test. The shaman goes berserk for 3 turns, minus 1 turn per success. Three or more successes avert the berserk rage entirely. A berserk shaman will attack the closest living thing, friend or foe, using the most powerful weapons available (mundane or magical). If the shaman incapacitates a target before the time is up, the berserk fury dissipates."},
    {totem: "Buffalo totem", advantage: "• Advantage: +2 dice for health spells, +2 dice for prairie spirits", disadvantage: "• Disadvantage: -1 die for illusion spells"},
    {totem: "Cat totem", advantage: "• Advantage: +2 dice for illusion spells, +2 dice for city spirits", disadvantage: "• Disadvantage: +1 to all Mental target numbers if dirty or unkempt. An unwounded Cat shaman must make a Willpower (6) Test when casting a damaging spell. If the test fails, the shaman must cast her least-damaging spell (at its minimum damage level, for a variable damage spell, and at 1/2 Force). If the shaman is wounded, all this playing around stops."},
    {totem: "Coyote totem", advantage: "• Advantage: None", disadvantage: "• Disadvantage: None"},
    {totem: "Dog totem", advantage: "• Advantage: +2 dice for detection spells, +2 dice for field and health spirits", disadvantage: "• Disadvantage: A Dog shaman must make a Willpower (6) Test to change a declared course of action. The test requires a Complex Action as Dog struggles to change his mind."},
    {totem: "Dolphin totem", advantage: "• Advantage: +2 dice for detection spells, +2 dice for sea spirits", disadvantage: "• Disadvantage: -1 die for combat spells"},
    {totem: "Eagle totem", advantage: "• Advantage: +2 dice for detection spells, +2 dice for all spirits od the sky", disadvantage: "• Disadvantage: Double the Essence loss caused by adding cyberware because of the psychological impact this has on the Eagle shaman"},
    {totem: "Gator totem", advantage: "• Advantage: +2 dice for combat and detection spells. As a wilderness totem +2 dice for swamp, lake or river spirits (shaman's choice). As an urban totem, +2 dice for city spirits.", disadvantage: "• Disadvantage: -1 die for illusion spells. It takes a Willpower (6) Test for a Gator shaman to break off a fight, chase or other direct action"},
    {totem: "Lion totem", advantage: "• Advantage: +2 dice for combat spells, +2 dice for prairie spirits", disadvantage: "• Disadvantage: -1 die for health spells"},
    {totem: "Mouse totem", advantage: "• Advantage: +2 dice for detection and health spells, +2 dice for hearth and field spirits.", disadvantage: "• Disadvantage: -2 dice for combat spells"},
    {totem: "Owl totem", advantage: "• Advantage: +2 dice for any Sorcery or Conjuring at night", disadvantage: "• Disadvantage: +2 to all magical target numbers during the daytime."},
    {totem: "Raccoon totem", advantage: "• Advantage: +2 dice for manipulation spells, +2 dice for city spirits", disadvantage: "• Disadvantage: -1 die for combat spells"},
    {totem: "Rat totem", advantage: "• Advantage: +2 dice for detection and illusion spells, +2 dice for city spirits", disadvantage: "• Disadvantage: -1 die for combat spells"},
    {totem: "Raven totem", advantage: "• Advantage: +2 dice for manipulation spells, +2 dice for sky spirits", disadvantage: "• Disadvantage: +1 to all magical target numbers while not under the open sky"},
    {totem: "Shark totem", advantage: "• Advantage: +2 dice for combat and detection spells, +2 dice for sea spirits", disadvantage: "• Disadvantage: Shark shamans can go berserk in combat similar to Bear shamans, when they are wounded or when they kill an opponent (see p. 163). A berserk Shark shaman may, instead of attacking a living target, continue to attack the body of his last victim, if the player chooses."},
    {totem: "Snake totem", advantage: "• Advantage: +2 dice for detection, health and illusion spells. As a wilderness totem, +2 dice for any one spirit of the land (shaman's choice). As an urban totem, +2 dice for any one spirit of man (shaman's choice).", disadvantage: "• Disadvantage: -1 die for all spells cast during combat"},
    {totem: "Wolf totem", advantage: "• Advantage: +2 dice for combat and detection spells, +2 dice for forest, prairie or mountain spirits (shaman's choice)", disadvantage: "• Disadvantage: Wolf shamans can go berserk when wounded. Whenever a Wolf shaman takes physical damage in combat, the player makes a Willpower (4) Test. The shaman goes berserk for 3 turns, minus 1 turn per success. Three or more successes avert the berserk rage entirely. A berserk shaman will attack the closest living thing, friend or foe, using the most powerful weapons available (mundane or magical). If the shaman incapacitates a target before the time is up, the berserk fury dissipates."}
];

var spellPoints = 0;

function srCasterAbilitys(casterType){
    let randomCasterTypeRoll = 0;        

    switch(casterType){
        case "Full Magician":
            spellPoints = 25;
            randomCasterTypeRoll = Math.floor(Math.random() * srFullMageTypes.length);
            let fullMageType = srFullMageTypes[randomCasterTypeRoll];
            srGeneralCharNotes.innerHTML += " " + fullMageType + " tradition";
            srSpellPoolPlacer();
            srAstralCombatPoolPlacer();
            if(fullMageType === "Shamanic"){
                shamanTotemPicker();
            }
            srSpellPowerPlacer(spellPoints);
            break;
        case "Adept":
            spellPoints = 6;
            srAdeptPowersPlacer(spellPoints);
            break;
        case "Aspected Magician":
            spellPoints = 35;
            randomCasterTypeRoll = Math.floor(Math.random() * srAspectMageTypes.length);
            let aspectedMageType = srAspectMageTypes[randomCasterTypeRoll];
            srGeneralCharNotes.innerHTML += " " + aspectedMageType + " Aspected Magician";
            srSpellPoolPlacer();
            if(aspectedMageType === "Shamanist"){
                shamanTotemPicker();
            }
            srSpellPowerPlacer(spellPoints);
            break;
    }
    
}

function shamanTotemPicker(){
    let shamanTotemChooser = 0;

    shamanTotemChooser = Math.floor(Math.random() * srShamanSpiritAnimalTotem.length);
    srCharNotesPlacer.innerHTML += '<span class="bold">' + srShamanSpiritAnimalTotem[shamanTotemChooser].totem + "</span>" + "<br>" +
        srShamanSpiritAnimalTotem[shamanTotemChooser].advantage + "<br>" + srShamanSpiritAnimalTotem[shamanTotemChooser].disadvantage;
}

function srSpellPoolPlacer(){
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");
    let magicAttribute = 6;
    let spellPoolDice = Math.floor((intelligenceAttribute.Current + willpowerAttribute.Current + magicAttribute) / 3);

    srPoolType1.innerHTML = "Spell";
    srPoolType1Dice.innerHTML = spellPoolDice;
}

function srAstralCombatPoolPlacer(){
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");
    let charismaAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Charisma");
    let astralCombatDice = Math.floor((intelligenceAttribute.Current + willpowerAttribute.Current + charismaAttribute.Current) /2);

    srPoolType2.innerHTML = "Astral Combat";
    srPoolType2Dice.innerHTML = astralCombatDice;
}