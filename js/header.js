const headerNav = document.querySelector(".header__nav");
const headeBurgerButton = document.querySelector(".header__burger-button");

if (headerNav) {
  headerNav.addEventListener("click", (event) => {
    const isCloseElem = event.target.classList.contains("close");
    if (isCloseElem) event.currentTarget.classList.remove("active");
  });
}

if (headeBurgerButton) {
  headeBurgerButton.addEventListener("click", (event) => {
    if (headerNav) headerNav.classList.toggle("active");
  });
}
