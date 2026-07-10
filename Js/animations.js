// ======================================================
// ANIMAZIONI
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".fade-up,.fade-down,.fade-left,.fade-right,.zoom-in"
    );
    elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 80}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.15
    });
    elements.forEach(el => observer.observe(el));
});