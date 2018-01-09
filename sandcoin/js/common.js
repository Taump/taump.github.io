$(function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: "#next",
        scrollSpeed: 900
    });
    $("a[rel='m_PageScroll2id']").click(function () {
        $.magnificPopup.close();
    });
    var timer = new Timer();
    timer.start({countdown: true, precision: 'seconds', startValues: {seconds: 60 * 60 * 24 * 4}});
    timer.addEventListener('secondsUpdated', function (e) {
        $('.days').html(timer.getTimeValues().days);
        $('.hours').html(timer.getTimeValues().hours);
        $('.minutes').html(timer.getTimeValues().minutes);
        $('.seconds').html(timer.getTimeValues().seconds);
    });

    // $('.lang-list').hide();
    // $('.lang-select').click(function (event) {
    //     var counter = 0;
    //     if(counter==0){
    //         event.preventDefault();
    //         $('.lang-list').show();
    //         counter=1;
    //     } else {
    //         event.preventDefault();
    //         $('.lang-list').hide();
    //         counter=0;
    //     }
    // });

    // $('.lang-select').click(function (event) {
    //
    // });

    // $('.lang-select').mouseenter(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').show();
    // });
    //
    // $('.lang-select').mouseleave(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').hide();
    // });
    // $('.lang-list').mouseenter(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').show();
    // });
    // $('.lang-list').mouseleave(function (event) {
    //     event.preventDefault();
    //     $('.lang-list').hide();
    // });

    $('.popup-content').magnificPopup({
        type: 'inline',
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
            }
            // e.t.c.
        }
    });
    $('.popup-reg').magnificPopup({
        type: 'inline',
    });
    $('.popup-login').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
            }
            // e.t.c.
        }
    });
    $('.popup-reset').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                history.pushState(null, document.title, window.location.pathname);
            },
            close: function () {
                // Will fire when popup is closed
            }
            // e.t.c.
        }
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    $('.parallax-window').parallax({
        speed: 0.2,
        bleed: 70

    });

    $(".header_bottom h1").animated("fadeInUp", "");
    $(".header_bottom p").animated("fadeInUp", "");
    $(".header_bottom h4").animated("fadeInUp", "");
    $(".first .video").animated("fadeIn", "");
    $(".first .title").animated("fadeInUp", "");
    $(".first p").animated("fadeIn", "");
    $(".first .btn").animated("fadeIn", "");
    $(".advantages .title").animated("fadeInUp", "");
    $(".advantages .item").animated("fadeIn", "");
    $(".roadmap .title").animated("fadeInUp", "");
    $(".roadmap .subtitle").animated("fadeInUp", "");
    $(".roadmap .item").animated("fadeIn", "");
    $(".roadmap .dec").animated("fadeInUp", "");
    $(".roadmap .btn").animated("fadeInDown", "");
    $(".info .left").animated("fadeIn", "");
    $(".info .right").animated("fadeIn", "");
    $(".team .title").animated("fadeInUp", "");
    $(".team .team__item").animated("fadeInUp", "");
    $(".media .title").animated("fadeInUp", "");
    $(".media .item").animated("fadeIn", "");
    $(".option .title").animated("fadeInUp", "");
    $(".option .dec").animated("fadeInUp", "");
    $(".option .btn").animated("fadeIn", "");
    $(".contact .title").animated("fadeInUp", "");
    $(".contact .btn").animated("fadeIn", "");
    $(".contact .subtitle").animated("fadeInUp", "");
    $(".contact .email").animated("fadeIn", "");
    $(".contact .phone").animated("fadeIn", "");
    $(".contact .social-links").animated("fadeIn", "");
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    var headerH =  $("header").css('height');
    var header_topH = $(".header_top").css('height');
    var header_bottomH = $(".header_bottom").css('height');

    var margin = ((headerH.substr(0, headerH.length - 2) - header_topH.substr(0, header_topH.length - 2)) / 2) - ((header_bottomH.substr(0, header_bottomH.length - 2) / 2));
    var marginPx = margin - 20 + 'px';
  //  $(".header_top").css('margin-bottom',marginPx);
});

$(window).resize(function () {
    var headerH =  $("header").css('height');
    var header_topH = $(".header_top").css('height');
    var header_bottomH = $(".header_bottom").css('height');

    var margin = ((headerH.substr(0, headerH.length - 2) - header_topH.substr(0, header_topH.length - 2)) / 2) - ((header_bottomH.substr(0, header_bottomH.length - 2) / 2));
    var marginPx = margin - 20 + 'px';
  //  $(".header_top").css('margin-bottom',marginPx);
});