// Slick slide
$('.witnesses-slider').slick({
    slidesToShow: 3,
    // slidesToScroll: 1,
    centerMode: true,
    centerPadding: '250px',
    initialSlide: 2,
    infinite: true,
    nextArrow: '<span class="slider-arrow right-arrow"><img src="img/right-arrow.svg"></span>',
    prevArrow: '<span class="slider-arrow left-arrow"><img src="img/right-arrow.svg"></span>',
    responsive: [
        {
          breakpoint: 1389,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '100px',
            centerMode: true
          }
        },
        // {
        //   breakpoint: 991,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
        // },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        },
      ]
});

$('.articles-slider').slick({
    arrows: false,
    dots: true
});

// Mobile menu
$('.menu-toggle').click(function(){
	$('.menu-toggle span').toggleClass('open');
	$('.mob-list-menu').toggleClass('active');
	$('.logo a').toggleClass('active');
});

$(document).ready(function() {
  function checkWidth() {
      var windowWidth = $('body').innerWidth(),
      mobmenu = $(".menu-toggle span");
      mbtn = $(".mob-list-menu");
      logoact = $(".logo a");

      if(windowWidth >= 991) {
              mobmenu.removeClass('open');
              mbtn.removeClass('active');
              logoact.removeClass('active');
          }
          else {
          }
      }
  checkWidth();
  $(window).resize(function() {
      checkWidth();
  });
});

$('.organization-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 0,
    infinite: true,
    dots: true,
    arrows: false
});

$(document).ready(function() {
    var sizer = '.sizer';
    var cont = $('#gallery-img');
    cont.imagesLoaded(function(){
        cont.masonry({
            itemSelector: '.gallery__item',
            columnWidth: sizer,
            percentPosition: true,
            horizontalOrder: true
        });
    });
});

// Dropdown list
if ($('.presence').length > 0) {
    const selectSingle = document.querySelector('.select-meal');

    const selectSingle_title = selectSingle.querySelector('.select-meal__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.select-meal__label');

    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }

    const selectGuests = document.querySelector('.select-guests');
    const selectGuests_title = selectGuests.querySelector('.select-guests__title');
    const selectGuests_labels = selectGuests.querySelectorAll('.select-guests__label');

    selectGuests_title.addEventListener('click', () => {
        if ('active' === selectGuests.getAttribute('data-state')) {
            selectGuests.setAttribute('data-state', '');
        } else {
            selectGuests.setAttribute('data-state', 'active');
        }
    });

    for (let i = 0; i < selectGuests_labels.length; i++) {
        selectGuests_labels[i].addEventListener('click', (evt) => {
        selectGuests_title.textContent = evt.target.textContent;
        selectGuests.setAttribute('data-state', '');
    });
    }
}

var countdown = function() {
    var countdown = document.querySelector('.countdown');

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        var newChild;

        function updateClock() {
            var t = getTimeRemaining(endtime);
            var daysArr = String(t.days).split('');
            daysSpan.innerHTML = '';
            for (var i = 0; i < daysArr.length; i++){
                newChild = document.createElement('span');
                newChild.innerHTML = daysArr[i];
                daysSpan.appendChild(newChild);
            }
            var hoursArr = String(('0' + t.hours).slice(-2)).split('');
            hoursSpan.innerHTML = '';
            for (var i = 0; i < hoursArr.length; i++) {
                newChild = document.createElement('span');
                newChild.innerHTML = hoursArr[i];
                hoursSpan.appendChild(newChild);
            }
            var minuteArr = String(('0' + t.minutes).slice(-2)).split('');
            minutesSpan.innerHTML = '';
            for (var i = 0; i < minuteArr.length; i++) {
                newChild = document.createElement('span');
                newChild.innerHTML = minuteArr[i];
                minutesSpan.appendChild(newChild);
            }
            var secondArr = String(('0' + t.seconds).slice(-2)).split('');
            secondsSpan.innerHTML = '';
            for (var i = 0; i < secondArr.length; i++) {
                newChild = document.createElement('span');
                newChild.innerHTML = secondArr[i];
                secondsSpan.appendChild(newChild);
            }
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // set your wedding date here
    var deadline = 'August 18 2021 17:30:00 GMT+0300';
    if (countdown){
        initializeClock('timer', deadline);
    }
}
countdown();

var pageScroll = function() {
    $('body').on('click touch', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, '');
        event.preventDefault();
    });
};
pageScroll();