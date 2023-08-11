/* slider */
let pointers = document.querySelectorAll('.pointer');
let sliders = document.querySelectorAll('.slide');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let slide4 = document.querySelector('.slide4');
let slide5 = document.querySelector('.slide5');
let slide6 = document.querySelector('.slide6');
let slide7 = document.querySelector('.slide7');
let slide8 = document.querySelector('.slide8');
let slide22 = document.querySelector('.slide22');
let slide32 = document.querySelector('.slide32');
let slide42 = document.querySelector('.slide42');
let slide52 = document.querySelector('.slide52');
let slide62 = document.querySelector('.slide62');
let slide72 = document.querySelector('.slide72');
let slide82 = document.querySelector('.slide82');

function hideSlides(index) {
    sliders.forEach(function (e) {
        e.classList.remove('slide-active')
    });
}

function showSlide(index) {
    if (index === "2") {
        slide2.classList.add('slide-active');
        slide22.classList.add('slide-active');
    }
    if (index === "3") {
        slide3.classList.add('slide-active');
        slide32.classList.add('slide-active');
    }
    if (index === "4") {
        slide4.classList.add('slide-active');
        slide42.classList.add('slide-active');
    }
    if (index === "5") {
        slide5.classList.add('slide-active');
        slide52.classList.add('slide-active');
    }
    if (index === "6") {
        slide6.classList.add('slide-active');
        slide62.classList.add('slide-active');
    }
    if (index === "7") {
        slide7.classList.add('slide-active');
        slide72.classList.add('slide-active');
    }
    if (index === "8") {
        slide8.classList.add('slide-active');
        slide82.classList.add('slide-active');
    }
}

function selectPointer(e) {
    pointers.forEach(function (e) {
        if(e.classList.contains('pointer-active')) {
            e.classList.remove('pointer-active')
        }
    });
    this.classList.add('pointer-active');
    hideSlides();
    showSlide(this.getAttribute('data-index'));
}

pointers.forEach(function (e) {
    e.addEventListener('click', selectPointer, true);
});