$(function () {
  let currentDate = new Date();
  $('#currentYear').text(currentDate.getFullYear());

})


// Gallery file --------------------------
// let $links = $('.itemLinks');
// $links.click(function (e) {
//   $links.removeClass('active');
//   let clickedLink = e.target;
//   clickedLink = $(clickedLink);
//   let position = clickedLink.attr('data-pos');
//   let translateValue = 'translateX(' + position * 25 + '%)';

//   $('#wrapper').css({
//     transform: translateValue
//     // 'transform': translateValue
//   });

//   clickedLink.addClass('active');

// })

// $($links[0]).addClass('active');


let silderAccum = 0;

let $angels = $('.angel');
$angels.click(function (e) {
  $angels.removeClass('active');
  let clickedLink = e.target;
  clickedLink = $(clickedLink);
  let position = clickedLink.attr('data-direct');

  // Check Slider Value
  if ((silderAccum + position * 25) > 0 && (silderAccum + position * 25) < 100) {
    silderAccum += position * 25;
  }
  // console.log($('.content').css('width'));
  let translateValue = 'translateX(' + silderAccum + '%)';

  $('#wrapper').css({
    transform: translateValue
    // 'transform': translateValue
  });

  clickedLink.addClass('active');

})

$($angels[1]).addClass('active');