$(document).ready(function() {
  for(i = 1; i <= 16; i++) {
    $('.gridContainer').append("<div class='grid'></div>");
  };

  $('.grid').on('mouseenter', function()  {
    var orgColor = $(this).css('background-color');
    $(this).css('background-color', '#6313db');


  
  });

});
