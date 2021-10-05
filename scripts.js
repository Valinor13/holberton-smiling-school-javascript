let responsiveCarousel = {
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
    $('#quotes .single-item').slick();
    $('#popularTutorials .responsive').slick(responsiveCarousel);
    $('#latestVideos .responsive').slick(responsiveCarousel);
    $('.responsive').prepend(`<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>`);
    $('.responsive').append(`<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>`);
});