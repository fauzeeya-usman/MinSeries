// ------------------------------- SWIPER -------------------------------------------
const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// --------------------------------------------------------------------------

// ----------------------------MOBILE NAVBAR ----------------------------------------------
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-content a");

hamburger.addEventListener("click", () => {
    mobileNav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    mobileNav.style.display = "none";
});

mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.style.display = "none";
    });
});
// --------------------------------------------------------------------------


// ----------------------------NAVBAR STICKY----------------------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// --------------------------------------------------------------------------