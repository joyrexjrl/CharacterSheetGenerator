const srVehicles = [
    {vehicle: "Chrysler-Nissan Jackrabbit (Electric)", type: "car", handling: "3/8", speed: 80, accel: 5, body: 3, armor: 0, sig: 5, autopilot: 1, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 1, load: 100, cost: 20500},
    {vehicle: "Chrysler-Nissan Jackrabbit (Methane)", type: "car", handling: "3/8", speed: 90, accel: 6, body: 3, armor: 0, sig: 4, autopilot: 1, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 1, load: 100, cost: 16500},
    {vehicle: "Eurocar Westwind 2000 (Standard)" , type: "car", handling: "3/8", speed: 210, accel: 10, body: 3, armor: 0, sig: 2, autopilot: 3, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 5, load: 45, cost: 57000},
    {vehicle: "Eurocar Westwind 2000 (Turbo)" , type: "car", handling: "3/8", speed: 240, accel: 14, body: 3, armor: 0, sig: 1, autopilot: 3, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 5, load: 45, cost: 77000},
    {vehicle: "Ford Americar", type: "car", handling: "4/8", speed: 105, accel: 8, body: 3, armor: 0, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 12, load: 110, cost: 20000},
    {vehicle: "Dodge Scoot", type: "bike", handling: "3/4", speed: 60, accel: 3, body: 2, armor: 0, sig: 5, autopilot: 0, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 1, load: 10, cost: 5900},
    {vehicle: "Harley-Davidson Scorpion", type: "bike", handling: "4/5", speed: 120, accel: 6, body: 2, armor: 1, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 4, load: 60, cost: 13500},
    {vehicle: "Yamaha Rapier", type: "bike", handling: "3/6", speed: 195, accel: 10, body: 2, armor: 0, sig: 2, autopilot: 1, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 1, load: 40, cost: 14200},
    {vehicle: "Ares Roadmaster", type: "car", handling: "4/10", speed: 90, accel: 3, body: 5, armor: 0, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 80, load: 2000, cost: 45000},
    {vehicle: "Ford-Canada Bison", type: "car", handling: "4/3", speed: 135, accel: 6, body: 4, armor: 4, sig: 2, autopilot: 3, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 67, load: 1918, cost: 145000},
    {vehicle: "Samuvani Criscraft Otter", type: "boat", handling: "4", speed: 45, accel: 6, body: 5, armor: 0, sig: 3, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 48, load: 650, cost: 32500},
    {vehicle: "Sendanko Marlin", type: "boat", handling: "3", speed: 30, accel: 3, body: 3, armor: 0, sig: 6, autopilot: 0, firmpoints: 0, hardpoints: 0, sensor: 0, cargo: 12, load: 150, cost: 18750}
];

const srDrones = [
    {vehicle: "GM-Nissan Doberman", type: "ground drone", handling: "3/5", speed: 70, accel: 8, body: 2, armor: 6, sig: 2, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 2.5, load: 50, cost: 25000},
    {vehicle: "Gaz-Niki GNRD-71 Bis Snooper", type: "ground drone", handling: "4/3", speed: 75, accel: 3, body: 1, armor: 0, sig: 8, autopilot: 1, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 2, load: 30, cost: 8500},
    {vehicle: "Generic Surveillance Drone", type: "vtol", handling: "3", speed: 70, accel: 9, body: 1, armor: 0, sig: 5, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 0, load: 10, cost: 8125},
    {vehicle: "MCT-Nissan Roto-Drone", type: "vtol", handling: "4", speed: 70, accel: 6, body: 2, armor: 0, sig: 4, autopilot: 1, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 4, load: 150, cost: 10500},
    {vehicle: "Cyberspace Designs Dalmation", type: "vtol", handling: "3", speed: 105, accel: 8, body: 2, armor: 0, sig: 6, autopilot: 2, firmpoints: 0, hardpoints: 0, sensor: 1, cargo: 3, load: 80, cost: 16000}
];

const srVehicleMounts = [
    {mount: "External Firmpoint Fixed Mount", cf: 1, weight: 10, cost: 750, rc: "-1/2"},
    {mount: "External Hardpoint Fixed Mount", cf: 2, weight: 10, cost: 2000, rc: "-1/2"},
    {mount: "Internal Firmpoint Fixed Mount", cf: 5, weight: 10, cost: 1500, rc: "-1/2"},
    {mount: "Internal Hardpoint Fixed Mount", cf: 7, weight: 10, cost: 3000, rc: "-1/2"},
    {mount: "Pintle Mount", cf: 0, weight: 0, cost: 50, rc: "2"},
    {mount: "Small Turret", cf: 7, weight: 100, cost: 7500, rc: "-1/2"},
    {mount: "Mini-turret", cf: 6, weight: 25, cost: 5000, rc: "-1/2"}
];

const srRiggingVehicleGear = [
    {upgrade: "Datajack port", cost: 0, cf: 1, weight: 15},
    {upgrade: "Remote Control Gear", cost: 0, newObject: function() { return srRemoteControlGear(chosenVehicle)}},
    {upgrade: "Vehicle Control Gear", cf: 1, weight: 10, cost: 2500},
    {upgrade: "Remote Control Deck", cost: 0, weight: 0, newObject: function() { return srRemoteControlGear()}},
    {upgrade: "Remote Control ECCM", cost: 0, weight: 0, newObject: function() { return srRemoteControlGear()}}
];

function srRemoteControlGear(chosenVehicle){
    if(srRiggingVehicleGear.upgrade === "Remote Control Gear"){
        return chosenVehicle.body*2500;
    }else if(srRiggingVehicleGear.upgrade === "Remote Control Deck"){
        let randomRating = oseDieRoller(1, 6);
        let totalCost = randomRating*5000;
        return {upgrade: "Remote Control Deck", cost: totalCost, weight: 3}
    }else{
        let randomRating = oseDieRoller(1, 6);
        let newWeight = 0;
        let totalCost = 0;
        if(randomRating > 3){
            newWeight = 2;
            totalCost = randomRating*15000;
        }else{
            newWeight = 1.5;
            totalCost = randomRating*7500;
        }
        return {upgrade: "Remote Control ECCM", cost: totalCost, weight: newWeight}
    }
}

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