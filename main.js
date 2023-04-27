const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
overlayElement.addEventListener("click", closeModal);
const btnsElement = document.querySelectorAll(".btn");
for (let idx = 0; idx < btnsElement.length; idx++) {
  btnsElement[idx].addEventListener("click", showModal);
}
const btnCloseElement = document.querySelector(".btn-close");
btnCloseElement.addEventListener("click", closeModal);

function showModal() {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
}

function closeModal() {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
