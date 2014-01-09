
function htmlEscape(str) {   			// HTML escaping function to prevent cross site scripting attacks
    return String(str)                  // Found at this link: http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
};

$(document).ready(function(){
	$('#errormsg').hide();
	$('#submit').click(function(e) { 
		e.preventDefault();
		var item = $('#itemName').val();  // Grabs user input from the text field and stores it in item
		item = htmlEscape(item);          // Sanitizing user input to prevent cross site scripting
		item = $.trim(item);  			  // Removes both beginning and trailing whitespace from the input
		if (item == "") {				  // Checks if user input is simply whitespace and generates error message if true

			$('#errormsg').show();        // Reveals the error message element to the user

			 }

		else {

		$('#theList').append('<li class="item"><input type="checkbox" style="margin-right: 10px;"><span class="item2">' + item + '</span></li>'); 
		$('#itemName').val("");
		$('#errormsg').hide();  // Hides error message upon successful input

        $('#theList li input').last().change(function() {  // Function that adds strike through on checkbox click

            $(this).siblings().toggleClass('strike');   
                
            });
        }
    });

	$('#theList').sortable().disableSelection();  // Enables the sorting of the list items 

	$('#remove').click(function(e) {              // Enables users to remove checked list items

		e.preventDefault();

		$('#theList li .strike').each(function () {

            $(this).parent().remove();

			});
		});
	});
