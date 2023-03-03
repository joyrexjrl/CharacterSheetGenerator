const srCyberware = [
    {cyberware: "Chipjack", essenceCost: 20, price: 1000},
    {cyberware: "Datajack", essenceCost: 20, price: 1000},
    {cyberware: "Knowsoft Link", essenceCost: 10, price: 1000},
    {cyberware: "Bone Lacing", essenceCost: 0, price: 0, newObject: function(){ return srBoneLacing()}},
    {cyberware: "Fingertip Compartment", essenceCost: 10, price: 3000},
    {cyberware: "Hand Blade", essenceCost: 0, price: 0, newObject: function(){ return srHandBlade()}},
    {cyberware: "Muscle Replacement", essenceCost: 0, price: 0, newObject: function(){ return srMuscleReplacement()}},
    {cyberware: "Smartlink", essenceCost: 50, price: 2500},
    {cyberware: "Spur", essenceCost: 0, price: 0, newObject: function(){ return srSpur()}},
    {cyberware: "Voice Modulator", essenceCost: 0, price: 0, newObject: function(){ return srVoiceModulator()}},
    {cyberware: "Reflexes", essenceCost: 0, price: 0, newObject: function(){ return srReflexesCyberware()}},
    {cyberware: "Dermal Plating", essenceCost: 0, price: 0, newObject: function(){ return srDermalPlating()}},
    {cyberware: "Filtration", essenceCost: 0, price: 0, newObject: function(){ return srFiltration()}},
    {cyberware: "Vehicle Control Rig", essenceCost: 0, price: 0, newObject: function(){ return srVCR()}},
    {cyberware: "Cyber Limb", essenceCost: 1, price: 0, newObject: function(){ return srCyberLimbs()}},
    {cyberware: "Cyber Eyes", essentCost: 0, price: 0, newObject: function(){ return srCyberEyes()}},
    {cyberware: "Cyber Ears", essentCost: 0, price: 0, newObject: function(){ return srCyberEars()}}
];

function srCyberwarePlacer(){
    const srCyberwareParentDiv = document.getElementById("sr_cyberware_bioware_information_block_placer");

    let bodyCyberAttributeBonus = parseInt(srAttributeBody.textContent);
    let quicknessCyberAttributeBonus = parseInt(srAttributeQuickness.textContent);
    let strengthCyberAttributeBonus = parseInt(srAttributeStrength.textContent);
    let reactionCyberAttributeBonus = parseInt(srReaction.textContent);
    let intelligenceAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Intelligence");
    let willpowerAttribute = srAttributesCurrentMax.find(attribute => attribute.attribute === "Willpower");

    let passedStrength = 0;
    let passedQuickness = 0;
    let passedBody = 0;

    let totalCost = 0;
    let cyberwareEssence = 0;
    let chosenCyberware = [];
    let cyberwareName = "";
    let currentEssence = 600;
    let currentYen = parseInt(srResourceAmount);

    console.log("starting yen: " + currentYen + " starting essence: " + currentEssence);

    while(currentEssence > 1){
        const cyberToAdd = srCyberware.filter(cyber => !chosenCyberware.includes(cyber));
        const cyberware = cyberToAdd[Math.floor(Math.random() * cyberToAdd.length)];
        srCyberBonusResets();
        if(cyberware.newObject){
            const newCyberware = cyberware.newObject();
            cyberwareName = newCyberware.cyberware;
            cyberwareEssence = newCyberware.essenceCost;
            totalCost = newCyberware.price;
        }else{
            cyberwareName = cyberware.cyberware;
            cyberwareEssence = cyberware.essenceCost;
            totalCost = cyberware.price;
        }
        console.log("essence cost before division " + cyberwareEssence);
        
        var availableEssence = currentEssence - cyberwareEssence;
        var availableYen = currentYen - totalCost;

        if(availableEssence < 0 || availableYen < 0){
            console.log("failed to add due to reasons " + cyberwareName);
            console.log("essence cost " + cyberwareEssence);        
            console.log("remaining essence " + currentEssence);
            console.log("cost of cyberware " + totalCost);        
            console.log("remaining yen " + currentYen);
            console.log("--------------------------------------------");
            cyberwareEssence = 0;
            break;
        }else{
            let combinedReaction = cyberReactionBonus + reactionCyberAttributeBonus;
            currentEssence -= cyberwareEssence;
            currentYen -= totalCost;

            console.log("attribute values to be passed: " + "str: " + cyberStrengthBonus + " quick: " + cyberQuicknessBonus + " body: " + cyberBodyBonus + " reac: " +
                cyberReactionBonus + " impac: " + cyberImpactArmorBonus + " bali: " + cyberBalisticArmorBonus + " ini: " + cyberInitiativeBonus + " rank: " + cyberRank +
                " unarmed: " + cyberUnarmedDamageBonus);

            if(cyberwareName.includes("Cyber Limb")){
                srCharNotesPlacer.innerHTML += "<br>" + "Unarmed cyber enhanced damage bonus: +" + cyberUnarmedPowerBonus;
                cyberUnarmedPowerBonus = 0;
            }

            if(cyberwareName.includes("Hand Blade") || cyberwareName.includes("Bone Lacing") || cyberwareName.includes("Spur")){
                srCharNotesPlacer.innerHTML += "<br>" + '<span class="bold">' + cyberwareName + " Unarmed Damage" + "</span>" + "<br>" + cyberUnarmedDamageBonus;
                cyberUnarmedDamageBonus = "";
            }

            if(cyberwareName.includes("Boosted Reflexes") || cyberwareName.includes("Wired Reflexes")){
                if(cyberwareName.includes("Boosted Reflexes")){
                    srInitiative.innerHTML += "<br>" + '<span class="sr_tiny_text">Boosted Ini</span>' + "<br>" + "c(" + cyberInitiativeBonus + combinedReaction + ")";
                    if(cyberwareName === "Boosted Reflexes 2" || cyberwareName === "Boosted Reflexes 3"){
                        srReaction.innerHTML += "<br>" + '<span class="sr_tiny_text">Boosted Reaction</span>' + "<br>" + combinedReaction;
                    }
                }
                if(cyberwareName.includes("Wired Reflexes")){
                    srReaction.innerHTML += "<br>" + '<span class="sr_tiny_text">Wired Reaction</span>' + "<br>" + combinedReaction;
                    srInitiative.innerHTML += "<br>" + '<span class="sr_tiny_text">Wired Ini</span>' + "<br>" + "c(" + cyberInitiativeBonus + combinedReaction + ")";
                }
                cyberInitiativeBonus = "";
                cyberReactionBonus = 0;
            }

            if(cyberwareName.includes("Vehicle Control Rig")){
                srReaction.innerHTML += "<br>" + '<span class="sr_tiny_text">VCR Reaction</span>' + "<br>" + combinedReaction;
                srInitiative.innerHTML += "<br>" + '<span class="sr_tiny_text">VCR Ini</span>' + "<br>" + "c(" + cyberInitiativeBonus + combinedReaction + ")";
                srPoolType3.innerHTML = "Control";
                srPoolType3Dice.innerHTML = (combinedReaction + (cyberRank*2));
                cyberInitiativeBonus = "";
                cyberReactionBonus = 0;
                cyberRank = 0;  
            }           

            const cyberDiv = document.createElement('div');
            cyberDiv.innerHTML += `
            <div class="sr_information_block_spacer">
                <p id="sr_cyber_bio_name" class="sr_skill_name">${cyberwareName}</p>
                <p id="sr_cyber_bio_rating" class="sr_skill_rating">${cyberwareEssence/100}</p>
            </div>
            `;

            if(cyberStrengthBonus > 0 || cyberQuicknessBonus > 0 || cyberBodyBonus > 0 || cyberImpactArmorBonus > 0 || cyberBalisticArmorBonus > 0){
                if(cyberStrengthBonus > 0) passedStrength += cyberStrengthBonus;
                if(cyberQuicknessBonus > 0) passedQuickness += cyberQuicknessBonus;
                if(cyberBodyBonus > 0) passedBody += cyberBodyBonus;
                //if(cyberImpactArmorBonus > 0);
                //if(cyberBalisticArmorBonus > 0);  fix after armor has been implemented to html
            }

            console.log("passed values for html display: body " + passedBody + ", quickness " + passedQuickness + ", strength " + passedStrength);

            srCyberBonusResets();

            srCyberwareParentDiv.appendChild(cyberDiv);
            chosenCyberware.push(cyberware);
            cyberwareEssence = 0;
            console.log("adding " + cyberwareName);
            console.log("remaining essence " + currentEssence);
            console.log("cost of cyberware " + totalCost);        
            console.log("remaining yen " + currentYen);
            console.log("--------------------------------------------");
        }                
    }

    if(passedBody > 0 || passedQuickness > 0 || passedStrength > 0){
        if(passedStrength > 0) srAttributeStrength.innerHTML += " c(" + (strengthCyberAttributeBonus + passedStrength) + ")";
        if(passedQuickness > 0) srAttributeQuickness.innerHTML += " c(" + (quicknessCyberAttributeBonus + passedQuickness) + ")";
        if(passedBody > 0) srAttributeBody.innerHTML += " c(" + (bodyCyberAttributeBonus + passedBody) + ")";
        let recalcCombatPool = Math.floor(((quicknessCyberAttributeBonus + passedQuickness) + intelligenceAttribute.Current + willpowerAttribute.Current) /2);
        if(recalcCombatPool > srCombatPool.textContent) srCombatPool.innerHTML = recalcCombatPool;
    }

    srCyberBonusResets();
    srPassedBonusesReset();

    currentEssence /= 100;
    console.log("remaining essence after division " + currentEssence);
    srAttributeEssence.innerHTML = currentEssence;
}

function srPassedBonusesReset(){
    passedBody = 0;
    passedQuickness = 0;
    passedStrength = 0;
}

function srCyberBonusResets(){
    cyberInitiativeBonus = "";
    cyberUnarmedDamageBonus = "";
    cyberStrengthBonus = 0;
    cyberQuicknessBonus = 0;
    cyberBodyBonus = 0;
    cyberReactionBonus = 0;
    cyberImpactArmorBonus = 0;
    cyberBalisticArmorBonus = 0;
    cyberRank = 0;
    cyberUnarmedPowerBonus = 0;
}