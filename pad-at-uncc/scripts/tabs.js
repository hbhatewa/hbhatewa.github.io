const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabPanels.forEach(panel => panel.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(target).classList.add("active");
    });
});