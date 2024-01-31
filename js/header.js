const headerNav = document.querySelector(".header__nav");
const headeBurgerButton = document.querySelector('.header__burger-button')

if (headerNav) {
  headerNav.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) event.currentTarget.classList.remove("active");
  });
}

if (headeBurgerButton) {
  headeBurgerButton.addEventListener("click", (event) => {
    if (headerNav) headerNav.classList.toggle("active");
  });
}
