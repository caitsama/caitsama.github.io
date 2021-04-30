$(window).on("load",function(){
	$(".pre-loader").fadeOut("slow");
});
$(document).ready(function() {
	$('#fancyscroll').fullpage({
		//options here
		autoScrolling:false,
		scrollHorizontally: true,
	});

	$('#popup-menu').click(function(){
		$('#menu').toggle("slow");
		});
});

  
