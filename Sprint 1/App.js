const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((menuCard) => {
  const title = menuCard.querySelector(".menu-title");
  const description = menuCard.querySelector(".menu-description");

  title.addEventListener("click", () => {
    if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  });
});