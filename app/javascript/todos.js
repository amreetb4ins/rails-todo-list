document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".toggle-form-btn");
  const form = document.querySelector(".new-form");

  // When the button is clicked
  button.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });
});
