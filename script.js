const sliderWrapper = document.querySelector("[data-slider-wrapper]");
const slideNavigationButtons = document.querySelectorAll("[data-slide-navigation-btn]");
const slideNavigationBtns = document.querySelectorAll("[data-slide-navigation-btn]");


const totalSlides = Array.from(sliderWrapper.children);

function handleSlides() {
  let slidePosition = 0;

  slideNavigationBtns.forEach((slideNavigationBtn) => {
    slideNavigationBtn.addEventListener("click", function(event) {
      if (slidePosition === 0) totalSlides.forEach((slide) => slide.style.transform = `translateX(-100%)`)
      else {
        totalSlides[0].style.transform = `translateX(0)`;
        totalSlides[1].style.transform = `translateX(100%)`;
      }
      slidePosition = (event.currentTarget.classList.contains("btn__next")) ? slidePosition += 1 : slidePosition -= 1;
      slidePosition %= 2;
    });
  })
}

handleSlides();

