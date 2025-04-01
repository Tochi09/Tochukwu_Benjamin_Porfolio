const hireButton = document.getElementById("hire-btn");
const hireMessage = document.getElementById("hire-message");

// Toggle
hireButton.addEventListener("click", function() {
    if (hireMessage.classList.contains("hidden")) {
        hireMessage.classList.remove("hidden");
        hireMessage.classList.add("visible");
    } else {
        hireMessage.classList.remove("visible");
        hireMessage.classList.add("hidden");
    }
});

// Load animation
window.addEventListener("load", function() {
    setTimeout(() => {
        hireMessage.classList.remove("hidden");
        hireMessage.classList.add("visible");
        setTimeout(() => {
            hireMessage.classList.remove("visible");
            hireMessage.classList.add("hidden");
        }, 2000);
    }, 500);
});

// Highlight active section
const sections = document.querySelectorAll(".snap-section");
const sectionTitles = document.querySelectorAll(".section-title");

window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            sectionTitles[index].style.color = "#fff"; // Highlight active section title
        } else {
            sectionTitles[index].style.color = "#00ddeb"; // Default color
        }
    });
});