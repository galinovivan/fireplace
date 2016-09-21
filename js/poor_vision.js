$(document).ready(function() {
    if ($.cookie("poor_vision") == "on") {
       $('html').addClass('poor_vision');
        $('#poorVision').hide();
        $('#poorPanel').show();
        if ($.cookie("fonts") == "small") {
            toSmallSize();
        }
        if ($.cookie("fonts") == "medium") {
            toMediumSize();
        }
        if ($.cookie("fonts") == "large") {
           toLargeSize();
        }
    } else if ($.cookie("poor_vision") == "off" ||  $.cookie("poor_vision") == undefined) {
        $('#poorPanel').hide();
        $('#poorVision').show();
    }
    var htmlPage = $('html');
    var body = $('body');

    $('#poorVision').click(function(event) {
            htmlPage.addClass('poor_vision');
           $.cookie("poor_vision", "on");
            $(this).hide();
           $('#poorPanel').show();
           event.preventDefault();
    });
    $('#normalVision').click(function(event) {
        htmlPage.removeClass('poor_vision');
        $.cookie("poor_vision", "off");
        $('#poorPanel').hide();
        $('#poorVision').show();
        event.preventDefault();
    });
    $('#largeSize').click(function(event) {
        $.cookie("fonts", "large");
       toLargeSize();
        event.preventDefault();
    });
    $('#mediumSize').click(function(event) {
        $.cookie("fonts", "medium");
        toMediumSize();
        event.preventDefault();
    });

    $('#smallSize').click(function(event) {
        $.cookie("fonts", "small");
        toSmallSize();
        event.preventDefault();
    });

    $('.resize_btn').click(function(event) {
       $('.resize_btn').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('.contrast_btn').click(function(event) {
        $('.contrast_btn').removeClass('active');
        $(this).addClass('active');
        event.preventDefault(event);
    });









    function toLargeSize() {
        var body = $('body');
        body.removeClass();
        body.addClass('large_size');
    }
    function toMediumSize() {
        var body = $('body');
        body.removeClass();
        body.addClass('medium_size');
    }

    function toSmallSize() {
        var body = $('body');
        body.removeClass();
    }
    function changeBackground(colorClass) {
        var body = $('body');
        colorClass = $.cookie("color");
        sizeClass = $.cookie("fonts");
        body.addClass(colorClass);
    }
});
