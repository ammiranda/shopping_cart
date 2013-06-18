/* Input field appending list */

$(document).ready(function(){
	$(document).keypress(function(e) {
	var value = $('#itemName').html($('input:textbox').val());
	$('#theList').append(value);
	
	})});