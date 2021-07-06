$(Document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })    
});



$(window).scroll(function(){
    if($(window).scrollTop()) {
        $(".navbar").addClass("putih")
    }
    else{
        $(".navbar").removeClass("putih")
    }
})