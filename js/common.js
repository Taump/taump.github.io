$(function () {

    // Фильтер в левом меню
    var range = $("#range");
    var minRange = range.attr('data-min');
    var maxRange = range.attr('data-max');
    var filter__min = $(".filter__min");
    var filter__max = $(".filter__max");
    filter__min.val(minRange);
    filter__max.val(maxRange);
    if (filter__min < 0) {
        filter__min = 0;
    }
    if (filter__max < 0) {
        filter__max = 0;
    }

    range.slider({
        range: true,
        max: maxRange,
        values: [minRange, maxRange],
        change: function (event, ui) {
            var first = range.slider("values", 0);
            var second = range.slider("values", 1);
            console.log(first, second);
            filter__min.val(first);
            filter__max.val(second);
        }
    });

    // // Аккордеон в левом меню
    $('.filter__category .filter__category-item ul').toggle();
    $('.filter__category .filter__category-item .category__title').click(function () {
        $(this).parent().find('ul').slideToggle();
    });

    // $('.mobail-menu').toggle();

    $('#menu_active').click(function () {
        $('.mobail-menu').slideToggle();
    });
    $('#content__category-btn').click(function () {
        $('.content__category').slideToggle();
    });

    $('.banner__close').click(function () {
        $('.banner__close').parent().hide();
    });



    // Magnific popup
    $('.certificate__item').magnificPopup({
        type: 'image'
        // other options
    });


    // звезды
    var stars = $('.stars');
    stars.barrating({
        theme: 'fontawesome-stars'
    });
    var starsCol = stars.attr('data-rating');
    stars.barrating('set', starsCol);

    // Goods slider

    var main_image = $('.slider__main-image img');
    var slidelist = $('.slider__list li');
    main_image.attr("src", slidelist.find('img').attr("src"));
    slidelist.click(function () {
        var clickSRC = ($(this).find('img').attr("src"));
        main_image.attr("src", clickSRC);
    })

});

