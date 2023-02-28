const srCombatSpells = [
    {spell: "Death Touch (M)", drain: "(DL-1)"},
    {spell: "Manabolt (M)", drain: "(DL)"},
    {spell: "Manaball (M)", drain: "(DL+1)"},
    {spell: "Powerbolt (P)", drain: "+1(DL)"},
    {spell: "Powerball (P)", drain: "+1(DL+1)"},
    {spell: "Stunbolt (M)", drain: "-1(DL)"},
    {spell: "Stunball (M)", drain: "-1(DL+1)"}
];

const srDetectionSpells = [
    {spell: "Analyze Device (P)", drain: "+1(M)"},
    {spell: "Analyze Truth (M)", drain: "L"},
    {spell: "Clairaudience (M)", drain: "M"},
    {spell: "Clairvoyance (M)", drain: "M"},
    {spell: "Combat Sense (M)", drain: "S"},
    {spell: "Detect Enemies (M)", drain: "M"},
    {spell: "Detect Individual (M)", drain: "L"},
    {spell: "Detect Life (M)", drain: "L"},
    {spell: "Detect Magic (M)", drain: "L"},
    {spell: "Mindlink (M)", drain: "S"},
    {spell: "Mind Probe (M)", drain: "S"}
];

const srHealthSpells = [
    {spell: "Antidote (M)", drain: "(Toxin DL)"},
    {spell: "Cure Disease (M)", drain: "(Disease DL)"},
    {spell: "Decrease Body (M)", drain: "+1(S)"},
    {spell: "Decrease Quickness (M)", drain: "+1(S)"},
    {spell: "Decrease Strength (M)", drain: "+1(S)"},
    {spell: "Decrease Charisma (M)", drain: "+1(S)"},
    {spell: "Decrease Intelligence (M)", drain: "+1(S)"},
    {spell: "Decrease Willpower (M)", drain: "+1(S)"},
    {spell: "Decrease Cybered Body (P)", drain: "+2(S)"},
    {spell: "Decrease Cybered Quickness (P)", drain: "+2(S)"},
    {spell: "Decrease Cybered Strength (P)", drain: "+2(S)"},
    {spell: "Detox (M)", drain: "(Wound Level)"},
    {spell: "Treat (M)", drain: "-1(Wound Level)"},
    {spell: "Healthy Glow (M)", drain: "L"},
    {spell: "Hibernate (M)", drain: "+1(M)"},
    {spell: "Increase Body (M)", drain: "+1(M)"},
    {spell: "Increase Quickness (M)", drain: "+1(M)"},
    {spell: "Increase Strength (M)", drain: "+1(M)"},
    {spell: "Increase Charisma (M)", drain: "+1(M)"},
    {spell: "Increase Intelligence (M)", drain: "+1(M)"},
    {spell: "Increase Willpower (M)", drain: "+1(M)"},
    {spell: "Increase Cybered Body (P)", drain: "+2(M)"},
    {spell: "Increase Cybered Quickness (P)", drain: "+2(M)"},
    {spell: "Increase Cybered Strength (P)", drain: "+2(M)"},
    {spell: "Increase Reaction (M)", drain: "+1(S)"},
    {spell: "Increase Reflexes +1 (M)", drain: "+1(S)"},
    {spell: "Increase Reflexes +2 (M)", drain: "+1(D)"},
    {spell: "Increase Reflexes +3 (M)", drain: "+3(D)"},
    {spell: "Oxygenate (P)", drain: "+2(L)"},
    {spell: "Prophylaxis (M)", drain: "+1(L)"},
    {spell: "Resist Pain (M)", drain: "-2(Damage)"},
    {spell: "Stabilize (M)", drain: "+1(M)"}
];

const srIllusionSpells = [
    {spell: "Confusion (M)", drain: "S"},
    {spell: "Mass Confusion (M)", drain: "D"},
    {spell: "Chaos (P)", drain: "+1(S)"},
    {spell: "Chaotic World (P)", drain: "+1(D)"},
    {spell: "Entertainment (M)", drain: "L"},
    {spell: "Trid Entertainment (P)", drain: "+1(L)"},
    {spell: "Invisibility (M)", drain: "M"},
    {spell: "Improved Invisibility (P)", drain: "+1(M)"},
    {spell: "Mask (M)", drain: "M"},
    {spell: "Physical Mask (P)", drain: "+1(M)"},
    {spell: "Phantasm (M)", drain: "D"},
    {spell: "Trid Phantasm (P)", drain: "+1(D)"},
    {spell: "Silence (P)", drain: "+1(S)"},
    {spell: "Stealth (P)", drain: "+1(M)"}
];

const srManipulationSpells = [
    {spell: "Control Actions (M)", drain: "+1(M)"},
    {spell: "Control Emotion (M)", drain: "+1(M)"},
    {spell: "Control Thoughts (M)", drain: "+1(S)"},
    {spell: "Influence (M)", drain: "S"},
    {spell: "Acid Stream (P)", drain: "+1(DL+1)"},
    {spell: "Toxic Wave (P)", drain: "+1(DL+2)"},
    {spell: "Flamethrower (P)", drain: "+1(DL+1)"},
    {spell: "Fireball (P)", drain: "+1(DL+2)"},
    {spell: "Lightning Bolt (P)", drain: "+1(DL+1)"},
    {spell: "Ball Lightning (P)", drain: "+1(DL+2)"},
    {spell: "Clout (P)", drain: "(DL)"},
    {spell: "Fling (P)", drain: "+1(M)"},
    {spell: "Levitate (P)", drain: "+2(M)"},
    {spell: "Magic Fingers (P)", drain: "+2(M)"},
    {spell: "Poltergeist (P)", drain: "+1(M)"},
    {spell: "Armor (P)", drain: "+2(M)"},
    {spell: "Physical Barrier (P)", drain: "+2(S)"},
    {spell: "Astral Barrier (M)", drain: "+1(S)"},
    {spell: "Ice Sheet (P)", drain: "+1(S)"},
    {spell: "Ignite (P)", drain: "+1(D)"},
    {spell: "Light (P)", drain: "+2(M)"},
    {spell: "Petrify (P)", drain: "+1(S)"},
    {spell: "Shadow (P)", drain: "+2(M)"}
];

function srSpellPowerPlacer(spellPoints){
    const spellsArray = [srCombatSpells, srDetectionSpells, srHealthSpells, srIllusionSpells, srIllusionSpells, srManipulationSpells];    
    const srSpellsSectionNonadept = document.getElementById('sr_spells_section_nonadept');
    const chosenSpells = [];
    
    while(spellPoints > 0){
        const randomSpellArray = spellsArray[Math.floor(Math.random() * spellsArray.length)];
        const filteredSpellsArray = randomSpellArray.filter(spell => !chosenSpells.includes(spell));
        const chosenSpell = filteredSpellsArray[Math.floor(Math.random() * filteredSpellsArray.length)];
        let spellForce = oseDieRoller(1, 6);
        if(spellForce > spellPoints) spellForce = spellPoints;
        else spellPoints -= spellForce;

        const spellDiv = document.createElement('div');
        spellDiv.innerHTML += `
        <div class="flex">
            <div class="sr_spells_name_section">
                <p id="sr_spell_name_placer" class="sr_spell_text">${chosenSpell.spell}</p>
            </div>
            <div class="sr_spells_force_drain_section flex">
                <div class="sr_spells_force_block">
                    <p id="sr_spell_force_placer" class="sr_center_text sr_spell_text">${spellForce}</p>
                </div>
                <div class="sr_spells_drain_block">
                    <p id="sr_spell_drain_placer" class="sr_center_text sr_spell_text">${chosenSpell.drain}</p>
                </div>                                                                        
            </div>
        </div>
        `;
                
        srSpellsSectionNonadept.appendChild(spellDiv);
        chosenSpells.push(chosenSpell);
    };
}