$("li").sort(function(a, b) {
	var aText = $(a).text(), bText = $(b).text();
	return aText < bText ? -1 : aText > bText ? 1 : 0;
}).appendTo('ul');

