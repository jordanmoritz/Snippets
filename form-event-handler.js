//Array that stores form progress for form abandonment event
var formProgress = [];

//Config object for events that need handlers created
var eventDetails = {
    "textField": {"selector": "input[data-name][type=text]",
                  "event": "keydown",
                  "event_category": "Form Progress",
                  "event_action": "Field Completed"},
//                "event_label": this.getAttribute('data-name')},

    "radioButton": {"selector": "input[data-name][type=text]",
                  "event": "click",
                  "event_category": "Form Progress",
                  "event_action": "Field Completed"}
//                "event_label": this.getAttribute('data-name')},}
};

//Event Handler generator
//Utilizes eventDetails config to register handlers
for (var e in eventDetails) {
    $(eventDetails[e]["selector"]).one(eventDetails[e]["event"], function () {
        var event_label = this.getAttribute('data-name');
        var eventDataObject = buildEventDataObject("Form Progress", "Field Completed", event_label);
        utag.link(eventDataObject, null, [170]);
        formProgress.push(event_label);
    });
};

//Builds event object to accompany each event
function buildEventDataObject(event_category, event_action, event_label) {
    var eventDataObject = {
        "event_category": event_category,
        "event_action": event_action,
        "event_label": event_label,
        "alley_code": utag.data['alley_code'],
        "page_design": utag.data['page_design'],
        "page_version": utag.data['page_version'],
        "offer_code": utag.data['offer_code'],
        "offer_name": utag.data['offer_name'],
        "page_type": utag.data['page_type'],
        "page_step": utag.data['page_step'],
    };
    
    return eventDataObject;
};

//The unload event handler that triggers the form abandonment event
//Should be built further to ensure the unload event isn't due to a submission
window.addEventListener('beforeunload', function () {
    var event_label = formProgress.join(" > ");
    var eventDataObject = buildEventDataObject("Form Progress", "Form Abandonment", event_label);
    utag.link(eventDataObject, null, [170]);
});