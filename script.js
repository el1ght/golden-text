$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.title').css('background-image', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #fde6a5, #9b700b)');
});