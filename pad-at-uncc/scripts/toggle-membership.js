const toggleButton = document.getElementById("toggleMembershipBtn");
const membershipBox = document.getElementById("membershipDetails");

if (toggleButton && membershipBox) {
    toggleButton.addEventListener("click", () => {
        membershipBox.classList.toggle("show");

        if (membershipBox.classList.contains("show")) {
            toggleButton.textContent = "Hide Membership Details";
        } else {
            toggleButton.textContent = "Show Membership Details";
        }
    });
}