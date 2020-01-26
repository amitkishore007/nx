$(document).ready(function () {
    var totalItems = $('.carousel-item').length;
    var currentIndex = $('.carousel-inner .carousel-item.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        currentIndex = $('.carousel-inner .carousel-item.active').index() + 1;
        $('.num').html('' + currentIndex + '/' + totalItems + '');
        interval: 2000
    });




    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });

    $(document).on('click', '.drawerNav .menuIcon', function () {
        if ($(".drawerCollapse").is(':visible')) {
            $(".drawerCollapse").animate({ width: 'hide' });
            $(this).parents('.mainDiv').removeClass("active");
            //$(this).parents('.mainDiv').animate({"margin-left": '0'});
        }
        else {
            $(".drawerCollapse").animate({ width: 'show' });
            $(this).parents('.mainDiv').addClass("active");
            //$(this).parents('.mainDiv').animate({"margin-left": '64'});

        }
    });
    $(document).on('click', '.navOverlay', function () {
        $(this).parent(".drawerCollapse").animate({ width: 'hide' });
        $(this).parents('.mainDiv').removeClass("active");
    });
    $(document).on('click', '.defaultCheckbox .form-check-inline', function () {
        if ($(this).find("input").is(':checked')) {
            $(this).addClass('dBluegradient');
        } else {
            $(this).removeClass('dBluegradient');
        }
    });

    $(document).on('click', '.custom-check .form-check-inline', function () {
        if ($(this).find("input").is(':checked')) {
            $(this).addClass('lighDarkBluegradient');
        } else {
            $(this).removeClass('lighDarkBluegradient');
        }
    });
    $(document).on('click', '.custom-check .form-radio-inline', function () {
        $(this).parents(".custom-check").find(".lighDarkBluegradient").removeClass('lighDarkBluegradient');
        if ($(this).find("input").is(':checked')) {
            $(this).addClass('lighDarkBluegradient');
        } else {
            $(this).removeClass('lighDarkBluegradient');
        }
    });
    $('.row-fluid').find(".collapse.show").parents(".row-fluid").addClass("activeTab");
    //Radio to select box start
    // Default dropdown action to show/hide dropdown content
    $('.YoBusCorStr .js-dropp-action').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('js-open');
        $(this).parent().next('.YoBusCorStr .dropp-body').toggleClass('js-open');
    });
    // Using as fake input select dropdown
    $('label').click(function () {
        $(this).addClass('js-open').siblings().removeClass('js-open');
        $('.YoBusCorStr .dropp-body,.YoBusCorStr .js-dropp-action').removeClass('js-open');
    });
    // get the value of checked input radio and display as dropp title
    $('.YoBusCorStr input[name="busicorpstru"]').change(function () {
        var value = $("input[name='busicorpstru']:checked").val();
        $('.js-value').text(value);
    });
    //Radio to select box end
    if (jQuery(window).width() <= 1280) {
        $('.Whatwehaveyou,.WhyChooseUs').addClass('carousel owl-carousel');
        $('.Whatwehaveyou .col-12,.WhyChooseUs .col-12').each(function() {
            $(this).addClass('item');
        });
        $(".Whatwehaveyou,.WhyChooseUs").owlCarousel({
            loop:true,
            margin:10,
            navigation:false,
            //items:2,
            responsiveClass:true,
            responsive: {
                0: {
                    items:1,
                    
                    nav: false,
                    autoHeight: true,
                    dots: true
                },
                480: {
                    items:1,
                    navigation: false,
                    nav: false,
                    autoHeight: true,
                    dots: true
                },
                1024: {
                    option : 1,
                    navigation: false,
                    nav: false,
                    autoHeight: true,
                    dots: true
                }
            }
        });
    }

});