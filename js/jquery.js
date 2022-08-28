$(document).ready(function () {
    $('.mobile').click(function () {
        $('nav .mainNav').slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() >= 585) {
            $('.mainNav').css('display', 'block');
        }
    });


    $("div#read1 .next").on("click", function (e) {

        var currentActiveDiv = $("div#read1 .div-shown");
        var nextActiveDiv = currentActiveDiv.next();

        if (nextActiveDiv.length === 0)
        {
            nextActiveDiv = $(".carousel-inner div").first();
        }

        currentActiveDiv.removeClass("div-shown").addClass("div-hidden").css("z-index", -10);
        nextActiveDiv.addClass("div-shown").removeClass("div-hidden").css("z-index", 20);
        $(".carousel-inner div").not([currentActiveDiv, nextActiveDiv]).css("z-index", 1);

        e.preventDefault();
    });

    $("div#read1 .previous").on("click", function (e) {

        var currentActiveDiv = $("div#read1 .div-shown");
        var nextActiveDiv = currentActiveDiv.prev();

        if (nextActiveDiv.length === 0)
        {
            nextActiveDiv = $(".carousel-inner div").last();
        }

        currentActiveDiv.removeClass("div-shown").addClass("div-hidden").css("z-index", -10);
        nextActiveDiv.addClass("div-shown").removeClass("div-hidden").css("z-index", 20);
        $(".carousel-inner div").not([currentActiveDiv, nextActiveDiv]).css("z-index", 1);

        e.preventDefault();
    });

    $("div#watch1 .next").on("click", function (e) {

        var currentActiveDiv = $("div#watch1 .div-shown");
        var nextActiveDiv = currentActiveDiv.next();

        if (nextActiveDiv.length === 0)
        {
            nextActiveDiv = $(".carousel-inner1 div").first();
        }

        currentActiveDiv.removeClass("div-shown").addClass("div-hidden").css("z-index", -10);
        nextActiveDiv.addClass("div-shown").removeClass("div-hidden").css("z-index", 20);
        $(".carousel-inner1 div").not([currentActiveDiv, nextActiveDiv]).css("z-index", 1);

        e.preventDefault();
    });

    $("div#watch1 .previous").on("click", function (e) {

        var currentActiveDiv = $("div#watch1 .div-shown");
        var nextActiveDiv = currentActiveDiv.prev();

        if (nextActiveDiv.length === 0)
        {
            nextActiveDiv = $(".carousel-inner1 div#watchDiv3");
        }
        currentActiveDiv.removeClass("div-shown").addClass("div-hidden").css("z-index", -10);
        nextActiveDiv.addClass("div-shown").removeClass("div-hidden").css("z-index", 20);
        $(".carousel-inner1 div").not([currentActiveDiv, nextActiveDiv]).css("z-index", 1);

        e.preventDefault();
    });



    $('.hidden-shown .one').click(function () {
        $('.oneDivCustomers').removeClass('div1-hidden');
        $('.twoDivCustomers').addClass('div1-hidden');
        $('.threeDivCustomers').addClass('div1-hidden');
        $('.fourDivCustomers').addClass('div1-hidden');
        $('.fiveDivCustomers').addClass('div1-hidden');
        $('.sixDivCustomers').addClass('div1-hidden');
        $('.hidden-shown .one').addClass('highlighteeed');
        $('.hidden-shown .two').removeClass('highlighteeed');
        $('.hidden-shown .three').removeClass('highlighteeed');
        $('.hidden-shown .four').removeClass('highlighteeed');
        $('.hidden-shown .five').removeClass('highlighteeed');
        $('.hidden-shown .six').removeClass('highlighteeed');
    });
    $('.hidden-shown .two').click(function () {
        $('.oneDivCustomers').addClass('div1-hidden');
        $('.twoDivCustomers').removeClass('div1-hidden');
        $('.threeDivCustomers').addClass('div1-hidden');
        $('.fourDivCustomers').addClass('div1-hidden');
        $('.fiveDivCustomers').addClass('div1-hidden');
        $('.sixDivCustomers').addClass('div1-hidden');
        $('.hidden-shown .one').removeClass('highlighteeed');
        $('.hidden-shown .two').addClass('highlighteeed');
        $('.hidden-shown .three').removeClass('highlighteeed');
        $('.hidden-shown .four').removeClass('highlighteeed');
        $('.hidden-shown .five').removeClass('highlighteeed');
        $('.hidden-shown .six').removeClass('highlighteeed');
    });
    $('.hidden-shown .three').click(function () {
        $('.oneDivCustomers').addClass('div1-hidden');
        $('.twoDivCustomers').addClass('div1-hidden');
        $('.threeDivCustomers').removeClass('div1-hidden');
        $('.fourDivCustomers').addClass('div1-hidden');
        $('.fiveDivCustomers').addClass('div1-hidden');
        $('.sixDivCustomers').addClass('div1-hidden');
        $('.hidden-shown .one').removeClass('highlighteeed');
        $('.hidden-shown .two').removeClass('highlighteeed');
        $('.hidden-shown .three').addClass('highlighteeed');
        $('.hidden-shown .four').removeClass('highlighteeed');
        $('.hidden-shown .five').removeClass('highlighteeed');
        $('.hidden-shown .six').removeClass('highlighteeed');
    });
    $('.hidden-shown .four').click(function () {
        $('.oneDivCustomers').addClass('div1-hidden');
        $('.twoDivCustomers').addClass('div1-hidden');
        $('.threeDivCustomers').addClass('div1-hidden');
        $('.fourDivCustomers').removeClass('div1-hidden');
        $('.fiveDivCustomers').addClass('div1-hidden');
        $('.sixDivCustomers').addClass('div1-hidden');
        $('.hidden-shown .one').removeClass('highlighteeed');
        $('.hidden-shown .two').removeClass('highlighteeed');
        $('.hidden-shown .three').removeClass('highlighteeed');
        $('.hidden-shown .four').addClass('highlighteeed');
        $('.hidden-shown .five').removeClass('highlighteeed');
        $('.hidden-shown .six').removeClass('highlighteeed');
    });
    $('.hidden-shown .five').click(function () {
        $('.oneDivCustomers').addClass('div1-hidden');
        $('.twoDivCustomers').addClass('div1-hidden');
        $('.threeDivCustomers').addClass('div1-hidden');
        $('.fourDivCustomers').addClass('div1-hidden');
        $('.fiveDivCustomers').removeClass('div1-hidden');
        $('.sixDivCustomers').addClass('div1-hidden');
        $('.hidden-shown .one').removeClass('highlighteeed');
        $('.hidden-shown .two').removeClass('highlighteeed');
        $('.hidden-shown .three').removeClass('highlighteeed');
        $('.hidden-shown .four').removeClass('highlighteeed');
        $('.hidden-shown .five').addClass('highlighteeed');
        $('.hidden-shown .six').removeClass('highlighteeed');
    });
    $('.hidden-shown .six').click(function () {
        $('.oneDivCustomers').addClass('div1-hidden');
        $('.twoDivCustomers').addClass('div1-hidden');
        $('.threeDivCustomers').addClass('div1-hidden');
        $('.fourDivCustomers').addClass('div1-hidden');
        $('.fiveDivCustomers').addClass('div1-hidden');
        $('.sixDivCustomers').removeClass('div1-hidden');
        $('.hidden-shown .one').removeClass('highlighteeed');
        $('.hidden-shown .two').removeClass('highlighteeed');
        $('.hidden-shown .three').removeClass('highlighteeed');
        $('.hidden-shown .four').removeClass('highlighteeed');
        $('.hidden-shown .five').removeClass('highlighteeed');
        $('.hidden-shown .six').addClass('highlighteeed');
    });
});