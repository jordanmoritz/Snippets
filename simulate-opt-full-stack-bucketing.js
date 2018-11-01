//Instantiates FS client using a datafile
var optFSClient = optimizelyClient.createInstance({datafile: dataFile});

//Simulation config details
var expKEy = "AA_Test";
var simulations = 100;
var results = [];

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
}

//Simple function to simulate splitting
function simulateFullStackSplit(optClient, experimentKey, simulations, results) {
    for (i = 0; i < simulations; i++) {
        var variation = optClient.getVariation(experimentKey, randInt(0, 100000000).toString());
        results.push(variation);
    }
    return results;
}

simulateFullStackSplit(optFSClient, expKEy, simulations, results);

//Unpack results
//Should turn into a function that accepts variation keys
var control = 0;
var variation = 0;

for (var i in results) {
    if (results[i] == "Control") {control += 1}
    if (results[i] == "Variation") {variation += 1}
}

console.log("Control:", control, "-", "Variation:", variation);