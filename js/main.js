//Nav Controller

const menuBtn = document.querySelector(".menu-trigger-btn");
const menuContainer = document.querySelector(".menu-container");
const menuCollapseBtn = document.querySelector(".menu-collapse-btn");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("menu-closing-animation");
  menuContainer.classList.toggle("d-none");
  menuContainer.classList.toggle("menu-openning-animation");
});

menuCollapseBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("menu-openning-animation");
  menuContainer.classList.toggle("menu-closing-animation");
  setTimeout(() => {
    menuContainer.classList.toggle("d-none");
  }, 500);
});

//Swiper

const swiper = new Swiper(".room-category-swiper", {
  cssMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
