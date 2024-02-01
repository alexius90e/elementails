const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const isCloseElem = event.target.classList.contains("close");
    if (isCloseElem) event.currentTarget.classList.remove("active");
  });
});
