function elementInView(elem) {
    var elemDetails = elem.getBoundingClientRect();
    var elemTop = elemDetails.top;
    var elemBottom = elemDetails.bottom;
    elemVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return elemVisible;
}

elemViewed = false
$(window).scroll(function() {
	if (!elemViewed) {
		var inView = elementInView($("div.kyloRen-form")[0]);
		if (inView) {
			elemViewed = true;
			utag_data.virtual_pageview = utag_data['dom.url'].replace('/de', '/de/form')
			utag_data.page_step = "Form 1";
			utag.view(utag_data);
        };
    };
});