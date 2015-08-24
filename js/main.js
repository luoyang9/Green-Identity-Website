//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function()
{    
	//mobile jumbotron height
	if($(document).width() < 979)
	{
	    var screenHeight = $(window).height();
	    $(".jumbotron").css("height", screenHeight + "px");

	    $(".jumbotron").css("padding-top", "60px");

	    $(".navbar-toggle").mouseover(function(){
	    	$(".icon-bar").css("backgroundColor", "black");
	    }).mouseout(function(){
	    	$(".icon-bar").css("backgroundColor", "#888");
	    });
	}
	else
	{
		//navbar scroll change
		var scroll_start = 0;
		var startchange = $('#startchange');
		var offset = startchange.offset();
		if (startchange.length)
		{
			$(document).scroll(function() 
			{ 
				scroll_start = $(this).scrollTop();
				if(scroll_start > offset.top) 
				{
					TweenLite.to(".navbar", 0.5, {backgroundColor:"rgba(256, 256, 256, 0.9)"});

					$(".navbar-default .navbar-nav > li > a").css('color', '#525252');

					$(".navbar-default .navbar-nav > li > a").mouseover(function() {
					  $(this).css("color","black")
					}).mouseout(function(){
					  $(this).css("color", "#525252");
					});

					$(".navbar-default .navbar-nav > li > a").focus(function(){
					  $(this).css("color", "black");
					}).blur(function(){
					  $(this).css("color", "#525252");
					});

					$(".navbar .navbar-brand").css("color", "black");
				} 
				else 
				{
					TweenLite.to(".navbar", 0.5, {backgroundColor:"transparent"});

					$(".navbar-default .navbar-nav > li > a").css('color', 'white');

					$(".navbar-default .navbar-nav > li > a").mouseover(function() {
					  $(this).css("color","#333")
					}).mouseout(function(){
					  $(this).css("color", "white");
					});

					$(".navbar-default .navbar-nav > li > a").focus(function(){
					  $(this).css("color", "#333");
					}).blur(function(){
					  $(this).css("color", "#333");
					});

					$(".navbar .navbar-brand").css("color", "white");

					$(".navbar .navbar-brand").mouseover(function() {
					  $(this).css("color","#333")
					}).mouseout(function(){
					  $(this).css("color", "white");
					});
				}
			});
		}
	}
});