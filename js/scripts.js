$(function () {
  let currentDate = new Date();
  $('#currentYear').text(currentDate.getFullYear());

})


// Gallery file --------------------------
let $links = $('.itemLinks');
$links.click(function (e) {
  $links.removeClass('active');
  let clickedLink = e.target;
  clickedLink = $(clickedLink);
  let position = clickedLink.attr('data-pos');
  let translateValue = 'translateX(' + position * 25 + '%)';

  $('#wrapper').css({
    transform: translateValue
    // 'transform': translateValue
  });

  clickedLink.addClass('active');

})

$($links[0]).addClass('active');