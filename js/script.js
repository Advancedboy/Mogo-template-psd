'use strict';
$(() =>{

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop()

    //Fixed header
    checkScroll(scrollOffset)

    $(window).on('scroll', () =>{
        scrollOffset = $(this).scrollTop()

       checkScroll(scrollOffset);

    })

    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass('fixed')
        }else{
            header.removeClass('fixed')
        }
    }


    //Smooth scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault()

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top

        // console.log(blockOffset)
        // $(blockId)

        $('#nav a').removeClass('active')
        $this.addClass('active')
        $('#nav__toggle').removeClass('active')
        $('#nav').removeClass('active')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500)
    })

    //menu nav toggle
    $('#nav__toggle').on('click', event =>{
        event.preventDefault()

        $('.nav__toggle').toggleClass('active')
        $('#nav').toggleClass('active')
    })

    //collapse
    $('[data-collapse]').on('click', function (event){
        event.preventDefault()

        let $this = $(this),
            blockId = $this.data('collapse')


        $(blockId).slideToggle()
        $($this).toggleClass('active')

    })

//    slider
    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })

})