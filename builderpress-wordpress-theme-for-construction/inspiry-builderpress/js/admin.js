(function ($) {
    "use strict";
    $(document).ready(function () {
        var widgetTitle = $('.widget-top h3');
        var targetTitle = 'BuilderPress';
        $.each(widgetTitle, function (i, val, element) {
            var title = val.innerText;
            if (title.indexOf(targetTitle) !== -1) {
                val.setAttribute("style", "background-color: #ffd800; color: #1a1a1a");
            }
        });
    });
})(jQuery);