/*$('#date-now').text(new Date().getFullYear());
$('.menu li a').click(function () {
    $(this).closest('.menu').find('.active').removeClass('active');
    $(this).addClass('active');
})
$('input:text').on('keydown input paste', function () {
    console.log($(this).val());
});

$('.accordion-header').on('click', function () {
    let activeHeader = $(this).hasClass('active') ? $(this) : $(this).parent().find('.accordion-header.active');
    if (!$(this).hasClass('active')) {
        activeHeader.next().slideUp(200).removeClass('active');
        activeHeader.removeClass('active');
        $(this).addClass('active').next().slideToggle(400).addClass('active');
    }
});*/


$('.accordion-header').on('click', function () {
    $('.accordion-header').css('color', '#a6ce39');
    $('.accordion-text').slideUp(200).next().removeClass('active');
    $('.accordion-header').next().removeClass('active');
    $(this).next().slideToggle(400).addClass('active');
    $(this).addClass('active');
    $(this).css('color', 'red');
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8500,
        margin: 10,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 3
            }
        }
    });
});

/*$('#humburger').on('click', function () {
   $(this).text('X');
   $('.menu').css('display','block');
});*/


$(document).ready(function() {
    $('#humburger').click(function() {

        $(this).toggleClass("active").text('Χ');
        $('.menu').slideToggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style');
                $('#humburger').removeClass("active").text('≡');
            }
        });
    });
});