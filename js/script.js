var insertMessage = "<p class='inserted-paragraph'>Please click to expand or minimize for more information.</p>";

$(document).ready(function(){
	//drops down menu on click 
	$(".design").on("click", function(){
		$(this).parent().find(".drop-down").slideToggle("slow");
		//removes instruction message when .design div is clicked
		if ($(this).parent().find(".inserted-paragraph")) {
			$(".inserted-paragraph").remove();
		} 
	});
	//change mouse pointer to a link style when hover over .design div. 
	$(".design").on("mouseenter", function(){
		$(this).css('cursor','pointer');
		//inserts paragraph with message when even is triggered 
		if ($(this).parent().find(".inserted-paragraph")) {
			$(".inserted-paragraph").remove();
			//alert("Triger test");
		}
		else {
			$(insertMessage).insertBefore($(this).parent().find(".drop-down"));
		}
	//undo all action of the previous event	
	}).on("mouseleave",function(){
		$(this).css('cursor','auto');
		$(".inserted-paragraph").remove();
	});
});