$(document).ready(function () {
  AOS.init();
  $(".main__btn").addClass('aos-animate');
  //cookie
  var cookie = $('#cookie');
  if (!sessionStorage.getItem('cookie')) {
    setTimeout(function () {
      $('.buttons').animate({ bottom: "106px" }, 500);
      cookie
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 2000);
  }

  $('.cookie__btn').on('click', function (e) {
    e.preventDefault();
    sessionStorage.setItem('cookie', 'agree');
    cookie.fadeOut();
    $('.buttons').animate({ bottom: "23px" }, 500);
  });
  //cookie

  $('.menu__sub').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('menu__sub--active')
    $(this).next().slideToggle();
  });
  $(document).on('click', function (e) {
    var ul = $('.menu__sub').next();
    if (ul.is(':visible')) {
      if (!ul.is(e.target) && ul.has(e.target).length === 0 && !ul.prev().is(e.target)) {
        $('.menu__sub').removeClass('menu__sub--active');
        ul.slideUp();
      }
    }
  });

  // Маски
  $('.date').mask('99.99.9999');
  $('.time').mask('99:99');
  $('.tel').mask('+7 (999) 999-99-99');
  // Маски

  // Выбор корпуса
  $('.housing__link-1, .housing__link-2, .housing__link-3').on('click', function (e) {
    e.preventDefault();
    $('.housing__link').hide();
    $('.stages-1')
      .css({
        'opacity': 0,
        'display': 'flex',
        'position': 'absolute',
        'top': 0,
        'left': 0
      })
      .animate({ opacity: 1 }, 1000);
    setTimeout(function () {
      $('.housing').hide();
      $('.stages').css('position', 'relative');
    }, 1000);
  });
  $('.housing__link-4').on('click', function (e) {
    e.preventDefault();
    $('.housing__link').hide();
    $('.stages-4')
      .css({
        'opacity': 0,
        'display': 'flex',
        'position': 'absolute',
        'top': 0,
        'left': 0
      })
      .animate({ opacity: 1 }, 1000);
    setTimeout(function () {
      $('.housing').hide();
      $('.stages').css('position', 'relative');
    }, 1000);
  });
  $('.housing__link-5, .housing__link-6, .housing__link-7').on('click', function (e) {
    e.preventDefault();
    $('.housing__link').hide();
    $('.stages-5')
      .css({
        'opacity': 0,
        'display': 'flex',
        'position': 'absolute',
        'top': 0,
        'left': 0
      })
      .animate({ opacity: 1 }, 1000);
    setTimeout(function () {
      $('.housing').hide();
      $('.stages').css('position', 'relative');
    }, 1000);
  });

  // Выбор корпуса, кнопка назад
  $('.stages__back').on('click', function (e) {
    e.preventDefault();
    $('.housing__link').show();
    $('.housing')
      .css({
        'opacity': 0,
        'display': 'flex',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': 3
      })
      .animate({ opacity: 1 }, 1000);
    setTimeout(function () {
      $('.stages').hide();
      $('.housing').css({ 'position': 'relative', 'z-index': 'unset' });
    }, 1000);
  });

  // Выбор квартиры
  // Hover "Продана"
  $('.plan__flat-1')
    .mouseenter(function () {
      $('.plan__map').css('opacity', 0);
      $('.plan__red').css('opacity', 1);
      $('.plan__msg').css({ 'opacity': 0, 'z-index': -1 });
      $('.plan__sold').css({ 'opacity': 1, 'z-index': 3 });
    });
  // Hover "Забронирована"
  $('.plan__flat-2')
    .mouseenter(function () {
      $('.plan__map').css('opacity', 0);
      $('.plan__orange').css('opacity', 1);
      $('.plan__msg').css({ 'opacity': 0, 'z-index': -1 });
      $('.plan__booked').css({ 'opacity': 1, 'z-index': 3 });
    });
  $('.plan').mouseleave(function () {
    $('.plan__booked, .plan__sold').css({ 'opacity': 0, 'z-index': -1 });
    $('.plan__red, .plan__orange').css('opacity', 0);
  });
  $('.plan__booked, .plan__sold').mouseleave(function () {
    $(this).css({ 'opacity': 0, 'z-index': -1 });
    $('.plan__red, .plan__orange').css('opacity', 0);
  });
  // Hover "Свободная"
  $('.plan__flat-3')
    .mouseenter(function () {
      $('.plan__map').css('opacity', 0);
      $('.plan__msg').css({ 'opacity': 0, 'z-index': -1 });
      // Инфо "Свободная"
      $('.plan__free, .sidebar-left__info').css('opacity', 1);
    })
    .mouseleave(function () {
      $('.plan__free, .sidebar-left__info').css('opacity', 0);
    })
    // Переход на свободную
    .on('click', function (e) {
      e.preventDefault();
      $('.content').hide();
      $('.flat__tabs-item').not(this).removeClass('flat__tabs-item--active');
      $('#flat').toggleClass('flat__tabs-item--active');
      $('#flat-content').fadeIn();
      $('.background__stage').hide();
      $('.background__flat').fadeIn();
      $('.sidebar-right__loupe').removeClass('loupe-stage');
      $('.sidebar-right__loupe').removeClass('loupe-sizes');
      $('.sidebar-right__loupe').addClass('loupe-furniture');
    });

  // Клик по категории квартир
  $('.sidebar-left__cat-item').on('click', function () {
    $('.sidebar-left__cat-item').not(this).removeClass('sidebar-left__cat-item--active');
    $(this).toggleClass('sidebar-left__cat-item--active');
    // Если 2-х комнатная
    if ($(this).hasClass('cat-flats-2')) {
      $('.plan__map').css('opacity', 0);
      $('.plan__flats-2').css('opacity', 1);
    } else if ($(this).hasClass('cat-flats-3')) {
      $('.plan__map').css('opacity', 0);
      $('.plan__free').css('opacity', 1);
    } else {
      $('.plan__map').css('opacity', 0);
      $('.plan__clean').css('opacity', 1);
    }
  });

  // Tabs
  $('.flat__tabs-item').on('click', function () {
    $('.flat__tabs-item').not(this).removeClass('flat__tabs-item--active');
    $(this).toggleClass('flat__tabs-item--active');
  });

  $('#flat').on('click', function () {
    $('#size-img').hide();
    $('#flat-img').show();
    $('.background__stage').hide();
    $('.background__flat').fadeIn();
    $('.sidebar-right__loupe').removeClass('loupe-stage');
    $('.sidebar-right__loupe').removeClass('loupe-sizes');
    $('.sidebar-right__loupe').addClass('loupe-furniture');
  });
  $('#stage').on('click', function () {
    $('.content').hide();
    $('#size-img').hide();
    $('#flat-img').show();
    $('#stage-content').fadeIn();
    $('.background__flat').hide();
    $('.background__stage').fadeIn();
    $('.sidebar-right__loupe').removeClass('loupe-furniture');
    $('.sidebar-right__loupe').removeClass('loupe-sizes');
    $('.sidebar-right__loupe').addClass('loupe-stage');
  });
  $('#size').on('click', function () {
    $('#flat-img').hide();
    $('#size-img').show();
    $('.background__stage').hide();
    $('.background__flat').fadeIn();
    $('.sidebar-right__loupe').removeClass('loupe-stage');
    $('.sidebar-right__loupe').removeClass('loupe-furniture');
    $('.sidebar-right__loupe').addClass('loupe-sizes');
  });
  // Tabs

  // Подсветка комнат
  $('.flat-coords area')
    .mouseenter(function () {
      $('.flat__elements-item').eq($('.flat-coords area').index(this)).css('background-color', 'hsla(31,36%,62%,.29)');
    })
    .mouseleave(function () {
      $('.flat__elements-item').eq($('.flat-coords area').index(this)).css('background-color', 'transparent');
    });

  // Modals
  // callback
  $('.callback').on('click', function (e) {
    e.preventDefault();
    $('#modal_callback')
      .css("display", "flex")
      .hide()
      .fadeIn();
    $('#callback').fadeIn();
  });
  // online
  // $('.online').on('click', function (e) {
  //   e.preventDefault();
  //   $('#modal_online')
  //     .css("display", "flex")
  //     .hide()
  //     .fadeIn();
  //   $('#online').fadeIn();
  // });
  // to book
  $('.tobook').on('click', function (e) {
    e.preventDefault();
    $('#modal__tobook')
      .css("display", "flex")
      .hide()
      .fadeIn();
    $('#tobook').fadeIn();
  });
  // plan
  $('.plan--fav').on('click', function (e) {
    e.preventDefault();
    $('#modal__plan')
      .css("display", "flex")
      .hide()
      .fadeIn();
    $('#plan').fadeIn();
  });
  // modal__stage
  $(document).on('click', '.loupe-stage', function (e) {
    e.preventDefault();
    $('#modal__stage')
      .css("display", "flex")
      .hide()
      .fadeIn();
  });
  // modal__stage
  $(document).on('click', '.loupe-furniture', function (e) {
    e.preventDefault();
    $('#modal__flat-1')
      .css("display", "flex")
      .hide()
      .fadeIn();
  });
  // modal__stage
  $(document).on('click', '.loupe-sizes', function (e) {
    e.preventDefault();
    $('#modal__flat-2')
      .css("display", "flex")
      .hide()
      .fadeIn();
  });

  // online
  var url = window.location.href;
  if (url == 'http://localhost:3000/') {
    setTimeout(function () {
      $('#modal_online')
        .css("display", "flex")
        .hide()
        .fadeIn();
      $('#online').fadeIn();
    }, 3000);
  }

  $('.modal__close').on('click', function () {
    $('#online', '#callback', '#tobook', '#plan').hide();
    $('#modal_callback').fadeOut();
    $('#modal__tobook').fadeOut();
    $('#modal__plan').fadeOut();
    $('#modal_online').fadeOut();
    $('#modal__stage').fadeOut();
    $('#modal__flat-1').fadeOut();
    $('#modal__flat-2').fadeOut();
  });

  // closa on click not on modal
  $('#modal_callback, #modal_online, #modal__tobook, #modal__plan, #modal, #modal__stage, #modal__flat-1, #modal__flat-2').mouseup(function (e) {
    var div = $(this).children('.modal__block');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(this).fadeOut();
    }
  });
  // Modals
});

var swiper = new Swiper('#main.swiper-container', {
  navigation: {
    nextEl: '.slider__btn-next',
    prevEl: '.slider__btn-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  autoplay: {
    delay: 10000,
  },
  speed: 2000,
  loop: true
});



swiper.on('slideChange', function () {
  $('.main__title, .main__text, .main__btn')
    .removeClass('aos-init')
    .removeClass('aos-animate');
  $('.main__slide--gradient').css({ 'opacity': 0, 'width': '0' });
  setTimeout(function () {
    $(".main__title, .main__text, .main__btn")
      .addClass('aos-init')
      .addClass('aos-animate');
    $('.main__slide--gradient').css({ 'opacity': 1, 'width': '80%' });
    $('.main__slide').removeClass('main__slide--change');
  }, 1500);
});

function flatMap() {
  var screenWidth = $(window).outerWidth(),
    mapDesktop = $('.map-desktop'),
    mapMobile = $('.map-1366');
  if (screenWidth < 1370) {
    mapDesktop.removeAttr('name');
    mapMobile.attr('name', 'image-map');
  } else if (screenWidth > 1366) {
    mapMobile.removeAttr('name');
    mapDesktop.attr('name', 'image-map');
  }
}

flatMap();

$(window).resize(function () {
  flatMap();
});


/* Vanilla JS */
function switchCheckbox() {
  var
    switcher = document.querySelector('#switcher'),
    checkboxes = document.querySelectorAll('#table-checkbox'),
    flag = false;

  switcher.addEventListener('click', function (e) {
    if (flag) {
      checkboxes.forEach(function (item) {
        item.checked = false
      })
      flag = false
    } else {
      checkboxes.forEach(function (item) {
        item.checked = true
      })
      flag = true
    }
  });

  checkboxes.forEach(function (item) {
    item.addEventListener('click', function () {
      flag = true
      switcher.checked = true
      checker()
    });
  })

  function checker() {
    if (Array.from(checkboxes).every(function (item) { return item.checked == false })) {
      flag = false
      switcher.checked = false
    }
  }
}

function classToggle() {
  var buttons = document.querySelectorAll('.tabs-switcher .tabs-switcher__title');

  buttons.forEach(function (item) {
    item.addEventListener('click', function () {
      buttons.forEach(function (elem) {
        elem.classList.remove('tabs-switcher__title--active')
      });
      item.classList.toggle('tabs-switcher__title--active')
    })
  })
}
