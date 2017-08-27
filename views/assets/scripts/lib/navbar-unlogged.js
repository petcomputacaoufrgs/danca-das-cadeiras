// Check in the jQuery object contains the classes that it recieves as arguments
// [arguments]/[classNames] : String -> names of the classes you want to check if the jQuery object has
// returns true if all classes are in the object, false otherwise

$.prototype.containsClasses = function(){
	var classNames = arguments;
	if(classNames === undefined)
		return undefined;

	var classes = $(this).attr("class").split(' ');
	for(var j = 0; j < classNames.length; j++){
		var found = false;
		for(var i = 0; i < classes.length; i++) 
			if(classes[i] === classNames[j])
				found = true;

		if(!found)
			return false;
	}
	return true;
}


var time = 150; // time in ms untill slide is complete.

var dropdownButton 		= $('.navbar-login.dropdown-toggle'),
	dropdownForm 		= $("div.dropdown-form"),
	dropdownFormSpacing	= $("div.spacing");


$(document).ready(function(){

	$('body').click(function(){
		dropdownForm.slideUp(time);
		dropdownFormSpacing.slideUp(time);	
		dropdownButton.removeClass("open");
	});

    dropdownButton.click(function(event){
    	$(this).toggleClass("open");

   		dropdownForm.slideToggle(time);
   		dropdownFormSpacing.slideToggle(time);
   		
   		if($(this).containsClasses("open"))
   			$("form.dropdown-form input:first-of-type").trigger("focus");

    	event.stopPropagation(); // so it doesnt count as a click in the body
    });
    
    dropdownForm.click(function(event){

    	event.stopPropagation();
    });

});

