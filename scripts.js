let responsiveCarousel = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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

$(document).ready(function() {
    loadQuotes();
    loadPopularTutorials();
})

function loadPopularTutorials() {
  $.ajax({
    url: `https://smileschool-api.hbtn.info/popular-tutorials`,
    type: 'GET',
    dataType: 'json',
    jsonp: false,
    beforeSend: function () {
      $('.loader').show();
    },
    success: function(data) {
      $('#popCarousel').empty();
      for (let i = 0; i < data.length; i++) {
        $('#popCarousel').append(`<div id="popCard${i}" class="border-0 mx-3">`)
        $(`#popCard${i}`).append(`<img src=${data[i].thumb_url} height="auto" width="255px" alt="Card image cap #1">
                                  <div class="p-2 pt-3">
                                      <h6 class="font-weight-bolder">${data[i].title}</h6>
                                      <p class="small text-muted">${data[i]["sub-title"]}</p>
                                  </div>
                                  <div class="border-0">
                                      <div class="row m-0">
                                          <img class="rounded-circle" src=${data[i].author_pic_url} width="30px" height="30px" alt="Review pic">
                                          <p class="color-purp pl-3 pt-1">${data[i].author}</p>
                                      </div>
                                      <div class="row justify-content-between m-0">
                                          <div id="starReview${i}" class="row pl-2">
                                          </div>
                                          <p class="color-purp">${data[i].duration}</p>
                                      </div>
                                  </div>`);
        for (let j = 0; j < data[i].star; j++) {
          $(`#starReview${i}`).append('<img src="/images/star_on.png" height="15px" width="15px" alt="star on">');
        }
        for (let j = 0; j < (5 - data[i].star); j++) {
          $(`#starReview${i}`).append('<img src="/images/star_off.png" height="15px" width="15px" alt="star off">');
        }
      }
    },
    complete: function () {
      $('.loader').hide();
      $('#popCarousel').slick(responsiveCarousel);
      $('#popCarousel').prepend(`<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>`);
      $('#popCarousel').append(`<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>`);
    }
  })
}

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
      $('.single-item').empty();
      for (let i = 0; i < data.length; i++) {
        $('.single-item').append(`<div id="quotes${i}" class="col-8 mx-auto">`);
        $(`#quotes${i}`).append(`<div id="quotesCard${i}" class="text-white d-sm-flex flex-sm-row">`);
        $(`#quotesCard${i}`).append(`<img src="${data[i].pic_url}" class="d-block rounded-circle mt-110 mx-auto ml-sm-5 mx-sm-none" width="150px" height="150px" alt="Profile Pic #5">
                                      <div class="mb-110 mt-110 px-5 cara-cust">
                                        <p>« ${data[i].text}</p>
                                        <h5>${data[i].name}</h5>
                                        <p class="font-italic">${data[i].title}</p>
                                      </div>`);
      }
    },
    complete: function() {
      $('.loader').hide();
      $('.single-item').slick();
    }
  })
}
