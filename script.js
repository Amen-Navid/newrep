document.getElementById('unlock-button').addEventListener('click', function() {

    document.body.style.overflow = 'auto';

    
    document.getElementById('content-lock').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});



document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

window.addEventListener('load', function() {
    const greetingPopup = document.createElement('div');
    greetingPopup.classList.add('greeting-popup');
    greetingPopup.innerHTML = `
        <div class="popup-content">
            <h2>It's Your Day My Love!</h2>
            <p>I hope this day brings you all the joy in the world.</p>
            <button id="close-popup">Surprise Button</button>
        </div>
    `;
    document.body.appendChild(greetingPopup);

    document.getElementById('close-popup').addEventListener('click', function() {
        greetingPopup.style.display = 'none';
        startConfetti();
    });
});

// Confetti effect after greeting popup
function startConfetti() {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        confetti.clear();
    }, 5000000); }
    
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000); 
