let responsiveCarousel = {
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
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

$(document).ready(() => {
    carouselSetup();
    loadQuotes();
});

function loadQuotes() {
  $.ajax({
    url: `https://smileschool-api.hbtn.info/quotes`,
    type: 'GET',
    dataType: 'json',
    jsonp: false,
    beforeSend: function () {
      $('.loader').show();
    },
    success: function(data) {
      $('.loader').hide();
      $('#quotes #quoteOne').empty();
      $('#quotes #quoteTwo').empty();
      $('#quotes #quoteOne').append(`<img src="${data[0].pic_url}" class="d-block rounded-circle mt-110 mx-auto ml-sm-5 mx-sm-none" width="150px" height="150px" alt="Profile Pic #5">
                                      <div class="mb-110 mt-110 px-5 cara-cust">
                                        <p>« ${data[0].text}</p>
                                        <h5>${data[0].name}</h5>
                                        <p class="font-italic">${data[0].title}</p>
                                      </div>`)

      $('#quotes #quoteTwo').append(`<img src="${data[1].pic_url}" class="d-block rounded-circle mt-110 mx-auto ml-sm-5 mx-sm-none" width="150px" height="150px" alt="Profile Pic #5">
                                      <div class="mb-110 mt-110 px-5 cara-cust">
                                        <p>« ${data[1].text}</p>
                                        <h5>${data[1].name}</h5>
                                        <p class="font-italic">${data[1].title}</p>
                                      </div>`)
    }
  })
}

function carouselSetup() {
  $('#quotes .single-item').slick();
  $('#popularTutorials .responsive').slick(responsiveCarousel);
  $('#latestVideos .responsive').slick(responsiveCarousel);

  if ($('.responsive button').length !== 0) {
    $('.responsive').prepend(`<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>`);
    $('.responsive').append(`<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>`);
  };
}