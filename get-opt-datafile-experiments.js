//Config Details
var projectId = "11372200340";
var dataFileURL = "https://cdn.optimizely.com/json/" + projectId + ".json";
var experimentKeys = [];

//Pulls in JS SDK
$("body").append('<script src="https://unpkg.com/@optimizely/optimizely-sdk/dist/optimizely.browser.umd.js"></script>');

//Grabs project datafile, pulls out experimentKeys
$.ajax({
    url: dataFileURL,
    method: "GET"})
    .done(function(responseText) {
        window.dataFile = JSON.parse(responseText);
        
        for (i = 0; i < dataFile.experiments.length; i++) {
            experimentKeys.push(dataFile.experiments[i].key);
        };
    });