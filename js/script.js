$(document).ready(function() {
    // адаптивное меню
    initHideELement($('#topNav'), $('#navToggle'), $('#navClose'), 'active');
   
    function initHideELement(element, openToggle, closeToggle, newClass) {
        function initCollapse() {
        if (element.hasClass(newClass)) {
            element.removeClass(newClass);
        } else {
            element.addClass(newClass);
            };
        }
        openToggle.click(function(event) {
            initCollapse();
            event.preventDefault();
        });
        openToggle.on('tap', function(event)  {
            initCollapse();
            event.preventDefault();
        });
        if (closeToggle != false) {
            closeToggle.click(function(event) {
                initCollapse();
                event.preventDefault();
            });
            closeToggle.on('tap', function(event) {
                initCollapse();
                event.preventDefault(event);
            });
        };
    }
});