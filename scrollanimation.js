// Function to remove no-scroll class after the animation
function fadeOut() {
    // Disable scrolling
    document.body.classList.add('no-scroll');

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0
    });
    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut,
        onComplete: function() {
            // Re-enable scrolling once the animation is complete
            document.body.classList.remove('no-scroll');
        }
    });
}

// Disable scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Ensure scrolling to top on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling initially
    document.body.classList.add('no-scroll'); 

    // Scroll to the top of the page
    setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, 100); // Adjust the delay as needed
});






// CAROUSEL 

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

// Carousel navigation
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
















// Modal functionality
const modal = document.getElementById('movieModal');
const closeModal = document.getElementById('closeModal');

// Function to open modal and set content
function openModal(imgSrc, title, topic, description) {
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalTopic').innerHTML = topic; // Use innerHTML for line breaks
    document.getElementById('modalDes').innerHTML = description; // Use innerHTML for formatting
    
    modal.style.display = 'flex'; // Ensure the modal is displayed before adding the class
    requestAnimationFrame(() => { // Wait for the browser to render the display change
        modal.classList.add('show'); // Add class to trigger transition
    });
}

// Add event listeners to "SEE MORE" buttons
document.querySelectorAll('.seeMore').forEach(button => {
    button.onclick = function(event) {
        event.preventDefault(); // Prevent default behavior if necessary
        const item = this.closest('.item');
        const imgSrc = item.querySelector('img').src;
        const title = "Now Showing!"; // Static title; change if necessary
        const topic = item.querySelector('.topic').innerHTML; // Use innerHTML for line breaks
        const description = item.querySelector('.des').innerHTML;

        openModal(imgSrc, title, topic, description);
    };
});

// Close modal when the close button is clicked
closeModal.onclick = function() {
    modal.classList.remove('show'); // Remove class to trigger transition out
    setTimeout(() => {
        modal.style.display = 'none'; // Hide after the transition
    }, 500); // Match the duration of the transition
};

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove('show'); // Remove class to trigger transition out
        setTimeout(() => {
            modal.style.display = 'none'; // Hide after the transition
        }, 500); // Match the duration of the transition
    }
};





