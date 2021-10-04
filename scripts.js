const arrowPrev = '<input type="button" class="slick-prev" src="/images/arrow_black_left.png" height="62px" width="auto">';
const arrowNext = '<input type="button" class="slick-next" src="/images/arrow_black_right.png" height="62px" width="auto">';

let responsiveCarousel = {
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

$(document).ready(function(){
    $('#quotes .slick').slick();
    $('#popularTutorials .slick').slick(responsiveCarousel);
    $('#latestVideos .slick').slick(responsiveCarousel);
});