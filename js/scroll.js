$(document).ready(function() {
  /*==============================章節==============================*/
  $('#goto_1080912_01').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080912_01').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080912_02').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080912_02').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080912_03').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080912_03').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080912_04').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080912_04').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080912_05').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080912_05').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_01').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_01').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_02').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_02').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_03').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_03').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_04').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_04').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_05').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_05').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_06').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_06').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_07').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_07').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080919_08').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080919_08').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080926_01').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080926_01').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_1080926_02').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#1080926_02').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  /*==============================考題==============================*/
  $('#goto_exam_01').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#exam_01').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_exam_02').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#exam_02').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_exam_03').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#exam_03').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  $('#goto_exam_04').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#exam_04').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
  /*==============================回頂部==============================*/
  $('#gotop').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.pageTitle').offset().top,
      },
      { duration: 500, easing: 'swing' }
    );
    return false;
  });
});
/*==============================回頂部-顯示==============================*/
$(window).on('scroll', function() {
  var $toTop = $('#gotop');
  if ($(window).scrollTop() >= $(window).height()) {
    $toTop.css('display', 'block').fadeIn();
  } else {
    $toTop.fadeOut();
  }
});
