var aboutSection = document.getElementById('about_section'); 
var aboutButton = document.getElementById('about_button'); 

$('#about_button').click(function(){
   $('.scrollable_section').animate({
       scrollTop: $('.about_section').offset().top},
       'slow');
});

$('#services_button').click(function(){
   $('.scrollable_section').animate({
      scrollTop: $('.services_section').offset().top},
      'slow');
  });
$('#pictures_button').click(function(){
   $('.scrollable_section').animate({
      scrollTop: $('.pictures_section').offset().top},
      'slow');
  });
$('#contact_button').click(function(){
   $('.scrollable_section').animate({
      scrollTop: $('.contact_section').offset().top},
      'slow');
  });