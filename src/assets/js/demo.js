$(document).ready(function () {
  var isDragging = false;
  var x = 0;
  var x2 = 0;
  var menuW = $('.demo2 ol.breadcrumb').width();
  var menuScroll = $('.demo2 .scroll-menu').width();
  var menuWmax = (menuW - menuScroll);
  var phantram = 0;
  var leftMenu = $('.demo2 ol.breadcrumb').get(0).offsetLeft;
  $('.demo2 ol.breadcrumb').on('mousedown', function (e) {
    isDragging = true;
    x = e.pageX - this.offsetLeft;
    $(this).on('mousemove', function (e) {
      if (isDragging == true) {
        e.preventDefault();
        e.stopPropagation();
        $('.scroll-menu').addClass('fix-menu');
        x2 = e.pageX - x;
        
        if (55 > x2 && (menuWmax + 55) > -x2) {
          $(this).removeClass('transition').css('left', x2);
          phantram = ((-x2)*100)/menuWmax;
          if(phantram > 100){
            phantram = 100;
          }
          if(phantram < 0){
            phantram = 0;
          }
          $('.thanhsroll').css('width', phantram + '%');
          $('#pre').removeClass('max');
          $('#next').removeClass('max');
        } else if(55 > x2){
          $('#next').addClass('max');
        }else if((menuWmax + 55) > -x2){
          $('#pre').addClass('max');
        }
      }
    });
  }).on('mouseleave', function (e) {
    isDragging = false;
    $('.scroll-menu').removeClass('fix-menu');
  }).mouseup(function (e) {
    isDragging = false;
    $('.scroll-menu').removeClass('fix-menu');
  });
  if (0 >= menuWmax) {
    $('.demo2 .scroll-menu').addClass('anmuiten');
  } else {
    $('.demo2 .scroll-menu').removeClass('anmuiten');
  }
  $('#next').click(function () {
    if (menuWmax >= -leftMenu) {
      leftMenu = $('.demo2 ol.breadcrumb').get(0).offsetLeft - 300;
      phantram = (-leftMenu*100)/menuWmax;
      $('.thanhsroll').css('width', phantram + '%');
      $('.demo2 ol.breadcrumb').addClass('transition').css('left', leftMenu);
      $('#pre').removeClass('max');
    } else {
      $(this).addClass('max');
      $('#pre').removeClass('max');
      $('.demo2 ol.breadcrumb').removeClass('transition')
    }
  })
  $('#pre').click(function () {
    if (-leftMenu > 55) {
      leftMenu = $('.demo2 ol.breadcrumb').get(0).offsetLeft + 300;
      phantram = (-leftMenu*100)/menuWmax;
      $('.thanhsroll').css('width', phantram + '%');
      $('.demo2 ol.breadcrumb').addClass('transition').css('left', leftMenu);
      $('#next').removeClass('max');
    } else {
      $(this).addClass('max');
      $('#next').removeClass('max');
      $('.demo2 ol.breadcrumb').css('left', '55px');
      $('.demo2 ol.breadcrumb').removeClass('transition');
    }
  })
  $('.toast-show').click(function () {
    $('.toast').toast('show');
  });
  $('.disabled-remove').click(function (e) {
    e.preventDefault();
    $(this).closest('tr').addClass('edit').find('input').removeAttr('disabled')
  });
  $('.disabled-add').click(function (e) {
    e.preventDefault();
    $(this).closest('tr').removeClass('edit').find('input').attr('disabled', 'disabled')
  });

  $("#content").on('scroll', function (event) {
    var scrollValue = $(this).scrollTop();
    if (scrollValue > 70) {
      $('.fix-nut').addClass('fixed-top');
    } else {
      $('.fix-nut').removeClass('fixed-top');
    }
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar,#content,body').toggleClass('active');
  });
  $('.list-unstyled a').on('click', function () {
    $('.list-unstyled a').removeClass('active')
    $(this).addClass('active');
  });
  $('#sidebar>ul.components>li>a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('#sidebar .collapse').collapse('hide');
    }
  });
  $('.collapse').on('hidden.bs.collapse', function () {
    if (!$(this).hasClass('show')) {
      $(this).removeClass('active').closest('li').removeClass('active');
    }
  }).on('show.bs.collapse', function () {
    $(this).addClass('active').closest('li').addClass('active');
  });
  $('.datepicker').each(function () {
    $(this).datepicker({
      uiLibrary: 'bootstrap4'
    });
  })
});