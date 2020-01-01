const scrollToTopBtn = $('#scrollToTopBtn');

$(window).scroll(function(){
    if($(window).scrollTop() >= 530){
        scrollToTopBtn.addClass('show');
    } else {
        scrollToTopBtn.removeClass('show');
    }
});

scrollToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
})
