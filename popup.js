chrome.tabs.query({}, function(tab_array) {
	num_tabs = tab_array.length;
	var list = '';
	for (var i=0; i < num_tabs; i++){
		var tab = tab_array[i];
		list = list + "<li>" + tab.title + ": " + tab.url + "</li>"
	};
	document.getElementById("tablist").innerHTML = list;
});
