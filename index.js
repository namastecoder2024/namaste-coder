// MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// OPEN / CLOSE MENU
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// 👉 CLICK KARNE PAR MENU AUTO CLOSE (Mobile UX fix)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// 👉 SCROLL PAR NAVBAR SHADOW EFFECT
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
    } else {
        header.style.background = "rgba(0,0,0,0.7)";
    }
});


// 👉 SMOOTH SCROLL (extra smooth feel)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
