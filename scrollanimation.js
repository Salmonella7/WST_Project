

// CAROUSEL JS

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function() {
    showSlider('next');
};
prevButton.onclick = function() {
    showSlider('prev');
};

let unAcceptedClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptedClick);
    unAcceptedClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    };
});





document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.classList.add('visible');
                // Check for direction
                if (card.classList.contains('autoleft')) {
                    card.classList.add('autoleft'); // Slide in from left
                } else if (card.classList.contains('autoright')) {
                    card.classList.add('autoright'); // Slide in from right
                }
                observer.unobserve(card); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 });

    movieCards.forEach(card => {
        observer.observe(card);
    });
});