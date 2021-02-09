// Select All Links 
let links = document.querySelectorAll(".header .navbar .navbar-nav .nav-link");

// Move To Sections By Clicking On Navbar Links
function goToSection(elements){

    elements.forEach(element => {
        
        element.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"
            });
        });
    });
}

goToSection(links);

// trigger nice scroll plugin
$("html").niceScroll({

    cursorcolor: "#2ba879",
    cursorborder: "none",
    cursorborderradius: "none"
});

$(function(){
    // Show To Top Btn And Make It Scroll 
let scrollBtn = $(".to-top-btn");

$(window).on('scroll', function(){

    $(this).scrollTop() >= 500? scrollBtn.fadeIn(700): scrollBtn.fadeOut(700);
});

scrollBtn.on("click", function(){

    $('html, body').animate({scrollTop: 0}, 1200);
});
})

