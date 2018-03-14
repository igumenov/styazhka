$(document).ready(function() {




    $('select').selectric();
    $('#type .items .item .name').matchHeight();
    $('#tech_map .items .item .name').matchHeight();

    if($( window ).width()>=768 && $( window ).width()<989){
        $('#sertificate .more_btn a.btn_more').attr('data-count',3);
        $('#partners .more_btn a').attr('data-count',4);
    }

    if($( window ).width()<=767){
        $('#sertificate .more_btn a.btn_more').attr('data-count',4);
        $('#partners .more_btn a').attr('data-count',4);
    }

    $("header .open_mobile").click(function (event) {
        event.preventDefault();
        if($('#mobile_menu').is(':hidden')){
            $('html, body').css('overflow', 'hidden');
            $('#mobile_menu').fadeIn();
            $('#mobile_menu').addClass('active');
        }else{
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');
            $('#mobile_menu').fadeOut();
            $('#mobile_menu').removeClass('active');
        }
    });

    $(".fixed_bar .row .open").click(function (event) {
        event.preventDefault();
        $('.fixed_bar .menu_row').slideToggle();
        $(this).toggleClass('active');
    });
    $('#slider').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        items: 1,
    });

    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;
    
        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();
    
            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
    $('#otchet .items .item .slider .top').owlCarousel({
		items:1,
		dots: false,
		thumbs: true,
		thumbsPrerendered: true,
		nav: true,		
		navText: [,],
		loop: true,
    });

    var listsCount = $('.btn_more').length;

    
    var moreItems = function(id){
     var button = $(id + " .btn_more");
        var list = button.closest(".container").find('.items .item');
        var numToShow = +button.attr('data-count');
        var numInList = list.length;
        list.hide();
        if (numInList <= numToShow) {
            button.hide();
        }
        if (numInList > numToShow) {
            button.show();
        }
        list.slice(0, numToShow).show();
   
        button.click(function(e){
            e.preventDefault();
            var showing = list.filter(':visible').length;
            list.slice(showing - 1, showing + numToShow).fadeIn();
            var nowShowing = list.filter(':visible').length;
            if (nowShowing >= numInList) {
              button.hide();
            }
        });
    };
    for (var i = 1; i <= listsCount; i++) {
        moreItems("#gal" + i);
    }

    $('#calc .block').on('scrollSpy:enter', function() {
		$(this).find('.border:eq(0)').addClass('animate');
		$(this).find('.border:eq(1)').delay(5000).addClass('animate');
		$(this).find('.border:eq(2)').delay(1000).addClass('animate');
    });
    $('#calc .block').scrollSpy();

    $(".link").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-80;
        $('body,html').animate({scrollTop: top}, 1500);
        if($( window ).width()<767){
            $('#mobile_menu').fadeOut();
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');

        }
    });




    if($( window ).width()>767){
        $(document).on("scroll", onScroll);
        function onScroll(event){
            var scrollPos = $(document).scrollTop()+200;

            var pos_slider = $("#slider").offset().top;
            
                if(scrollPos-200>pos_slider){
                    $('.fixed_bar').slideDown();
                }else{
                    $('.fixed_bar').hide();
                }
            
            $('.menu_row a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
                    $('.menu_row ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }

    }

    $("input[name=gift]").change(function () {
        $(this).parent().toggleClass("active");
    });


});