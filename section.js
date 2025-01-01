var scrollable = document.getElementById('scoll-section');

document.getElementById('call_number').classList.toggle('disable-element')

scrollable.onscroll = function(event) {
	manageAdvert();
};

function manageAdvert() {
    var element = document.getElementById('top');
	var position = element.getBoundingClientRect();
    var salesSticky = document.getElementById('free-est');
    var number = document.getElementById('call_number');
    var freeEst = document.getElementById('free-estamates');
	// checking whether fully visible
    
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		if(salesSticky.classList.contains("fold-free-est")) {
            salesSticky.classList.toggle('fold-free-est');
            salesSticky.classList.toggle('open-free-est');
            number.classList.toggle('disable-element');
            freeEst.classList.toggle('free-est-logo');
            freeEst.classList.toggle('free-est-logo-scroll');
        }
	}
    else {
        if(salesSticky.classList.contains("open-free-est")) {
            salesSticky.classList.toggle('open-free-est');
            salesSticky.classList.toggle('fold-free-est');
            number.classList.toggle('disable-element');
            freeEst.classList.toggle('free-est-logo');
            freeEst.classList.toggle('free-est-logo-scroll');
        }
    }
}

var header = document.getElementById('header'); 
var homeButton = document.getElementById('home_button'); 

homeButton.addEventListener("click", function (){
    header.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

var aboutSection = document.getElementById('about_section'); 
var aboutButton = document.getElementById('about_button'); 

aboutButton.addEventListener("click", function (){
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

var servicesSection = document.getElementById('services_section'); 
var servicesButton = document.getElementById('services_button'); 

servicesButton.addEventListener("click", function (){
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

var freeQuoteButton = document.getElementById('free-est'); 

freeQuoteButton.addEventListener("click", function (){
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

var reviewsAngi = document.querySelectorAll('.review_content_angi');

reviewsAngi.forEach(review => {
    review.addEventListener('click', function handleClick(event) {
        window.location.href = 'https://www.angi.com/companylist/us/ny/liverpool/a-hard-days-paint-reviews-10096506.htm#reviews';
    });
  });

var flipCards = document.querySelectorAll('.flip-card-back');

flipCards.forEach(flipCard => {
    flipCard.addEventListener('click', function handleClick(event) {
        generateFlipCardContent(flipCard.id);
    });
  });

function generateFlipCardContent(id) {
    var detailsBox = document.getElementById('more_details');
    detailsBox.classList.toggle('out-of-view')
    detailsBox.classList.toggle('into-view');
    generateFlipcardInnerContent(id);
}

var closeButton = document.getElementById('close_details');

closeButton.addEventListener("click", function (){
    var detailsBox = document.getElementById('more_details');
    detailsBox.classList.toggle('out-of-view')
    detailsBox.classList.toggle('into-view');
});

function generateFlipcardInnerContent(id) {
    if (id == "exterior") {
        
    }
    else if (id == "interior") {
        
    }
    else if (id == "wallpapper") {
        document.getElementById('detail_title').innerHTML = 'Wallpaper Removal';
        document.getElementById('detail_body').innerHTML = 'More info for Wallpaper Removal';
    }
    else if (id == "powerwash") {
        document.getElementById('detail_title').innerHTML = 'Power Washing';
        document.getElementById('detail_body').innerHTML = 'More info for Powerwashing';
    }
    else if (id == "stain") {
        document.getElementById('detail_title').innerHTML = 'Wood Staining';
        document.getElementById('detail_body').innerHTML = 'More info for Wood Staining';
    }
    else if (id == "cabnets") {
        document.getElementById('detail_title').innerHTML = 'Cabinetry';
        document.getElementById('detail_body').innerHTML = 'More info for Cabinetry';
    }
    else if (id == "mural") {
        document.getElementById('detail_title').innerHTML = 'Geodesic Murals';
        document.getElementById('detail_body').innerHTML = 'More info for geodesic murals';
    }
}