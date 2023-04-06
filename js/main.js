// Burger Menu

let button = document.querySelector("#button");
let burgerCon = document.querySelector("#burger-con");

function burgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
};

button.addEventListener("click", burgerMenu, false);

// Carousel

const carouselItems = document.querySelector('.carousel-items');
const prevBtns = document.querySelectorAll('.carousel-control.prev');
const nextBtns = document.querySelectorAll('.carousel-control.next');
let currentIndex = 0;

function moveToSlide(index) {
  carouselItems.style.transform = `translateX(-${index * 100}%)`;
}

prevBtns.forEach((prevBtn) => {
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselItems.children.length - 1;
      }
      moveToSlide(currentIndex);
    });
});
  
nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= carouselItems.children.length) {
        currentIndex = 0;
      }
      moveToSlide(currentIndex);
    });
});


