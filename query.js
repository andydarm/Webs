$(document).ready(function(){
    $("body").prepend("<a href='##'' class='back-to-top'><i class='fa fa-chevron-up'></i></a>");

    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('fast').css("display","inline-table");
		} else {
			$('.back-to-top').fadeOut('fast');
		}
	});

    $("a.back-to-top").click(function(){
    	$("body").animate({
    		scrollTop: 0
    	}, 1000)
    });

    $(".slider").hover(
  function() {
    $(".sliderbtn").fadeIn('slow').css("display","inline-block");
  },function(){
  	$(".sliderbtn").fadeOut('slow');
  });
 
});