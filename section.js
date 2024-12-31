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
    generateFlipcardContent(id);
}

var closeButton = document.getElementById('close_details');

closeButton.addEventListener("click", function (){
    var detailsBox = document.getElementById('more_details');
    detailsBox.classList.toggle('out-of-view')
    detailsBox.classList.toggle('into-view');
});

function generateFlipcardContent(id) {
    if (id == "exterior") {
        document.getElementById('detail_title').innerHTML = 'Exterior Painting';
        document.getElementById('list-one-title').innerHTML = '<b><span style="color:red;">Curb Appeal Enhancement: </span></b>';
        document.getElementById('list-one-body').innerHTML = 'Boost your home&#39;s exterior beauty and create a welcoming atmosphere from the moment guests arrive.';
        document.getElementById('list-two-title').innerHTML = '<b><span style="color:red;">Weather-Resistant Finishes: </span></b>';
        document.getElementById('list-two-body').innerHTML = 'Our durable paints shield your home from the elements, maintaining its vibrancy and energy for years to come.';
        document.getElementById('list-three-title').innerHTML = '<b><span style="color:red;">Professional Prep Work: </span></b>';
        document.getElementById('list-three-body').innerHTML = 'We take care of surface preparation to ensure a long-lasting finish, adding to the sense of stability and security your home provides.';
        document.getElementById('list-four-title').innerHTML = '<b><span style="color:red;">Transformative Power: </span></b>';
        document.getElementById('list-four-body').innerHTML = 'Watch as your home&#39;s exterior undergoes a stunning transformation, radiating positive energy and leaving a lasting impression on all who see it.';
        document.getElementById('detail_body').innerHTML = 'At A Hard Days Paint, we take immense pride in offering a comprehensive range of exterior painting services designed to enhance and protect every facet of your building. Our dedication to quality and attention to detail ensures that each project is completed with the highest level of professionalism, gratitude for your trust, and a passion for transforming spaces. In addition to delivering exceptional results, we take special care to protect your walkways and landscape, ensuring that your entire property is respected and maintained throughout the painting process.<br><br> <b><span style="color:#333333;">Full Exterior Painting:</span></b> Our expertise extends to every part of your building that requires a fresh coat of paint. Whether its siding, porches, walls, or other exterior surfaces, we use premium materials and meticulous techniques to ensure a durable and aesthetically pleasing finish. This holistic approach not only revitalizes the appearance of your property but also provides a protective barrier against the elements, extending the life of your buildings exterior.<br><br> <b><span style="color:#333333;">Front Door Refinishing:</span></b> Your front door is akin to the cover of a book—its the first impression visitors get of your home. Recognizing that some people do judge a book by its cover, we offer front door refinishing services that enhance both the look and condition of this crucial entryway. Our refinishing process involves careful sanding, staining, and sealing to restore the doors beauty and durability, making it a welcoming focal point of your home.<br><br> <b><span style="color:#333333;">Porch/Garage Floor Painting:</span></b> High-traffic areas like porches and garage floors are prone to significant wear and tear. To maintain their condition and appearance, we offer specialized painting services for these surfaces. Our team uses durable, wear-resistant paints and coatings designed to withstand heavy use and harsh conditions. By choosing A Hard Days Paint for your  porch and garage floor painting needs, you can ensure these important parts of your property remain in top condition, combining functionality with a polished look. Choosing A Hard Days Paint means opting for a service that combines technical expertise with a heartfelt commitment to customer satisfaction. We understand the importance of each project to our clients and strive to deliver results that exceed expectations. Let us bring our passion for painting to your property, enhancing its beauty and longevity with every brushstroke.';
    }
    else if (id == "interior") {
        document.getElementById('detail_title').innerHTML = 'Interior Painting';
        document.getElementById('detail_body').innerHTML = 'More info for Interior Painting';
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