const srCyberware = [
    {cyberware: "Chipjack", essenceCost: .2, price: 1000},
    {cyberware: "Datajack", essenceCost: .2, price: 1000},
    {cyberware: "Knowsoft Link", essenceCost: .1, price: 1000},
    {cyberware: "Bone Lacing", essenceCost: 0, price: 0, newObject: function(){ return srBoneLacing()}},
    {cyberware: "Fingertip Compartment", essenceCost: .1, price: 3000},
    {cyberware: "Hand Blade", essenceCost: 0, price: 0, newObject: function(){ return srHandBlade()}},
    {cyberware: "Muscle Replacement", essenceCost: 0, price: 0, newObject: function(){ return srMuscleReplacement()}},
    {cyberware: "Smartlink", essenceCost: .5, price: 2500},
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
    let totalCost = 0;
    let cyberwareEssence = 0;
    let chosenCyberware = [];
    let cyberwareName = "";
    let currentEssence = parseFloat(srAttributeEssence.textContent);
    let startingYen = parseInt(srResourceAmount);

    console.log("starting yen: " + startingYen + " starting essence: " + currentEssence);

    while(currentEssence > .01){
        const cyberToAdd = srCyberware.filter(cyber => !chosenCyberware.includes(cyber));
        const cyberware = cyberToAdd[Math.floor(Math.random() * cyberToAdd.length)];
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

        currentEssence -= cyberwareEssence;
        startingYen -= totalCost;

        if((currentEssence -= cyberwareEssence) < 0 || (startingYen -= totalCost) < 0){
            console.log("failed to add due to reasons " + cyberwareName);
            console.log("essence cost " + cyberwareEssence);        
            console.log("remaining essence " + currentEssence);
            console.log("cost of cyberware " + totalCost);        
            console.log("remaining yen " + startingYen);
            console.log("--------------------------------------------");
            break;
        }else{
            const cyberDiv = document.createElement('div');
            cyberDiv.innerHTML += `
            <div class="sr_information_block_spacer">
                <p id="sr_cyber_bio_name" class="sr_skill_name">${cyberwareName}</p>
                <p id="sr_cyber_bio_rating" class="sr_skill_rating">${cyberwareEssence}</p>
            </div>
            `;

            srCyberwareParentDiv.appendChild(cyberDiv);
            chosenCyberware.push(cyberware);
            srAttributeEssence.innerHTML =  parseFloat(currentEssence).toFixed(2) - parseFloat(cyberwareEssence).toFixed(2);
            console.log("adding " + cyberwareName);
            console.log("essence cost " + cyberwareEssence);        
            console.log("remaining essence " + currentEssence);
            console.log("cost of cyberware " + totalCost);        
            console.log("remaining yen " + startingYen);
            console.log("--------------------------------------------");
        }                
    }    
}

