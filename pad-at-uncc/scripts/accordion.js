const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.classList.toggle("active");
    });
});