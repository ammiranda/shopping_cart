/* Input field appending list */

$(document).ready(function(){
	$('#errormsg').hide();
	$('#submit').click(function(e) { 
		e.preventDefault();
		var item = $('#itemName').val();
		if (item == "" || item == " ") {
			$('#errormsg').show();
			}
		else {
		$('#theList').append('<li class="item"><input type="checkbox" style="margin-right: 10px;"><span class="item2">'+ item +'</span></li>'); 
		$('#itemName').val("");
		$('#errormsg').hide();

                $('#theList li input').last().change(function(){
                  $(this).siblings().toggleClass('strike');
                })};
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
