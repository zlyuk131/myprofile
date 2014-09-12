$(document).ready(function(){
	$(".design").on("click", function(){
		$(this).parent().find(".drop-down").slideToggle("slow");
	});
});