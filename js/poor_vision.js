$(document).ready(function() {
    if ($.cookie("cecutientCookie") == "on") {
       $('html').addClass('poor_vision');
        if ($.cookie("fonts") == "small") {
            $('body').addClass('small_size');
        }
        if ($.cookie("fonts") == "medium") {
            $('body').addClass('medium_size');
        }
        if ($.cookie("fonts") == "large") {
            $('body').addClass('large_size');
        }
    }
    var html = $('html');
    var body = $('body');
  
});