

function srCasterAbilitys(casterType){
    console.log("caster skills activated, using " + casterType + " abilitys");
    let spellPoints = 0;

    switch(casterType){
        case "Full Magician":
            spellPoints = 25;
            break;
        case "Adept":
            spellPoints = 6;
            break;
        case "Aspected Magician":
            spellPoints = 35;            
            break;
    }
    
}