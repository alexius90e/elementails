const roadmapNavButtons = document.querySelectorAll(".roadmap__nav-button");

roadmapNavButtons.forEach((roadmapNavButton) => {
  roadmapNavButton.addEventListener("click", (event) => {
    const isDisabled = event.currentTarget.classList.contains("disabled");
    const modalStage = document.querySelector(".modal-stage");
    console.log(isDisabled, modalStage)
    if (isDisabled && modalStage) modalStage.classList.add("active");
  });
});
