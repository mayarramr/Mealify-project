let scrollSection = $('#section2').offset().top
console.log(scrollSection);

$(document).scroll(function(){
    let userScroll = $(document).scrollTop()
    if (userScroll > scrollSection -50) {
        $('.navbar').css({backgroundColor:'#CE1212'})
    }else{
        $('.navbar').css({backgroundColor:'white'})
    }
})