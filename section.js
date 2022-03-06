var aboutSection = document.getElementById('about_section'); 
var aboutButton = document.getElementById('about_button'); 

aboutButton.addEventListener("click", function (){
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

var servicesSection = document.getElementById('services_section'); 
var servicesButton = document.getElementById('services_button'); 

servicesButton.addEventListener("click", function (){
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});


var picturesSection = document.getElementById('pictures_section'); 
var picturesButton = document.getElementById('pictures_button'); 

picturesButton.addEventListener("click", function (){
    picturesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

var contactSection = document.getElementById('contact_section'); 
var contactButton = document.getElementById('contact_button'); 

contactButton.addEventListener("click", function (){
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});



