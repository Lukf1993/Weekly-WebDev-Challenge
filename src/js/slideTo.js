import $ from 'jquery';

export default () => {
    const $el = $(".js-scroll-to");
    const $body = $("body");
    const $menu = $("#menu");
    const $hamburger = $("#hamburger");

    function scrollTo(e, mobileHeight) {
        $('html, body').animate({
            scrollTop: e.offset().top - mobileHeight
        }, 200);
        $body.removeClass('overflow');
        $hamburger.toggleClass("change");
        $menu.toggleClass('header__nav--mobile');
    }

    $el.on('click',(e) => {
        const target = $(e.target).data('target');
        
        let mobileHeight = 0;
        if(window.matchMedia("(max-width: 574px)").matches){
            mobileHeight = $('.header__nav').height();
        }

        if (menu === 'header__nav--mobile' ){
            $body.addClass('overflow');
            scrollTo($(`#${target}`), mobileHeight);

        } else {
            scrollTo($(`#${target}`), mobileHeight);
        }
    })
}

window.innerWidth

