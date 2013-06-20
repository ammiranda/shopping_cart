/* Input field appending list */

$(document).ready(function(){
	$('input[type="submit"]').click(function () { 
		var item = $('#itemName').val();
		$('#theList').append('<li>'item'</li>'); 
		console.log(item);
				});
	
	
	
	});