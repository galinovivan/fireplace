"use strict"

$(document).ready(function() {
    var htmlPage = $('html');
    var body = $('body');
    var poorBtn = $('#poorVision');
    var normalBtn = $('#normalVision');
    var poorPanel = $('#poorPanel');
    var resizeBtn = $('.resize_btn');
    var colorBtn = $('.contrast_btn');
    var largeSize = $('#largeSize');
    var mediumSize = $('#mediumSize');
    var smallSize = $('#smallSize');
    var blueBtn = $('#blue');
    var blackBtn = $('#black');
    var whiteBtn = $('#white');


if (!navigator.cookieEnabled) {
    alert('');
}
    else {

    if (getCookie("poor_vision") == "on") {
        poorBtn.hide();
        poorPanel.show();
        htmlPage.addClass('poor_vision');
        toChangeTemp();
    }
    else if (getCookie("poor_vision") == "off" || getCookie("poor_vision") == undefined) {
        poorPanel.hide();
        poorBtn.show();
        htmlPage.removeClass('poor_vision');
    }

    poorBtn.click(function (event) {
        htmlPage.addClass('poor_vision');
        setCookie("poor_vision", "on", {path: "/"});
        $(this).hide();
        poorPanel.show();
        event.preventDefault();
    });
    normalBtn.click(function (event) {
        htmlPage.removeClass('poor_vision');
        setCookie("poor_vision", "off", {path: "/"});
        poorPanel.hide();
        poorBtn.show();
        event.preventDefault();
    });


    largeSize.click(function () {
        setCookie("fonts", "large_size", {path: "/"});
    });
    mediumSize.click(function () {
        setCookie("fonts", "medium_size", {path: "/"});
    });
    smallSize.click(function () {
        setCookie("fonts", "small_size", {path: "/"});
    });

    blackBtn.click(function () {
        setCookie("color", "black_body", {path: "/"});
    });
    blueBtn.click(function () {
        setCookie("color", "blue_body", {path: "/"});
    });
    whiteBtn.click(function () {
        setCookie("color", "white_body", {path: "/"});
    });


    resizeBtn.click(function (event) {
        resizeBtn.removeClass('active');
        $(this).addClass('active');
        toChangeTemp();
        event.preventDefault();
    });
    colorBtn.click(function (event) {
        colorBtn.removeClass('active');
        $(this).addClass('active');
        toChangeTemp();
        event.preventDefault();
    });
}
    // изменение шаблона
    function toChangeTemp() {
        var fonts = getCookie("fonts");
        var color = getCookie("color");
        body.removeClass();
        body.addClass(fonts);
        body.addClass(color);
    }



// получить cookie
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

// сохранить cookie
    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);
        var updateCookie = name + "=" + value;

        for (var propName in options) {
            updateCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updateCookie + "=" + propValue;
            }
        }
        document.cookie = updateCookie;
    }
});


