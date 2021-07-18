$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'width': '100px',
      'height': '200px'
    }).slideUp();
  });
});