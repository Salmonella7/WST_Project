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

// Add the no-scroll class on page load
window.onload = function() {
    document.body.classList.add('no-scroll'); // Ensure scrolling is disabled initially
};

/*CAROUSEL JS*/

    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let listHTML = document.querySelector('.carousel .list');
    let seeMoreButtons = document.querySelectorAll('.seeMore');
    let backButton = document.getElementById('back');
    
    nextButton.onclick = function(){
        showSlider('next');
    }
    prevButton.onclick = function(){
        showSlider('prev');
    }
    let unAcceppClick;
    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';
    
        carousel.classList.remove('next', 'prev');
        let items = document.querySelectorAll('.carousel .list .item');
        if(type === 'next'){
            listHTML.appendChild(items[0]);
            carousel.classList.add('next');
        }else{
            listHTML.prepend(items[items.length - 1]);
            carousel.classList.add('prev');
        }
        clearTimeout(unAcceppClick);
        unAcceppClick = setTimeout(()=>{
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000)
    }
    seeMoreButtons.forEach((button) => {
        button.onclick = function(){
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        }
    });
    backButton.onclick = function() {
    carousel.classList.remove('showDetail');
}



