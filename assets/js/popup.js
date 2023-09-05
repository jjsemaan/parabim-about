$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});

$(document).ready(function () {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            open: function () {
                // Get the image source and set it in the popup-content
                var imageSrc = $(this.currItem.el).find('img').attr('src');
                $('#popup-image').attr('src', imageSrc);
            }
        }
    });
});