// Button
const buttons = document.querySelectorAll(".d-flex button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("selected"));
    this.classList.add("selected");
  });
});

//Select Filed
document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.querySelector(".selectpicker");
  const playerType = document.getElementById("playerType");
  if (playerType) {
    playerType.addEventListener("change", function () {
      const selectedOptions = Array.from(this.selectedOptions).map(
        (option) => option.value
      );
    });
  }
});
