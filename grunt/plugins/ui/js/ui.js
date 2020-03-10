/* UI */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.selectpicker').selectpicker();

    $(".js-range").each(function (index) {
        var from = $(this).find('.js-from');
        var to = $(this).find('.js-to');
        var slider = $(this).find('.js-slider');

        slider.ionRangeSlider({
            onChange: function (data) {
                from.val(data.from);
                to.val(data.to);
            }
        });

        this_range = slider.data("ionRangeSlider");

        from.on('change', function () {
            this_range.update({
                from: from.val()
            });
        });

        to.on('change', function () {
            this_range.update({
                to: to.val()
            });
        });
    });
});