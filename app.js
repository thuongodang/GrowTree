const homeSlide = document.querySelector(".slider");
const slideImage = document.querySelectorAll(".slider img");

//Button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 0;
const size = slideImage[0].clientWidth;

// button addEventListener
nextBtn.addEventListener('click', () => {
    if (counter >= slideImage.length-1) return;
    homeSlide.style.transition = "transform .9s ease-in-out";
    counter++;
    homeSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    console.log(counter);
    console.log(size*counter);
});
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    homeSlide.style.transition = "transform .9s ease-in-out";
    counter--;
    homeSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    console.log(counter);
    console.log(size*counter);
});


homeSlide.addEventListener('transitionend', () => {
    // console.log(carouselImages[counter]);
    if (slideImage[counter].id ==='lastClone'){
        homeSlide.style.transition = "none";
        counter = slideImage.length -2; 
        homeSlide.style.transform='translateX('+(-size*counter)+'px)';
    }
    if (slideImage[counter].id ==='firstClone'){
        homeSlide.style.transition = "none";
        counter = slideImage.length -counter; 
        homeSlide.style.transform='translateX('+(-size*counter)+'px)';
    }

});