const registrationForm = document.querySelector("#registration-form");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameInput = document.querySelector("#full-name");
        const emailInput = document.querySelector("#email");
        const experienceInput = document.querySelector(
            'input[name="experience"]:checked'
        );

        if (
            !nameInput.value.trim() ||
            !emailInput.value.trim() ||
            !experienceInput
        ) {
            registrationForm.reportValidity();
            return;
        }

        const submitButton = registrationForm.querySelector(
            ".submit-button"
        );

        submitButton.innerHTML = `
            <span>Seat reserved ✓</span>
        `;

        submitButton.style.backgroundColor = "#102622";

        registrationForm.reset();

    });
}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuToggle && mobileNavigation) {

    menuToggle.addEventListener("click", function () {

        mobileNavigation.classList.toggle("active");

    });

}
