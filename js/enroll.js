const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener("click", function () {
        mobileNavigation.classList.toggle("active");
    });
}
