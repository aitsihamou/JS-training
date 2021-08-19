//--------------
$(".slider").on("input", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.back2').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

//------------------- change url image by variables css
var r = document.querySelector(':root');
function myFunctionimg(element) {
  var thing = element.src;
  r.style.setProperty('--image', ' url("' + thing + '")');
}

//------------------- filter choose 
function myFunctionfltr(element) {
  var fltr = element.title;
  r.style.setProperty('--filter', fltr);
}
//---------------------add active class ----
$('.clickable').on('click', function(){
  $('.clickable').removeClass('active');
  $(this).addClass('active');
});