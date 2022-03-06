var about = document.getElementById('about_section');
var aboutButton = document.getElementById('about_button');

aboutButton.addEventListener(click, function(){
    scrollToPage("about");
})

function scrollToPage(pageAction)
{
    if(pageAction == "about") {
        about.scrollIntoView();
    }

}