$(document).ready(function() {
  $('.button').next().hide();
  $('.button').click(function() {
    $(this).next().slideToggle(150);
    $(this).children().toggleClass('up');
    return false;
  });
});