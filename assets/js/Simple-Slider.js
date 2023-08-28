$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('#sSwipe1', {
        loop: true,
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        nextButton: '#sRight1',
        prevButton: '#sLeft1',
        observer: true,
        observeParents: true
    });
    
});

$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('#sSwipe2', {
        loop: true,
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        nextButton: '#sRight2',
        prevButton: '#sLeft2',
        observer: true,
        observeParents: true
    });
    
});