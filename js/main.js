//*2. Tıklandığında seçimlərini göstərən və gizlədən bir açılan menyu yaratmaq üçün JavaScript proqramı yazın.

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownOptions = document.querySelector(".dropdown-options");

dropdownButton.addEventListener("click", () => {
  if (dropdownOptions.style.display === "none") {
    dropdownOptions.style.display = "block";
  } else {
    dropdownOptions.style.display = "none";
  }
});
