/* Input field appending list */

$(document).ready(function(){
	$('#submit').click(function(e) { 
		e.preventDefault();
		var item = $('#itemName').val();
		console.log(item);
		$('#theList').append('<li class="item"><input type="checkbox" class="check"><span class="item2">'+ item +'</span></li>'); 
		$('#itemName').val("");

                $('#theList li input.check').last().change(function(){
                  $(this).siblings().toggleClass('strike');
                });
        });

	/* Enables Sorting of li's */

	$('#theList').sortable({
		}).disableSelection();

	/* Removes Checked Items */

	$('#remove').click(function(e) {
		e.preventDefault();
		$('#theList li .strike').each(function () {
                        $(this).parent().remove();
		});
		});
	});