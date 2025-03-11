document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 60; // Adjust if header height changes

    navLinks.forEach(link => {
        // Only apply smooth scrolling to internal section links
        if (link.getAttribute("href").startsWith("#")) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: "smooth"
                    });
                }
            });
        }
    });

    // Highlight active section in the navbar
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + headerHeight + 10;

        navLinks.forEach(link => {
            if (link.getAttribute("href").startsWith("#")) {
                const section = document.getElementById(link.getAttribute("href").substring(1));

                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active"); // Add 'active' class to the current section link
                }
            }
        });
    });
});
