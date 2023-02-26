const srAdeptsPowers = [    
    {power: "Attribute Boost (Strength)", cost: .25, restricter: function() { return srAttributeBoost("Strength")}}, //per level
    {power: "Attribute Boost (Body)", cost: .25, restricter: function() { return srAttributeBoost("Body")}},//per level
    {power: "Attribute Boost (Quickness)", cost: .25, restricter: function() { return srAttributeBoost("Quickness")}}, //per level
    {power: "Body Control", cost: .25}, //per level
    {power: "Combat Sense", cost: 1},  //per level
    {power: "Enhanced Perception", cost: .5},  //per level
    {power: "Improved Ability (Physical)", cost: .25},  //per level
    {power: "Improved Ability (Combat)", cost: .5},  //per level
    {power: "Improved Physical Attribute", cost: .5},  //per level
    {power: "Improved Reflexes", cost: ""}, //cost depends on level of power    
    {power: "Killing Hands", cost: ""}, //cost depends on damage level
    {power: "Magic Resistance", cost: 1}, //per level    
    {power: "Mystic Armor", cost: .5}, //per level
    {power: "Pain Resistance", cost: .5}, //per level
    {power: "Rapid Healing", cost: .5} //per level    
];

const srAdeptPowersNoLevels = [
    {power: "Astral Perception", cost: 2},
    {power: "Missile Parry", cost: 1},
    {power: "Suspended State", cost: 1},
    {power: "Improved Sense (Direction Sense)", cost: .25},
    {power: "Improved Sense (Improved Scent)", cost: .25},
    {power: "Improved Sense (Improved Taste)", cost: .25},
    {power: "Improved Sense (Flare Compensation)", cost: .25},
    {power: "Improved Sense (Sound Dampening)", cost: .25}
];

function srAdeptPowersPlacer(spellPoints){
    const chosenPowers = [];
    let randomPowerLevelRoll = 0;

    function getRandomPower(powers, spellPoints){
        const availablePowers = powers.filter(power => !(power.power in chosenPowers));
        if (availablePowers.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * availablePowers.length);
        const power = availablePowers[randomIndex];
        if(power.restricter){
            const {cost, spellPoints: points} = power.restricter(spellPoints);
            if(points < 0){
                return null;
            }
            return{...power, cost, spellPoints: points};
        }
        return power;
    }

    while (spellPoints > 0) {
        let power = getRandomPower(srAdeptsPowers);
        if (!power) {
            power = getRandomPower(srAdeptPowersNoLevels);
        }
        if (!power) {
            break;
        }
        if (power.cost !== "") {
            randomPowerLevelRoll = oseDieRoller(1, Math.ceil(spellPoints / power.cost));
        } else {
            randomPowerLevelRoll = 1;
        }
        let abilityCost = randomPowerLevelRoll * power.cost;
        if (spellPoints - abilityCost < 0) {
            break;
        }
        spellPoints -= randomPowerLevelRoll * power.cost;
        chosenPowers[power.power] = randomPowerLevelRoll;
    }
    const adeptSpellsSection = document.getElementById("sr_adept_spells_section");

    for (const power in chosenPowers) {
        const powerLevel = chosenPowers[power];
        const powerElement = document.createElement("div");
        powerElement.innerHTML = `
        <div class="sr_information_block_spacer flex">
            <p id="sr_spell_adept_ability_placer" class="sr_spell_text">${power}</p>
            <p id="sr_spell_adept_level_placer" class="sr_spell_text">${powerLevel}</p>
        </div>
        `;
        adeptSpellsSection.appendChild(powerElement);
        console.log("current spell points " + spellPoints);
    }
    console.log("remaining spell points " + spellPoints);
    srAttributeMagic.innerHTML += " (" + spellPoints + ")";
}

function srAttributeBoost(boostedAttribute) {
    const cost = 0.25;
    const attribute = srAttributesCurrentMax.find(attr => attr.attribute === boostedAttribute);
    return function(spellPoints) {
      const attributeCost = srAttributeBoostCalculator(attribute.Max, cost, spellPoints);
      const remainingPoints = spellPoints - attributeCost;
      if (remainingPoints < 0) {
        return { cost: null, spellPoints };
      }
      return { cost: attributeCost, spellPoints: remainingPoints };
    };
  }

function srAttributeBoostCalculator(attribute, cost, spellPoints){
    let maxRacialAttribute = 0;
    let levelRolled = 0;
    let abilityCost = 0;
    maxRacialAttribute = Math.ceil(attribute * 1.5);
    levelRolled = oseDieRoller(1, maxRacialAttribute);
    abilityCost = levelRolled * cost;
    if(abilityCost > spellPoints){
        levelRolled = Math.floor(spellPoints / cost);
        abilityCost = levelRolled * cost;
    }
    return abilityCost
}