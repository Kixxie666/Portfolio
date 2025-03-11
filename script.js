document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect for Hero Section
    const textArray = ["Computing Student", "Developer", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    const typingElement = document.getElementById("typing-effect");

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, pauseTime);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();

    // Parallax Scroll Effect
    window.addEventListener("scroll", function () {
        const hero = document.querySelector(".hero");
        let scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });

    // Scroll Animations
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    fadeInElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    /* Floating Labels Fix */
    const inputs = document.querySelectorAll(".input-group input, .input-group textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.setAttribute("placeholder", " ");
        });

        input.addEventListener("blur", function () {
            this.removeAttribute("placeholder");
        });
    });

    /* Contact Form Submit */
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Fake a successful submission
        form.style.opacity = "0.5";
        setTimeout(() => {
            form.reset();
            form.style.opacity = "1";
            responseMessage.classList.remove("hidden");
            responseMessage.style.opacity = "1";
        }, 500);
    });

    /* Fade-in on Scroll */
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    fadeInElements.forEach(element => observer.observe(element));
});
