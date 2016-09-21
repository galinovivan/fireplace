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
    var storage = window.sessionStorage;




    if (storage["poor_vision"] == "on") {
        poorBtn.hide();
        poorPanel.show();
        htmlPage.addClass('poor_vision');
        toChangeTemp();
    }
    else if (storage["poor_vision"] == "off" || storage["poor_vision"] == undefined) {
        poorPanel.hide();
        poorBtn.show();
        htmlPage.removeClass('poor_vision');
    }

    poorBtn.click(function (event) {
        htmlPage.addClass('poor_vision');
        storage.setItem("poor_vision", "on");
        $(this).hide();
        poorPanel.show();
        event.preventDefault();
    });
    normalBtn.click(function (event) {
        htmlPage.removeClass('poor_vision');
        storage.setItem("poor_vision", "off");
        poorPanel.hide();
        poorBtn.show();
        event.preventDefault();
    });


    largeSize.click(function () {
        storage.setItem("fonts", "large_size");
    });
    mediumSize.click(function () {
        storage.setItem("fonts", "medium_size");
    });
    smallSize.click(function () {
        storage.setItem("fonts", "small_size");
    });

    blackBtn.click(function () {
        storage.setItem("color", "black_body");
    });
    blueBtn.click(function () {
        storage.setItem("color", "blue_body");
    });
    whiteBtn.click(function () {
        storage.setItem("color", "white_body");
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
    // изменение шаблона
    function toChangeTemp() {
        var fonts = storage["fonts"];
        var color = storage["color"];
        body.removeClass();
        body.addClass(fonts);
        body.addClass(color);
    }
// получить cookie


// сохранить cookie

});


