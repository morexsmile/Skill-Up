/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuToggle && mobileNavigation) {

    menuToggle.addEventListener("click", function () {

        mobileNavigation.classList.toggle("active");

    });

}


/* =========================================================
   REGISTRATION FORM
========================================================= */

const registrationForm =
    document.querySelector("#registration-form");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!registrationForm.checkValidity()) {

            registrationForm.reportValidity();

            return;
        }

    });

}
