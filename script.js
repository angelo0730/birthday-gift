// Get DOM elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// Open modal on button click
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal on X button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

  