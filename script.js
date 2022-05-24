// logo
let logo = document.querySelector('.js--logo');
let options = {
    threshold: [0.1]
}
console.log(logo);
let callback = function(entries, observer) {
    entries.forEach( entry => {
        console.log(entry);
        if (entry.isIntersecting) {

            logo.classList.remove('is-active');
        }
        else logo.classList.add('is-active');
    })
};
let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.js--hero');
observer.observe(target);
// 

// popup_seasons
    const blockVideos = document.querySelectorAll('.js-popup-video'),
        popupVideoSeason = document.querySelector('.js--popup-season'),
        iframeVideoSeason = document.querySelector('.js--popup-season-video');

    blockVideos.forEach (element => {
        console.log(element);
        console.log(element.classList);
        console.log(element.classList.contains("first_season"));
        
        element.addEventListener('click', () => {
            popupVideoSeason.classList.add('is-active');
            if (element.classList.contains("first_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/9GgxinPwAGc";
            } else if (element.classList.contains("second_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/x6rLjCrA5QQ";
            } else if (element.classList.contains("third_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/lE6YTts8cgY";
            } else if (element.classList.contains("fourth_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/3PK2tIyENVA";
            } else if (element.classList.contains("fifth_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/s28cBkmoVIk";
            } else if (element.classList.contains("sixth_season")) {
                iframeVideoSeason.src = "https://www.youtube.com/embed/Y7d0A5re7-0";
            };
        });
    });

    popupVideoSeason.addEventListener('click', (e) => {
        if (e.target.classList.contains('js--popup-season')) {
            popupVideoSeason.classList.remove('is-active');
        };
    });
//

// slider
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let textSlides = document.getElementsByClassName("mySlides-text");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        textSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    textSlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
// 