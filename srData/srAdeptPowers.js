const srAdeptsPowers = [    
    {power: "Attribute Boost (Strength)", cost: .25}, //per level
    {power: "Attribute Boost (Body)", cost: .25},//per level
    {power: "Attribute Boost (Quickness)", cost: .25}, //per level
    {power: "Body Control", cost: .25}, //per level
    {power: "Combat Sense", cost: 1},  //per level
    {power: "Enhanced Perception", cost: .5},  //per level
    {power: "Improved Ability (Athletics)", cost: .25},  //per level
    {power: "Improved Ability (Diving)", cost: .25},  //per level
    {power: "Improved Ability (Stealth)", cost: .25},  //per level
    {power: "Improved Ability (Edged Weapons)", cost: .5},  //per level
    {power: "Improved Ability (Clubs)", cost: .5},  //per level
    {power: "Improved Ability (Pole Arms)", cost: .5},  //per level
    {power: "Improved Ability (Cyber-Implant Weapon)", cost: .5},  //per level
    {power: "Improved Ability (Unarmed Combat)", cost: .5},  //per level
    {power: "Improved Ability (Throwing Weapons)", cost: .5},  //per level
    {power: "Improved Ability (Projectile Weapons)", cost: .5},  //per level
    {power: "Improved Ability (Underwater Combat)", cost: .5},  //per level
    {power: "Improved Ability (Pistols)", cost: .5},  //per level
    {power: "Improved Ability (SMGs)", cost: .5},  //per level
    {power: "Improved Ability (Rifles)", cost: .5},  //per level
    {power: "Improved Ability (Assault Rifles)", cost: .5},  //per level
    {power: "Improved Ability (Shotguns)", cost: .5},  //per level
    {power: "Improved Ability (Heavy Weapons)", cost: .5},  //per level
    {power: "Improved Ability (Grenade Launchers)", cost: .5},  //per level
    {power: "Improved Ability (Whips)", cost: .5},  //per level
    {power: "Improved Ability (Gunnery)", cost: .5},  //per level
    {power: "Improved Ability (Launch Weapons)", cost: .5},  //per level
    {power: "Improved Physical Attribute (Body)", cost: .5},  //per level
    {power: "Improved Physical Attribute (Strength)", cost: .5},  //per level
    {power: "Improved Physical Attribute (Quickness)", cost: .5},  //per level
    {power: "Improved Reflexes", cost: 2}, //cost depends on level of power    
    {power: "Killing Hands", cost: 1}, //cost depends on damage level
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

function srAdeptPowersPlacer(spellPoints) {
    const chosenPowersMap = new Map();

    function getRandomPower(powers) {
        const availablePowers = powers.filter(power => !chosenPowersMap.has(power.power));
        if (availablePowers.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * availablePowers.length);
        const power = availablePowers[randomIndex];
        if (power.restricter) {
            const abilityCost = power.restricter(spellPoints);
            if (abilityCost === null) {
                return null;
            }
            const { cost, powerLevel } = abilityCost;
            return { ...power, cost, powerLevel };
        }
        return { ...power };
    }

    function calculatePowerLevelRoll(power, spellPoints) {
        return power.cost === "" ? 1 : oseDieRoller(1, Math.ceil(spellPoints / power.cost));
    }

    while (spellPoints > 0) {
        let power = getRandomPower(srAdeptsPowers);
        if (!power) {
            power = getRandomPower(srAdeptPowersNoLevels);
        }
        if (!power) {
            break;
        }
        const randomPowerLevelRoll = calculatePowerLevelRoll(power, spellPoints);
        const abilityCost = randomPowerLevelRoll * power.cost;
        if (spellPoints - abilityCost < 0) {
            break;
        }
        spellPoints -= abilityCost;
        chosenPowersMap.set(power.power, randomPowerLevelRoll);
    }

    const adeptSpellsSection = document.getElementById("sr_adept_spells_section");

    for (const [power, powerLevel] of chosenPowersMap) {
        const powerElement = document.createElement("div");
        powerElement.innerHTML = `
        <div class="sr_information_block_spacer flex">
            <p id="sr_spell_adept_ability_placer" class="sr_spell_text">${power}</p>
            <p id="sr_spell_adept_level_placer" class="sr_spell_text">${powerLevel}</p>
        </div>
        `;
        adeptSpellsSection.appendChild(powerElement);
    }

    srAttributeMagic.innerHTML += " (" + spellPoints + ")";
}  