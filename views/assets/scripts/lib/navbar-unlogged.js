$(document).ready(function() {
    $('.dropdown-toggle').on('click', function(){
   		$("div.dropdown-form").slideToggle(150);
   		$("div.spacing").slideToggle(150);
    });
});