$(function () {
    $('.slider_list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:false,
        autoplaySpeed: 2000,
        initialSlide:2,
        responsive: [
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

        ]
    })
    document.querySelector(".burger_menu").addEventListener("click", function(){
        document.querySelector(".header_menu").classList.toggle("active"); 
        }
    )
})

    

$('.header_menu').click(function(){
    $('.burger_menu, .header_menu').removeClass('active');
    $('body').removeClass('lock');
});