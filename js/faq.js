/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem = question.closest(".faq-item");
        const currentIsOpen = currentItem.classList.contains("active");


        /* Cerrar todas las preguntas */

        document.querySelectorAll(".faq-item").forEach((item) => {

            item.classList.remove("active");

            const button = item.querySelector(".faq-question");

            if (button) {
                button.setAttribute("aria-expanded", "false");
            }

        });


        /* Abrir la seleccionada */

        if (!currentIsOpen) {

            currentItem.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuToggle && mobileNavigation) {

    menuToggle.addEventListener("click", () => {

        mobileNavigation.classList.toggle("active");

    });

}
