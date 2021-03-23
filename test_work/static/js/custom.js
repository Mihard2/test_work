$(document).ready(function () {

    const topSlider = $('.slider-nav');
    const mainSlider = $('.slider-for');
    const curSlide = $('.current-slide');
    const conSlide = $('.count-slide');
    const btnPrev = $('.cust-arrow_prev');
    const btnNext = $('.cust-arrow_next');

    mainSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        curSlide.text(i);
        conSlide.text(slick.slideCount);
        console.log(i);
        console.log(slick.slideCount);
    });

    mainSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: false,
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    fade: false,
                    centerMode: true,
                    centerPadding: '40px',
                }
            }
        ]
    });
    topSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,

              }
            }
        ]
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    btnPrev.on('click', function(){
        topSlider.slick('slickPrev');
    });

    btnNext.on('click', function(){
        topSlider.slick('slickNext');
    });

    
    // ALIGNING BLOCK HEIGHTS

    function setEqualHeight(columns){
        var tallestcolumn = 0;
        
        columns.each(function(){
          currentHeight = $(this).height();
          if(currentHeight > tallestcolumn){
            tallestcolumn = currentHeight;
            }
          }
        );
        
        columns.height(tallestcolumn);
      };
      
      $(document).ready(function() {
        setEqualHeight($(".top-slider .slick-slide"));
      });


})