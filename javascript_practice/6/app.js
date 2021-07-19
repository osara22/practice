$(function(){
  $('.box1').on('click', function(){
    $('.box1').css({'background-image': 'url(img/ikko.jpg)'});
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-image': 'url(img/img.jpg'});
    $('.box1').removeClass('box1-ext');
  });
});