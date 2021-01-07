// 自行加入的JS請寫在這裡

$(function() {
	 //燈箱slick+lightBox組合
     $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }]
    });
     $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });


//mpSlider
$('.mpSlider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'ease'
});

//

// 請放置customize.js
// 廣告輪播
$('.cpimglist').slick({
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
        }
    },{
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }
    }]
});



});