var experimentKeys = [];

var optFSJSON = $.ajax({
        url: "https://cdn.optimizely.com/json/8511187875.json",
        method: "GET"})
    	.done(function(responseText) {
            window.dataFile = JSON.parse(responseText);

            for (i = 0; i < dataFile.experiments.length; i++) {
                experimentKeys.push(dataFile.experiments[i].key);
            };
    });
