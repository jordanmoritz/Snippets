//Opt Project Config Details
var projectId = "11372200340";
var dataFileURL = "https://cdn.optimizely.com/json/" + projectId + ".json";
var sdkURL = "https://unpkg.com/@optimizely/optimizely-sdk/dist/optimizely.browser.umd.js";

//Appends script for SDK to DOM
var sdkTag = document.createElement("script");
sdkTag.setAttribute("src", sdkURL);
document.querySelector("body").appendChild(sdkTag);

//Functions
function parseResponse(responseText) {
    window.responseJSON = JSON.parse(responseText);
}

function loadResource(url, method, callback, state) {
    var xhrClient = new XMLHttpRequest;
    
    if (typeof(callback) !== "undefined") {
        xhrClient.onreadystatechange = function() {
            if (xhrClient.readyState === state) {
                callback(xhrClient.responseText);
            }
        }
    }
    
    xhrClient.open(method, url);
    xhrClient.send();
}

function getExperimentKeys(dataFile) {
    var experimentKeys = [];
    
    for (i = 0; i < dataFile.experiments.length; i++) {
            experimentKeys.push(dataFile.experiments[i].key);
    }
    
    return experimentKeys;
}

loadResource(dataFileURL, "GET", parseResponse, 4);

//Experiencing timing issues
//Planning to refactor this to utilize promises
var experimentKeys = getExperimentKeys(responseJSON);

var optFSClient = optimizelyClient.createInstance({datafile: responseJSON});