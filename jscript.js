$(document).ready(function() {



  function createGrid(size)  {

    for(i = 1; i <= Math.pow(size,2); i++) {
      $('.gridContainer').append("<div class='grid'></div>");
    };
    var gridDimension = 480/size;
    $('div .grid').css('width', gridDimension);
    $('div .grid').css('height', gridDimension);
    $('.grid').on('mouseenter', function()  {
      $(this).css('background-color', '#6313db');
    });
  };

  $('button').click(function()  {
    var defaultDivs = document.getElementById('gridContainer');
    while (defaultDivs.hasChildNodes()) {
      defaultDivs.removeChild(defaultDivs.firstChild);
    };
    var userSize = +window.prompt("How many Squares per Row");
    createGrid(userSize);
  });

  createGrid(4);








});
