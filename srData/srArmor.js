const srLightArmor = [
    {armorName: "Fine Clothing", ballistic: 0, impact: 0, cost: 500},
    {armorName: "Ordinary Clothing", ballistic: 0, impact: 0, cost: 50},
    {armorName: "Tres Chic", ballistic: 0, impact: 0, cost: 1000},
    {armorName: "Armor Clothing", ballistic: 3, impact: 0, cost: 500},
    {armorName: "Secure Clothing", ballistic: 3, impact: 0, cost: 450},
    {armorName: "Form-Fitting Body Armor Shirt", ballistic: 2, impact: 0, cost: 500},
    {armorName: "Form-Fitting Body Armor Half-body Suit", ballistic: 3, impact: 1, cost: 1000},
    {armorName: "Form-Fitting Body Armor Full-body Suit", ballistic: 4, impact: 1, cost: 2000},
    {armorName: "Light Armor Clothing", ballistic: 1, impact: 0, cost: 400},
    {armorName: "Heavy Armor Clothing", ballistic: 4, impact: 0, cost: 600}
];

const srMediumArmor = [
    {armorName: "Armor Jacket", ballistic: 5, impact: 3, cost: 900},
    {armorName: "Armor Vest", ballistic: 2, impact: 1, cost: 200},
    {armorName: "Armor Vest with Plates", ballistic: 4, impact: 3, cost: 600},
    {armorName: "Lined Coat", ballistic: 4, impact: 2, cost: 600},
    {armorName: "Secure Jacket", ballistic: 5, impact: 3, cost: 850},
    {armorName: "Secure Vest", ballistic: 2, impact: 1, cost: 175},
    {armorName: "Secure Ultra-Vest", ballistic: 3, impact: 2, cost: 350},
    {armorName: "Secure Long Coat", ballistic: 4, impact: 2, cost: 650},
    {armorName: "Camouflage Jacket", ballistic: 4, impact: 2, cost: 1000},
    {armorName: "Camouflage Jumpsuit", ballistic: 3, impact: 2, cost: 750},
    {armorName: "Camouflage Vest", ballistic: 2, impact: 2, cost: 400}
];

function srArmorPicker(){
    const srArmorParentDiv = srArmorBlockPlacer;

    let lightArmorBonusBallistic = 0;
    let totalBallistic = 0;
    let totalImpact = 0;

    let lightArmor = srLightArmor[Math.floor(Math.random() * srLightArmor.length)];
    let mediumArmor = srMediumArmor[Math.floor(Math.random() * srMediumArmor.length)];

    let lightArmorName = lightArmor.armorName;
    let lightArmorRatingBallistic = lightArmor.ballistic;
    let lightArmorRatingImpact = lightArmor.impact;

    let mediumArmorName = mediumArmor.armorName;
    let mediumArmorRatingBallistic = mediumArmor.ballistic;
    let mediumArmorRatingImpact = mediumArmor.impact;

    const armorDiv = document.createElement('div');

    if(srResourceAmount > mediumArmor.cost){
        armorDiv.innerHTML += `
            <div class="sr_information_block_spacer">
                <p id="sr_armor_name" class="sr_skill_name">${mediumArmorName}</p>
                <p id="sr_armor_rating" class="sr_skill_rating">${mediumArmorRatingBallistic}/${mediumArmorRatingImpact}</p>
            </div>`;
        srResourceAmount -= mediumArmor.cost;
        srEquipmentPlacer.innerHTML += mediumArmorName + "<br>";
    }

    if(srResourceAmount > lightArmor.cost){
        armorDiv.innerHTML += `
            <div class="sr_information_block_spacer">
                <p id="sr_armor_name" class="sr_skill_name">${lightArmorName}</p>
                <p id="sr_armor_rating" class="sr_skill_rating">${lightArmorRatingBallistic}/${lightArmorRatingImpact}</p>
            </div>`;
        srResourceAmount -= lightArmor.cost;
        srEquipmentPlacer.innerHTML += lightArmorName + "<br>";
    }

    srArmorParentDiv.appendChild(armorDiv);

    if(lightArmorRatingBallistic > 1) lightArmorBonusBallistic = Math.floor(lightArmorRatingBallistic/2);
    totalBallistic = mediumArmorRatingBallistic + lightArmorBonusBallistic;
    totalImpact = mediumArmorRatingImpact;
    if(isCyberTitanium){ 
        totalBallistic += 1;
        totalImpact += 1;
    }
    if(isCyberAluminum) totalImpact += 1;

    srTotalArmorRatings.innerHTML += totalBallistic + "/" + totalImpact;
}