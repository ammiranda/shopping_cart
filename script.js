/* Input field appending list */

$(document).ready(function(){
	$('#submit').click(function(e) { 
		e.preventDefault();
		var item = $('#itemName').val();
		console.log(item);
		$('#theList').append('<li class="item"><input type="checkbox" class="check"><span class="item2">'+ item +'</span></li>'); 
		$('#itemName').val("");
				});
	$('input.check').change(function(){
		$('.item2').siblings().toggleClass('strike');
	});
	
	/* Enables Sorting of li's */
	
	$('#theList').sortable({
		}).disableSelection();
		
	/* Removes Checked Items */
		
	$('#remove').submit(function(event) {
		event.preventDefault();
		$('#theList li').each(function () {
			if($(this).find('.item2').hasClass('strike')){
				$(this).remove();
				}
		
		});
		});
	});