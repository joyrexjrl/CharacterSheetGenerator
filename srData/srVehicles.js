const srVehicles = [
    {vehicle: "Chrysler-Nissan Jackrabbit (Electric)", handling: "3/8", speed: 80, accel: 5, body: 3, armor: 0, sig: 5, autopilot: 1, firmpoints: 0, hardpoints: 0, cost: 20500},
    {vehicle: "Chrysler-Nissan Jackrabbit (Methane)", handling: "3/8", speed: 90, accel: 6, body: 3, armor: 0, sig: 4, autopilot: 1, firmpoints: 0, hardpoints: 0, cost: 16500},
    {vehicle: "Eurocar Westwind 2000 (Standard)" , handling: "3/8", speed: 210, accel: 10, body: 3, armor: 0, sig: 2, autopilot: 3, firmpoints: 0, hardpoints: 0, cost: 57000},
    {vehicle: "Eurocar Westwind 2000 (Turbo)" , handling: "3/8", speed: 240, accel: 14, body: 3, armor: 0, sig: 1, autopilot: 3, firmpoints: 0, hardpoints: 0, cost: 77000},
    {vehicle: "Ford Americar", handling: "4/8", speed: 105, accel: 8, body: 3, armor: 0, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, cost: 20000},
    {vehicle: "Dodge Scoot", handling: "3/4", speed: 60, accel: 3, body: 2, armor: 0, sig: 5, autopilot: 0, firmpoints: 0, hardpoints: 0, cost: 5900},
    {vehicle: "Harley-Davidson Scorpion", handling: "4/5", speed: 120, accel: 6, body: 2, armor: 1, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, cost: 13500},
    {vehicle: "Yamaha Rapier", handling: "3/6", speed: 195, accel: 10, body: 2, armor: 0, sig: 2, autopilot: 1, firmpoints: 0, hardpoints: 0, cost: 14200},
    {vehicle: "Ares Roadmaster", handling: "4/10", speed: 90, accel: 3, body: 5, armor: 0, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, cost: 45000},
    {vehicle: "Ford-Canada Bison", handling: "4/3", speed: 135, accel: 6, body: 4, armor: 4, sig: 2, autopilot: 3, firmpoints: 0, hardpoints: 0, cost: 145000},
    {vehicle: "Samuvani Criscraft Otter", handling: "4", speed: 45, accel: 6, body: 5, armor: 0, sig: 3, autopilot: 2, firmpoints: 0, hardpoints: 0, cost: 32500},
    {vehicle: "Sendanko Marlin", handling: "3", speed: 30, accel: 3, body: 3, armor: 0, sig: 6, autopilot: 0, firmpoints: 0, hardpoints: 0, cost: 18750}
];

function srVehiclePlacer(){
    let chosenVehicle = srVehicles[Math.floor(Math.random() * srVehicles.length)];

    if(chosenVehicle.cost > srResourceAmount) return;
    else{
        srResourceAmount -= chosenVehicle.cost;
        srVehicleType.innerHTML = chosenVehicle.vehicle;
        srVehicleHandling.innerHTML = chosenVehicle.handling;
        srVehicleSpeed.innerHTML = chosenVehicle.speed;
        srVehicleBody.innerHTML = chosenVehicle.body;
        srVehicleArmor.innerHTML = chosenVehicle.armor;
        srVehicleSignature.innerHTML = chosenVehicle.sig;        
        srVehicleAutopilot.innerHTML = chosenVehicle.autopilot;
        srVehicleFirmpoints.innerHTML = chosenVehicle.firmpoints;
        srVehicleHardpoints.innerHTML = chosenVehicle.hardpoints;
        //srVehicleNotes
        console.log("cash after vehicle purchase: " + srResourceAmount);
    }
}